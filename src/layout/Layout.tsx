import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";

// Main navigation links
const mainNavLinks = [
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/application", label: "Applications" },
];

// Call to Action (CTA) navigation item
const ctaNavItem = { to: "/contact", label: "Contact Us" };

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar mainNavLinks={mainNavLinks} ctaNavItem={ctaNavItem} />
      <main>
        <Outlet />
      </main>
      <Footer mainNavLinks={mainNavLinks} ctaNavItem={ctaNavItem} />
    </>
  );
};

export default Layout;
