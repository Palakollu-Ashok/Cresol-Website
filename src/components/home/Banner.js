import React from "react";
import StyledBanner from "./style/banner";
import Button from "../common/Button";

import { Fade } from "react-reveal";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import data from "../../content/home/banner.json";

const Banner = () => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <StyledBanner ref={ref}>
      <div className="home-left">
        <Fade bottom when={visible}>
          <h1 className="sm:w-[60%]">{data.heading}</h1>
        </Fade>
        <Fade bottom delay={300} when={visible}>
          <p>{data.subHeading}</p>
        </Fade>
      </div>
      <div>
        <Link to="/contact-us" className="hover:cursor-pointer">
          <Fade bottom delay={600} when={visible}>
            <Button name="Let's talk" />
          </Fade>
        </Link>
      </div>
    </StyledBanner>
  );
};

export default Banner;
