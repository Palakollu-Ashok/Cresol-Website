import styled from "styled-components";
import tw from "twin.macro";

const careersFormStyle = styled.section`
  ${tw`md:(pt-12 pb-16) py-6`};
  .main-wrapper {
    ${tw` gap-16  z-[1] relative `}

    .contact-details {
      ${tw`p-8 space-y-8 bg-white shadow-2xl rounded-3xl`}
    }
    .main {
      ${tw`text-4xl font-semibold text-black`}
    }

    .main-form {
      ${tw`grid sm:grid-cols-2 gap-4 w-[100%] text-black`}
    }

    .input-style {
      ${tw`block w-full xl:p-[6px] p-[2px] border border-black/20 rounded-[4px] bg-white focus:outline-none text-black`}
    }

    .submit-button {
      ${tw`disabled:bg-[#e55325]/40 disabled:cursor-not-allowed bg-secondary hover:duration-500  hover:bg-primary sm:w-44 font-medium mt-4 rounded-md p-3 text-white text-[16px]`}
    }
  }
`;

export default careersFormStyle;
