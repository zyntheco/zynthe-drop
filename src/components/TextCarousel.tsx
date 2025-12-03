export const TextCarousel = () => {
  const messages = [
    "LIMITED EDITIONS • HANDCRAFTED WITH INTENTION",
    "NEW DROPS EVERY MONTH",
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground overflow-hidden py-2">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-4 text-xs tracking-widest font-medium">
          {messages.join(" • ")} • {messages.join(" • ")} • {messages.join(" • ")}
        </span>
      </div>
    </div>
  );
};
