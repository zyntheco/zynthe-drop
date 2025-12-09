import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top whenever the route changes.
export const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};

