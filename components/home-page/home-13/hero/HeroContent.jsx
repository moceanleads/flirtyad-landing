import Link from "next/link";

const HeroContent = () => {
  return (
    <>
      <h1 className="hero-heading fw-normal text-white font-recoleta">
        FlirtyAd Agency
      </h1>
      <p className="sub-text mt-20 mb-45 lg-mb-30">
        is a fast-growing network that provides plenty of profitable opportunities at almost all verticals for both sides – affiliates and advertisers. Enjoy our best technologies of monetization
        <span className="text-white"> 100% </span> of your traffic in any convenient way: direct CPA offers or Smartlink technology
      </p>
      <div className="d-lg-flex align-items-center">
        <Link
          href="/signup"
          className="demo-btn fw-500 tran3s d-inline-flex align-items-center mb-25 me-4"
        >
          <span>Sign up</span>
        </Link>
        <div className="mb-25 text-white signIn-btn">
          Already member of FlirtyAd? <a href="https://affiliates.smagency.info/v2/sign/in">Sign in</a>
        </div>
      </div>
      <h2 className="fw-normal text-white mt-60 mb-5 lg-mt-40"></h2>
      <p className="fs-18 opacity-50 text-white">
      </p>
    </>
  );
};

export default HeroContent;
