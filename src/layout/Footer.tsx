import type { MenuProps } from "@/types/NavBar";
import type { FC } from "react";
import { Link } from "react-router";
import logo from "/assets/logo-ct-white.svg?url";

const Footer: FC<MenuProps> = ({ mainNavLinks, ctaNavItem }) => {
  return (
    <footer className="bg-foreground text-white p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mb-8 justify-items-center mx-auto">
        {/* Company */}
        <div>
          <div className="flex gap-4 mb-4">
            <img
              src={logo}
              className="bg-primary w-10 h-10 p-1.5 rounded-sm md:w-12 md:h-12 md:p-2"
              alt="CT logo"
            />
            <div>
              <h1 className="font-bold text-xl text-white">CHAREON TUT</h1>
              <p className="text-sm text-gray-400 leading-1.5">
                Industrail Machinery
              </p>
            </div>
          </div>
          <div>
            <p>
              Leading manufacturer of polymer and food processing instruments
              with over 20 years of experience in precision engineering.
            </p>
          </div>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-primary text-xl font-bold mb-4">Quick Link</h3>
          <ul>
            {mainNavLinks.map((item) => (
              <li key={item.to} className="hover:text-primary">
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li className="hover:text-primary">
              <Link to={ctaNavItem.to}>{ctaNavItem.label}</Link>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-primary text-xl font-bold mb-4">Contact Info</h3>
          <p>
            123 Example Road, Somewhere District,
            <br />
            Province, 11111, Thailand
          </p>
          <p>info@chareontut.com</p>
          <p>Tel: (66) 1234 5678</p>
          <p>Mob: (66) 1234 5678</p>
        </div>
      </div>

      {/* All right reserved */}
      <hr className="border-gray-500/50" />
      <div className="text-center pt-8 text-gray-500/50">
        <p>© 2025 CHAREON TUT CO., LTD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
