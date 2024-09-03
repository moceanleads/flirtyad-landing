import Link from "next/link";
import Faq from "../../../components/services/Faq";

const FeaturesBlock = () => {
  return (
    <>
      <div className="col-lg-5 col-md-10">
        <div className="block-style-six pe-xxl-5" data-aos="fade-right">
          <div className="title-style-ten">
            <div className="sc-title">WHY CHOOSE US</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Benefits for {" "}
              <span className="position-relative">
                Advertisers <img src="/images/shape/shape_122.svg" alt="" />
              </span>
              !
            </h2>
          </div>
          {/* /.title-style-ten */}
          <div
            className="block-style-four ps-xxl-12 ms-xxl-12"
            data-aos="fade-right"
          >
            <Faq/>
          </div>
          {/* /.info */}
          <Link
            href="/signup"
            className="btn-nineteen d-inline-flex align-items-center tran3s"
          >
            Interested? <span className="fw-500 ps-2">Sign Up</span>
            <img src="/images/icon/icon_97.svg" alt="" className="ms-2" />
          </Link>
        </div>
        {/* /.block-style-six */}
      </div>
      {/* End .col */}

      <div className="col-lg-7 col-md-9 m-auto">
        <div className="illustration-holder md-mt-60 position-relative">
          <img
            src="/images/media/img_49.png"
            alt="media"
            className="lazy-img main-img ms-auto"
          />
          <div className="card-style d-flex flex-column justify-content-center align-items-center">
            <h4 className="m0">70b+</h4>
            <p className="m0 fs-18 tx-dark">Created revenue</p>
          </div>
          {/* /.card-style */}
        </div>
        {/* /.illustration-holder */}
      </div>
    </>
  );
};

export default FeaturesBlock;
