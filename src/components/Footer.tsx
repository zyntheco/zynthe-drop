export const Footer = () => {
  const links = [
    { label: "SEARCH", href: "#" },
    { label: "PRIVACY POLICY", href: "#" },
    { label: "REFUND POLICY", href: "#" },
    { label: "TERMS OF SERVICE", href: "#" },
  ];

  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Links */}
        <div className="flex flex-col items-center space-y-3 mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground uppercase tracking-wider hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Powered By */}
        <p className="text-sm text-muted-foreground/60 text-center">
          POWERED BY SHOPIFY
        </p>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/40 text-center mt-6">
          © 2024 ZYNTHE. ALL PIECES NUMBERED AND AUTHENTICATED.
        </p>
      </div>
    </footer>
  );
};
