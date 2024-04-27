import tw, { styled } from "twin.macro";

const StyledForm = styled.section`
  ${tw`md:(pt-12 pb-16) py-6`};
  .main-wrapper {
    ${tw` md:space-y-0  space-y-8 2xl:px-[160px] sm:px-[50px] px-[10px] gap-16 mx-auto z-[1] relative`}

    .contact-details {
      ${tw`p-8 space-y-4 bg-white shadow-2xl rounded-3xl `}
    }
    .main {
      ${tw`text-4xl font-semibold text-black text-start`}
    }

    .main-form {
      ${tw`grid sm:grid-cols-2 gap-4 w-[100%] text-black`}
    }

    .input-style {
      ${tw`block w-full xl:p-[6px] p-[2px] border border-black/20 rounded-[4px]  bg-white focus:outline-none text-black`}
    }

    .submit-button {
      ${tw`disabled:bg-[#e55325]/40 disabled:cursor-not-allowed bg-secondary hover:duration-500  hover:bg-primary  sm:w-44 font-medium mt-4 rounded-md p-3 text-white text-[16px]`}
    }
  }
`;

export default StyledForm;
