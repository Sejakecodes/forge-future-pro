import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";

/**
 * CreativeFeed.tsx
 * - Sticky topbar and asides
 * - Local image/video upload (preview only)
 * - Short-click = toggle like
 * - Long-press = open reaction picker (like, love, clap, fire)
 * - Selected reaction displays its icon on the button
 * - Hover/scale effect after reacting
 * - Infinite scroll (loads more local posts)
 */

type ReactionType = "like" | "love" | "clap" | "fire" | null;

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  media?: string | null; // local preview URL
  mediaType?: "image" | "video" | null;
  reactions: { like: number; love: number; clap: number; fire: number };
  userReaction: ReactionType;
  comments: { user: string; text: string }[];
}

const seedPosts: Post[] = [
  {
    id: 1,
    user: "Lerato Art Studio",
    avatar: "/default-avatar.png",
    content: "Just finished a new digital portrait ✨ #illustration #artlife",
    media: null,
    mediaType: null,
    reactions: { like: 12, love: 3, clap: 2, fire: 4 },
    userReaction: null,
    comments: [{ user: "Tebogo", text: "🔥🔥 Love the shading!" }],
  },
  {
    id: 2,
    user: "CodeByNeo",
    avatar: "/default-avatar.png",
    content:
      "Client website launch today 🎉 Learned a lot about Tailwind + Django API integration. #webdev",
    media: null,
    mediaType: null,
    reactions: { like: 30, love: 5, clap: 1, fire: 2 },
    userReaction: null,
    comments: [],
  },
  {
    id: 3,
    user: "ArtByLungi",
    avatar: "/default-avatar.png",
    content: "Moodboard for a new branding project 🎨",
    media: null,
    mediaType: null,
    reactions: { like: 8, love: 2, clap: 0, fire: 1 },
    userReaction: null,
    comments: [],
  },
  // ...you can seed more if you want
];

const ReactionPicker: React.FC<{ onSelect: (r: Exclude<ReactionType, null>) => void }> = ({ onSelect }) => {
  return (
    <div className="absolute z-30 flex gap-2 bg-popover p-2 rounded-full shadow-md">
      <button onClick={() => onSelect("like")} aria-label="Like" className="p-1">👍</button>
      <button onClick={() => onSelect("love")} aria-label="Love" className="p-1">❤️</button>
      <button onClick={() => onSelect("clap")} aria-label="Clap" className="p-1">👏</button>
      <button onClick={() => onSelect("fire")} aria-label="Fire" className="p-1">🔥</button>
    </div>
  );
};

