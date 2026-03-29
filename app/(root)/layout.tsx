import { SiteFooter } from "@/components/footer";

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden  supports-[overflow:clip]:overflow-clip">
      {children}
      <SiteFooter />
    </div>
  );
}
