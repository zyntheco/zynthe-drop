export const TextCarousel = () => {
  const messages = [
    "LIMITED EDITIONS • HANDCRAFTED WITH INTENTION",
    "NEW DROPS EVERY MONTH",
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-primary text-primary-foreground overflow-hidden py-1 flex items-center">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-4 text-[0.7rem] md:text-xs leading-none tracking-widest font-medium">
          {messages.join(" • ")} • {messages.join(" • ")} • {messages.join(" • ")}
        </span>
      </div>
    </div>
  );
};
