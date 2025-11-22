export const StatsBar = () => {
  return (
    <div className="border-y border-border py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-primary font-mono">1,247</p>
            <p className="text-sm tracking-wider text-muted-foreground mt-2">TOTAL PIECES CREATED</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary font-mono">08</p>
            <p className="text-sm tracking-wider text-muted-foreground mt-2">LIVE DROPS</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary font-mono">4,892</p>
            <p className="text-sm tracking-wider text-muted-foreground mt-2">WAITLIST COUNT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
