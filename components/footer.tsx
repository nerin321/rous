import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white/10 mt-10">
      <div className="w-4/5 py-24 mx-auto">
        <div className=" flex flex-wrap items-start justify-between pb-20">
          <div className="text-base font-light">
            <h3 className="mb-5 text-xl font-medium">Quick Links</h3>
            <p>Home</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>How It Works</p>
            <p>Contact Us</p>
          </div>
          <div className="text-base font-light">
            <h3 className="mb-5 text-xl font-medium">Resources</h3>
            <p>Blog</p>
            <p>FAQs</p>
            <p>Help Center</p>
            <p>Case Studies</p>
          </div>
          <div className="text-base font-light">
            <h3 className="mb-5 text-xl font-medium">Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Press Releases</p>
          </div>
          <div className="text-base font-light">
            <h3 className="mb-5 text-xl font-medium">Connect</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>YouTube</p>
          </div>
          <div className="text-base font-light">
            <h3 className="mb-5 text-xl font-medium">Support</h3>
            <p>Customer Support</p>
            <p>Submit a Ticket</p>
            <p>Community Forum</p>
            <p>Feedback</p>
          </div>
        </div>
        <div className=" border-white/15 mb:gap-0 mb:flex-row flex flex-col items-center justify-between gap-5 pt-16 border-t-2">
          <h2 className="text-4xl">Rous</h2>
          <p className="text-white/60 text-xl">
            &copy; 2024 Lift Media. All Rights Reserved.{" "}
          </p>
          <div className="flex items-center gap-5">
            <div className="size-14 flex items-center justify-center border rounded-full">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} className="size-6" />
              </a>
            </div>
            <div className="size-14 flex items-center justify-center border rounded-full">
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} className="size-6" />
              </a>
            </div>
            <div className="size-14 flex items-center justify-center border rounded-full">
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
