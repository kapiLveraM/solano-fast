import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import card_blur from "../assets/image/png/card_blur.png";
import DigDeeperData from "../components/DigDeeperData";
const DigDeeper = () => {
  return (
    <>
      <section className=" py-5">
        <Container>
          <p className=" ff_helvetica fw-normal fs_4lg text-light mb-0">
            Dig deeper.
          </p>
          <p className=" ff_helvetica fw-normal fs_4sm text_primary">
            Learn from resources across the greater Solana ecosystem.
          </p>
          <Row>
            {DigDeeperData.map((value) => {
              return (
                <Col lg="6" xl="4">
                  <div className="Dig_deeper_card p-4 mt-4 position-relative">
                    <div className=" d-none d-lg-inline-block">
                      <img
                        src={card_blur}
                        alt="card_blur"
                        className=" position-absolute bottom-0 card_blur"
                      />
                    </div>
                    <p className=" ff_helvetica fw-normal fs_2xsm text_body">
                      {value.heading_1}
                    </p>
                    <h2 className=" ff_helvetica fst-normal text-light fs_3sm">
                      {value.heading_2}
                    </h2>
                    <p className=" ff_helvetica fw-normal fs_4xsm text-light pt-3">
                      {value.par_1}
                    </p>
                    <div className=" mt-3 position-relative z_index_1">
                      <a
                        href="#"
                        className=" ff_helvetica fw-normal fs_xsm text-light"
                      >
                        {value.btn_1}
                      </a>
                      <a href="#" className=" ms-3">
                        <img src={value.btn_2} alt="Component" />
                      </a>
                    </div>
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

export default DigDeeper;
