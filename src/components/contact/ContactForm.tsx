import ContactCard from "./ContactCard";
import "./../..//css/contact_form.css";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="form">
        <div className="left">
          <h1>Get in touch</h1>
          <div className="details">
            <ContactCard
              title="hello@itspranish.dev"
              detail="Email"
              onClick={() => {}}
            />
            <ContactCard
              title="Location"
              detail="Sydney, Australia"
              onClick={() => {}}
            />
            <ContactCard
              title="Current Time"
              detail="5:00 PM"
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
