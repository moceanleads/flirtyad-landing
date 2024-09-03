import Link from "next/link";
import React from "react";
import Seo from "../../components/common/Seo";
import Footer2 from "../../components/footer/Footer2";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import NewsLetter from "../../components/footer/NewsLetter";
import Header3 from "../../components/header/Header3";
import CourseCategory from "../../components/home-page/home-3/CourseCategory";
import CourseFeatured from "../../components/home-page/home-3/CourseFeatured";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";
import Faq from "../../components/home-page/home-3/Faq";
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import FeatureBlock2 from "../../components/home-page/home-3/FeatureBlock2";
import Hero from "../../components/home-page/home-3/Hero";
import HowToStartBlock from "../../components/home-page/home-3/HowToStartBlock";
import SignUpBanner from "../../components/home-page/home-3/SignUpBanner";
import Testimonial from "../../components/home-page/home-3/Testimonial";

const education = () => {
  return (
    <>
      <Seo pageTitle="Education" />
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header3 />
      {/* <!-- 
        =============================================
        Theme Hero Banner
        ============================================== 
        --> */}
      <Hero />
      {/* <!--
        =====================================================
        Feature Section Thirty Nine
        =====================================================
        --> */}
      <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
        <div className="container">
          <div className="row gx-xxl-5">
            <FeatureBlock />
          </div>
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        />
      </div>

      {/*
    =====================================================
    Feature Section Forty One
    =====================================================
    */}
      <div className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6" data-aos="fade-right">
              <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                <h2 className="main-title fw-500 tx-dark m0">
                  About Us
                </h2>
              </div>
              {/* End title */}
              <Faq />
              {/* /.accordion-style-six */}
            </div>
            {/* End col-xl-5 */}

            <div
              className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
              data-aos="fade-left"
            >
              <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
                <div className="row">
                  <CourseFeatured />
                </div>
                <img
                  src="/images/shape/shape_152.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <img
                  src="/images/shape/shape_153.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
              {/* /.wrapper */}
            </div>
            {/* End col-xl-6 */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fortyOne */}

      {/* <!-- 
			=============================================
				Feature Section Forty Four
			============================================== 
			--> */}
      <FeatureBlock2 />

      {/* <!-- 
		=============================================
		Feature Section Forty Five
		============================================== 
		--> */}
      <SignUpBanner />

      {/*
		=====================================================
		Footer
		=====================================================
		*/}
      <div className="footer-style-eleven theme-basic-footer position-relative">
        <div className="bg-wrapper position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_transparent.png" alt="brand" />
                  </Link>
                </div>
              </div>
              {/* End .col */}

              <Footer2 />
              {/* End .col-xl-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
        <img
          src="/images/shape/shape_158.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div>
      {/* /.footer-style-eleven */}
    </>
  );
};

export default education;
