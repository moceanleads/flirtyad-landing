import Link from "next/link";

const Feature = () => {
  const items = [
    "We use the potential of your business at a full capacity.",
    "We help our affiliates to find gainful variants, for you can get more money on your traffic.",
    "We help our advertisers to find indispensable special audience and use post-install events profitably.",
    "FlirtyAd finds millions of potential buyers who search for advertising material they need. We use every convenient opportunity for you can get a good result.",
    "For us not only targeted traffic is necessary, but the post-install events are also of interest."
  ];

  return (
    <div id="affiliates" className="fancy-feature-thirty position-relative mt-190 pb-140 lg-mt-100 lg-pb-120 md-p0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ms-auto">
            <div
              className="block-style-four ps-xxl-5 ms-xxl-4"
              data-aos="fade-left"
            >
              <div className="title-style-ten">
                <div className="sc-title">AFFILIATES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Why publishers should chose{" "}
                  <span className="position-relative">
                    US.{" "}
                    <img src="/images/shape/shape_122.svg" alt="shape" />
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
              <p className="fs-20 pt-30 pb-30 lg-pb-10 md-pt-10">
                Our Network of over 1000 Affiliates has an amazing traffic reach so as to generate a high volume of new Users for our 300+ Advertisers.
              </p>
              <ul className="style-none list-item">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="btn-eighteen position-relative d-inline-block tx-dark mt-35 lg-mt-20">
                Ready to proceed?{" "}
                <Link href="/signup" className="fw-500 tran3s">
                  Sign up <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>{" "}
            {/* /.block-style-four */}
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="illustration-holder mb-200" data-aos="fade-right">
        <img
          src="/images/media/img_48.png"
          alt="media"
          className="lazy-img main-img"
        />
        <img
          src="/images/shape/shape_123.svg"
          alt="media"
          className="lazy-img shapes shape-one"
        />
      </div>
    </div>
  );
};

export default Feature;
