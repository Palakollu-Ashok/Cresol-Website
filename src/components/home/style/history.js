import tw, { styled } from "twin.macro"

const StyledHistory = styled.section`
  ${tw`py-8`};
  .main-container {
    ${tw`flex flex-col gap-12 md:px-5 px-3 items-center max-w-8xl mx-auto`}

    .wrapper {
      /* ${tw`grid md:(grid-cols-4 gap-6) grid-cols-1 gap-x-0 gap-y-4`} */
      ${tw`flex space-x-8`}

      .projects,
      .clients {
        ${tw`bg-primary p-8 flex flex-col justify-center gap-1 rounded border-border border`}

        span {
          ${tw`text-secondary md:text-6xl text-3xl`}
        }

        h6 {
          ${tw`text-white font-bold text-lg leading-none`}
        }
      }

      .process,
      .team,
      .security {
        ${tw`col-span-2 flex flex-col items-center justify-center md:(gap-4 p-8) p-4 gap-2 rounded`}

        span {
          ${tw`flex flex-row items-center gap-1 md:text-4xl text-xl font-light`}
        }

        p {
          ${tw`font-medium text-center`}
        }

        img {
          ${tw`w-14`}
        }
      }

      .process,
      .team {
        ${tw`text-white`}
      }

      .team {
        ${tw`bg-secondary`}
      }

      .security {
        ${tw`bg-primary-light text-white border-border border`}
      }
    }
  }
`

export default StyledHistory
