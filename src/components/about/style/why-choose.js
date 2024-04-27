import tw, { styled } from "twin.macro"

const StyledWhyChoose = styled.section`
  ${tw`pt-8 pb-16 2xl:px-[160px] sm:px-[50px] px-[10px] space-y-8`};
  h3 {
    ${tw` font-bold md:text-4xl text-2xl mb-2 text-center`}
  }
  .main-wrapper {
    ${tw`flex md:flex-row flex-col  gap-8  mx-auto z-[1] relative items-center`}

    .left, .right {
      ${tw`md:w-1/2 w-full`}
    }

    .left-image {
      ${tw`self-end rounded-3xl`}
    }

    .right {
      ${tw`flex flex-col font-medium`}
    }
  }
`

export default StyledWhyChoose
