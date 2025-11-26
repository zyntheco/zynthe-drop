import { Link } from "react-router-dom";

export const Footer = () => {
  const links = [
    { label: "SEARCH", href: "#" },
    { label: "PRIVACY POLICY", href: "/privacy-policy" },
    { label: "REFUND POLICY", href: "/refund-policy" },
    { label: "TERMS OF SERVICE", href: "/terms-of-service" },
  ];

  return (
    <footer className="bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Links */}
        <div className="flex flex-col items-center space-y-3 mb-10">
          {links.map((link) => (
            link.href.startsWith("#") ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground uppercase tracking-wider hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground uppercase tracking-wider hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground/40 text-center mt-6">
          © 2025 ZYNTHE. ALL PIECES NUMBERED AND AUTHENTICATED.
        </p>
      </div>
    </footer>
  );
};
