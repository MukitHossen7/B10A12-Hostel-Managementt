import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import footerLogo from "../../../../src/assets/logo/New Project (1).png";
const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col gap-5 items-center bg-gray-900 text-primary-content p-10">
        <aside>
          <img
            src={footerLogo}
            className="w-14 object-cover h-14 rounded-full"
          ></img>
        </aside>
        <div className="flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/meals">All Meals</Link>
          <Link to="/upcoming-meals">Upcoming Meals</Link>
        </div>

        <nav>
          <div className="flex items-center gap-4 py-0">
            <a href="#" target="_blank">
              <FaFacebook className="text-2xl" />
            </a>
            <a>
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a>
              <FaYoutube className="text-2xl" />
            </a>
            <FaTwitter className="text-2xl" />
          </div>
        </nav>
        <p className="text-sm font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
