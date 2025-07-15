import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional: adds smooth scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
