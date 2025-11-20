import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Star,
  Award,
  Briefcase,
  Edit,
  Share2,
  ExternalLink,
  Plus,
  Trash,
  Check,
  X,
} from "lucide-react";

const Profile = () => {
  // ------------------------
  // PROFILE STATE
  // ------------------------
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Kitso Sejake",
    title: "Full-Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    experience: "5 years experience",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kitso",
    about:
      "Passionate full-stack developer and UI/UX designer with 5+ years of experience creating beautiful, functional web and mobile applications.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "UI/UX Design",
      "Figma",
      "Tailwind CSS",
      "MongoDB",
      "REST APIs",
    ],
    portfolio: [
      {
        title: "E-commerce Platform",
        image:
          "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
        category: "Web Development",
      },
      {
        title: "Mobile Banking App",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
        category: "Mobile Design",
      },
    ],
    reviews: [
      {
        client: "Sarah Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        rating: 5,
        comment: "Excellent work! Very professional and delivered on time.",
        project: "Website Development",
        date: "March 2024",
      },
    ],
    contact: {
      email: "kitso@workhub.com",
      phone: "+1 (555) 123-4567",
      website: "kitso.dev",
    },
  });

  // ------------------------
  // UPDATE HANDLERS
  // ------------------------
  const updateField = (key: string, value: any) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
  };

  const updateContact = (key: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      contact: { ...prev.contact, [key]: value },
    }));
  };

  const handleAvatarChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    updateField("avatar", url);
  };

  // ------------------------
  // RENDER
  // ------------------------
  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />

      <div className="ml-64 flex-1">
        <TopBar userName={profile.name} />

        <main className="p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* ------------------------
                PROFILE HEADER
            ------------------------- */}
            <Card className="border-border/60 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={profile.avatar} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>

                    {isEditing && (
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleAvatarChange}
                      />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        {isEditing ? (
                          <input
                            value={profile.name}
                            onChange={(e) =>
                              updateField("name", e.target.value)
                            }
                            className="text-2xl font-bold border-b bg-transparent"
                          />
                        ) : (
                          <h1 className="text-2xl font-bold">
                            {profile.name}
                          </h1>
                        )}

                        {isEditing ? (
                          <input
                            value={profile.title}
                            onChange={(e) =>
                              updateField("title", e.target.value)
                            }
                            className="border-b bg-transparent text-muted-foreground"
                          />
                        ) : (
                          <p className="text-muted-foreground">{profile.title}</p>
                        )}

                        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {isEditing ? (
                              <input
                                value={profile.location}
                                onChange={(e) =>
                                  updateField("location", e.target.value)
                                }
                                className="border-b bg-transparent"
                              />
                            ) : (
                              <span>{profile.location}</span>
                            )}
                          </div>

                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {isEditing ? (
                              <input
                                value={profile.experience}
                                onChange={(e) =>
                                  updateField("experience", e.target.value)
                                }
                                className="border-b bg-transparent"
                              />
                            ) : (
                              <span>{profile.experience}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {!isEditing && (
                          <Button variant="outline" className="gap-2">
                            <Share2 className="h-4 w-4" />
                            Share
                          </Button>
                        )}

                        {!isEditing ? (
                          <Button
                            className="gap-2 bg-gradient-primary"
                            onClick={() => setIsEditing(true)}
                          >
                            <Edit className="h-4 w-4" />
                            Edit Profile
                          </Button>
                        ) : (
                          <>
                            <Button
                              className="gap-2 bg-green-600 text-white"
                              onClick={() => setIsEditing(false)}
                            >
                              <Check className="h-4 w-4" />
                              Save
                            </Button>
                            <Button
                              variant="destructive"
                              className="gap-2"
                              onClick={() => setIsEditing(false)}
                            >
                              <X className="h-4 w-4" />
                              Cancel
                            </Button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="rounded-lg border p-3">
                        <div className="flex items-center gap-2 text-success">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-xl font-bold">4.9</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Rating (142 reviews)
                        </p>
                      </div>

                      <div className="rounded-lg border p-3">
                        <p className="text-xl font-bold">156</p>
                        <p className="text-xs text-muted-foreground">
                          Completed Projects
                        </p>
                      </div>

                      <div className="rounded-lg border p-3">
                        <p className="text-xl font-bold">96%</p>
                        <p className="text-xs text-muted-foreground">
                          Success Rate
                        </p>
                      </div>

                      <div className="rounded-lg border p-3">
                        <p className="text-xl font-bold">$45K</p>
                        <p className="text-xs text-muted-foreground">
                          Total Earned
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ------------------------
                ABOUT & SKILLS
            ------------------------- */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isEditing ? (
                      <textarea
                        value={profile.about}
                        onChange={(e) => updateField("about", e.target.value)}
                        className="w-full h-32 rounded border p-2"
                      />
                    ) : (
                      <p className="text-muted-foreground">
                        {profile.about}
                      </p>
                    )}

                    {/* Skills */}
                    <h3 className="mt-4 font-semibold">Skills</h3>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {profile.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <Badge variant="secondary">{skill}</Badge>

                          {isEditing && (
                            <Trash
                              className="h-3 w-3 text-red-500 cursor-pointer"
                              onClick={() => {
                                updateField(
                                  "skills",
                                  profile.skills.filter((_, i) => i !== idx)
                                );
                              }}
                            />
                          )}
                        </div>
                      ))}

                      {isEditing && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1"
                          onClick={() =>
                            updateField("skills", [
                              ...profile.skills,
                              "New Skill",
                            ])
                          }
                        >
                          <Plus className="h-4 w-4" /> Add
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* ------------------------
                    PORTFOLIO
                ------------------------- */}
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {profile.portfolio.map((item, idx) => (
                        <div
                          key={idx}
                          className="group relative border rounded overflow-hidden"
                        >
                          <img
                            src={item.image}
                            className="h-48 w-full object-cover"
                          />

                          {isEditing && (
                            <div className="absolute top-2 right-2 flex gap-2">
                              <Button
                                size="icon"
                                variant="destructive"
                                onClick={() =>
                                  updateField(
                                    "portfolio",
                                    profile.portfolio.filter(
                                      (_, i) => i !== idx
                                    )
                                  )
                                }
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          )}

                          <div className="p-3">
                            {isEditing ? (
                              <>
                                <input
                                  value={item.title}
                                  onChange={(e) => {
                                    const updated = [...profile.portfolio];
                                    updated[idx].title = e.target.value;
                                    updateField("portfolio", updated);
                                  }}
                                  className="border-b w-full mb-1"
                                />

                                <input
                                  value={item.category}
                                  onChange={(e) => {
                                    const updated = [...profile.portfolio];
                                    updated[idx].category = e.target.value;
                                    updateField("portfolio", updated);
                                  }}
                                  className="border-b w-full"
                                />
                              </>
                            ) : (
                              <>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-muted-foreground">
                                  {item.category}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      ))}

                      {isEditing && (
                        <Button
                          className="w-full border border-dashed"
                          variant="outline"
                          onClick={() =>
                            updateField("portfolio", [
                              ...profile.portfolio,
                              {
                                title: "New Project",
                                category: "Category",
                                image:
                                  "https://placehold.co/600x400?text=New",
                              },
                            ])
                          }
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Portfolio Item
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* ------------------------
                    REVIEWS (Optional editable)
                ------------------------- */}
                <Card>
                  <CardHeader>
                    <CardTitle>Client Reviews</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {profile.reviews.map((review, idx) => (
                      <div key={idx} className="border-b pb-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.avatar} />
                          </Avatar>

                          <div className="flex-1">
                            {isEditing ? (
                              <>
                                <input
                                  value={review.client}
                                  onChange={(e) => {
                                    const updated = [...profile.reviews];
                                    updated[idx].client = e.target.value;
                                    updateField("reviews", updated);
                                  }}
                                  className="border-b w-full mb-1"
                                />
                                <textarea
                                  value={review.comment}
                                  onChange={(e) => {
                                    const updated = [...profile.reviews];
                                    updated[idx].comment = e.target.value;
                                    updateField("reviews", updated);
                                  }}
                                  className="border w-full p-1 mb-2"
                                />
                              </>
                            ) : (
                              <>
                                <p className="font-medium">
                                  {review.client}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {review.project}
                                </p>
                              </>
                            )}

                            <p className="text-muted-foreground">
                              {review.comment}
                            </p>

                            {isEditing && (
                              <Trash
                                className="h-4 w-4 text-red-500 mt-2 cursor-pointer"
                                onClick={() =>
                                  updateField(
                                    "reviews",
                                    profile.reviews.filter(
                                      (_, i) => i !== idx
                                    )
                                  )
                                }
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isEditing && (
                      <Button
                        variant="outline"
                        onClick={() =>
                          updateField("reviews", [
                            ...profile.reviews,
                            {
                              client: "New Client",
                              avatar:
                                "https://api.dicebear.com/7.x/avataaars/svg?seed=new",
                              comment: "New review...",
                              project: "Project",
                              date: "2025",
                              rating: 5,
                            },
                          ])
                        }
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Review
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* ------------------------
                  RIGHT COLUMN
              ------------------------- */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Email */}
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4" />
                      {isEditing ? (
                        <input
                          value={profile.contact.email}
                          onChange={(e) =>
                            updateContact("email", e.target.value)
                          }
                          className="border-b bg-transparent"
                        />
                      ) : (
                        <span>{profile.contact.email}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4" />
                      {isEditing ? (
                        <input
                          value={profile.contact.phone}
                          onChange={(e) =>
                            updateContact("phone", e.target.value)
                          }
                          className="border-b bg-transparent"
                        />
                      ) : (
                        <span>{profile.contact.phone}</span>
                      )}
                    </div>

                    {/* Website */}
                    <div className="flex items-center gap-3 text-sm">
                      <Globe className="h-4 w-4" />
                      {isEditing ? (
                        <input
                          value={profile.contact.website}
                          onChange={(e) =>
                            updateContact("website", e.target.value)
                          }
                          className="border-b bg-transparent"
                        />
                      ) : (
                        <span>{profile.contact.website}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements - stays static */}
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 border p-3 rounded">
                      <Award className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Top Rated</p>
                        <p className="text-xs text-muted-foreground">
                          Earned 2024-02
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 border p-3 rounded">
                      <Award className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Rising Talent</p>
                        <p className="text-xs text-muted-foreground">
                          Earned 2024-01
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Response Time</span>
                        <span>&lt;1 hour</span>
                      </div>
                      <Progress value={95} />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>On-Time Delivery</span>
                        <span>98%</span>
                      </div>
                      <Progress value={98} />
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Client Satisfaction</span>
                        <span>96%</span>
                      </div>
                      <Progress value={96} />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
