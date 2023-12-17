import React from "react"
import Link from "next/link"

export const Navigation = () =>{
    return(
        <div className=" container flex justify-between p-6">
            <div>
                <Link className="font-bold text-2xl text-[#080a1c]" href={"/"}>VILLA</Link>
            </div>
            <div className="flex gap-14 text-secondary text-lg font-serif">
<Link className="hover:text-primary" href={"/"}>Home</Link>
<Link className="hover:text-primary" href={"/properties"}>Properties</Link>
<Link className="hover:text-primary" href={"/slug"}>Properties Details</Link>
<Link className="hover:text-primary" href={"/contact"}>Contact us</Link>
<Link href={"/"}>
<button className="border-2 rounded-3xl outline-none w-40 bg-[#080a1c] hover:text-primary p-2 text-white text-base">Schedule a Visit</button>
</Link>
            </div>
        </div>
    )
}