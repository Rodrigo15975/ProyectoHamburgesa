import styled from "styled-components";
import media from "styled-media-query";

export const MainAbout = styled.section`
  max-width: 120rem;
  min-height: 90vh;
  background-color: #fffbec;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Itim', cursive;
  .ContAboutMain {
    flex: 0 1 83rem;
    min-height: 44.4375rem;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    .InfoAbout {
      flex: 0 1 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      .About {
        flex: 0 1 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .titleInfo {
          color: #ff6240;
          font-size: var(--step-0);
        }
        .txt {
          font-size: 1.3rem;
        }
      }
      ${media.lessThan("57.875rem")`   
      flex-wrap:wrap;
        .img{
          max-width: 35rem;
          padding:1rem;
          border-radius: 1.5rem;
        }        
     `};

      ${media.lessThan("57.875rem")`   
     
        .p926{
          align-items:end;
        }        
     `};

      ${media.lessThan("30rem")`   
      flex-wrap:wrap;
        .img{
          width: 100%;
          padding:1rem;
          border-radius: 1.5rem;
        }        
     `};
    }
    .paddingInfo {
      padding: 1rem 1rem 0 1rem;
    }

    .p1024 {
      justify-content: end;
    }

    ${media.lessThan("57.875rem")`   
        flex-wrap:wrap;
        padding: 0.7rem;
       
     `};
  }
`;
