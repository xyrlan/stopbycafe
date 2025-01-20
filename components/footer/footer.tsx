import React from "react";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";

import { Title } from "../title";
import { title } from "../primitives";

import NavFooter from "./navfooter";
import SocialLinks from "./social-links";

const Footer = () => {
  return (
    <footer className="bg-default py-8 md:py-16 px-4 md:px-12 text-primary ">
      <div className="container mx-auto">
        <div className="flex max-md:flex-col max-md:gap-6 justify-between md:mb-20">
          <NavFooter />
          <SocialLinks />
        </div>

        <div className="flex flex-col font-semibold my-12 max-md:text-sm">
          <p>P: +xx (xx) 99999-9999</p>
          <p>E: stopbycafe@gmail.com</p>
          <p>
            H: Monday to Friday, 8:00 AM to 5:00 PM <br /> Saturday and Sunday,
            9:00 AM to 5:00 PM
          </p>
        </div>

        <iframe
          allowFullScreen={true}
          className="w-full opacity-70 max-md:max-h-[200px]"
          height="300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.760672315191!2d-73.9847302!3d40.7672883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e8fccf47af%3A0x21ec938d803ed9aa!2sStop%20By%20Caf%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1737405700168!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          title="Stop by Café Google Maps location"
          width="600"
        />
        <div className="my-12">
          <Title className={clsx(title(), "text-secondary-700")}>
            Stop by Café
            {/* <br /> */}
            {/* <span className="text-primary-500 text-3xl">Coffe & Pastry</span> */}
          </Title>
        </div>
        <Divider className="my-12" />
        <div className="font-semibold max-md:text-sm">
          <p className="">
            © {new Date().getFullYear()} Stop by Café. All rights reserved.
          </p>
          <p className="">
            Website Designed & Developed with ❤️ by{" "}
            <Link href="https://xyrlan.vercel.app/" target="_blank">
              xyrlan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
