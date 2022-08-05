import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <h4>Lorem Ipsum</h4>
      <p className="py-3 mb-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
        Illo nostrum reiciendis repellendus sunt.
      </p>
      <ul className="justify-content-center d-flex list-unstyled mb-0 footer_icon">
        <li>
          <IoLogoWhatsapp style={{ color: "#49c858" }} />
        </li>
        <li>
          <SiGmail style={{ color: "#f4463a" }} />
        </li>
        <li>
          <FaFacebookF style={{ color: "#07acec" }} />
        </li>
        <li>
          <FaTwitter style={{ color: "red" }} />
        </li>
        <li>
          <FaLinkedinIn style={{ color: "#07acec;"}} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
