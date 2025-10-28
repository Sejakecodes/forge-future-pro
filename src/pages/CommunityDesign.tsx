import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { X, Heart } from "lucide-react";

const designs = [
  {
    id: 1,
    title: "Minimal Logo Concept",
    designer: "Alex M.",
    category: "Logo Design",
    image: "/images/designs/logo1.jpg",
    likes: 124,
    description:
      "A minimal logo design for a tech startup. Focused on clean typography and negative space.",
  },
  {
    id: 2,
    title: "E-commerce App UI",
    designer: "Sophia Lee",
    category: "UI/UX",
    image: "/images/designs/ui1.jpg",
    likes: 232,
    description:
      "Modern e-commerce app UI focusing on smooth user flow and clean layout.",
  },
  {
    id: 3,
    title: "Coffee Brand Identity",
    designer: "T. Brown",
    category: "Branding",
    image: "/images/designs/branding1.jpg",
    likes: 89,
    description:
      "Full branding package including logo, packaging, and palette for a coffee brand.",
  },
  {
    id: 4,
    title: "Vector Illustration Pack",
    designer: "Maria K.",
    category: "Illustration",
    image: "/images/designs/illustration1.jpg",
    likes: 65,
    description:
      "A collection of hand-drawn vector illustrations for creative projects.",
  },
  // Add more items as needed
];

const categories = ["All", "Logo Design", "UI/UX", "Branding", "Illustration"];
const sortOptions = ["Newest", "Most Liked", "A-Z"];

export default function CommunityDesigns() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDesign, setSelectedDesign] = useState<any | null>(null);

  const itemsPerPage = 6;

  // === Filtering & Sorting Logic ===
  let filtered = designs.filter(
    (d) =>
      (selectedCategory === "All" || d.category === selectedCategory) &&
      (d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.designer.toLowerCase().includes(search.toLowerCase()))
  );

  if (sortBy === "Most Liked") filtered.sort((a, b) => b.likes - a.likes);
  if (sortBy === "A-Z") filtered.sort((a, b) => a.title.localeCompare(b.title));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDesigns = filtered.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // === Like Toggle ===
  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <motion.div className="space-y-8" initial="hidden" animate="show">
      {/* === Top Controls === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Design Community
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Input
            placeholder="Search designs or designers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-56"
          />
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="secondary">Upload Design</Button>
        </div>
      </div>

      {/* === Design Grid === */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedDesigns.map((design) => (
          <motion.div
            key={design.id}
            whileHover={{ scale: 1.02 }}
            className="transition-transform"
          >
            <Card className="overflow-hidden border-border/60 hover:shadow-lg">
              <div
                className="relative h-48 w-full cursor-pointer"
                onClick={() => setSelectedDesign(design)}
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="object-cover w-full h-full"
                />
                <Badge className="absolute top-3 left-3 bg-white/80 text-xs font-medium">
                  {design.category}
                </Badge>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(design.id);
                  }}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      liked.includes(design.id)
                        ? "text-red-500 fill-red-500"
                        : ""
                    }`}
                  />
                </Button>
              </div>

              <CardHeader className="p-4">
                <p className="font-medium truncate">{design.title}</p>
                <p className="text-sm text-muted-foreground">
                  by {design.designer}
                </p>
              </CardHeader>

              <CardContent className="p-4 pt-0 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  ❤️ {design.likes + (liked.includes(design.id) ? 1 : 0)}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedDesign(design)}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* === Pagination === */}
      <div className="flex justify-center gap-2 pt-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Button
            key={i}
            size="sm"
            variant={i + 1 === currentPage ? "default" : "outline"}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      {/* === Design Modal === */}
      <AnimatePresence>
        {selectedDesign && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background rounded-xl shadow-xl max-w-2xl w-full overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className="relative">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="w-full h-80 object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3"
                  onClick={() => setSelectedDesign(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">
                  {selectedDesign.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  by {selectedDesign.designer}
                </p>
                <p className="text-sm">{selectedDesign.description}</p>
                <div className="flex justify-between items-center pt-3">
                  <Badge>{selectedDesign.category}</Badge>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleLike(selectedDesign.id)}
                  >
                    <Heart
                      className={`w-5 h-5 mr-1 ${
                        liked.includes(selectedDesign.id)
                          ? "text-red-500 fill-red-500"
                          : ""
                      }`}
                    />
                    {liked.includes(selectedDesign.id) ? "Liked" : "Like"}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
