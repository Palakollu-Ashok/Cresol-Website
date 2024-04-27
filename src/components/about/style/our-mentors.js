import tw, { styled } from "twin.macro"

const StyledOurMentors = styled.section`
  ${tw`py-8`};
  .main-wrapper {
    ${tw`flex flex-col 2xl:px-[160px] sm:px-[50px] px-[10px] mx-auto z-[1] relative py-8 justify-center items-center`}
    .sub-heading {
      ${tw`text-lg font-medium text-center`}
    }
    .mentors-list {
      ${tw`w-full py-6 overflow-hidden`}

      .mentor-item {
        ${tw`transition-all duration-[0.3s] p-4 rounded mb-4`}

        img {
          ${tw`rounded-md`}
        }

        .info {
          ${tw`flex flex-col gap-1 items-center justify-center text-center leading-tight p-4`}
          .name {
            ${tw`text-primary text-sm font-semibold`}
          }
          .profession {
            ${tw`text-xs font-semibold`}
          }
          .social-media {
            ${tw`flex flex-row justify-center items-center gap-2 pt-4 opacity-0 transition-all duration-[0.3s] -bottom-6 relative`}
          }
        }

        &:hover {
          ${tw`[box-shadow: 5px 5px 24px 0px rgba(2, 45, 98, 0.1)]`}

          .social-media {
            ${tw`opacity-100 bottom-0`}
          }
        }
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
  }
`

export default StyledOurMentors
