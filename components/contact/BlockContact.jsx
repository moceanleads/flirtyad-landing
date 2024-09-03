import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    {
      icon: "/images/icon/icon_148.svg",
      title: "Contact Info",
      content: "Email",
      link: "mailto:info@smagency.info",
      delay: "200",
      content1: "Skype",
      link1: "skype:live:.cid.4e388b8cb28e8140",
      content2: "Telegram",
      link2: "https://telegram.me/oksana_saint",
    },
    {
      icon: "/images/icon/icon_145.svg",
      title: "FlirtyAd",
      content: "Back to homepage",
      link: "https://smagency.info",
      delay: "300",
    },
  ];

  return (
    <>
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content} <br />
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("mailto:") ? "call" : "webaddress"
                  }
                >
                  {block.link.replace("mailto:", "").replace("https://", "www.")}
                </a>
              )}
              {block.content1 && (<><br/>{block.content1} <br/></>)}
              {block.link1 && (
                <a
                  href={block.link1}
                  className={
                    block.link1.includes("skype:") ? "call" : "webaddress"
                  }
                >
                  {block.link1.replace("skype:", "")}
                </a>
              )}
              {block.content2 && (<><br/>{block.content2} <br/></>)}
              {block.link1 && (
                <a
                  href={block.link2}
                  className={
                    block.link2.includes("telegram") ? "call" : "webaddress"
                  }
                >
                  {block.link2.replace("telegram:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlockContact;
