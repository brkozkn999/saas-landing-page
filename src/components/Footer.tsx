import XSocial from "../assets/icons/x-social.svg";
import InstaIcon from "../assets/icons/insta.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            © 2024 @brkozkn999, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li><XSocial className="hover:text-white transition ease-in-out duration-300" /></li>
            <li><InstaIcon className="hover:text-white transition ease-in-out duration-300" /></li>
            <li><TiktokIcon className="hover:text-white transition ease-in-out duration-300" /></li>
            <li><YoutubeIcon className="hover:text-red-600 transition ease-in-out duration-300" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
