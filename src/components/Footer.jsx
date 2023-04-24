import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footer_logo from "../assets/image/png/footer_logo.png";
import youtube from "../assets/image/png/youtube.png";
import twitter from "../assets/image/png/twitter.png";
import discord from "../assets/image/png/discard.png";
import fram from "../assets/image/png/Frame.png";
import git_hub from "../assets/image/png/git hub.png";
import telegrame from "../assets/image/png/telegram.png";
import en from "../assets/image/png/en.png";
const Footer = () => {
  return (
    <>
      <footer className=" footer_setup">
        <Container>
          <Row className=" pt-5 justify-content-between">
            <Col lg="6" className="pb-4">
              <img src={footer_logo} alt="" />
              <p className=" ff_roboto fw-normal fs_4xsm text-light pt-4">
                Managed by Solana Foundation
              </p>
              <div className="">
                <a href="#" className=" scale d-inline-block">
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="#" className=" ms-3 scale d-inline-block">
                  <img src={twitter} alt="twitter" />
                </a>
                <a href="#" className=" ms-3 scale d-inline-block">
                  <img src={discord} alt="discord" />
                </a>
                <a href="#" className=" ms-3 scale d-inline-block">
                  <img src={fram} alt="fram" />
                </a>
                <a href="#" className=" ms-3 scale d-inline-block">
                  <img src={git_hub} alt="git_hub" />
                </a>
                <a href="#" className=" ms-3 scale d-inline-block">
                  <img src={telegrame} alt="telegrame" />
                </a>
              </div>
              <p className=" ff_helvetica fw-normal fs_4xsm text_break pt-3">
                © 2023 Solana Foundation. All rights reserved.
              </p>
            </Col>
            <Col sm="4" lg="2">
              <ul className="ps-0">
                <li className="ff_helvetica fw-normal fs_4xsm text-light">
                  {" "}
                  Solana
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Grants
                  </a>
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Break Solana
                  </a>
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Media Kit
                  </a>
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Careers
                  </a>
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm="4" lg="2">
              <ul className="ps-0">
                <li className="ff_helvetica fw-normal fs_4xsm text-light">
                  {" "}
                  Get Connected
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Ecosystem
                  </a>
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Blog
                  </a>
                </li>
                <li className=" pt-2">
                  <a
                    href="#"
                    className="ff_helvetica fw-normal fs_3xsm text_break"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm="4" lg="2">
              <a href="#" className=" d-flex align-items-center">
                <img src={en} alt="en" />
                <p className="ff_helvetica fw-normal fs_3xsm text_break mb-0 ms-1">
                  EN
                </p>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
