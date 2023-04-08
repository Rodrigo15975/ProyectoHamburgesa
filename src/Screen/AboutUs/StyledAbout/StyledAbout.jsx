import styled from "styled-components";
import media from "styled-media-query";

export const MainAbout = styled.article`
  max-width: 120rem;
  min-height: 80vh;
  display: flex;
  .contMainAbout {
    flex: 0 1 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    gap: 3rem;
    .ContAbout {
      display: flex;
      flex-direction: column;

      .cont-title {
        h2 {
          color: #ffb23e;
          font-size: var(--step-3);
          ${media.lessThan("75rem")`   
          text-align: center;
          `};
        }
      }

      .cont-txt {
        max-width: 35rem;

        p {
          letter-spacing: 3px;
          height: 100%;
          margin-top: 1rem;
          padding-left: 2rem;
          font-family: "Kite One", sans-serif;
          font-size: var(--step-0);

          ${media.lessThan("75rem")`   
          text-align: center;
          `};
        }
      }
    }

    ${media.lessThan("75rem")`       
    flex-wrap:wrap;
    margin-bottom: 3rem;
    `};
  }

  .ContImgAbout {
    max-width: 34rem;

    ${media.lessThan("75rem")`       
    max-width: 25rem;
    `};
  }
`;
