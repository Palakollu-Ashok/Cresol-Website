import tw, { styled } from "twin.macro"

const StyledIndustries = styled.section`
  ${tw`bg-light py-4 overflow-hidden`};
  .main-container {
    ${tw`flex md:flex-row flex-col md:(px-5 gap-12) gap-4 px-3 items-center max-w-8xl mx-auto md:mt-8 `}

    .left {
      ${tw`text-primary font-semibold md:(w-1/4 text-2xl) text-xl w-full`}
    }

    .right {
      ${tw`md:w-3/4 w-full`}

      .wrapper {
        .list {
          ${tw`flex flex-col items-center justify-center gap-1`}
          img {
            ${tw`h-12 w-12 rounded-full border border-black`}
          }
          h6 {
            ${tw`text-primary text-sm font-medium`}
          }
        }
      }
    }
  }
`

export default StyledIndustries
