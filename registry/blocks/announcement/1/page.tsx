import { Announcement } from "./announcement";
import { DemoLayout } from "@/components/demo-layout";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <Announcement />
      <div className="container mx-auto px-4 py-12">
        <DemoLayout />
      </div>
    </div>
  );
}
