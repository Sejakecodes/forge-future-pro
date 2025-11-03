import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";

interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  likes: number;
  comments: { user: string; text: string }[];
}

// Placeholder starting posts
const initialPosts: Post[] = [
  {
    id: 1,
    user: "Lerato Art Studio",
    avatar: "/default-avatar.png",
    content: "Just finished a new digital portrait ✨ #illustration #artlife",
    likes: 12,
    comments: [{ user: "Tebogo", text: "🔥🔥 Love the shading!" }],
  },
  {
    id: 2,
    user: "CodeByNeo",
    avatar: "/default-avatar.png",
    content:
      "Client website launch today 🎉 Learned a lot about Tailwind + Django API integration. #webdev",
    likes: 30,
    comments: [],
  },
];

const CreativeFeed = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState("");

  const createPost = () => {
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now(),
      user: "You",
      avatar: "/default-avatar.png",
      content: newPost,
      likes: 0,
      comments: [],
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const toggleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const addComment = (id: number, comment: string) => {
    if (!comment.trim()) return;

    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, { user: "You", text: comment }] }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Top Bar */}
      <TopBar userName="Kitso Sejake" />

      <div className="flex flex-1 px-4 md:px-10 gap-6 pt-6">
        
        {/* ✅ LEFT SIDEBAR */}
        <aside className="hidden md:block w-64 space-y-4">
          <Card>
            <CardHeader className="text-lg font-semibold">Freelancer Toolkit</CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>• Pricing Guide</p>
              <p>• Contract Templates</p>
              <p>• Proposal / Pitch email examples</p>
              <p>• Time management tools</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-lg font-semibold">Find Opportunities</CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <p>• Local gigs & tenders</p>
              <p>• Remote international contracts</p>
              <p>• Community collabs</p>
            </CardContent>
          </Card>
        </aside>

        {/* ✅ MAIN FEED */}
        <main className="flex-1 max-w-2xl space-y-6">
          {/* Create Post */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <Textarea
                placeholder="Share your work, achievements or insights..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <Button onClick={createPost} className="w-full">
                Post
              </Button>
            </CardContent>
          </Card>

          {/* Posts */}
          {posts.map((post) => (
            <Card key={post.id}>
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <img src={post.avatar} alt="avatar" />
                  </Avatar>
                  <span className="font-semibold">{post.user}</span>
                </div>

                <p>{post.content}</p>

                <div className="flex items-center gap-4 pt-2 text-muted-foreground">
                  <button
                    className="flex items-center gap-1 hover:text-primary"
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className="h-4 w-4" /> {post.likes}
                  </button>

                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments.length}</span>
                </div>

                <CommentBox postId={post.id} onSubmit={addComment} />

                {post.comments.length > 0 && (
                  <div className="pt-3 space-y-2 text-sm">
                    {post.comments.map((c, i) => (
                      <div key={i} className="border-l pl-3">
                        <span className="font-semibold">{c.user}: </span>
                        {c.text}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </main>

        {/* ✅ RIGHT SIDEBAR */}
        <aside className="hidden lg:block w-64 space-y-4">
          <Card>
            <CardHeader className="text-lg font-semibold">Trending Hashtags</CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>#FreelanceLife</p>
              <p>#CreativesInAfrica</p>
              <p>#WebDev</p>
              <p>#ArtCommunity</p>
              <p>#SkillUp</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-lg font-semibold">Suggested Creatives</CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>@ThabisoCodes</p>
              <p>@ArtByLungi</p>
              <p>@BrandGuruZA</p>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

const CommentBox = ({
  postId,
  onSubmit,
}: {
  postId: number;
  onSubmit: (id: number, comment: string) => void;
}) => {
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
