import tw, { styled } from "twin.macro"

const StyledTestimonials = styled.section`
  ${tw`md:py-14 py-6`};

  .main-container {
    ${tw`flex flex-col md:(px-5) px-3 items-center max-w-8xl mx-auto z-[1] relative text-black`}

    .wrapper {
      ${tw`w-full md:pt-8 pt-4`}
      .testimonial-item {
        ${tw`md:px-48 px-6`}
        .testimonial-wrapper {
          ${tw`flex flex-col md:gap-6 gap-4`}
          .testimonial-content {
            ${tw`text-center`}
            p {
              ${tw`md:leading-8 leading-6 text-black`}
            }
          }

          .testimonial-name {
            ${tw`flex flex-col text-center`}

            h6 {
              ${tw`font-bold`}
            }
          }
        }
      }

      .prev-arrow,
      .next-arrow {
        ${tw`text-primary text-opacity-40 text-2xl cursor-pointer absolute top-[calc(50% - 2rem)] z-[1] md:block hidden`}

        &:hover {
          ${tw`text-opacity-100`}
        }
      }

      .prev-arrow {
        ${tw`left-6`}
      }

      .next-arrow {
        ${tw`right-6`}
      }
    }
  }
`

export default StyledTestimonials
