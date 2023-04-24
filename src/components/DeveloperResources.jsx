import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import developer from "../assets/image/png/developer.png";
import Vector from "../components/Vector";
import bluar from "../assets/image/png/bular.png";
const DeveloperResources = () => {
  return (
    <>
      <section className=" overflow-hidden py-5 position-relative">
        <img
          src={bluar}
          alt="bluar"
          className=" position-absolute z_index_n_1 blur_setup d-none d-xl-inline"
        />
        <Container>
          <Row className=" align-items-center flex-column-reverse flex-md-row">
            <Col md="6">
              <h1 className=" text-light fw-normal fs_7xl ff_helvetica text-center text-md-start">
                Developer Resources
              </h1>
              <p className=" fw-normal fs_md ff_helvetica text-light text-center text-md-start">
                A manual for joining the Solana <br /> ecosystem. By builders
                for builders.
              </p>
              <div className=" d-sm-flex align-items-center justify-content-center justify-content-md-start mt-5">
                <div className=" text-center text-sm-start">
                  <a
                    href="#"
                    className=" fw-normal fs_3xsm ff_roboto Build_Now_btn"
                  >
                    Build Now
                  </a>
                </div>
                <div className="mt-5 mt-sm-0 ms-sm-3 text-center text-sm-start">
                  <a
                    href="#"
                    className=" fw-normal fs_3xsm ff_roboto Stack_Exchange_btn"
                  >
                    Stack Exchange
                    <span className=" ms-2">
                      <Vector />
                    </span>
                  </a>
                </div>
              </div>
            </Col>
            <Col md="6">
              <img src={developer} alt="" className=" w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DeveloperResources;
