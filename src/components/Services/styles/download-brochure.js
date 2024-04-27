import tw, { styled } from "twin.macro";

const StyledDownloadBrochure = styled.section`
${tw`py-6 md:py-14`};
.main-container {
  ${tw`flex flex-col 2xl:px-[160px] sm:px-[50px] px-[10px] mx-auto z-[1] relative gap-x-16`}

  .wrapper {
    ${tw`flex flex-col items-center justify-center w-full gap-6 py-8 border rounded md:py-16`}

    h2 {
      ${tw`text-2xl font-bold text-center text-white md:text-4xl`}
    }

    a {
      ${tw`flex flex-row items-center justify-center gap-2 px-6 py-2 font-semibold text-white border border-white rounded-3xl`}

      &:hover {
        ${tw`text-black bg-white`}
      }
    }
  }
`;

export default StyledDownloadBrochure;
