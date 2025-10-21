import { useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PostJob = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [skills, setSkills] = useState<string[]>([]);
  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Job Posted Successfully!",
      description: "Your job posting is now live and visible to freelancers.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Alex" />
        <main className="p-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Post a New Job</h1>
              <p className="text-muted-foreground">Find the perfect freelancer for your project</p>
            </div>

            <form onSubmit={handleSubmit}>
              <Card className="border-border/60 shadow-soft">
                <CardHeader>
                  <CardTitle>Job Details</CardTitle>
                  <CardDescription>Provide clear information about your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Job Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Full-Stack Developer for E-commerce Platform"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-dev">Web Development</SelectItem>
                        <SelectItem value="mobile-dev">Mobile Development</SelectItem>
                        <SelectItem value="design">Design & Creative</SelectItem>
                        <SelectItem value="writing">Writing & Content</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="data">Data & Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Skills Required */}
                  <div className="space-y-2">
                    <Label htmlFor="skills">Required Skills</Label>
                    <div className="flex gap-2">
                      <Input
                        id="skills"
                        placeholder="Add a skill (e.g., React, Node.js)"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddSkill();
                          }
                        }}
                      />
                      <Button type="button" onClick={handleAddSkill} variant="outline">
                        Add
                      </Button>
                    </div>
                    {skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="gap-1">
                            {skill}
                            <X
                              className="h-3 w-3 cursor-pointer"
                              onClick={() => handleRemoveSkill(skill)}
                            />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budget-min">Budget Range (Min)</Label>
                      <Input
                        id="budget-min"
                        type="number"
                        placeholder="e.g., 1000"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget-max">Budget Range (Max)</Label>
                      <Input
                        id="budget-max"
                        type="number"
                        placeholder="e.g., 5000"
                        required
                      />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="space-y-2">
                    <Label htmlFor="duration">Project Duration</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="less-1-month">Less than 1 month</SelectItem>
                        <SelectItem value="1-3-months">1 to 3 months</SelectItem>
                        <SelectItem value="3-6-months">3 to 6 months</SelectItem>
                        <SelectItem value="more-6-months">More than 6 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Experience Level */}
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level Required</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      type="submit"
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      Post Job
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

export default PostJob;
