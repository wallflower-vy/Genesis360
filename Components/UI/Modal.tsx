import React from "react";
import classes from "./Modal.module.css";
import logo from "../../public/assets/iPhone Space Deep Purple Right.png";
import Image from "next/image";
import appstore1 from "../../public/assets/image 7.png";
import appstore2 from "../../public/assets/image 8.png";
import { RiCloseCircleFill } from "react-icons/ri";

const Backdrop = (props:any) => {
  return <div className={classes.backdrop} onClick={props.hide} />;
};

const ModalOverlay = (props:any) => {
  return (
    <div className={classes.modal}>
      <div>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" onClick={props.hide}/>
        </div>

        <h2 className=" text-green text-[55px] font-extrabold leading-[69px] max-md:text-[40px] max-md:leading-[50px]">
          Shop for groceries now and pay later with our app!{" "}
        </h2>

        <p className=" text-green mt-4">
          Install it today and enjoy the convenience of buying your favorite
          groceries without having to pay the full amount upfront. Safe, easy,
          and hassle-free.
        </p>

        <div className="flex gap-[12px] mt-[30px]">
          <Image src={appstore1} alt="appstore" className="cursor-pointer" />
          <Image src={appstore2} alt="googleplay" className="cursor-pointer" />
        </div> 
      </div>

    </div>
  );
};

const Modal = (props :any) => {
  return (
    <>
      <Backdrop hide={props.hide} />
      <ModalOverlay hide={props.hide}>{props.children}</ModalOverlay>
    </>
  );
};

export default Modal;
