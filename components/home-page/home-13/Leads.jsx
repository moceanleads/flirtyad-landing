const leadItems = [
  { icon: "/images/icon/icon_94.svg", header: "SIGN UP AT OUR PLATFORM", text: "Fill as much info as you can. This would speed up work process and our integration"},
  { icon: "/images/icon/icon_95.svg", header: "CONNECT WITH ADVERTISER BRAND", text: "Our manager will help you to choose an offer based on your type of traffic, geo, and vertical"},
  { icon: "/images/icon/icon_96.svg", header: "PROMOTE TO YOUR AUDIENCE", text: "Grab your tracking URL, then set it up on your side, and you are good to start pushing traffic"}
];




const Leads = () => {
  return (
    <>
      {leadItems.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div
            className="card-style-fourteen text-center mt-30"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="icon">
              <img
                src={item.icon}
                alt="icon shape"
                className="lazy-img m-auto"
              />
            </div>
            <div>
              <p className="text-uppercase fs-18 mt-60 lg-mt-30">{item.header}</p>
              <p className="fs-12 mt-60 lg-mt-30">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leads;
