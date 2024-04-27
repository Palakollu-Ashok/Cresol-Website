import tw, { styled } from "twin.macro"

const StyledAbout = styled.section`
  ${tw`2xl:pt-[60px] pt-[10px] space-y-4 lg:space-y-0 lg:flex justify-between lg:space-x-8 2xl:px-[160px] sm:px-[50px] px-[10px] lg:pb-20 pb-8`};
  .main-wrapper {
    ${tw`lg:w-[50%] md:space-y-4 space-y-2 tracking-widest self-end`}

    .description {
      ${tw`lg:space-y-2 space-y-2`}
    }
  }

  .img {
    ${tw`2xl:w-[550px] sm:w-[450px] `}
  }
`

export default StyledAbout
