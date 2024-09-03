import React from "react";

const faqData = [
  {
    id: 1,
    question: "Our Mission",
    answer:
      "At FlirtyAd, our mission is simple: to connect high-quality offers with a vast network of dedicated affiliates. We strive to provide unparalleled service and innovative solutions that help our partners achieve their marketing goals. Our commitment to excellence and integrity is the foundation of everything we do",
  },
  {
    id: 2,
    question: "What We Do",
    answer:
      "We specialize in CPA marketing, offering a wide range of services designed to maximize ROI for our clients. Our network connects advertisers with top-performing affiliates who are experts in driving conversions and generating revenue. Whether you're looking to scale your campaigns or find new revenue streams, we have the tools and expertise to help you succeed",
  },
  {
    id: 3,
    question: "Our Team",
    answer:
      "Our team of industry experts brings a wealth of experience and knowledge to the table. From skilled account managers to innovative tech developers, each member of our team is dedicated to helping you achieve your marketing objectives. We are passionate about what we do and committed to providing exceptional service",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-six" id="accordionOne">
      {faqData.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              {item.question}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              index === 0 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
