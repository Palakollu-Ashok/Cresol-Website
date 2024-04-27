import tw, { styled } from "twin.macro"

const StyledOurInvestors = styled.section`
  ${tw`md:py-8 py-6 bg-primary-dark`};
  .main-wrapper {
    ${tw`flex flex-col md:(px-5) px-3 max-w-8xl mx-auto z-[1] relative py-8 justify-center items-center`}
    .sub-heading {
      ${tw`text-white font-medium text-lg text-center`}
    }
    .wrapper {
      ${tw`w-full md:pt-8 pt-4`}
      .investor-item {
        ${tw`md:px-12 px-4`}
        .investor-wrapper {
          ${tw`flex flex-col md:(gap-6 flex-row) gap-4`}
          .icon {
            ${tw`flex-shrink-0`}
            img {
              ${tw`md:(w-44 h-44) w-full`}
            }
          }
          .investor-content {
            ${tw`flex flex-col gap-2`}
            h3 {
              ${tw`text-white text-3xl font-bold`}
            }
            h5 {
              ${tw`text-[#74bae1] text-lg font-bold`}
            }
            p {
              ${tw`text-white text-xl font-light`}
            }
          }
        }
      }

      .prev-arrow,
      .next-arrow {
        ${tw`text-white text-opacity-40 text-2xl cursor-pointer absolute top-[calc(50% - 2rem)] z-[1] md:block hidden`}

        &:hover {
          ${tw`text-opacity-100`}
        }
      }

      .prev-arrow {
        ${tw`-left-0`}
      }

      .next-arrow {
        ${tw`-right-0`}
      }
    }
  }
`

export default StyledOurInvestors
