import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import house from "../assets/image/png/huose.png";
import thravining from "../assets/image/png/thriving_1.png";
import grial_img from "../assets/image/png/grial_img.png";
import culab from "../assets/image/png/culab.png";
import jion_img from "../assets/image/png/join a.png";
const ThrivingCommunity = () => {
  return (
    <>
      <section className=" py-5 position-relative overflow-hidden">
        <Container>
          <div className="max_width_1100 m-auto">
            <p className=" text-light fw-normal ff_helvetica fs_xl text-center text-md-start">
              Join a thriving community.
            </p>
          </div>
        </Container>
        <img
          src={jion_img}
          alt=""
          className=" position-absolute z_index_n_1 join_img_setup "
        />

        <Marquee>
          <div className="">
            <div className=" thriving_card">
              <h2 className=" fw-normal fs-4lg ff_helvetica">11,000</h2>
              <p className=" text_success ff_helvetica fw-normal fs_2xsm">
                Solana Hacker House participants
              </p>
            </div>
            <img src={house} alt="house" className=" pt-3" />
          </div>
          <img src={thravining} alt="thravining" className="px-3" />
          <div className="">
            <img src={house} alt="house" className="" />
            <div className=" thriving_card mt-3">
              <h2 className=" fw-normal fs-4lg ff_helvetica text_warning">
                48,000
              </h2>
              <p className=" text_success ff_helvetica fw-normal fs_2xsm text-center">
                Developers building during <br /> Solana Hackathons
              </p>
            </div>
          </div>
          <img src={grial_img} alt="grial_img" className="px-3" />
          <div className=" pe-3">
            <div className=" thriving_card ">
              <h2 className=" fw-normal fs-4lg ff_helvetica  text_yellow">
                3,800
              </h2>
              <p className=" text_success ff_helvetica fw-normal fs_2xsm text-center">
                Solana Breakpoint 2022 attendees
              </p>
            </div>
            <img src={culab} alt="culab" className="mt-3" />
          </div>
        </Marquee>

        <div className=" container mt-lg-5 pt-5">
          <p className=" text-light fw-normal ff_helvetica fs_xl text-center max_width_736 m-auto">
            It's time to join the thousands of creators, artists, and developers
            using Solana.
          </p>
          <div className=" text-center mt-4">
            <a
              href="#"
              className=" fw-normal fs_3xsm ff_roboto  Start_building_btn"
            >
              Start building
            </a>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default ThrivingCommunity;
