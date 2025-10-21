import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ReviewFreelancer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [ratings, setRatings] = useState({
    communication: 0,
    quality: 0,
    expertise: 0,
    professionalism: 0,
    deadline: 0,
  });

  const freelancer = {
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    project: "E-commerce Platform Development",
  };

  const ratingCategories = [
    { key: "communication", label: "Communication" },
    { key: "quality", label: "Quality of Work" },
    { key: "expertise", label: "Expertise" },
    { key: "professionalism", label: "Professionalism" },
    { key: "deadline", label: "Adherence to Deadlines" },
  ];

  const handleStarClick = (category: string, rating: number) => {
    setRatings({ ...ratings, [category]: rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback. Your review has been published.",
    });
    navigate("/dashboard");
  };

  const renderStars = (category: string, currentRating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-6 w-6 cursor-pointer transition-colors ${
              star <= currentRating
                ? "fill-primary text-primary"
                : "text-muted-foreground hover:text-primary"
            }`}
            onClick={() => handleStarClick(category, star)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Alex" />
        <main className="p-6">
          <div className="mx-auto max-w-3xl space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Review Freelancer</h1>
              <p className="text-muted-foreground">Share your experience working with this freelancer</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Freelancer Info */}
              <Card className="border-border/60 shadow-soft mb-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={freelancer.avatar} />
                      <AvatarFallback>{freelancer.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{freelancer.name}</CardTitle>
                      <CardDescription>Project: {freelancer.project}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Rating Categories */}
              <Card className="border-border/60 shadow-soft">
                <CardHeader>
                  <CardTitle>Rate Your Experience</CardTitle>
                  <CardDescription>Rate each aspect from 1 to 5 stars</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {ratingCategories.map((category) => (
                    <div key={category.key} className="space-y-2">
                      <Label>{category.label}</Label>
                      {renderStars(category.key, ratings[category.key as keyof typeof ratings])}
                    </div>
                  ))}

                  {/* Overall Rating Display */}
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <Label className="text-lg">Overall Rating</Label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">
                          {Object.values(ratings).reduce((a, b) => a + b, 0) / 5 || 0}
                        </span>
                        <Star className="h-6 w-6 fill-primary text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Written Review */}
                  <div className="space-y-2 pt-4">
                    <Label htmlFor="review">Written Review</Label>
                    <Textarea
                      id="review"
                      placeholder="Share details about your experience working with this freelancer..."
                      rows={6}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Please be honest and constructive. Your review helps other clients make informed decisions.
                    </p>
                  </div>

                  {/* Would Recommend */}
                  <div className="space-y-2 pt-4">
                    <Label htmlFor="recommend">Would you recommend this freelancer?</Label>
                    <div className="flex gap-4">
                      <Button type="button" variant="outline" className="flex-1 rounded-lg">
                        👍 Yes, Recommend
                      </Button>
                      <Button type="button" variant="outline" className="flex-1 rounded-lg">
                        👎 Not Recommended
                      </Button>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-6">
                    <Button
                      type="submit"
                      className="bg-gradient-primary hover:opacity-90"
                      disabled={Object.values(ratings).every((r) => r === 0)}
                    >
                      Submit Review
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => navigate("/dashboard")}
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReviewFreelancer;
