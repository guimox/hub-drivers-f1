import React from "react";
import { FooterStyled } from "./FooterStyles";
import { ReactComponent as GitHubSVG } from "../../media/github.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <a href="https://github.com/gxlpes/hub-drivers-f1" target="blank">
        <GitHubSVG />
      </a>
      <p>Made by Guilherme Lopes</p>
    </FooterStyled>
  );
};

export default Footer;
