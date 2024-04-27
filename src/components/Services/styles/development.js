import tw, { styled } from "twin.macro";

const StyledDevelopment = styled.section`
  ${tw`2xl:pt-[60px] pt-[10px] space-y-6 2xl:px-[160px] sm:px-[50px] px-[10px] md:pb-10 pb-4 `};
  .main-wrapper {
    ${tw`space-y-4`}

    .left {
      ${tw`space-y-4 md:space-y-8`}
    }

    .right {
      ${tw`w-full pt-8 md:pt-16`}

      h3 {
        ${tw`text-xl font-bold text-white md:text-3xl `}
      }

      ul.process {
        ${tw`flex flex-col`}

        li {
          ${tw`flex flex-row md:(gap-8 pb-16) pb-8 gap-4 relative `}

          &:before {
            ${tw`absolute top-0 [content: ''] md:left-[38px] left-7 h-full w-0.5 bg-light`}
          }

          .number {
            span {
              ${tw`flex justify-center items-center md:(w-20 h-20 text-2xl) w-14 h-14 text-lg rounded-full flex-shrink-0 text-primary bg-light font-bold transition-all relative duration-[0.3s]`}

              &:after {
                ${tw`absolute left-[100%] top-[50%] border-transparent [content: ''] w-0 h-0 pointer-events-none border-l-light border-8 -mt-1.5 -ml-0.5 transition-all duration-[0.3s]`}
              }
            }
          }

          .content {
            ${tw`flex flex-col md:(mt-7 gap-4) gap-2 mt-4`}

            h5 {
              ${tw`text-base font-bold text-white md:text-lg`}
            }
            p {
              ${tw`font-medium leading-7 `}
            }
          }

          &:hover {
            .number {
              span {
                ${tw`text-white bg-secondary`}

                &:after {
                  ${tw`border-l-secondary`}
                }
              }
            }
          }

          &:last-child {
            ${tw`pb-0`}
            &:before {
              ${tw`content-none`}
            }
          }
        }
      }
    }
  }
`;

export default StyledDevelopment;
