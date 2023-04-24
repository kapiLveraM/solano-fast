import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import solana from "../assets/image/png/Solana.png";
import Arrow from "../assets/image/png/Arrow.png";

import GetStartData from "./GetStartData";
const GetStarted = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <h1 className=" fw-normal fs_xl ff_helvetica text-light text-center text-md-start">
            Get started.
          </h1>
          <p className=" fw-normal ff_helvetica fs_4sm text_primary text-center text-md-start">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
          <div className=" bg_img_solana">
            <div className=" pt-5 ms-5 text-center text-md-start">
              <p className=" fw-normal fs_xsm ff_helvetica text-light chapter_text_setup">
                17 Chapters
              </p>
              <h2 className="fw-normal fs_xl ff_helvetica text-light pt-3">
                Solana Development Course
              </h2>
              <p className=" ff_helvetica fw-normal fs_sm text-light pt-4">
                Quickstart your Solana development starting <br /> from nothing
                to complex programs.
              </p>
              <img src={Arrow} alt="Arrow" className=" py-5" />
            </div>
          </div>
          <Row>
            {GetStartData.map((value) => {
              return (
                <Col md="6" lg="4">
                  <div className="position-relative pt-4">
                    <img src={value.img} alt="Buildspace" className=" w-100 " />
                    <div className=" position-absolute Buildspace_setup">
                      <p className=" ff_helvetica text-light fs_xsm fw-normal bg_body rounded-3 px-3 d-inline-block">
                        {value.par_1}
                      </p>
                      <p className=" ff_helvetica fs_2sm fw-normal text-light mb-0">
                        {value.par_2}
                      </p>
                      <p className=" ff_helvetica fs_2sm fw-normal text-light mb-0">
                        {value.par_3}
                      </p>
                    </div>
                    <a href="#" className="position-absolute Arrow_setup">
                      <img src={value.btn} alt="Arrow" />
                    </a>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GetStarted;
