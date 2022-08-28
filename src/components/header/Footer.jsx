import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialPinterest,
} from "react-icons/ti";

import { GiCampingTent } from "react-icons/gi";
const Footer = () => {
  return (
    <footer className="bg-primary text-white flex flex-col justify-center items-center gap-5 p-5">
      <div className="flex justify-center items-center text-2xl font-semibold">
        <GiCampingTent size={48} />
        <h1>Tour</h1>
      </div>
      <ul className="flex justify-center gap-10">
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
        <li>Security</li>
        <li>Sitemap</li>
      </ul>
      <div className="flex justify-between items-center mx-auto w-full">
        <div>English</div>
        <div className="flex  gap-10 ml-32">
          <TiSocialTwitter size={32} />
          <TiSocialFacebookCircular size={32} />
          <TiSocialLinkedin size={32} />
          <TiSocialInstagram size={32} />
          <TiSocialPinterest size={32} />
        </div>
        <div>@2022 Tour. All right reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
