import { Header } from "./header";

export default function Header5Page() {
  return (
    <div className="min-h-screen bg-muted/10">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Registry Modal Header
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Click the "Blocks" menu item in the header to reveal the premium registry modal. 
            Styled with a dual-panel layout, sidebar information, and a beautiful category grid.
          </p>
        </div>
      </main>
    </div>
  );
}
