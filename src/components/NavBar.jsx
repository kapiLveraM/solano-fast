import React, { useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import PageLogo from "../assets/image/svg/pagelogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="position-relative z_index_10 bg_navbar_clr">
      <Nav className="py-3   ">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="d-inline-bloack page-logo">
              <img className="page-logo" src={PageLogo} alt="PageLogo" />
            </a>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center">
              <li>
                <Link to="/">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Learn"
                    className="bg_unset ff_helvetica fw_400 fs_sm clr_grey clr_max_white"
                  >
                    <Dropdown.Item
                      href="#/action-1"
                      className="ff_helvetica fw_400 fs_sm clr_grey"
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="ff_helvetica fw_400 fs_sm clr_grey"
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="ff_helvetica fw_400 fs_sm clr_grey"
                    >
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Link>
              </li>
              <li>
                <Link to="Next">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Build"
                    className="bg_unset ff_helvetica fw_400 fs_sm clr_grey clr_max_white"
                  >
                    <Dropdown.Item
                      href="#/action-1"
                      className="ff_helvetica fw_400 fs_sm clr_grey"
                    >
                      Action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      className="ff_helvetica fw_400 fs_sm clr_grey"
                    >
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      className="ff_helvetica fw_400 fs_sm clr_grey"
                    >
                      Something else
                    </Dropdown.Item>
                  </DropdownButton>
                </Link>
              </li>
              <li>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Network"
                  className="bg_unset ff_helvetica fw_400 fs_sm clr_grey clr_max_white"
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="ff_helvetica fw_400 fs_sm clr_grey"
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="ff_helvetica fw_400 fs_sm clr_grey"
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="ff_helvetica fw_400 fs_sm clr_grey"
                  >
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </li>
              <li>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Community"
                  className="bg_unset ff_helvetica fw_400 fs_sm clr_grey clr_max_white"
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="ff_helvetica fw_400 fs_sm clr_grey"
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    className="ff_helvetica fw_400 fs_sm clr_grey"
                  >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="ff_helvetica fw_400 fs_sm clr_grey"
                  >
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links "
                    href="#Benefits"
                  >
                    Benefits
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Privacy"
                  >
                    Privacy
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Products"
                  >
                    Products
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#App"
                  >
                    App
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#Features"
                  >
                    Features
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block fs_md ff_gilroy_SemiBold tc_info nav_links ff_inter"
                    href="#FAQs"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default NavBar;
