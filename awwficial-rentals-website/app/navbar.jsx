"use client";
import * as React from "react";
import Link from "next/link";
import ResponsiveDrawer from "./components/ResponsiveDrawer.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LargeButton from './components/LargeButton.jsx';
import BorderlessButton from './components/BorderlessButton.jsx';
import Image from 'next/image';

export default function Navbar() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("tablet"));
  const navBarLabels = [
    { label: "Home", route: "/" },
    { label: "Services", route: "/Services" },
    { label: "Gallery", route: "/GalleryPage" },
    { label: "Contact", route: "/Contact" },
    { label: "FAQ", route: "/FAQ" },
    { label: "GetAQuote", route: "/GetAQuote" },
  ];
  return (
    // I plan to make the navbar transparent later,
    // but I do like seeing the colors change with the breakpoints.
    // Helps me with responsive design.
    <nav className="bg-[#EDE9FD] h-[112px] w-full flex items-center justify-center">
      <div className="flex flex-row items-center justify-between grow max-w-[1700px] px-3">
        <Image
          src='/images/navbarLogo.png'
          width={194}
          height={56}
          alt ='Awwficial Logo'
        />
        <div className='hidden tablet:flex tablet:flex-row tablet:justify-between tablet:items-center w-full gap-1'>
          <div className="tablet:flex tablet:flex-row tablet:justify-around tablet:items-center grow gap-1">
            <BorderlessButton name={"Home"} href={"/"}/>
            <BorderlessButton name={"Services"} href={"/Services"}/>
            <BorderlessButton name={"Gallery"} href={"/GalleryPage"}/>
            <BorderlessButton name={"Contact"} href={"/Contact"}/>
            <BorderlessButton name={"FAQ"} href={"/FAQs"}/>
          </div>
          <div className="">
            <LargeButton name={'Get A Quote'} href={'/GetAQuote'} />
          </div>
        </div>
        <div className='tablet:hidden w-full flex justify-end p-4'>
          <ResponsiveDrawer navBarLabels={navBarLabels} />
        </div>
      </div>
    </nav>
  );
}
