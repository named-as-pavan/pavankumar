import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 borede-t border-black-300 flex justify-evenly items-center flex-wrap gap-5 relative">
      <div className="flex text-white-500 gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/named-as-pavan"
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="" rel="noreferrer" target="_blank">
          <div className="social-icon">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/named_as_pavan" target="_blank" rel="noreferrer">
          <div className="social-icon">
            <img
              src="/assets/instagram.svg"
              alt="instagram"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white-500">&copy; 2024 Pavan</p>
    </section>
  );
};

export default Footer;
