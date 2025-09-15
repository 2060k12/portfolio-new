import ContactCard from "./ContactCard";
import "./../..//css/contact_form.css";
import { useEffect, useState } from "react";
const ContactForm = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const sydneyTime = new Date().toLocaleTimeString("en-AU", {
        timeZone: "Australia/Sydney",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(sydneyTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="contact-form">
      <div className="form">
        <div className="left">
          <h1>Get in touch</h1>
          <div className="details">
            <ContactCard
              detail="hello@itspranish.dev"
              title="Email"
              onClick={() => {}}
            />
            <ContactCard
              title="Location"
              detail="Sydney, Australia"
              onClick={() => {}}
            />
            <ContactCard
              title="Current Time"
              detail={time}
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="right">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="suject" placeholder="Subject" />
          <textarea
            name="message"
            id="message-box"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
