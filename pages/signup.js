import Link from "next/link";
import Seo from "../components/common/Seo";
import SignupForm from "../components/common/SignupForm";
import WhyChoose from "../components/home-page/home-1/WhyChoose";

const SignUp = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Seo pageTitle="Sign Up" />
      {/* 
        =============================================
        Theme Main Menu
        ============================================== 
        */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_transparent.png" alt="" width={100} />
              </Link>
            </div>
            <Link href="/" className="go-back-btn fw-500 tran3s">
              Go to home
            </Link>
          </div>
        </div>
        {/* /.inner-content */}
      </header>
      {/* /.theme-main-menu */}

      {/* 
        =============================================
        User Data Page
        ============================================== 
        */}
      <div className="user-data-section d-flex justify-content-center flex-column position-relative">
        <div className="d-flex flex-lg-row flex-column gap-5 gap-lg-0 mt-50 mt-lg-0">
          <div className="form-wrapper mx-auto position-relative">
            <div className="text-center">
              <h2 className="tx-dark mb-30 lg-mb-10">Registration</h2>
              <p className="fs-20 tx-dark">
                Have an account? <Link href="/login">Login Here</Link>
              </p>
            </div>
            <SignupForm />
          </div>
          <div className="flex-grow-1 mx-5">
            <div className="title-style-one mb-40">
              <div className="sc-title text-uppercase">
                Media Buying agency
              </div>
              <h2 className="main-title fw-500 tx-dark">FlirtyAd</h2>
              <p className="fs-20">We are experts in affiliation, traffic monetisation and have some of the strongest relationships with the right people in our industry</p>
            </div>
            <WhyChoose/>
            <p></p>
          </div>
        </div>
        {/* End form-wrapper */}

        <p className="mx-auto pt-50">Copyright @{currentYear} JOYATECH INC</p>
        <img
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one wow fadeInRight"
        />
        <img
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two wow fadeInLeft"
        />

      </div>
      {/* /.fancy-feature-fiftyOne */}
    </>
  );
};

export default SignUp;
