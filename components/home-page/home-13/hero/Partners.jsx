import React from "react";

const Partners = () => {
  const partners = [
    { name: "Advidi", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "HOIagency", font: "font-recoleta" },
    { name: "", font: "" },
    { name: "Rebll", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "AdsEmpire", font: "font-recoleta" },
    { name: "", font: "" },
    { name: "CPAmatica", font: "" },
    { name: "", font: "font-recoleta" },
    { name: "DAOleads", font: "font-recoleta" },
  ];

  return (
    <div className="d-xl-flex align-items-center">
      <h3 className="title tx-dark d-flex justify-content-center align-items-center m0 lg-pb-30">
        <span className="fw-bold">50+</span>
        <span className="font-recoleta">Trusted Partners</span>
        <span className="ms-4 d-none d-sm-inline-block">
          <img
            src="/images/shape/shape_119.svg"
            alt="img"
            className="lazy-img"
          />
        </span>
      </h3>

      <div className="logo-wrapper fw-500 tx-dark d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between">
        {partners.map((partner, index) => (
          <React.Fragment key={index}>
            {partner.name && <div className="br-name">{partner.name}</div>}
            {!partner.name && <div className="br-name">.</div>}
          </React.Fragment>
        ))}
      </div>
      {/* /.logo-wrapper */}
    </div>
  );
};

export default Partners;
