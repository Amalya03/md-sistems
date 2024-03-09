import React from "react";

import classes from "./Contact.module.css";
import { Link } from "react-router-dom";

const ContactUs = (props) => {
  const { src, link, value } = props;

  return (
    <div
      className={`flex items-center gap-4 justify-center flex-wrap bg-slate-500 opacity-[0.5] shadow-xl w-[350px] rounded-xl h-[200px] p-3`}
    >
      <div className={`flex justify-start w-full flex-wrap gap-6`}>
        <div className={`flex items-center w-full justify-start`}>
            <img src={src} alt=""/>
          {/* <Image className={""} src={src} alt="" width={60} height={60} /> */}
        </div>
        <div className={`flex items-center w-full flex-wrap gap-1`}>
          {/* <Text className="text-white text-left text-xl" text={title} /> */}
          <Link
            className={`w-full  text-white no-underline text-xl`}
            href={link}
          >
            {value}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
