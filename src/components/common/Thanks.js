import React from "react";
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Thanks = () => (
  <>
    {/* <Helmet>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11318331937"
      ></script>
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11318331937');
          `}
      </script>
    </Helmet> */}
    <div
      className="grid place-content-center place-items-center h-[70vh]"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
        }}
        className="text-green-500"
      />
      <h2>Thank you!</h2>
      <p>
        We will contact you very soon. We are delighted to have served you. Your
        trust in us means everything.
      </p>

      <Link
        to="/"
        className="border-b md:mt-20 mt-6 hover:text-[#f6490d] flex items-center space-x-4"
      >
        <RiArrowLeftSLine />
        Lets go back to Homepage
        <AiOutlineHome />
      </Link>
    </div>
  </>
);

export default Thanks;
