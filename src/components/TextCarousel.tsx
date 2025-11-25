export const TextCarousel = () => {
  const messages = [
    "LIMITED EDITIONS • HANDCRAFTED WITH INTENTION",
    "FREE SHIPPING WORLDWIDE • SECURE CHECKOUT",
    "NEW DROPS EVERY MONTH • JOIN THE COMMUNITY",
  ];

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-4 text-xs tracking-widest font-medium">
          {messages.join(" • ")} • {messages.join(" • ")} • {messages.join(" • ")}
        </span>
      </div>
    </div>
  );
};
