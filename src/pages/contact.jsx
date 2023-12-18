import React from "react";
import axios from "axios";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import emailImg from '../assets/email.png'
import phoneImg from '../assets/phone.png'



const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

export default function Contact() {
  const[isSubmitting, setisSumbitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    setisSumbitting(true)
    axios.post("https://villa-agency-backend.vercel.app/api/contact", data)
      .then((res) => {
        console.log("success");
    setisSumbitting(false)
        
      })
      .catch((err) => {
    setisSumbitting(false)
        console.log(err);
      });
  };

  return (
    <>
 <div className="bg-third w-full h-44 py-16">
        <h1 className="text-white text-4xl font-bold text-center ">CONTACT US</h1>
      </div>
        <div className=" container flex justify-between mt-24 gap-8">
          <div className="w-1/2">
          <div className="text-lg font-bold text-red-500 ">CONTACT US</div>
              <div className="text-third text-5xl font-bold mt-5">Get In Touch<br/> With Our<br/> Agents
               </div>
               <div className="mt-12 text-secondary font-semibold">
               When you really need to download free CSS templates, please remember our website TemplateMo.
                Also, tell your friends about our website. Thank you for visiting.
                There is a variety of Bootstrap HTML CSS templates on our website.
                 If you need more information, please contact us.
               </div>

               <div className=" w-1/2 flex shadow-xl p-7 gap-8 mt-14">
<Image src={phoneImg} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">010-020-0340</p>
    <p className="text-secondary text-lg font-semibold">Phone Number</p>
</div>
    </div>

    <div className=" w-1/2 flex shadow-xl p-7 gap-8 mt-14">
<Image src={emailImg} width={60} height={50}></Image>
<div>
    <p className="text-third text-2xl font-bold">info@villa.com</p>
    <p className="text-secondary text-lg font-semibold">Business Email</p>
</div>
    </div>

          </div>
        <div className="border  rounded-lg outline-none shadow-xl p-6  w-1/2 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <br />
            <input
              type="text"
              id="name"
              className="form-control mt-3"
              placeholder="Name"
              {...register("name")}
            />
            <small className="text-red-700">{errors.name?.message}</small>

            <br />
            <br />
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control mt-3"
              placeholder="Email"
              {...register("email")}
            />
            <small className="text-red-700">{errors.email?.message}</small>

            <br />
            <br />
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <br />
            <input
              type="text"
              id="subject"
              className="form-control mt-3"
              placeholder="Subject"
              {...register("subject")}
            />
            <small className="text-red-700">{errors.subject?.message}</small>

            <br />
            <br />
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <br />
            <textarea
              type="text"
              id="message"
              rows={4}
              cols={10}
              className="border outline-none bg-slate-100 rounded-2xl p-3 w-full mt-3"
              placeholder="Message"
              {...register("message")}
            ></textarea>
            <small className="text-red-700">{errors.message?.message}</small>
<br />
<br />
            <input
              disabled={isSubmitting}
              type="submit"
              value="Send Message"
              className="bg-third mt-10 p-3 w-1/3 text-white cursor-pointer rounded-full font-semibold hover:bg-primary disabled:bg-yellow-600"
            />
          </form>
        </div>
      </div>
    </>
  );
}
