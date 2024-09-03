import Link from "next/link";

const FeatureBlock2 = () => {
  return (
    <div className="fancy-feature-fortyFour position-relative pt-130 lg-pt-70">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-md-6" data-aos="fade-right">
            <div className="title-style-one mb-30 mt-30">
              <h2 className="main-title fw-500 tx-dark m0">
                Why Choose Us?
              </h2>
            </div>
            <ul className="fs-20 tx-dark mb-50 md-mb-30">
              <li><b>Proven Track Record:</b> We have a history of successful campaigns and satisfied partners.</li>
              <li><b>Cutting-Edge Technology:</b> Our advanced tracking and analytics tools ensure you get the best
                insights and performance metrics
              </li>
              <li><b>Diverse Offerings:</b> We offer a wide variety of offers and verticals, catering to different
                niches and markets.
              </li>
            </ul>
            <Link href="/signup" className="btn-one fw-500">
              Join us
            </Link>
          </div>
          {/* End .col-xl-5 */}

          <div className="col-xl-6 col-md-6 ms-auto" data-aos="fade-left">
            <img
              src="/images/gallery/img-2.jpg"
              alt="media"
              className="lazy-img sm-mt-40"
            />
          </div>
          {/* End .col-xl-6 */}
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default FeatureBlock2;
