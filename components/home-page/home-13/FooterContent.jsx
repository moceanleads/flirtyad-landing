import Link from "next/link";

const links = [
  {
    title: "Links",
    links: [
      { title: "Home", url: "/" },
      { title: "Affiliates", url: "/#affiliates" },
      { title: "Advertisers", url: "/#advertisers" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Contact Us", url: "/#contact-us" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: "JOYATECH  INC. __\n   1040 Biscayne Blvd\n apt.1905\n Miami\n FL\n 33132", url: "https://maps.app.goo.gl/m9acy5PTaQwjpMZH9" },
    ]
  },
];

const FooterContent = () => {
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="col-lg-2 col-sm-4 mb-30">
          <h5 className="footer-title fw-normal">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
