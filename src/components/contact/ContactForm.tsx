import ContactCard from "./ContactCard";
import "./../..//css/contact_form.css";
import { useForm, ValidationError } from "@formspree/react";
import { RiLinkedinBoxFill, RiMailFill, RiMapPin2Fill } from "@remixicon/react";
import { useState } from "react";
const ContactForm = () => {
  const handleClick = () => {
    window.location.href = `mailto:hello@itspranish.dev?subject=Hello&body=I wanted to reach out!`;
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("mdklrobe");

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
              onClick={handleClick}
              icon={<RiMailFill color="white" size={40} />}
            />

            <ContactCard
              icon={<RiMapPin2Fill style={{ color: "white" }} size={40} />}
              title="Located"
              detail="Sydney, Australia"
              onClick={() =>
                window.open("https://www.google.com/maps?q=Sydney", "_blank")
              }
            />

            <ContactCard
              icon={<RiLinkedinBoxFill color="white" size={40} />}
              title="Linkedin"
              detail="Pranish Pathak"
              onClick={() =>
                window.open("https://www.linkedin.com/in/pranishpathak/")
              }
            />
          </div>
        </div>
        {state.succeeded ? (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              fontSize: "40px",
              padding: "50px",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(23, 23, 23, 1)",
              borderRadius: "50px",
            }}
          >
            Message delivered! I’ll get back to you before your coffee gets
            cold.
          </div>
        ) : (
          <form className="right" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />

            <textarea
              name="message"
              id="message-box"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={
                !name || !subject || !message || !email || state.submitting
              }
            >
              <span>{state.submitting ? "Sending ..." : "Submit Now"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
