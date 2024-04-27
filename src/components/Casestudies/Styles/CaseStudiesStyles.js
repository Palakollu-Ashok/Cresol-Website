import tw, { styled } from "twin.macro";

const StyledCaseStudiesList = styled.section`
${tw`py-6 md:py-8`};
.main-container {
  ${tw`flex flex-col md:(px-5) px-3 max-w-8xl mx-auto z-[1] relative gap-x-16 items-center justify-center`}
  .sub-heading {
    ${tw`text-lg font-medium text-center`}
  }
  .portfolio-list {
    ${tw`w-full py-6 overflow-hidden`}

    .portfolio-item {
      ${tw`bg-white transition-all duration-[0.3s] mb-4 relative rounded-md overflow-hidden`}

      .info {
        ${tw`absolute p-5 w-11/12 left-[50%] bottom-24 transition-all duration-[0.3s] translate-x-[-50%] opacity-0 text-white flex flex-col gap-3 items-start`}

        .name {
          ${tw`font-bold`}
        }

        .description {
          ${tw`font-medium`}
        }

        .button {
          ${tw`flex flex-row items-center gap-2 px-8 py-2 rounded-md bg-secondary`}

          &:hover {
            ${tw`text-black bg-white/50`}
          }
        }
      }

      &:before {
        ${tw`[content: ''] absolute w-full h-0 bottom-0 left-0 top-auto bg-[#001324] bg-opacity-80 transition-all duration-[0.3s]`}
      }

      &:hover {
        .info {
          ${tw`opacity-100 bottom-5`}
        }
        &:before {
          ${tw`bottom-0 h-full`}
        }
      }
    }
    .slick-slide {
      ${tw`px-4`}
    }

    .slick-dots {
      ${tw`-bottom-4`}
      li {
        button {
          ${tw`p-1`}

          &:before {
            ${tw`text-xs text-primary`}
          }
        }
        &.slick-active {
          button {
            &:before {
              ${tw`opacity-100`}
            }
          }
        }
      }
    }
  }
`;

export default StyledCaseStudiesList;
