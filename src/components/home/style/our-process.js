import tw, { styled } from 'twin.macro';

const StyledOurProcess = styled.section`
${tw`md:py-14 py-6 relative z-[1] w-full bg-cover bg-center bg-no-repeat`};
&:before {
  ${tw`bg-primary bg-opacity-90 [content: ''] h-full left-0 absolute top-0 w-full z-0`}
}
.main-container {
  ${tw`flex flex-col md:(px-5) px-3 items-center max-w-8xl mx-auto z-[1] relative`}
  .desc {
    ${tw`text-center text-white text-lg font-medium`}
  }
  .list {
    ${tw`grid md:(grid-cols-4 gap-20) grid-cols-1 gap-x-0 gap-y-4 pt-6`}
    li {
      ${tw`p-4 flex flex-col gap-4 justify-center items-center relative`}
      .icon {
        ${tw`w-36 h-36 flex justify-center items-center bg-white rounded-full`}

        img {
          ${tw`w-24`}
        }
      }

      .content {
        ${tw`flex flex-col justify-center items-center text-white gap-2`}
        p, h5 {
          ${tw`text-center`}
        }
        h5 {
          ${tw`text-lg font-bold`}
        }
      }

      &:before {
        ${tw`md:[content: ''] content-none border-t-2 border-dotted w-12 absolute -right-14 top-20`}
      }

      &:last-child {
        &:before {
          ${tw`content-none`}
        }
      }
    }
  }
  .cta-wrapper {
    ${tw`flex md:(flex-row text-left) text-center flex-col justify-center items-center text-white gap-x-6 pt-4`}
  }
}
`;

export default StyledOurProcess;