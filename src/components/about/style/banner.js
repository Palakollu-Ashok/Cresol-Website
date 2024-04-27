import tw, { styled } from "twin.macro"

const StyledBanner = styled.section`
  ${tw`md:py-20 py-6 relative z-[1] w-full bg-cover bg-top bg-no-repeat`};
  &:before {
    ${tw`bg-primary-dark bg-opacity-50 [content: ''] h-full left-0 absolute top-0 w-full z-0`}
  }
  .main-wrapper {
    ${tw`flex flex-col md:(px-5) px-3 gap-4 max-w-8xl mx-auto z-[1] relative`}

    h1 {
      ${tw`md:text-6xl text-3xl text-white font-medium`}
    }
    li {
      ${tw`md:text-xl text-xs`}
    }

    .breadcrumb {
      ${tw`flex flex-row gap-3 text-white`}
    }
  }
`

export default StyledBanner
