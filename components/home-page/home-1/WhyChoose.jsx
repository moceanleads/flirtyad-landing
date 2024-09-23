const accordionItems = [
  {
    id: 1,
    icon: "/images/icon/icon_108.svg",
    title: "Verticals",
    content:
      "We have best performing Dating, Nutra, and iGaming offers",
  },
  {
    id: 2,
    icon: "/images/icon/icon_110.svg",
    title: "Payment method",
    content:
      "Crypto | Wire | Paxum",
  },
  {
    id: 3,
    icon: "/images/icon/icon_109.svg",
    title: "Contact us",
    content:
      "Telegram: @oksana_FlirtyAd",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 1 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 2 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
