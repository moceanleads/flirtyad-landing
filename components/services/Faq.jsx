const accordionItems = [
  {
    id: 1,
    title: "Traffic",
    content:
      "Here you will find most types of traffic. Starting from pops and push, going further to SEO and review. Just let us know what performs best for our product.",
  },
  {
    id: 2,
    title: "No Fraud",
    content:
      "Got fed up with fraud leads? We too! Thats why we launched inner fraud detect system, which allows to keep the quality on top.",
  },
  {
    id: 3,
    title: "Verticals",
    content:
      "We love to keep an eye on world trends, that’s why we develop various verticals. Dating, cams, sweepstakes, crypto, forex, software - we deal with all of them.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-two md-mt-60" id="accordionOne">
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
              {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
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

export default Faq;
