export function DemoLayout() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-4 py-12">
      <div className="mb-4 space-y-2">
        <div className="h-6 w-4/6 rounded-md border bg-accent" />
        <div className="h-6 w-1/2 rounded-md border bg-accent" />
      </div>
      <div className="mb-8 flex gap-2">
        <div className="h-3 w-14 rounded-md border bg-accent" />
        <div className="h-3 w-12 rounded-md border bg-accent" />
      </div>

      {[0, 1, 2, 3, 4, 5, 6].map((id) => (
        <div className="mb-8 space-y-2" key={id}>
          <div className="h-4 w-full rounded-md border bg-accent" />
          <div className="h-4 w-full rounded-md border bg-accent" />
          <div className="h-4 w-full rounded-md border bg-accent" />
          <div className="h-4 w-1/2 rounded-md border bg-accent" />
        </div>
      ))}
    </main>
  );
}
