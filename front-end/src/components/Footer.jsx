import React from "react";
import "./../assets/styles/components/Footer.css";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import images from "../assets/images";

function Footer() {
  return (
    <div className="footer section__padding">
      <div className="footer-links">
        <div className="footer-links_logo">
          <div>
            <img src={images.logo} width={100} />
          </div>
          <div>
            <h3><a href="https://c4ei.net" target="_blank" rel="noreferrer">AAH Info</a></h3>
          </div>
        </div>
        <div className="footer-links_div">
          <h4>AAH NFT</h4>
          <p><a href="https://exp.c4ex.net" target="_blank" rel="noreferrer">Explore</a></p>
          <p>How it Works</p>
          <p>Roadmap</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-links_div">
          <h4>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-text">
          <p> © {new Date().getFullYear()} AAH NFT, Inc. All Rights Reserved</p>
        </div>
        <div className="footer-copyright-icons">
          <a href="https://github.com/c4ei" target="_blank" rel="noreferrer">
            <AiOutlineGithub size={25} color="white" className="footer-icon" />
          </a>
          <a href="https://twitter.com/c4ei_net/" target="_blank" rel="noreferrer">
            <AiOutlineTwitter size={25} color="white" className="footer-icon" />
          </a>
          <a href="https://discord.com/invite/xaScCCFV" target="_blank" rel="noreferrer">
            <RiDiscordFill size={25} color="white" className="footer-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
