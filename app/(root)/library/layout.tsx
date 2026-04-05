import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-black text-zinc-400">
      <DashboardSidebar />
      <main className="flex-1 min-h-screen bg-[#060606] p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
