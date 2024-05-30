import React from "react";
import { IoIosMail } from "react-icons/io";import { GrMapLocation } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {

    return(
       <div className="border-b border-[#c9c6c5]">
         <div className="container flex justify-between p-4">
<div className="flex gap-14">
    <p className="text-secondary"><IoIosMail  className="inline text-primary mr-2 text-3xl"/>info@company.com</p>
    <p className="text-secondary"><GrMapLocation className="inline text-primary mr-2 text-2xl" /> Sunny Isles Beach, FL 33160</p>
</div>
<div className="flex gap-3">
<a href="www.facebook.com"><FaFacebook/></a>
<a href="www.twitter.com"><FaTwitterSquare /></a>
<a href="www.linkedin.com"><FaLinkedin /></a>
<a href="www.instagram.com"><FaInstagramSquare /></a>
</div>
        </div>
       </div>
    )
}