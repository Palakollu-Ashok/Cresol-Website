import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      id: 1,
      label: "UI/UX Design",
      link: "/ui-ux-design-service/",
      content:
        "We combine Design expertise with intelligence and technology to build far-reaching businesses. We blend human behavioral patterns with information architecture to design an ‘isolated experience ‘.",
      content2:
        "We personalize your business and translate simple ideas into a blend of technology, and creativity with our expertise where the vision is all about ‘Digital design transformation’. Captivating user experience we handcraft the best digital solutions mapping user preferences.",
      content3:
        "With a proven record of inventive techniques across client-centric – approaches we focus on mapping your business journey to decode the human–oriented solutions. We develop results–focused models which build an authentic digital connection for success graph and brand value.",
    },
    {
      id: 2,
      label: "Web Development",
      link: "/web-developement-service/",
      content:
        "Cresol is a Top-notch web development platform that offers Quality yet affordable websites to businesses worldwide. We are strategic in SEO-friendly website – development services that stay ahead to build your business faster with less effort.",
      content2:
        "Our dedicated tech team so far completed ‘n’ several websites for industries and various business lines that include development into an E-commerce website, Magneto, Wordpress, Joomla, 100 % Mobile responsive, Dynamic website, CMS website, Payment gateway integration with custom designs, user-friendly Digital Marketing, Internet Marketing.",
      content3:
        "Our work with domains like E-commerce, Travel, E-learning, Content management systems, blogging, and Retail businesses has a positive response in the approach of easy navigation and 100% web, Mobile, and digital responsive. Connect with us today for the next–gen web app development services.",
    },
    {
      id: 3,
      label: "Mobile app Development",
      link: "/mobile-development-service/",
      content:
        "Cresol offers an end-to-end mobile app development cycle with optimized solutions tested ensuring timely delivery. Our solutions are easy to customize for the growing needs of your business. We provide expertise in Tech support to access any future–ready changes/technology upgrades.",
      content2:
        "We design and develop enterprise–level applications custom-oriented with robust solutions across distinctive verticals. Our passionate team is expertise in handling any complex projects with Tailor-made solutions. Our custom designs are compatible with leading App stores like Google, Playstore, App Store, and Microsoft Store.",
      content3:
        "You have an idea for an online business, we will do the rest for you ranging from design, content, images, hosting, domain, technologies, and digital marketing whatsoever. Get in touch for incredible Mobile app development.",
    },
    {
      id: 4,
      label: "Product Development",
      link: "/product-development-service/",
      content:
        "Cresol has 10+ years. of experience holding a leading technology company in building world-class mobile, web, and Internet of Things technology services for start-ups, SMEs, ISVs, corporates, and enterprises",
      content2:
        "Our Tech savvy includes developers, designers, product managers, data scientists, engineers, and cloud architects to work with clients on launching and building robust solutions that meet user needs. We help businesses to brand, build, and bring to market platforms, digital products, and software platforms providing research, testing, and organizational websites from prototyping and application design to content management and marketing strategy.",
      content3:
        "We leverage expertise in design and strategy along with technical knowledge to build mobile apps, Web apps, SaaS platforms, and other products. We ensure optimized solutions to meet customer needs that push toward viral status.",
    },
    {
      id: 5,
      label: "Testing",
      link: "/functional-testing-service/",
      content:
        "A fully tested application gives you more confidence in your business. At Cresol we provide Website and Mobile application testing for everyone from start-ups, growing small entities, and large corporates to small non–profits. Whether your application (Mobile/Web) is still in development or out in the wild we can test it in any environment.",
      content2:
        "Our QA Savvy can test across multiple browsers including Chrome, Firefox, Safari, Edge, Internet Explorer, and more. We can also do Application (Mobile/Web) testing with the last versions of your choice. Transparency in all stages of development is promised and maintained.",
      content3:
        "Trusted by top development teams globally we offer best-in-class functional application (Mobile/Web) testing at speed with Automation and a blend of crowd-testing to help release high-quality software that can compete in the market. With smart human and Automated testing, we optimize your ROI and value at Cresol.",
    },
    {
      id: 6,
      label: "Digital Marketing",
      link: "/searchEngine-Optimization-services/",
      content:
        "Cresol has been inspiring clients and people over the years and is passionate about what we do for global brands also stand with start-ups to create winning strategies with our expertise and experience in the industry across creative solutions.",
      content2:
        "We help brands from A-Z identical solutions that are well-designed and executed, from print to digital and beyond. With strategic consultation and a team of creators, we communicate unique disruption that will enable your brand to innovative speed and scale, Design and Ideology, Value and Future forward.",
      content3:
        "One-stop solution To reach out to the target audience is digital advertising. Our expertise includes Tailor-made solutions in SEO (Organic traffic), SMM (design, content plan, distribution, and tracking), Google ads/PPC (Measuring wide reliability, and reachable), Paid marketing (discovering relevant audience), and content marketing (Enhancing quality of the brand in content).",
    },
  ];

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          <h2 className="text-xl font-medium xl:text-xl">{header}</h2>
          <img
            className={`ml-auto xl:w-[24px] w-[15px] mt-3 transition-transform duration-700 ease-in-out  ${
              isEnter && "rotate-180"
            }`}
            src="/assets/Home/downArrow.svg"
            alt="downArrow"
          />
        </>
      )}
      className="border-t border-slate-400"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full xl:p-5 p-3 text-left  ${isEnter && ""}`,
      }}
      contentProps={{
        className: "transition-height duration-700  ease-in-out ",
      }}
      panelProps={{ className: "xl:px-8 p-3 w-full" }}
    />
  );

  return (
    <div className="2xl:px-[160px] sm:px-[50px] px-[10px]">
      <h2 className="text-center lg:mt-10">WHAT CAN WE DO FOR YOU</h2>

      <div className="3xl:pt-[71px] 2xl:pt-[60px] sm:pt-[35px] pt-[10px]   xl:flex justify-between xl:space-x-14 space-y-10 xl:space-y-0 lg:pb-20 pb-8">
        <div className="lg:w-[50%] grid space-y-4 lg:space-y-0">
          <img
            src="/assets/Home/services.avif"
            alt="Services image"
            className="lg:place-self-start rounded-3xl"
          />
        </div>
        <div className="w-full">
          <Accordion className="space-y-4" transition transitionTimeout={700}>
            {data.map((d, idx) => (
              <AccordionItem header={d.label}>
                <div className="pb-4 space-y-4">
                  <p>{d.content}</p>
                  <p>{d.content2}</p>
                  <p>{d.content3}</p>
                </div>
                <Link to={d.link} target="_blank">
                  <small className="flex items-center p-2 px-6 text-xs border rounded-full w-fit ">
                    {d.label}
                    <MdOutlineArrowOutward className="ml-2" />
                  </small>
                </Link>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Services;
