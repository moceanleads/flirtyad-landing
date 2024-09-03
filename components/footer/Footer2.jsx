const columns = [
  {
    title: "Support",
    links: [
      { label: "Contact Us", url: "/#contact-us" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "JOYATECH  INC. __\n   1040 Biscayne Blvd\n apt.1905\n Miami\n FL\n 33132", url: "https://maps.app.goo.gl/m9acy5PTaQwjpMZH9" },
    ],
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
