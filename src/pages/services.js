import React, { useState } from "react";
import "../styles/services.css";
import service1 from "../assets/service-1.png";
import service2 from "../assets/service-2.png";
import service3 from "../assets/service-3.png";
import service4 from "../assets/service-4.png";
import ContactForm from "./contactform";

const servicesCard = [
  {
    id: 1,
    img: service1,
    title: "Architectural design",
    description:
      "Our architectural designs blend innovation with functionality, creating spaces that are visually striking, structurally sound, and crafted for lasting impact.",
    buttonText: "Get in touch",
  },
  {
    id: 2,
    img: service2,
    title: "Interior design",
    description:
      "Our interior designs transform spaces into personalised environments that balance aesthetics, comfort, and functionality, bringing beauty and purpose into every detail.",
    buttonText: "Get in touch",
  },
  {
    id: 3,
    img: service3,
    title: "Electrical design & material consultation",
    description:
      " We offer detailed electrical layout designs, ensuring safety and efficiency. Additionally, our architects provide expert guidance on selecting high-quality materials that align with your design vision and budget.",
    buttonText: "Get in touch",
  },
  {
    id: 4,
    img: service4,
    title: "MEP (mechanical, electrical & plumbing) planning",
    description:
      "Comprehensive planning ensures the seamless integration of essential systems, optimizing functionality and efficiency for your space. Our team focuses on creating sustainable and cost-effective solutions tailored to your project.",
    buttonText: "Get in touch",
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="services_container">
        <section className="service_section">
          <div className="service-content">
            <h1>Our expertise, your dream spaces realised</h1>
            <p>
              Explore our tailored architectural solutions designed to bring
              your vision to life with precision, creativity, and functionality.
            </p>
          </div>
          <div className="service-description">
            {servicesCard?.map((item) => (
              <div className="s-contant" key={item?.id}>
                <div className="service-image">
                  <img src={item?.img} alt="service-1"></img>
                </div>
                <div className="service-describe">
                  <h1>{item?.title}</h1>
                  <p>{item?.description}</p>
                </div>
                <div className="s-button">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="service-button"
                  >
                    {item?.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Services;
