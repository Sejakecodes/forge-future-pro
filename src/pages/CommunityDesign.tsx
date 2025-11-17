import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TopBar } from "@/components/layout/TopBar";
import { Link } from "react-router-dom";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import { X, Heart } from "lucide-react";

// === Categories ===
const categories = ["Logo Design", "UI/UX", "Branding", "Illustration"];
const filterCategories = ["All", ...categories];
const sortOptions = ["Newest", "Most Liked", "A-Z"];

// === Generate 100 Placeholder Designs ===
const designs = Array.from({ length: 100 }, (_, i) => {
  const category = categories[i % categories.length];
  return {
    id: i + 1,
    title: `${category} Showcase #${i + 1}`,
    designer: `Designer ${String.fromCharCode(65 + (i % 26))}`,
    category,
    image: `https://source.unsplash.com/random/600x40${i % 9}?sig=${i}`,
    likes: Math.floor(Math.random() * 200) + 50,
    description: `A premium ${category.toLowerCase()} design example crafted to demonstrate modern aesthetics.`,
  };
});

// === Animations ===
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function CommunityDesigns() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [search, setSearch] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [visibleCount, setVisibleCount] = useState(16); // initial load count
  const [selectedDesign, setSelectedDesign] = useState<any | null>(null);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  // === Filtering ===
  let filtered = designs.filter(
    (d) =>
      (selectedCategory === "All" || d.category === selectedCategory) &&
      (d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.designer.toLowerCase().includes(search.toLowerCase()))
  );

  // === Sorting ===
  if (sortBy === "Most Liked") filtered.sort((a, b) => b.likes - a.likes);
  if (sortBy === "A-Z") filtered.sort((a, b) => a.title.localeCompare(b.title));

  // === Visible list ===
  const visibleItems = filtered.slice(0, visibleCount);

  // === Infinite Scroll Observer ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 12);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <motion.div
      className="space-y-8 pt-6 px-6"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      {/* HEADER CONTROLS */}
      <div className="sticky top-0 z-50">
              <TopBar  />
            </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
        
        </h2>
          

        <div className="flex flex-wrap items-center gap-3">
          <Input
            placeholder="Search designers or titles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64"
          />

          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {filterCategories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSortBy}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button className="font-medium">Upload Design</Button>
        </div>
      </div>

      {/* GRID */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20"
      >
        {visibleItems.map((design) => (
          <motion.div
            key={design.id}
            variants={fadeIn}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.02 }}
          >
            <Card className="overflow-hidden border-border/50 hover:shadow-xl transition rounded-lg group">
              <div
                className="relative h-56 w-full cursor-pointer"
                onClick={() => setSelectedDesign(design)}
              >
                <img
                  src={design.image}
                  className="object-cover w-full h-full rounded-t-lg"
                />

                <Badge className="absolute top-3 left-3 bg-white/80 text-xs backdrop-blur-sm">
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
                    className={`w-5 h-5 transition ${
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

              <CardContent className="p-4 pt-0 flex items-center justify-between">
                <span className="text-muted-foreground text-sm">
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
      </motion.div>

      {/* Infinite Scroll Trigger */}
      <div
        ref={loadMoreRef}
        className="h-10 flex justify-center items-center text-muted-foreground text-sm"
      >
        Loading more…
      </div>

      {/* MODAL */}
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
