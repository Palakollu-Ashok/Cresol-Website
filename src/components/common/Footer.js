import React from "react";
import tw, { styled } from "twin.macro";
import {
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";

import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  ${tw`flex xl:flex-row flex-col-reverse bg-[#02162a]`}
  .left {
    ${tw`p-8 md:(px-12 w-1/2 py-6) w-full xl:grid  xl:grid-cols-2  xl:space-y-0 space-y-6  items-start gap-4`}

    .logo-wrapper {
      ${tw`flex flex-col gap-4`}
      img {
        ${tw`md:w-[180px] w-[200px]`}
      }

      .social-media {
        ${tw`flex flex-col md:mt-12`}

        h5 {
          ${tw`font-bold pb-2 text-lg`}
        }

        ul {
          ${tw`flex flex-row text-3xl  gap-4`}
        }
        li {
          ${tw`list-none`}
        }
      }
    }

    .contact-info {
      ${tw`flex flex-col gap-4`}

      a {
        &:hover {
          ${tw`text-secondary`}
        }
      }

      h5 {
        ${tw` font-bold xl:text-2xl text-lg`}
      }
      div {
        ${tw`flex items-start gap-2`}

        .icon {
          ${tw`flex-shrink-0 mt-1`}
        }

        span {
          ${tw`font-medium`}
        }

        &.email {
          span {
            ${tw`flex flex-col gap-1`}
          }
        }

        &.address {
          a {
            ${tw`flex flex-row gap-1 w-[120%]`}
          }
        }
      }
    }

    .main {
      ${tw`text-primary-dark text-2xl font-semibold`}
    }
  }
  .right {
    ${tw`p-8 md:(px-12 py-6) `}

    .links {
      ${tw`flex md:flex-row flex-col gap-12`}

      h5 {
        ${tw` font-bold py-2 xl:text-2xl text-lg`}
      }

      .services,
      .quick-links {
        ul {
          ${tw`flex flex-col gap-4  font-medium`}

          li {
            ${tw`flex flex-row gap-3 items-center`}

            a {
              ${tw`flex flex-row gap-3`}
            }
          }
        }
      }
    }
    .copyright {
      ${tw``}
      a {
        ${tw``}
      }
    }
  }
`;
const today = new Date();
const year = today.getFullYear();

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
    title: "/UI UX Design",
  },
  {
    id: 6,
    slug: "/erp-solutions",
    title: "ERP Solutions",
  },
];

const Footer = () => (
  <div>
    <StyledFooter>
      <div className="left">
        <div className="logo-wrapper">
          <Link to="/" id="/" className="flex">
            <img
              src="/assets/Navbar/logo.svg"
              alt="logo"
              className="md:w-[150px] w-[100px]"
            />
          </Link>

          <p className="text-white">
            Cresol is renowned for crafting the most innovative and eye-catching
            IT Software solutions provider servicing companies in India, USA,
            Uk, Canada, Australia and more.
          </p>
          <div className="social-media">
            <h5>Follow Us:</h5>
            <ul>
              <li className=" ">
                <a
                  href="https://www.facebook.com/profile.php?id=100094261784613&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cresol-infoserv-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/cresol_infoserv?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-info">
          <h5>Contact Info</h5>
          <div className="address">
            <FaMapMarkerAlt className="icon" />
            <span>
              <a
                href="https://maps.app.goo.gl/X5ULpRJJFQvLBkwu6"
                target="_blank"
              >
                Office Address 1: Cresol Infoserv Pvt. Ltd, MIG-37, Vasavi
                Srinivasam , Flat Number.301, 3rd Floor, KPHB Colony, Road
                Number.1,Kukatpally ,Hyderabad-500072.
              </a>
            </span>
          </div>
          <div className="address">
            <FaMapMarkerAlt className="icon" />
            <span>
              <a href="#">
                Office Address 2: Cresol Infoserv Pvt. Ltd, Unit.No. 114,
                Manjeera Trinity Corporate, JNTU - Hitech Road, beside LuLu
                Mall, Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally,
                Hyderabad, Telangana 500072
              </a>
            </span>
          </div>

          <div className="email">
            <FaRegEnvelope className="icon" />
            <span>
              <a href="mailto:info@cresolinfoserv.com">
                info@cresolinfoserv.com
              </a>
              {/* <a href="mailto:services@cresolinfoserv.com">
              services@cresolinfoserv.com
            </a> */}
            </span>
          </div>
          <div className="website">
            <FaGlobe className="icon" />
            <span>
              <Link to="/">https://www.cresolinfoserv.com</Link>
            </span>
          </div>
          {/* <div className="website">
            <IoMdCall className="icon" />
            <span>
              <a href="tel:9985444558">9985444558</a>
            </span>
          </div> */}
          <div className="website">
            <IoMdCall className="icon" />
            <span>
              <a href="tel:9581222335">9581222335</a>
            </span>
          </div>
        </div>

        {/* <div className="md:col-span-2">
        <h3 className="main">Location</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.796120592011!2d78.401868!3d17.4910426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a0e9651d9b%3A0x25823406ac81f76a!2sTrendsoft%20Technologies%20Pvt.Ltd!5e1!3m2!1sen!2sin!4v1681133163369!5m2!1sen!2sin"
          className="  w-[100%] h-[150px]  "
        ></iframe>
      </div> */}
      </div>

      <div className="right">
        <div className="links">
          <div className="services">
            <h5>IT Services</h5>
            <ul>
              {itServices.map((d, i) => {
                return (
                  <li key={i}>
                    <Link to={d.slug}>
                      <FaChevronRight /> {d.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="services">
            <h5>Testing Services</h5>
            <ul>
              {testingServices.map((d, i) => {
                return (
                  <li key={i}>
                    <Link to={d.slug}>
                      <FaChevronRight /> {d.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="services">
            <div className="quick-links">
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <Link to="/">
                    <FaChevronRight /> Who we are
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <FaChevronRight /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers">
                    <FaChevronRight /> Work with us
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies">
                    <FaChevronRight /> Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">
                    <FaChevronRight /> Talk to an expert
                  </Link>
                </li>
                <li>
                  <a target="_blank" href="/privacy-policy">
                    <FaChevronRight /> Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>

    <div className="py-6 text-center font-medium md:col-span-2">
      ©Copyright {year}{" "}
      <Link to="/" className="text-secondary">
        Cresol Infoserv{" "}
      </Link>
      All Rights Reserved
    </div>
  </div>
);

export default Footer;
