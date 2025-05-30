import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react"; // Icon for hamburger menu

import type { MenuProps } from "@/types/NavBar";
import type { FC } from "react";
import { Link } from "react-router"; // Standard import for Link
import logo from "/assets/logo-ct-white.svg?url";

const NavBar: FC<MenuProps> = ({ mainNavLinks, ctaNavItem }) => {
  return (
    <header className="bg-background shadow-md z-50 top-0 sticky py-4 px-4 sm:px-6 lg:px-8">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex gap-2 justify-center">
          <img
            src={logo}
            className="bg-foreground w-10 h-10 p-1.5 rounded-sm md:w-12 md:h-12 md:p-2" // Responsive logo
            alt="CT logo"
          />
          <div>
            <h1 className="font-bold text-xl text-foreground">CHAREON TUT</h1>
            <p className="text-sm text-gray-400 leading-1.5">
              Industrail Machinery
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-4 lg:space-x-6">
          {mainNavLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to={ctaNavItem.to}>{ctaNavItem.label}</Link>
          </Button>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="sm:hidden">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="p-8">
              <nav className="grid gap-y-4">
                {mainNavLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="font-medium text-foreground hover:text-primary py-2 px-3 hover:bg-accent rounded-md block"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="w-full mt-2">
                  <Link to={ctaNavItem.to}>{ctaNavItem.label}</Link>
                </Button>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
