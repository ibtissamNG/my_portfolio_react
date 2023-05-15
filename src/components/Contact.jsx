import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import contactImg from "../assets/images/contact.png";
import { Fade } from "react-awesome-reveal";

function Contact() {
  const [buttonText, setButtonText] = useState("Send message");
  const [status, setStatus] = useState({});
  const form = useRef();

  /* EmailJs */
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const serviceID = "service_8bqkp5p";
    const templateID = "template_53krasc";
    const publicKey = "h125dZooxD7kHWDUl";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        setButtonText("Send");
        console.log(result.text);
        e.target.reset();
        if (result.status == 200) {
          setStatus({ succes: true, message: "Message sent successfully" });
        } else {
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
        setTimeout(() => setStatus({ message: "" }), 5000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="py-10 px-5 text-white">
      <Fade duration={2000} triggerOnce={true}>
        <div className="text-center my-8">
          <h3 className="text-4xl font-semibold text-gradient">
            Contact <span className="text-white">Me</span>
          </h3>
          <p className="text-gray-400 mt-2 text-lg">Let's get in touch</p>
        </div>
      </Fade>
      <div className="flex md:flex-row flex-col items-center gap-3 max-w-6xl bg-[#132d3e] md:px-4 p-6  rounded-lg mx-auto">
        {/* contact image */}
        <div className="lg:w-96 h-70 relative sm:w-10/12 w-11/12 max-w-sm contatcImg">
          <img src={contactImg} alt="contactImage" />
        </div>

        {/* contact form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col flex-1 gap-5 w-full"
        >
          <input type="text" placeholder="First Name" name="firstName" required/>

          <input type="text" placeholder="Last Name" name="lastName" required/>

          <input type="email" placeholder="Email Address" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required  />

          <textarea divs={10} placeholder="Message" name="message" required title="Please enter a valid email address"></textarea>

          <button
            type="submit"
            className="btn btn-primary md:w-52 w-full rounded-lg uppercase"
          >
            <span>{buttonText}</span>
          </button>

          {status.message && (
            <div
              className={`flex items-center text-sm mt-1 ${
                status.success === false ? "text-red-600" : "text-green-600"
              }`}
            >
              <span className="text-xl mr-2">
                <ion-icon name="information-circle-outline"></ion-icon>
              </span>
              <p className={`tracking-wide`}>{status.message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