const CreativeFeed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(seedPosts);
  const [displayCount, setDisplayCount] = useState(5); // how many posts to show (infinite scroll)
  const [newText, setNewText] = useState("");
  const [newMedia, setNewMedia] = useState<string | null>(null);
  const [newMediaType, setNewMediaType] = useState<"image" | "video" | null>(null);

  // which post id currently showing the reaction picker
  const [pickerFor, setPickerFor] = useState<number | null>(null);

  // file input ref
  const fileRef = useRef<HTMLInputElement | null>(null);

  // long press timer refs (per post)
  const pressTimer = useRef<number | null>(null);

  // Infinite scroll: load more when user near bottom
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        // load 3 more
        setDisplayCount((prev) => Math.min(prev + 3, posts.length));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [posts.length]);

  // when seed posts < displayCount, grow displayCount to posts.length
  useEffect(() => {
    if (displayCount > posts.length) setDisplayCount(posts.length);
  }, [posts.length, displayCount]);

  // helper to detect if a local preview URL is likely a video (we set mediaType when uploading)
  const isVideo = (p: Post) => p.mediaType === "video";

  // create post (local preview only)
  const createPost = () => {
    if (!newText.trim() && !newMedia) return;
    const post: Post = {
      id: Date.now(),
      user: "You",
      avatar: "/default-avatar.png",
      content: newText,
      media: newMedia,
      mediaType: newMediaType,
      reactions: { like: 0, love: 0, clap: 0, fire: 0 },
      userReaction: null,
      comments: [],
    };
    setPosts((prev) => [post, ...prev]);
    setNewText("");
    setNewMedia(null);
    setNewMediaType(null);
    setDisplayCount((prev) => prev + 1); // show the new post
  };

  // handle file input (local preview)
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith("video/") ? "video" : "image";
    setNewMedia(url);
    setNewMediaType(type === "video" ? "video" : "image");
  };

  // toggle like (short click)
  const toggleShortLike = (postId: number) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        // if user already had 'like' as reaction, remove it; else set 'like'
        if (p.userReaction === "like") {
          return { ...p, userReaction: null, reactions: { ...p.reactions, like: Math.max(0, p.reactions.like - 1) } };
        } else {
          // if switching from another reaction, decrement old reaction count
          const old = p.userReaction;
          const newReactions = { ...p.reactions };
          if (old) newReactions[old] = Math.max(0, newReactions[old] - 1);
          newReactions.like = newReactions.like + 1;
          return { ...p, userReaction: "like", reactions: newReactions };
        }
      })
    );
  };

  // handle selected reaction from picker
  const selectReaction = (postId: number, reaction: Exclude<ReactionType, null>) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id !== postId) return p;
        const newReactions = { ...p.reactions };
        // if user had previous reaction, decrement it
        if (p.userReaction) newReactions[p.userReaction] = Math.max(0, newReactions[p.userReaction] - 1);
        // increment new reaction
        newReactions[reaction] = newReactions[reaction] + 1;
        return { ...p, userReaction: reaction, reactions: newReactions };
      })
    );
    setPickerFor(null);
  };

  // comment add
  const addComment = (postId: number, text: string) => {
    if (!text.trim()) return;
    setPosts((prev) => prev.map((p) => (p.id === postId ? { ...p, comments: [...p.comments, { user: "You", text }] } : p)));
  };

  // long press start: open picker after 550ms
  const onPressStart = (postId: number) => {
    // clear any previous timer
    if (pressTimer.current) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
    pressTimer.current = window.setTimeout(() => {
      setPickerFor(postId);
    }, 550);
  };

  // cancel long press
  const onPressEnd = () => {
    if (pressTimer.current) {
      window.clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  // when user releases without long-press opening picker, treat as short click (toggle like)
  const onShortClick = (postId: number) => {
    // if picker is currently for this post (i.e. user long pressed and it's opened), ignore short click
    if (pickerFor === postId) return;
    toggleShortLike(postId);
  };

  // simple utility to render current reaction icon for a post
  const renderReactionIcon = (r: ReactionType) => {
    if (r === "clap") return "👏";
    if (r === "love") return "❤️";
    if (r === "fire") return "🔥";
    return <Heart className="h-4 w-4" />;
  };

  // visible posts for infinite scroll
  const visiblePosts = posts.slice(0, displayCount);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      
      {/* sticky topbar */}
      <div className="sticky top-0 z-50">
        <TopBar userName="Kitso Sejake" />
      </div>

      <div className="flex flex-1 px-4 md:px-10 gap-6 pt-6">
        {/* LEFT sticky sidebar */}
        <aside className="hidden md:block w-64 space-y-4 sticky top-20 h-max self-start">
          <Card>
            <CardHeader className="text-lg font-semibold">Freelancer Toolkit</CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Pricing Guide</p>
              <p>• Contract Templates</p>
              <p>• Pitch Examples</p>
              <p>• Time Tools</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-lg font-semibold">Find Opportunities</CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Local gigs</p>
              <p>• Remote contracts</p>
              <p>• Collabs</p>
            </CardContent>
          </Card>
        </aside>

        {/* MAIN FEED */}
        <main className="flex-1 max-w-2xl space-y-6 pb-10">
          {/* Composer */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <Textarea placeholder="Share your work, achievements or insights..." value={newText} onChange={(e) => setNewText(e.target.value)} />

              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <input
                    ref={(el) => (fileRef.current = el)}
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={handleFile}
                  />
                  <Button variant="ghost" onClick={() => fileRef.current?.click()}>
                    Attach Image / Video
                  </Button>

                  {newMedia && (
                    <div className="rounded-md overflow-hidden border">
                      {newMediaType === "video" ? (
                        <video src={newMedia} controls className="max-h-40 object-cover" />
                      ) : (
                        <img src={newMedia} className="max-h-40 object-cover" alt="preview" />
                      )}
                    </div>
                  )}
                </div>

                <Button onClick={createPost}>Post</Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts */}
          {visiblePosts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-5 space-y-3 relative">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9"><img src={post.avatar} alt={post.user} /></Avatar>
                  <Link to={`/profile/${encodeURIComponent(post.user)}`} className="font-semibold hover:text-primary transition">
                    {post.user}
                  </Link>
                </div>

                <p>{post.content}</p>

                {post.media && (
                  <div className="rounded-md overflow-hidden border">
                    {post.mediaType === "video" ? (
                      <video src={post.media!} controls className="max-h-80 object-cover w-full" />
                    ) : (
                      <img src={post.media!} className="max-h-80 object-cover w-full" alt="post media" />
                    )}
                  </div>
                )}

                {/* Reaction & action row */}
                <div className="flex items-center gap-4 pt-2 text-muted-foreground">
                  {/* Reaction button (supports long-press) */}
                  <div className="relative">
                    <button
                      onMouseDown={() => onPressStart(post.id)}
                      onTouchStart={() => onPressStart(post.id)}
                      onMouseUp={() => {
                        onPressEnd();
                        onShortClick(post.id);
                      }}
                      onTouchEnd={() => {
                        onPressEnd();
                        onShortClick(post.id);
                      }}
                      onMouseLeave={() => onPressEnd()}
                      className={`flex items-center gap-1 focus:outline-none ${post.userReaction ? "hover:scale-110 transform transition" : "hover:text-primary"}`}
                      aria-label="React"
                    >
                      <span className="text-sm">
                        {post.userReaction ? renderReactionIcon(post.userReaction) : <Heart className="h-4 w-4" />}
                      </span>
                      <span className="text-sm">
                        {/* show total reaction count (sum of all) */}
                        {Object.values(post.reactions).reduce((a, b) => a + b, 0)}
                      </span>
                    </button>

                    {/* Reaction picker popup */}
                    {pickerFor === post.id && (
                      <div style={{ position: "absolute", top: "-52px", left: 0 }}>
                        <ReactionPicker onSelect={(r) => selectReaction(post.id, r)} />
                      </div>
                    )}
                  </div>

                  {/* Comments */}
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">{post.comments.length}</span>
                  </div>
                </div>

                {/* Comment box */}
                <CommentBox postId={post.id} onSubmit={(id, text) => addComment(id, text)} />

                {/* Comments list */}
                {post.comments.length > 0 && (
                  <div className="pt-3 space-y-2 text-sm">
                    {post.comments.map((c, idx) => (
                      <div key={idx} className="border-l pl-3">
                        <span className="font-semibold">{c.user}: </span>
                        {c.text}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Loading indicator for infinite scroll */}
          {displayCount < posts.length && (
            <div className="text-center text-sm text-muted-foreground py-4">Loading more...</div>
          )}
        </main>

        {/* RIGHT sticky sidebar */}
        <aside className="hidden lg:block w-64 sticky top-20 h-max self-start space-y-4">
          <Card>
            <CardHeader className="text-lg font-semibold">Trending Hashtags</CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>#FreelanceLife</p>
              <p>#CreativesInAfrica</p>
              <p>#WebDev</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-lg font-semibold">Suggested Creators</CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div className="flex justify-between"><span>@designerPro</span><Button size="sm" variant="outline">Follow</Button></div>
              <div className="flex justify-between"><span>@motionGuru</span><Button size="sm" variant="outline">Follow</Button></div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

/* CommentBox (keeps UI same) */
const CommentBox: React.FC<{ postId: number; onSubmit: (id: number, comment: string) => void }> = ({ postId, onSubmit }) => {
  const [comment, setComment] = useState("");
  return (
    <div className="flex gap-2 pt-2">
      <input
        className="flex-1 border rounded-md px-2 py-1 text-sm"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button size="sm" onClick={() => { onSubmit(postId, comment); setComment(""); }}>
        Comment
      </Button>
    </div>
  );
};

export default CreativeFeed;
