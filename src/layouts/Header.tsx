import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./../components/ui/avatar";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import pcAvatar from "@/assets/PC_img.png";

const Header = () => {
  const linkCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-sky-600 font-medium" : "text-gray-600 hover:text-gray-900";
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-sky-500 grid place-items-center text-white font-bold">
              4W
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-lg">FourWhlKart</div>
              <div className="text-xs text-gray-500 -mt-0.5">
                The Smart Way to Buy &amp; Sell Cars.
              </div>
            </div>
          </Link>
          <nav className="mx-auto hidden md:flex items-center gap-6">
            <NavLink to="/" end className={linkCls}>
              Home
            </NavLink>
            <NavLink to="/cars" className={linkCls}>
              Cars
            </NavLink>
            <NavLink to="/favorites" className={linkCls}>
              Favorites
            </NavLink>
            <NavLink to="/about" className={linkCls}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkCls}>
              Contact Us
            </NavLink>
          </nav>
          {/* <div className="ml-auto w-9 h-9 rounded-full bg-gray-200 border border-gray-300 grid place-items-center text-xs text-gray-500">
            👤
          </div> */}
          <div>
            {/* Avatar */}
            <Avatar className="h-9 w-9 cursor-pointer">
              {/* <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="User" /> */}
              <AvatarImage src={pcAvatar} alt="User" />
              <AvatarFallback>PC</AvatarFallback>
            </Avatar>
          </div>
          {/* <div>
            <Sheet className="md:hidden">
              <SheetTrigger asChild>
                <button>
                  <Menu />
                </button>
              </SheetTrigger>

              <SheetContent side="left">
                <nav className="flex flex-col gap-4">
                  <a href="/">Home</a>
                  <a href="/cars">Cars</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div> */}

          {/*  Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 border rounded">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-6">
                  <nav className="flex flex-col gap-4">
                    <a href="/">Home</a>
                    <a href="/cars">Cars</a>
                    <a href="/favorites">Favorites</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="pb-3 md:pb-4">
          <div id="search-slot" />
        </div>
      </div>
    </header>
  );
};

export default Header;
