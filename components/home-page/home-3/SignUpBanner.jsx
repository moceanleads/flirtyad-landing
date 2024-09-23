import Link from "next/link";

const SignUpBanner = () => {
  const images = [
    {
      src: "/images/gallery/img-3.jpg",
      alt: "media",
      className: "lazy-img img-one mt-30 mb-30 lg-mt-20 lg-mb-20",
    },
    {
      src: "/images/media/img-5.jpg",
      alt: "media",
      className: "lazy-img img-two mt-30 mb-30 lg-mt-20 lg-mb-20",
    },
    {
      src: "/images/media/img-4.jpg",
      alt: "media",
      className: "lazy-img img-three mt-30 mb-30 lg-mt-20 lg-mb-20",
    },
  ];

  return (
    <div id="contact-us" className="fancy-feature-fortyFive position-relative zn2 bg-black pt-50 pb-30 mt-150 lg-mt-100">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 col-md-6 ms-auto order-md-last"
            data-aos="fade-left"
          >
            <div className="title-style-one mb-45 lg-mb-30">
              <h2 className="main-title fw-500 text-white m0">Contact Us</h2>
            </div>
            <p className="fs-20 text-white mb-55 lg-mb-30">
              Telegram: <a href={"https://telegram.me/oksana_FlirtyAd"}>@oksana_FlirtyAd</a>
            </p>
            <Link href="/signup" className="btn-twentyFive fw-500 tran3s">
              Sign up
            </Link>
          </div>
          {/* End .col-lg-5 */}

          <div
            className="col-lg-6 col-md-6 order-md-first"
            data-aos="fade-right"
          >
            <div className="img-holder zn2 position-relative sm-mt-40">
              <div className="row">
                <div className="col-xl-10 col-lg-11 m-auto">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <img
                        src="/images/gallery/img-3.jpg"
                        alt="media"
                        className="lazy-img img-one mt-30 mb-30 lg-mt-20 lg-mb-20"
                      />
                      <img
                        src="/images/gallery/img-5.jpg"
                        alt="media"
                        className="lazy-img img-two mt-30 mb-30 lg-mt-20 lg-mb-20"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/images/gallery/img-4.jpg"
                        alt="media"
                        className="lazy-img img-three mt-30 mb-30 lg-mt-20 lg-mb-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="/images/shape/shape_155.svg"
                alt="shapes"
                className="lazy-img shapes shape-one"
              />
            </div>{" "}
            {/* /.img-holder */}
          </div>
        </div>
      </div>
      {/* /.container */}

      <img
        src="/images/shape/shape_156.svg"
        alt="shapes"
        className="lazy-img shapes shape-two"
      />
      <img
        src="/images/shape/shape_157.svg"
        alt="shapes"
        className="lazy-img shapes shape-three"
      />
    </div>
  );
};

export default SignUpBanner;
