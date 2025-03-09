import React from "react";

const Footer = () => {
  return (
    <section className="container py-12">
      <div className="flex justify-center items-center gap-4">
        <img
          className="w-12 h-12"
          src="/public/images/grammarly-logo.svg"
          alt=""
        />
        <div className="flex justify-center items-center gap-4">
          <a href="#">
            <i class="ri-facebook-fill"></i>
          </a>
          <a href="#">
            <i class="ri-linkedin-fill"></i>{" "}
          </a>

          <a href="#">
            <i class="ri-google-play-fill"></i>
          </a>
          <a href="#">
            <i class="ri-apple-fill"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>
    </section>
  );
};

export default Footer;
