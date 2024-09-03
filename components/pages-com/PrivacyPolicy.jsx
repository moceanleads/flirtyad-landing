const FaqAccordion = ({appName, date, supportEmail}) => {
  const accordionItems = [
    {
      id: "faq-1",
      question: "Privacy Policy",
      answer: `${appName} is a free app. This SERVICE is provided at no\n` +
        "            cost and is intended for use as is. This page is used to inform\n" +
        "            visitors regarding our policies with the collection, use, and\n" +
        "            disclosure of Personal Information if anyone decided to use our\n" +
        "            Service. If you choose to use our Service, then you agree to the\n" +
        "            collection and use of information in relation to this policy. The\n" +
        "            Personal Information that we collect is used for providing and\n" +
        "            improving the Service. We will not use or share your information\n" +
        "            with anyone except as described in this Privacy Policy. The terms\n" +
        "            used in this Privacy Policy have the same meanings as in our Terms\n" +
        `            and Conditions, which are accessible at ${appName} unless\n` +
        "            otherwise defined in this Privacy Policy.\n" +
        "              Information Collection and Use\n" +
        "            For a better experience, while using our Service, we may require you\n" +
        "            to provide us with certain personally identifiable information. The\n" +
        "            information that we request will be retained by us and used as\n" +
        "            described in this privacy policy. The app does use third-party\n" +
        "            services that may collect information used to identify you.\n" +
        "       \t\tLog Data\n" +
        "            We want to inform you that whenever you use our Service, in a case\n" +
        "            of an error in the app we collect data and information (through\n" +
        "            third-party products) on your phone called Log Data. This Log Data\n" +
        "            may include information such as your device Internet Protocol (“IP”)\n" +
        "            address, device name, operating system version, the configuration of\n" +
        "            the app when utilizing our Service, the time and date of your use of\n" +
        "            the Service, and other statistics.\n" +
        "Cookies\n" +
        "            Cookies are files with a small amount of data that are commonly used\n" +
        "            as anonymous unique identifiers. These are sent to your browser from\n" +
        "            the websites that you visit and are stored on your device's internal\n" +
        "            memory. This Service does not use these “cookies” explicitly.\n" +
        "            However, the app may use third-party code and libraries that use\n" +
        "            “cookies” to collect information and improve their services. You\n" +
        "            have the option to either accept or refuse these cookies and know\n" +
        "            when a cookie is being sent to your device. If you choose to refuse\n" +
        "            our cookies, you may not be able to use some portions of this\n" +
        "            Service.\n" +
        "Service Providers\n" +
        "\n" +
        "            We may employ third-party companies and individuals due to the\n" +
        "            following reasons: To facilitate our Service; To provide the Service\n" +
        "            on our behalf; To perform Service-related services; or To assist us\n" +
        "            in analyzing how our Service is used. We want to inform users of\n" +
        "            this Service that these third parties have access to their Personal\n" +
        "            Information. The reason is to perform the tasks assigned to them on\n" +
        "            our behalf. However, they are obligated not to disclose or use the\n" +
        "            information for any other purpose.\n" +
        "Security\n" +
        "\n" +
        "            We value your trust in providing us your Personal Information, thus\n" +
        "            we are striving to use commercially acceptable means of protecting\n" +
        "            it. But remember that no method of transmission over the internet,\n" +
        "            or method of electronic storage is 100% secure and reliable, and we\n" +
        "            cannot guarantee its absolute security.\n" +
        "Links to Other Sites\n" +
        "\n" +
        "            This Service may contain links to other sites. If you click on a\n" +
        "            third-party link, you will be directed to that site. Note that these\n" +
        "            external sites are not operated by us. Therefore, we strongly advise\n" +
        "            you to review the Privacy Policy of these websites. We have no\n" +
        "            control over and assume no responsibility for the content, privacy\n" +
        "            policies, or practices of any third-party sites or services.\n" +
        "Children’s Privacy\n" +
        "\n" +
        "            These Services do not address anyone under the age of 13. We do not\n" +
        "            knowingly collect personally identifiable information from children\n" +
        "            under 13 years of age. In the case we discover that a child under 13\n" +
        "            has provided us with personal information, we immediately delete\n" +
        "            this from our servers. If you are a parent or guardian and you are\n" +
        "            aware that your child has provided us with personal information,\n" +
        "            please contact us so that we will be able to do the necessary\n" +
        "            actions.\n" +
        "\n" +
        "              Changes to This Privacy Policy\n" +
        "\n" +
        "            We may update our Privacy Policy from time to time. Thus, you are\n" +
        "            advised to review this page periodically for any changes. We will\n" +
        "            notify you of any changes by posting the new Privacy Policy on this\n" +
        `            page. This policy is effective as of ${date} \n` +
        "Contact us\n" +
        "\n" +
        "            If you have any questions about these Terms and Conditions, You can\n" +
        `            contact us: ${supportEmail}\n`,
    }
  ];

  return (
    <div>
      <p>This Privacy Policy outlines how {appName}, developed by JAMBLACK INC, collects, uses, and shares information when you use our mobile application ("App").</p>
      <p>By using the {appName} App, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with the terms of this policy, please do not use the App.</p>
      <h2>Information Collection and Use</h2>
      <p>The {appName} may collect certain information automatically, including but not limited to:</p>
      <ul>
        <li>Device Information</li>
        <li>Usage Information</li>
        <li>Advertising id</li>
      </ul>
      <h2>Information Sharing</h2>
      <p>We may share your information in the following circumstances:</p>
      <ul>
        <li>With Third-Party Service Providers</li>
        <li>With Business Partners</li>
        <li>For Legal Purposes</li>
      </ul>
      <h2>Data Retention</h2>
      <p>We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
      <h2>Security</h2>
      <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</p>
      <h2>Children's Privacy</h2>
      <p>The {appName} App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take appropriate action.</p>
      <h2>List of dependencies</h2>
      <p>The {appName} App uses the following dependencies:</p>
      <ul>
        <li>axios</li>
        <li>expo</li>
        <li>expo-constants</li>
        <li>expo-dev-client</li>
        <li>expo-device</li>
        <li>expo-font</li>
        <li>expo-linking</li>
        <li>expo-localization</li>
        <li>expo-notifications</li>
        <li>expo-splash-screen</li>
        <li>expo-status-bar</li>
        <li>expo-tracking-transparency</li>
        <li>i18n-js</li>
        <li>js-base64</li>
        <li>react</li>
        <li>react-native</li>
        <li>react-native-eject</li>
        <li>react-native-fbsdk-next</li>
        <li>react-native-get-random-values</li>
        <li>react-native-reanimated</li>
        <li>react-native-safe-area-context</li>
        <li>react-native-screens</li>
        <li>react-native-svg</li>
        {/*<li>react-native-webview</li>*/}
        <li>uuid</li>
      </ul>
      <h2>Changes to this Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly. We encourage you to review this Privacy Policy periodically for any changes.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at {supportEmail}.</p>
      <p><em>Last Updated: {date}</em></p>
    </div>);
    {/*<div className="accordion accordion-style-four" id="accordionOne">*/}
    {/*  {accordionItems.map((item, index) => (*/}
    {/*    <div className="accordion-item" key={item.id}>*/}
    {/*      <div className="accordion-header" id={`heading-${index}`}>*/}
    {/*        <button*/}
    {/*          className={`accordion-button ${index === 2 ? "" : "collapsed"}`}*/}
    {/*          type="button"*/}
    {/*          data-bs-toggle="collapse"*/}
    {/*          data-bs-target={`#collapse-${index}`}*/}
    {/*          aria-expanded={index === 2 ? "true" : "false"}*/}
    {/*          aria-controls={`collapse-${index}`}*/}
    {/*        >*/}
    {/*          {item.question}*/}
    {/*        </button>*/}
    {/*      </div>*/}
    {/*      <div*/}
    {/*        id={`collapse-${index}`}*/}
    {/*        className={`accordion-collapse collapse ${*/}
    {/*          index === 2 ? "show" : ""*/}
    {/*        }`}*/}
    {/*        aria-labelledby={`heading-${index}`}*/}
    {/*        data-bs-parent="#accordionOne"*/}
    {/*      >*/}
    {/*        <div className="accordion-body">*/}
    {/*          <p>{item.answer}</p>*/}
    {/*        </div>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  ))}*/}
    {/*</div>*/}
};

export default FaqAccordion;
