import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import barve from "../assets/image/png/brave.png";
import discord from "../assets/image/png/discord.png";
import google from "../assets/image/png/google.png";
import circal from "../assets/image/png/circle.png";
import jump_ from "../assets/image/png/jump.png";
import paloz from "../assets/image/png/paloza.png";
import magic from "../assets/image/png/magic.png";
const PowerFulHero = () => {
  return (
    <>
      <section className=" pt-5 mt-5">
        <Container>
          <div className="">
            <h1 className=" text-light fw-normal ff_helvetica fs_6xl text-center">
              Powerful for developers.
            </h1>
            <h2 className=" text-light fw-normal ff_helvetica fs_6xl text-center">
              Fast for everyone.
            </h2>
            <p className=" pt-2 pt-sm-5 ff_helvetica fw-normal fs_md text-light text-center hero_pra_setup">
              Bring blockchain to the people. Solana supports experiences for
              power users, new consumers, and everyone in between.
            </p>
            <div className=" d-sm-flex align-items-center justify-content-center mt-5 pt-3">
              <div className=" text-center text-sm-start">
                <a
                  href="#"
                  className=" fw-normal fs_3xsm ff_roboto  Start_building_btn"
                >
                  Start building
                </a>
              </div>
              <div className="mt-5 mt-sm-0 ms-sm-3 text-center text-sm-start">
                <a
                  href="#"
                  className=" fw-normal fs_3xsm ff_roboto Read_docs_btn"
                >
                  Read docs
                </a>
              </div>
            </div>
          </div>
          <div className=" pt-5 mt-5 mb-4">
            <p className=" ff_helvetica fs_3xsm fw-normal text-center text_info">
              Powering tools and integrations from companies all around the
              world
            </p>
            <Marquee>
              <img src={barve} alt="barve" className=" ms-5" />
              <img src={circal} alt="circal" className=" ms-5" />
              <img src={discord} alt="discord" className=" ms-5" />
              <img src={google} alt="google" className=" ms-5" />
              <img src={jump_} alt="jump_" className=" ms-5" />
              <img src={paloz} alt="paloz" className=" ms-5" />
              <img src={magic} alt="magic" className=" ms-5" />
            </Marquee>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PowerFulHero;
