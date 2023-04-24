import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import view_all from "../assets/image/png/view_all.png";
import changelog from "../assets/image/png/changelog.png";
import youtube_1 from "../assets/image/png/youtube_1.png";
import podcast from "../assets/image/png/podcasst.png";
const GoToTheSource = () => {
  return (
    <>
      <section className="Go_to_the_Source py-5">
        <Container>
          <h2 className=" fw-normal fs_3lg ff_helvetica text-light">
            Go to the source.
          </h2>
          <p className=" ff_helvetica fw-normal fs_4sm text_primary">
            Read the documentation for Solana and popular tools.
          </p>
          <Row>
            <Col md="6">
              <div className=" mt-3">
                <div className=" d-flex align-items-center justify-content-between">
                  <h2 className=" fw-normal fs_lg ff_helvetica text-light">
                    Solana Docs
                  </h2>
                  <button className=" ff_roboto fw-normal fs_xsm text-light bg-transparent View_all_btn py-2 px-3">
                    View all{" "}
                    <span className=" ps-3">
                      <img src={view_all} alt="view_all" />
                    </span>
                  </button>
                </div>
                <div className="boder_bottom mt-4"></div>
                <p className=" ff_helvetica fw-normal fs_4sm text-light pt-4 max_width_393">
                  Learn how Solana works and get a high-level understanding of
                  Solana's architecture.
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className=" mt-3">
                <div className=" d-flex align-items-center justify-content-between">
                  <h2 className=" fw-normal fs_lg ff_helvetica text-light">
                    Metaplex Docs
                  </h2>
                  <button className=" ff_roboto fw-normal fs_xsm text-light bg-transparent View_all_btn py-2 px-3">
                    View all{" "}
                    <span className=" ps-3">
                      <img src={view_all} alt="view_all" />
                    </span>
                  </button>
                </div>
                <div className="boder_bottom mt-4"></div>
                <p className=" ff_helvetica fw-normal fs_4sm text-light pt-4 max_width_503">
                  Learn what you build with Metaplex, make the process of
                  creating and launching NFTs easier.
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" mt-5 pt-5 align-items-center flex-column-reverse flex-md-row">
            <Col md="6">
              <h2 className=" fw-normal fs_2xl ff_helvetica text-light mt-4 mt-md-0">
                <h2 className=" fw-normal fs_3lg ff_helvetica text-light">
                  Go to the source.
                </h2>
                <p className=" ff_helvetica fw-normal fs_4sm text_primary max_width_503">
                  Some more Solana changes from Jacob & Joe. Subscribe to the
                  newsletter: https://solana.us17.list-manage.com/s... Proposal
                  - Priced Compute Units: ...
                </p>
                <a
                  href="#"
                  className=" ff_roboto fs_3xsm fw-normal text-light Latest_episode"
                >
                  Latest episode
                </a>
              </h2>
            </Col>
            <Col md="6">
              <img src={changelog} alt="changelog" className=" w-100" />
            </Col>
          </Row>
          <Row className=" mt-5 pt-5">
            <Col lg="6">
              <div className="Solana_Developer_Update p-2 p-sm-5">
                <h2 className=" fw-normal fs_3lg ff_helvetica text-light ms-2 ms-xl-5">
                  Solana Changelog
                </h2>
                <p className=" ff_helvetica fw-normal fs_sm text_primary pt-3 max_width_400 ms-2 ms-xl-5">
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <div className="bg_color_input d-flex align-items-center justify-content-between px-2 mx-1 mx-xl-5 mt-5">
                  <input
                    type="text"
                    placeholder="Email"
                    className=" border-0 outline_none bg-transparent text-light ps-3"
                  />
                  <button className="Sign_up ff_roboto fw-normal fs_3xsm text-black">
                    Sign up
                  </button>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="Solana_Developer_Update p-2 p-sm-5 mt-4 mt-lg-0">
                <h2 className=" fw-normal ff_helvetica fs_2lg text-light ms-2 ms-xl-5">
                  Even more resources
                </h2>
                <p className=" ff_helvetica fw-normal fs_sm text_primary pt-3 max_width_400 ms-2 ms-xl-5">
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers.
                </p>
                <div className=" mt-5 ms-sm-2 ms-xl-5">
                  <div className="you_tube_btn d-inline-block">
                    <a
                      href="#"
                      className=" ff_roboto fw-normal fs_3xsm text-light"
                    >
                      YouTube
                    </a>
                    <a href="#" className=" ms-3">
                      <img src={youtube_1} alt="youtube_1" />
                    </a>
                  </div>
                  <div className="you_tube_btn d-inline-block ms-2 ms-sm-3">
                    <a
                      href="#"
                      className=" ff_roboto fw-normal fs_3xsm text-light"
                    >
                      Podcast
                    </a>
                    <a href="#" className=" ms-3">
                      <img src={podcast} alt="podcast" />
                    </a>
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

export default GoToTheSource;
