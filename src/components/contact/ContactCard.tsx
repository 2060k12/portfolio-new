import type { ReactNode } from "react";
interface Props {
  title: string;
  detail: string;
  icon: ReactNode;
  onClick?: () => void;
}
const ContactCard = ({ title, detail, icon, onClick }: Props) => {
  return (
    <div className="contact-card" onClick={onClick}>
      <div className="card-right">{icon}</div>
      <div className="card-left">
        <div className="detail">
          <h3>{title}</h3>
          <h4>{detail}</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
