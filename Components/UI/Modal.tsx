import React from "react";
import classes from "./Modal.module.css";
import logo from "../../public/assets/iPhone Space Deep Purple Right.png";
import Image from "next/image";
import appstore1 from "../../public/assets/image 7.png";
import appstore2 from "../../public/assets/image 8.png";
import { RiCloseCircleFill } from "react-icons/ri";
import GetStarModal from "./GetStartedModal";
import PageModal from "./PageModal";
import TrustFundModal from "./TrustFundModal";
import Requeststatementmodal from "./Requeststatementmodal";
import SubscriptionConfirmationModal from "./SubscriptionConfirmationModal";
import SubscriptionsuccesfulModal from "./SubscriptionsuccesfulModal";
import ReferafriendModal from "./ReferafriendModal";
import NewtransactionModal from "./NewtransactionModal";

const Backdrop = (props:any) => {
  
  return <div className={classes.backdrop} onClick={props.hide} />;


};



const ModalOverlay = (props:any) => {
  return (
    <div className={classes.modal}>
      {/* <GetStarModal /> */}
      {/* <PageModal /> */}
      {/* <TrustFundModal /> */}
      {/* <Requeststatementmodal /> */}
      {/* <SubscriptionConfirmationModal /> */}
      {/* <SubscriptionsuccesfulModal /> */}
      {/* <ReferafriendModal /> */}
      <NewtransactionModal />
      {/* <div className={classes.content}>{props.children}</div> */}
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
