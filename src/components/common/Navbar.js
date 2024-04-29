import React, { useState } from "react";

import "./Navbar.css";

import { BiMenuAltRight } from "react-icons/bi";

import { RxCross2 } from "react-icons/rx";

import {
  MdOutlineArrowOutward,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import styled from "styled-components";
import tw from "twin.macro";

//react-headless-accordion imports
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { Link } from "react-router-dom";

const StyledNavigation = styled.nav`
  .main-desktop {
    ${tw`flex items-center space-x-8 lg:space-x-36`}

    .menu-items {
      ${tw`hidden space-x-4 md:flex lg:space-x-6`}
      a[aria-current="page"] {
        ${tw`text-secondary`}
      }
    }

    .menu-item {
      ${tw`font-medium hover:text-[#f6490d] hover:cursor-pointer`}
    }

    .dropdown-main {
      ${tw`inline-block `}
    }

    .dropdown-title {
      ${tw`flex items-center outline-none focus:outline-none`}
    }

    .dropdown-title-svg {
      ${tw`w-4 h-4 transition duration-150 ease-in-out transform fill-current group-hover:-rotate-180`}
    }

    .dropdown-mainList-ul {
      ${tw`absolute p-3 space-y-4 transition duration-150 ease-in-out transform scale-0 rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-100 w-fit shadow-black/20`}
    }

    .dropdown-mainList-li {
      ${tw`relative mt-1 list-none`}
    }

    .dropdown-mainList-button {
      ${tw`flex items-center w-full p-2 px-1 text-left outline-none focus:outline-none`}
    }

    .dropdown-mainList-svg {
      ${tw`w-4 h-4 transition duration-150 ease-in-out fill-current`}
    }

    .dropdown-listItems {
      ${tw`absolute top-0 right-0 p-3 text-black transition duration-150 ease-in-out origin-top-left bg-white rounded-md shadow-xl text-start shadow-black/20`}
    }

    .dropdown-testing-ul {
      ${tw`transition duration-150 ease-in-out w-fit`}
    }

    .dropdown-listItem {
      ${tw`list-none font-medium hover:text-[#f6490d] hover:cursor-pointer`}
    }
  }

  .icon {
    ${tw`border-2 rounded-md hover:cursor-pointer`}
  }

  .mobile-menu-item {
    ${tw`text-primary font-medium hover:text-[#f6490d] hover:cursor-pointer pt-3`}
  }

  .accordion-header {
    ${tw`flex items-center space-x-2`}
  }

  .accordion-body {
    ${tw`mt-2 ml-2 space-y-4`}
  }
