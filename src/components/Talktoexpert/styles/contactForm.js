import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.section`
  ${tw`md:(pt-12 pb-6) py-6`};
  .main-wrapper {
    ${tw`lg:flex md:space-y-0  space-y-8 2xl:px-[160px] sm:px-[50px] px-[10px] gap-8  mx-auto z-[1] relative`}

    .contact-details {
      ${tw`space-y-6`}
    }
    .main {
      ${tw`text-2xl font-semibold text-white`}
    }
    .description {
      ${tw`text-lg font-semibold text-secondary`}
    }
    .mails {
      ${tw`text-base font-medium`}
    }

    .form-wrapper {
      ${tw`w-full p-6 space-y-6 bg-white border rounded-3xl`}
    }
    .main-form {
      ${tw`grid sm:grid-cols-2 lg:gap-12 gap-3 w-[100%]`}
    }

    .input-style {
      ${tw`block w-full sm:p-[6px] p-1 border border-black/20 rounded-[4px] text-black focus:outline-none`}
    }

    .input-number {
      ${tw`sm:p-2 p-1 text-black focus:outline-none  focus:outline-0 border-hidden ml-[2.8rem] `}
    }

    .checkbox-style {
      ${tw`flex items-center space-x-4 sm:col-span-2`}
    }

    .submit-button {
      ${tw`disabled:bg-[#e55325]/40 disabled:cursor-not-allowed bg-[#e55325] sm:w-44 font-medium mt-4 rounded-md sm:p-3 p-1 text-white  text-[16px]`}
    }
  }
`;

export default StyledForm;
