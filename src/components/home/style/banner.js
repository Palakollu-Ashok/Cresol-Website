import tw, { styled } from "twin.macro"

const StyledBanner = styled.section`
  ${tw`2xl:px-[160px] sm:px-[50px] px-[10px] 2xl:pt-[80px] 2xl:pt-[76px] pt-[10px] space-y-10 `};
  .main-wrapper {
    ${tw`flex flex-row md:px-5 px-3 items-center max-w-8xl mx-auto`}

    .home-left {
      ${tw`space-y-2`}

      h1 {
        ${tw`tracking-wider  md:leading-[70px]`}
      }

      p {
        ${`text-[17px] tracking-wider`}
      }
    }
  }
`

export default StyledBanner
