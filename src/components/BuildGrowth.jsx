import React from "react";
import { Container } from "react-bootstrap";
import Buildgrowth from "../assets/image/png/Bulid For.png";
import Anybodies from "../assets/image/png/Anybodies.png";
import ckalya from "../assets/image/png/ckaynosa.png";
import img_10 from "../assets/image/png/image 10.png";
import tady from "../assets/image/png/tady.png";
import okay from "../assets/image/png/okay.png";
const BuildGrowth = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <div className=" max_width_1100 m-auto">
            <div className=" d-lg-flex align-items-center justify-content-center justify-content-lg-between">
              <p className=" fw-normal ff_helvetica fs_2xl text-light mb-0 text-center text-lg-start">
                Build for growth.
              </p>
              <ul className=" d-flex justify-content-center mb-0 ps-0 pt-4 pt-lg-0 overflow_scroll_x max_width_900 pb-4 pb-md-0">
                <li className=" ps-4  ps-md-3 ">
                  <a
                    href="#"
                    className=" ff_helvetica fw-normal fs_3xsm boder_build_btn"
                  >
                    NFTs
                  </a>
                </li>
                <li className=" ps-4  ps-md-3">
                  <a
                    href="#"
                    className=" ff_helvetica fw-normal fs_3xsm boder_build_btn"
                  >
                    DeFi
                  </a>
                </li>
                <li className=" ps-4  ps-md-3">
                  <a
                    href="#"
                    className=" ff_helvetica fw-normal fs_3xsm boder_build_btn"
                  >
                    Payments
                  </a>
                </li>
                <li className=" ps-4  ps-md-3">
                  <a
                    href="#"
                    className=" ff_helvetica fw-normal fs_3xsm boder_build_btn"
                  >
                    Gaming
                  </a>
                </li>
                <li className=" ps-4  ps-md-3">
                  <a
                    href="#"
                    className=" ff_helvetica fw-normal fs_3xsm boder_build_btn"
                  >
                    DAOs
                  </a>
                </li>
              </ul>
            </div>
            <div className=" d-lg-flex align-items-center pt-5 pt-lg-3">
              <img src={Buildgrowth} alt="" className=" w-100" />
              <div className="Anybodies">
                <div className="px-5 py-5 mt-4 mt-lg-0">
                  <img src={Anybodies} alt="Anybodies" />
                  <p className=" fw-normal ff_helvetica fs_md text-light pt-2 pb-4">
                    It’s time to bridge the digital and physical. Anybodies
                    helps established brands like Toys’R’Us connect real-life
                    places and products with NFTs.
                  </p>
                  <a
                    href="#"
                    className=" text_secondary ff_helvetica fw-normal fs_md"
                  >
                    Learn more about
                  </a>
                  <a
                    href="#"
                    className="text_secondary ff_helvetica fw-normal fs_md"
                  >
                    NFTs
                  </a>
                  <a
                    href="#"
                    className="text_secondary ff_helvetica fw-normal fs_md"
                  >
                    on Solana
                  </a>
                </div>
              </div>
            </div>
            <div className=" bg_dark py-3 px-4 mt-4 rounded-4">
              <div className=" d-flex justify-content-between align-items-center">
                <img src={ckalya} alt="ckalya" />
                <img src={img_10} alt="img_10" />
                <img src={tady} alt="tady" />
                <img src={okay} alt="okay" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BuildGrowth;
