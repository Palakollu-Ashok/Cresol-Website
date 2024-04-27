import tw, { styled } from "twin.macro"

const StyledAbout = styled.section`
  ${tw`2xl:pt-[60px] pt-[10px] lg:space-y-0 2xl:px-[160px] sm:px-[50px] px-[10px] md:pb-10 pb-4`};
  .main-wrapper {
    ${tw` md:space-y-4 space-y-2 tracking-widest self-end md:pt-8 pt-4`}

    .description {
      ${tw`space-y-2`}
    }
  }
  .img {
    ${tw`md:flex justify-between xl:space-x-10 space-y-4 md:space-y-0 `}
  }
`

export default StyledAbout
