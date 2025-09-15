import React from "react";

interface Props {
  title: string;
  detail: string;
  onClick: () => void;
}
const ContactCard = ({ title, detail, onClick }: Props) => {
  return (
    <div className="contact-card">
      <div className="card-left">
        <img src="/android.svg" alt="" />
        <div className="detail">
          <h3>{title}</h3>
          <h4>{detail}</h4>
        </div>
      </div>

      <div className="card-right">
        <button onClick={onClick}>
          <i className="ri-arrow-right-up-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