`;

const Navbar = () => {
  const [opened, setOpened] = useState(true);

  const handleNav = () => {
    setOpened(!opened);
  };

  const itServices = [
    {
      id: 1,
      slug: "/web-developement-service",
      title: "web Developement",
    },
    {
      id: 2,
      slug: "/e-commerce-development-service",
      title: "E-Eommerce Development",
    },
    {
      id: 3,
      slug: "/product-development-service",
      title: "Product Development",
    },
    {
      id: 4,
      slug: "/mobile-app-development-service",
      title: "Mobile App Development",
    },
    {
      id: 5,
      slug: "/ui-ux-design-service",
      title: "UI/UX Design",
    },
    {
      id: 6,
      slug: "/erp-solutions",
      title: "ERP Solutions",
    },
  ];

  const testingServices = [
    {
      id: 1,
      slug: "/functional-testing-service",
      title: "Functional Testing",
    },
    {
      id: 2,
      slug: "/performance-testing-service",
      title: "Performance Testing",
    },
    {
      id: 3,
      slug: "/security-testing-service",
      title: "Security Testing",
    },
    {
      id: 4,
      slug: "/usability-testing-service",
      title: "Usability Testing",
    },
  ];

  const digitalMarketingServices = [
    {
      id: 1,
      slug: "/searchEngine-Optimization-services",
      title: "SearchEngine Optimization",
    },
    {
      id: 2,
      slug: "/socialmedia-marketing-services",
      title: "Socialmedia Marketing",
    },
    {
      id: 3,
      slug: "/branding-services",
      title: "Branding",
    },
  ];

  return (
    <div className="md:(grid grid-cols-2) p-5 sticky top-0 bg-[#001324] z-[99] flex flex-row gap-x-3 text-center place-items-center 2xl:px-[160px] sm:px-[50px] px-[10px]  justify-between">
      <Link to="/" id="/" className="flex">
        <img
          src="/assets/Navbar/logo.svg"
          alt="logo"
          className="md:w-[150px] w-[100px]"
        />
      </Link>

      <StyledNavigation>
        <div className="main-desktop">
          <div className="menu-items">
            <Link to="/" className="menu-item" hrefLang="x-default">
              Who we are
            </Link>
            <Link to="/about/" className="menu-item" hrefLang="x-default">
              About Us
            </Link>
            <div className="dropdown-main group">
              <button className="dropdown-title">
                <p className="text-white">Services</p>
                <span>
                  <svg
                    className="dropdown-title-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>

              {/* IT Services */}
              <ul className="absolute p-2 text-black transition duration-150 ease-in-out transform scale-0 bg-white rounded-md shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-100 w-fit shadow-black/20">
                <li className="dropdown-mainList-li group ">
                  <button className="dropdown-mainList-button ">
                    <p className="text-black menu-item">IT Services</p>
                    <span className="mr-auto">
                      <svg
                        className="dropdown-mainList-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </button>
                  <ul className="opacity-0 dropdown-listItems min-w-32 group-hover:opacity-100">
                    {itServices.map((d, i) => (
                      <li key={i} className="dropdown-listItem">
                        <Link hrefLang="x-default" to={d.slug}>
                          {d.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Testing Services */}
                <ul className="dropdown-testing-ul group">
                  <li className="relative list-none">
                    <button className="dropdown-mainList-button ">
                      <p className="text-black menu-item">Testing Services</p>
                      <span className="mr-auto">
                        <svg
                          className="dropdown-mainList-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="opacity-0 dropdown-listItems min-w-32 group-hover:opacity-100">
                      {testingServices.map((d, i) => (
                        <li key={i} className="dropdown-listItem">
                          <Link hrefLang="x-default" to={d.slug}>
                            {d.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>

                {/* Digital Marketing */}
                <ul className="dropdown-testing-ul group">
                  <li className="relative list-none ">
                    <button className="dropdown-mainList-button ">
                      <p className="text-black menu-item">Digital Marketing</p>
                      <span className="mr-auto">
                        <svg
                          className="dropdown-mainList-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul className="opacity-0 dropdown-listItems min-w-32 group-hover:opacity-100">
                      {digitalMarketingServices?.map((d, i) => (
                        <li key={i} className="dropdown-listItem">
                          <Link hrefLang="x-default" to={d.slug}>
                            {d.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </ul>
            </div>
            <Link to="/careers" hrefLang="x-default" className="menu-item">
              Work with us
            </Link>
            <Link to="/case-studies" hrefLang="x-default" className="menu-item">
              Case Studies
            </Link>
          </div>
          <Link to="/contact-us" hrefLang="x-default">
            <div className="lg:block hidden group mt-2 w-fit rounded-lg  bg-gradient-to-r  from-[#075ba6] to-[#f04d23] hover:bg-gradient-to-r  hover:from-[#f04d23] hover:to-[#075ba6] p-[1px] ">
              <div className="bg-[#001324] rounded-lg p-3  flex items-center justify-center  space-x-4 ">
                <button>Talk to an expert</button>
                <MdOutlineArrowOutward className="group-hover:rotate-[360deg]  duration-700" />
              </div>
            </div>
          </Link>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {!opened ? (
            <RxCross2 size={40} className="icon" />
          ) : (
            <BiMenuAltRight size={40} className="icon" />
          )}
        </div>

        {/* mobile menu */}
        <div
          className={
            !opened
              ? "mobile md:hidden grid grid-cols-1 divide-y-2  divide-dotted text-[#035aa6] fixed right-2 top-[6.25rem] overflow-auto w-[70%] h-fit shadow-lg shadow-black/20 bg-white text-start pl-4 space-y-3 p-6 "
              : "fixed left-[-100%]"
          }
        >
          <Link to="/" hrefLang="x-default" className="mobile-menu-item ">
            Who we are
          </Link>
          <Link to="/about/" hrefLang="x-default" className="mobile-menu-item ">
            About Us
          </Link>

          <Accordion>
            <AccordionItem>
              <AccordionHeader className="accordion-header">
                <p className="mobile-menu-item ">IT Services</p>
                <MdOutlineKeyboardArrowDown
                  size={23}
                  className="hover:text-[#f6490d] mt-3"
                />
              </AccordionHeader>
              <AccordionBody className="accordion-body">
                {itServices.map((d, i) => (
                  <div key={i} className="accordion-body">
                    <Link hrefLang="x-default" to={d.slug}>
                      {d.title}
                    </Link>
                  </div>
                ))}
              </AccordionBody>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem>
              <AccordionHeader className="accordion-header">
                <p className="mobile-menu-item ">Testing Services</p>
                <MdOutlineKeyboardArrowDown
                  size={23}
                  className="hover:text-[#f6490d] mt-3"
                />
              </AccordionHeader>
              <AccordionBody className="accordion-body">
                {testingServices.map((d, i) => (
                  <div key={i} className="accordion-body">
                    <Link hrefLang="x-default" to={d.slug}>
                      {d.title}
                    </Link>
                  </div>
                ))}
              </AccordionBody>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem>
              <AccordionHeader className="accordion-header">
                <p className="mobile-menu-item ">Digital marketing</p>
                <MdOutlineKeyboardArrowDown
                  size={23}
                  className="hover:text-[#f6490d] mt-3"
                />
              </AccordionHeader>
              <AccordionBody className="accordion-body">
                {digitalMarketingServices?.map((d, i) => (
                  <div key={i} className="accordion-body">
                    <Link hrefLang="x-default" to={d.slug}>
                      {d.title}
                    </Link>
                  </div>
                ))}
              </AccordionBody>
            </AccordionItem>
          </Accordion>

          <Link
            to="/careers"
            hrefLang="x-default"
            className="mobile-menu-item "
          >
            Work with us
          </Link>
          <Link
            to="/case-studies"
            hrefLang="x-default"
            className="mobile-menu-item "
          >
            Case Studies
          </Link>
          <Link
            to="/contact-us"
            hrefLang="x-default"
            className="mobile-menu-item "
          >
            Talk to an expert
          </Link>
        </div>
      </StyledNavigation>
    </div>
  );
};

export default Navbar;
