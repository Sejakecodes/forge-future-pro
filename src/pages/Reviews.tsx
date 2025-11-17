import { TopBar } from "@/components/layout/TopBar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const Reviews = () => {
  return (
    <div className="flex min-h-screen bg-gradient-subtle">
      <AppSidebar />
      <div className="ml-64 flex-1">
        <TopBar userName="Kitso Sejake" />
        <main className="p-6">
          <h1 className="text-2xl font-bold">Reviews</h1>
        </main>
      </div>
    </div>
  );
};

export default Reviews;
