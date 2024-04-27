import tw, { styled } from "twin.macro"

const StyledVisionMission = styled.section`
  ${tw`md:py-8 py-6`};
  .main-wrapper {
    ${tw`flex md:flex-row flex-col 2xl:px-[160px] sm:px-[50px] px-[10px] gap-6 mx-auto z-[1] relative md:mt-8`}

    .left, .right {
      ${tw`text-white  md:(p-8 w-1/2) p-4 w-full flex flex-col gap-2 rounded-md`}

      .icon {
        ${tw`md:text-4xl text-2xl flex flex-row gap-2`}

        span {
          ${tw`md:text-xl text-lg font-bold`}
        }
      }
    }

    .left {
      ${tw`border-white border`}
    }

    .right {
      ${tw`border-white border`}
    }
  }
`

export default StyledVisionMission
