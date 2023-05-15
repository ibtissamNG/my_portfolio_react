import { useState } from "react";
import contactImg from "../assets/images/contact.png";
import { Fade } from "react-awesome-reveal";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
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
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-5 w-full"
        >
          <input
            type="text"
            value={formDetails.firstName}
            placeholder="First Name"
            onChange={(e) => onFormUpdate("firstName", e.target.value)}
          />

          <input
            type="text"
            value={formDetails.lasttName}
            placeholder="Last Name"
            onChange={(e) => onFormUpdate("lastName", e.target.value)}
          />

          <input
            type="email"
            value={formDetails.email}
            placeholder="Email Address"
            onChange={(e) => onFormUpdate("email", e.target.value)}
          />

          <textarea
            divs={10}
            value={formDetails.message}
            placeholder="Message"
            onChange={(e) => onFormUpdate("message", e.target.value)}
          ></textarea>

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
              <p
                className={`tracking-wide`}
              >
                {status.message}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
