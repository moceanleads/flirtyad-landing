const Feedback = () => {
  const images = [
    {
      src: "/images/media/img_47_1.jpg",
      alt: "shape",
      className: "lazy-img shapes shape-four",
    },
    {
      src: "/images/shape/shape_120.svg",
      alt: "shape",
      className: "lazy-img shapes shape-five",
    },
    {
      src: "/images/shape/shape_121.svg",
      alt: "shape",
      className: "lazy-img shapes shape-six",
    },
  ];

  return (
    <div
      className="feedback-section-eight position-relative pt-100 pb-30 lg-pt-120 "
      data-aos="fade-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-9 m-auto">
            <div className="feedback_slider_eight">
              <div className="item">
                <div className="feedback-block-eight m-lg-3">
                  <p className="fs-32 font-recoleta tx-dark mt-60 mb-65 lg-mt-20 lg-mb-20">
                    If you choose to work with us, here is what you get:
                  </p>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    <b>Direct campaigns:</b>{' '}
                    Our company retains highly competitive rates by offering only direct ad campaigns
                  </h6>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    <b>Timely payments:</b>{' '}
                    We pay on time and are flexible with payment system
                  </h6>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    <b>Honest reports:</b>{' '}
                    No shaving of impressions or conversions. Fair revshare and full access to quality reports
                  </h6>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    <b>Direct traffic:</b>{' '}
                    Direct publishers are foundation of our network. `&quot;`No re-brokering`&quot;` is our creed
                  </h6>
                  <h6 className="fw-normal fs-20 d-inline-block fst-italic position-relative ps-4">
                    <b>Fraud prevention:</b>{' '}
                    We analyze and interpret the legitimacy of traffic, sharing anti-fraud reports with our partners.
                  </h6>
                </div>{' '}
                {/* /.feedback-block-eight */}
              </div>
            </div>{" "}
            {/* /.feedback_slider_eight */}
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={image.className}
        />
      ))}
    </div>
  );
};

export default Feedback;
