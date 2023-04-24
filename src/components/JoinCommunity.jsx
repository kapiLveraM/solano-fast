import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const JoinCommunity = () => {
  return (
    <>
      <section className="py-5 bg_img_join_community">
        <Container>
          <Row className=" justify-content-md-center">
            <Col md="5">
              <div className="pt-3 pt-lg-5 text-center text-md-start">
                <p className=" ff_helvetica fw-normal text-light fs_xl mb-0 lh-1">
                  Join a community
                </p>
                <p className=" ff_helvetica fw-normal text-light fs_xl mb-0">
                  of millions
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="text-center text-md-start pt-4 pt-md-0">
                <p className=" fw-normal fs_8xl ff_helvetica text_clr_linear mb-0 lh-1">
                  11.5M+
                </p>
                <p className=" fw-normal fs_4xsm ff_roboto text_primary">
                  Active accounts
                </p>
              </div>
              <div className=" py-4 py-lg-5 text-center text-md-start">
                <p className=" fw-normal fs_8xl ff_helvetica text_clr_linear mb-0 lh-1">
                  21.9M
                </p>
                <p className=" fw-normal fs_4xsm ff_roboto text_primary">
                  NFTs minted
                </p>
              </div>
              <div className="text-center text-md-start">
                <p className=" fw-normal fs_8xl ff_helvetica text_clr_linear mb-0 lh-1">
                  $0.00025
                </p>
                <p className=" fw-normal fs_4xsm ff_roboto text_primary">
                  Average cost per transaction
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" pt-5 mt-3">
            <Col xl="4">
              <div className="pt-3 pt-lg-5 text-center text-xl-start">
                <p className=" ff_helvetica fw-normal text-light fs_xl mb-0 lh-1">
                  Made for
                </p>
                <p className=" ff_helvetica fw-normal text-light fs_xl mb-0">
                  mass adoption .
                </p>
                <div className=" d-flex align-items-center justify-content-center justify-content-xl-start">
                  <div className="live_text_dot me-1"></div>
                  <p className=" fw-normal fs_4xsm ff_roboto text_primary mb-0">
                    Live data
                  </p>
                </div>
              </div>
            </Col>
            <Col xl="8">
              <div className=" d-md-flex justify-content-center justify-content-xl-start pt-5 pt-xl-0">
                <div className=" mt-md-5">
                  <div className="Made_for_card p-3 p-xl-4">
                    <div className=" d-flex align-items-center">
                      <div className="card_text_line me-3"></div>
                      <p className=" ff_helvetica fw-normal fs_4md text-light mb-0">
                        Fast
                      </p>
                    </div>
                    <p className=" ff_helvetica fs_sm fw-normal text_primary pt-2">
                      Don’t keep your users waiting. Solana has block times of
                      400 milliseconds — and as hardware gets faster, so will
                      the network.
                    </p>
                    <div className=" d-flex align-items-center">
                      <div className="live_text_dot me-1"></div>
                      <p className="ff_helvetica fw-normal fs_4md text-light mb-0 pt-3">
                        3,969
                      </p>
                    </div>
                    <p className=" fw-normal fs_4xsm ff_roboto text_primary mb-0">
                      Transactions per second
                    </p>
                  </div>
                  <div className="Made_for_card p-3 p-xl-4 mt-3">
                    <div className=" d-flex align-items-center">
                      <div className="card_text_line me-3"></div>
                      <p className=" ff_helvetica fw-normal fs_4md text-light mb-0">
                        Scalable
                      </p>
                    </div>
                    <p className=" ff_helvetica fs_sm fw-normal text_primary pt-2">
                      Get big, quick. Solana is made to handle thousands of
                      transactions per second, and fees for both developers and
                      users remain less than $0.01.
                    </p>
                    <div className=" d-flex align-items-center">
                      <div className="live_text_dot me-1"></div>
                      <p className="ff_helvetica fw-normal fs_4md text-light mb-0 pt-3">
                        163,077,581,394
                      </p>
                    </div>
                    <p className=" fw-normal fs_4xsm ff_roboto text_primary mb-0">
                      Total transactions
                    </p>
                  </div>
                </div>
                <div className=" ms-md-5 pt-3 pt-md-0">
                  <div className="Made_for_card p-3 p-xl-4">
                    <div className=" d-flex align-items-center">
                      <div className="card_text_line bg_line_clr me-3"></div>
                      <p className=" ff_helvetica fw-normal fs_4md text-light mb-0">
                        Decentralized
                      </p>
                    </div>
                    <p className=" ff_helvetica fs_sm fw-normal text_primary pt-2">
                      The Solana network is validated by thousands of nodes that
                      operate independently of each other, ensuring your data
                      remains secure and censorship resistant.
                    </p>
                    <div className=" d-flex align-items-center">
                      <div className="live_text_dot me-1"></div>
                      <p className="ff_helvetica fw-normal fs_4md text-light mb-0 pt-3">
                        1,675
                      </p>
                    </div>
                    <p className=" fw-normal fs_4xsm ff_roboto text_primary mb-0">
                      Validator nodes
                    </p>
                  </div>

                  <div className="Made_for_card p-3 p-xl-4 mt-3">
                    <div className=" d-flex align-items-center">
                      <div className="card_text_line me-3 bg_primary_line"></div>
                      <p className=" ff_helvetica fw-normal fs_4md text-light mb-0">
                        Energy Efficient
                      </p>
                    </div>
                    <p className=" ff_helvetica fs_sm fw-normal text_primary pt-2">
                      Solana’s proof of stake network and other innovations
                      minimize its impact on the environment. Each Solana
                      transaction uses about the same energy as a few Google
                      searches.
                    </p>

                    <p className="ff_helvetica fw-normal fs_4md text-light mb-0 pt-3">
                      0%
                    </p>

                    <p className=" fw-normal fs_4xsm ff_roboto text_primary mb-0">
                      Net carbon impact
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default JoinCommunity;
