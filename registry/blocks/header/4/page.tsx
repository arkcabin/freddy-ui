import { Header } from "./header";

export default function Header4Page() {
  return (
    <div className="min-h-screen bg-muted/20">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Premium Mega Menu
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hover over the "Products" menu to see the high-fidelity mega menu implementation. 
            Styled with motion animations and a clean card-based layout.
          </p>
        </div>
      </main>
    </div>
  );
}
