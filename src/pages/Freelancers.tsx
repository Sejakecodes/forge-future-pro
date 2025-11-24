import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Star } from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";

const categories = [
  { id: "all", label: "All" },
  { id: "Design", label: "Design" },
  { id: "Development", label: "Programming" },
  { id: "Writing", label: "Writing" },
];

const freelancersData = [
  {
    id: 1,
    name: "Lerato M.",
    role: "UI/UX Designer",
    category: "Design",
    rating: 4.9,
    bio: "I design intuitive user experiences and high-end interfaces.",
    skills: ["Figma", "Wireframing", "Branding"],
    photo: "/images/user1.png",
  },
  {
    id: 2,
    name: "Thabo K.",
    role: "Frontend Developer",
    category: "Development",
    rating: 4.7,
    bio: "Building modern, responsive websites using React and Tailwind.",
    skills: ["React", "TailwindCSS", "Next.js"],
    photo: "/images/user2.png",
  },
  {
    id: 3,
    name: "Amanda P.",
    role: "Copywriter",
    category: "Writing",
    rating: 4.8,
    bio: "Creating compelling brand stories and SEO-optimized content.",
    skills: ["SEO", "Content Writing", "Brand Voice"],
    photo: "/images/user3.png",
  },
];

const FreelancersPage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const freelancers = freelancersData.filter((f) => {
    const matchSearch =
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.role.toLowerCase().includes(search.toLowerCase());

    const matchCategory = activeCategory === "all" ? true : f.category === activeCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
         <TopBar userName="kitso Sejake" />
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold">Freelancers Directory</h1>
        <p className="text-muted-foreground">
          Browse freelancers for mentorship, collaboration, or hire.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex gap-6 border-b pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`pb-2 text-sm font-medium transition ${
              activeCategory === cat.id
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SEARCH + FILTERS */}
      
      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {freelancers.map((f) => (
          <Card key={f.id} className="relative shadow-soft hover:shadow-lg transition rounded-xl">

            {/* Top-right rating badge */}
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">{f.rating}</span>
            </div>

            <CardHeader className="flex flex-row items-center gap-4">
              {/* PROFILE IMAGE */}
              <img
                src={f.photo}
                alt={f.name}
                className="h-14 w-14 rounded-full object-cover border"
              />

              <div>
                <CardTitle className="text-lg">{f.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{f.role}</p>
              </div>
            </CardHeader>

            <CardContent>
              {/* BIO */}
              <p className="text-sm text-muted-foreground mb-3">{f.bio}</p>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {f.skills.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-secondary text-xs rounded-xl"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <Button className="w-full rounded-lg bg-primary text-white">
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FreelancersPage;
