import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";
import { animateScroll as Scroll } from "react-scroll";
import { useRouter } from "next/router";
import Link from "next/link";

const NavigationBar = () => {
  const router = useRouter();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul
      className={`mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-end lg:gap-8 ${
        router.asPath === "/"
          ? "text-white"
          : scrollY > 720 || openNav
          ? "text-white"
          : "text-dark-gray"
      }`}
    >
      <Link href="/about-us">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="hover:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] duration-300 p-1 font-normal cursor-pointer text-md"
        >
          About Us
        </Typography>
      </Link>
      <Link href="privacy-policy">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="hover:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] duration-300 p-1 font-normal cursor-pointer text-md"
        >
          Terms &amp; Policy
        </Typography>
      </Link>
      <Link href="contact-us">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="hover:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] duration-300 p-1 font-normal cursor-pointer text-md"
        >
          Contact Us
        </Typography>
      </Link>
      <Link href="career">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="hover:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] duration-300 p-1 font-normal cursor-pointer text-md"
        >
          Career
        </Typography>
      </Link>
      <Link href="support-center">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="hover:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] duration-300 p-1 font-normal cursor-pointer text-md"
        >
          Support Center
        </Typography>
      </Link>
    </ul>
  );

  return (
    <Navbar
      className={`${
        scrollY > 720 || openNav ? "bg-dark-gray" : "bg-transparent"
      } min-w-full duration-300 py-2 px-4 lg:px-8 lg:py-4 sticky top-0 left-0 right-0 z-50 border-none`}
    >
      <div className="container mx-auto px-6 max-w-screen-2xl flex items-center justify-between text-blue-gray-900">
        <div className="mr-4 cursor-pointer py-1.5 font-normal">
          <Link href={"/"}>
            <a>
              <div
                className="flex justify-center items-center gap-2  cursor-pointer hover:drop-shadow-[1px_1px_1px_rgba(255,255,255,0.6)] duration-100"
                onClick={() => router.asPath === "/" && Scroll.scrollToTop()}
              >
                <Image
                  src="/assets/png/logo.png"
                  alt="Funtravia-Logo"
                  width={30}
                  height={30}
                />
                <h3
                  className={`text-xl ${
                    router.asPath === "/"
                      ? "text-white"
                      : scrollY > 720 || openNav
                      ? "text-white"
                      : "text-dark-gray"
                  }`}
                >
                  funtravia
                </h3>
              </div>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 lg:gap-8">
          <div className="hidden lg:block">{navList}</div>
          <Link href="https://play.google.com/store/apps/details?id=com.funtravia.apps">
            <button className="hidden lg:inline-block py-3 px-8 bg-pink hover:bg-light-green duration-300 rounded-md">
              <a href="https://play.google.com/store/apps/details?id=com.funtravia.apps">
                <span>Download Apps</span>
              </a>
            </button>
          </Link>
        </div>
        <div
          className="h-6 w-6text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h24M4 12h24M4 18h24"
              />
            </svg>
          )}
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Link href="https://play.google.com/store/apps/details?id=com.funtravia.apps">
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <a>
              <span className="py-3 px-12 text-sm bg-pink rounded-md">
                Download Apps
              </span>
            </a>
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
};

export default NavigationBar;
