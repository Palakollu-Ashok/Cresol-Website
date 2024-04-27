import tw, { styled } from "twin.macro"

const StyledHomeServices = styled.section`
${tw`py-6 bg-light`};
.main-container {
  ${tw`flex flex-col gap-4 md:px-5 px-3 items-center max-w-8xl mx-auto`}
  .services-list {
    ${tw`w-full overflow-hidden pb-4`}

    .slick-slide {
      ${tw`p-3`}
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
    .service-list-item {
      ${tw`flex flex-col gap-4 bg-white rounded-md p-8 shadow-[5px 5px 24px 0px rgba(2, 45, 98, 0.1)] relative overflow-hidden`}

      .icon {
        ${tw`flex flex-row gap-2`}

        img {
          ${tw`w-12`}
        }

        h5 {
          ${tw`text-lg font-bold text-primary leading-tight`}
        }
      }

      .content {
        ${tw`flex flex-col leading-loose pt-4`}
        p {
          ${tw`text-white/90 font-medium`}
        }
        .cta {
          ${tw`px-4 py-2 flex flex-row justify-center items-center gap-4 bg-secondary rounded-full text-white absolute opacity-0 z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-medium`}
          &:hover {
            ${tw`bg-white text-primary`}
          }
        }
      }

      .bg-image {
        ${tw`absolute left-0 top-0 w-full h-full opacity-0 bg-cover transition-all duration-[0.3s] scale-100`}

        &:before {
          ${tw`[content: ''] absolute left-0 top-0 bg-primary bg-opacity-50 z-[9] w-full h-full`}
        }
      }

      &:hover {
        ${tw`cursor-pointer`}
        .content {
          .cta {
            ${tw`opacity-100`}
          }
        }
        .bg-image {
          ${tw`opacity-100 scale-110`}
        }
      }
    }
  }
`

export default StyledHomeServices
