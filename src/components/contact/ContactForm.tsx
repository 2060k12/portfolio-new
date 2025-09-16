import ContactCard from "./ContactCard";
import "./../..//css/contact_form.css";

import { RiLinkedinBoxFill, RiMailFill, RiMapPin2Fill } from "@remixicon/react";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form">
        <div className="left">
          <h1>Get in touch</h1>
          <p>
            I’m always open to discussing new projects, collaborations, or just
            a friendly hello.
          </p>
          <div className="details">
            <ContactCard
              detail="hello@itspranish.dev"
              title="Email"
              icon={<RiMailFill color="white" size={40} />}
            />

            <ContactCard
              icon={<RiMapPin2Fill style={{ color: "white" }} size={40} />}
              title="Located"
              detail="Sydney, Australia"
            />

            <ContactCard
              icon={<RiLinkedinBoxFill color="white" size={40} />}
              title="Linkedin"
              detail="Pranish Pathak"
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
          <button>
            <span>Submit Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
