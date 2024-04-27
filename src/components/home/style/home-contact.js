import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.section`
  ${tw`md:(pt-2 pb-8)`};
  .main-wrapper {
    ${tw`md:space-y-0  space-y-8 2xl:px-[160px] sm:px-[50px] px-[10px] gap-16 mx-auto z-[1] relative`}

    .contact-details {
      ${tw`p-4 space-y-1 bg-white border xl:p-10 xl:space-y-4 rounded-3xl`}
    }
    .main {
      ${tw`text-lg font-semibold text-black sm:text-2xl`}
    }

    .main-form {
      ${tw`grid lg:grid-cols-3  xl:gap-6 gap-2 w-[100%]`}
    }

    .input-style {
      ${tw`block w-full lg:p-[6px] p-[2px] border border-black/20 rounded-[4px]  bg-white focus:outline-none text-black`}
    }

    .submit-button {
      ${tw`disabled:bg-[#e55325]/40 disabled:cursor-not-allowed bg-secondary hover:duration-500 sm:col-span-3  hover:bg-primary  sm:w-44 font-medium rounded-md p-1 text-white text-[16px]`}
    }
  }
`;

export default StyledForm;
