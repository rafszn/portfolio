import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Bounce, toast } from "react-toastify";

gsap.registerPlugin(useGSAP);

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          setLoading(false);
          toast.error(error.text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
      );
  };
  return (
    <div className="contact-section bg-[#1a1a1a]">
      <div className="wrapper">
        <div className="image-container">
          <div className="image-wrapper">
            <img src="/assets/r4.jpg" />
          </div>
        </div>

        <div className="text-container">
          <div className="wrapper">
            <p className="chat">Lets Chat!</p>
            <h1 className="title">Contact</h1>

            <p className="contact-me">
              Contact me now to discuss your next project.
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="user_email"
                autoComplete="off"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                placeholder="Tell me about your project"
                autoComplete="off"
                required
              />
              <div className="flex items-center justify-center">
                <button type="submit">
                  {" "}
                  <BsSend /> {loading ? "SENDING" : "SEND"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
