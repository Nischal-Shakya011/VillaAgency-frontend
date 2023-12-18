import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useGetAllPropertyQuery } from '../features/apiSlice';
import Properties from "@/pages/properties";

export const Property = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [pageNumber, setpageNumber] = useState(1);
  // const { data, error, isLoading } = useGetAllPropertyQuery(selectedCategory);
  const { data, error, isLoading } = useGetAllPropertyQuery({
    category: selectedCategory,
    pg: pageNumber, 
  });

// console.log(data);
  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  function handlePageClick(){
    setpageNumber(pageNumber + 1)
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <div>
      <div className="bg-third w-full h-44 py-16">
        <h1 className="text-white text-4xl font-bold text-center ">PROPERTIES</h1>
      </div>
      <div className="flex justify-center gap-8 py-20">
      <div>
          {  selectedCategory == "" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("")}>Show All</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("")}>Show All</button>

          }
          </div>
      <div>
          {  selectedCategory == "apartment" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("apartment")}>Apartment</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("apartment")}>Apartment</button>

          }
          </div>
         <div>
          {  selectedCategory == "villa" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("villa")}>Villa House</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("villa")}>Villa House</button>

          }
          </div>
<div>
          {  selectedCategory == "penthouse" ?
            <button className=" border outline-none rounded-lg bg-primary hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("penthouse")}>Penthouse</button>
          :
          <button className=" border outline-none rounded-lg bg-[#080a1c] hover:bg-primary p-3 w-40 text-white text-base font-semibold" onClick={() => handleButtonClick("penthouse")}>Penthouse</button>

          }
          </div>
          </div>
          </div>
          
      <div className=" container grid grid-cols-3 gap-5">
      {data.properties.map((res) => (
        <Link href={`/${res._id}`} key={res._id}>
        <div key={res.id} className="bg-slate-200 p-6 border rounded-xl">
          
          <Image src={`https://villa-agency-backend.vercel.app/${res.images}`} alt={""} width={500} height={500} className="border rounded-lg" ></Image>
          <div className="flex gap-24 mt-8 text-center">
             <span className="bg-red-300 p-1 w-36 rounded-md text-base font-semibold">{res.categories}</span>
             <span className="text-primary text-xl font-bold mt-2">${res.price}</span>
          </div>
          <div className="text-2xl font-bold mt-6">{res.location}</div>
          <div className="grid grid-cols-2 mt-5 gap-24">
            <div className="flex flex-col font-semibold">
              <span>Bedrooms:<span className="text-base font-bold"> {res.bedrooms}</span></span>
              <span>Area:<span className="text-base font-bold"> {res.area}m2</span></span>
              <span>Parking:<span className="text-base font-bold"> {res.parking}</span></span>
            </div>
            <div className="flex flex-col font-semibold">
            <span>Bathrooms:<span className="text-base font-bold"> {res.bathrooms}</span></span>
              <span>Floor:<span className="text-base font-bold"> {res.floor}</span></span>
           </div>
          </div>
          <div className="mt-12 text-center">
            <Link href={"/"}>
          <button className=" border-2 rounded-3xl outline-none bg-[#080a1c] w-40 hover:text-primary p-2 text-white text-base" >Schedule a Visit</button>
            </Link>
          </div>
        </div>
        </Link>
      ))}
      </div>
     <div className="flex justify-center gap-4 mt-20">
      {
      pageNumber == 1?
      <button className="border bg-primary w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => setpageNumber(1)}>1</button>
:
<button className="border bg-third w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => setpageNumber(1)}>1</button>

      }
       {
        pageNumber == 2 ?
      <button className="border bg-primary w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => setpageNumber(2)}>2</button>
:
<button className="border bg-third w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => setpageNumber(2)}>2</button>

      }
      {
        pageNumber == 3 ?
      <button className="border bg-primary w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => setpageNumber(3)}>3</button>
:
<button className="border bg-third w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => setpageNumber(3)}>3</button>

      }
  
        <button className="border bg-third w-12 h-12 p-2 rounded-[100%] text-white text-base font-semibold hover:bg-primary" onClick={() => handlePageClick()}>&#62;&#62;</button>

     </div>
     </div>
  );
};