import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2FB01,#2FD8FE)] blur-md"></div>
            <Image src={logoImage} alt="Saas Logo" className="w-12 h-12 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a href="#" className="text-opacity-60 text-white hover:text-white transition-all ease-in-out duration-300">About</a>
            <a href="#" className="text-opacity-60 text-white hover:text-white transition-all ease-in-out duration-300">Features</a>
            <a href="#" className="text-opacity-60 text-white hover:text-white transition-all ease-in-out duration-300">Updates</a>
            <a href="#" className="text-opacity-60 text-white hover:text-white transition-all ease-in-out duration-300">Help</a>
            <a href="#" className="text-opacity-60 text-white hover:text-white transition-all ease-in-out duration-300">Customers</a>
            <button className="bg-white py-2 px-4 rounded-lg font-medium">Get for Free</button>
          </nav>
        </div>
      </div>
    </div>
  );
};
