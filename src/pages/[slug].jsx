import React from "react";
import Image from "next/image";
import areaImg from '../assets/area.png'
import contractImg from '../assets/contract.png'
import paymentImg from '../assets/payment.png'
import safetyImg from '../assets/safety.png'
import { BestProperty } from "@/components/BestDeal";
import { useGetSinglePropertyQuery } from '../features/apiSlice'
import { useRouter } from 'next/router'

export default function SingleProperty(){
    const router = useRouter();
    // console.log(router);
      const { data, error, isLoading } = useGetSinglePropertyQuery({
        property_id: router.query.slug
      });
console.log(data);
let url = `https://villa-agency-backend.vercel.app/${data?.images[0]}`
return(
    <div>
        <div className="bg-third w-full h-44 py-16">
        <h1 className="text-white text-4xl font-bold text-center ">SINGLE PROPERTY</h1>
      </div>

{ data
   &&
  <div className="container flex justify-between mt-28 h-screen">
  
  <div className="w-2/3 border-b-2 border-secondary">
    <Image src={url} alt={""} width={200} height={200} className="w-full h-2/3" ></Image>
    <div className="bg-red-300 p-1 w-36 rounded-md text-center text-base font-semibold mt-10">{data?.categories}</div>
    <div className="text-3xl font-extrabold mt-6">{data?.location}</div>
</div>

<div className="w-80 shadow-2xl p-4 h-fit">
    <div className="flex border-b border-neutral-200 p-7 gap-8">
<Image src={areaImg} alt={""} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">{data?.area} m2</p>
    <p className="text-secondary text-lg font-semibold">Total Flat Space</p>
</div>
    </div>
    <div className="flex border-b border-neutral-200 p-7 gap-8">
<Image src={contractImg} alt={""} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">{data?.contract}</p>
    <p className="text-secondary text-lg font-semibold">Contract</p>
</div>
    </div>
    <div className="flex border-b border-neutral-200 p-7 gap-8">
<Image src={paymentImg} alt={""} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">{data?.payment_process}</p>
    <p className="text-secondary text-lg font-semibold">Payment Process</p>
</div>
    </div>
    <div className="flex p-7 gap-8">
<Image src={safetyImg} alt={""} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">24/7 under control</p>
    <p className="text-secondary text-lg font-semibold">Safety</p>
</div>
    </div>
   </div>
</div>
}

{ data
   &&
  <div className="container mt-12">
<p className=" w-2/3 text-secondary font-medium">
Get the best villa agency HTML CSS Bootstrap Template for your company website.
TemplateMo provides you the best free CSS templates in the world. Please tell
your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch
tumblr yr succulents single-origin coffee schlitz enamel pin you probably have not
heard of them ugh hella.<br/>
When you look for free CSS templates, you can simply type TemplateMo in any search engine
website. In addition, you can type TemplateMo Digital Marketing, TemplateMo
Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb 
chambray knausgaard PBRB DSA poutine neutra cardigan hoodie pop-up.
</p>
</div>
}
<div className="mt-20">
<BestProperty/>
</div>
    </div>
)

}