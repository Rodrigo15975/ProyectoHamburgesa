import styled from "styled-components";
import media from "styled-media-query";

export const MainMenu = styled.section`
  max-width: 120rem;
  height: 34.125rem;
  display: flex;
  justify-content: center;
  margin: auto;
  .contChangeImg {
    height: 30rem;
    display: flex;
    justify-content: center;
    flex: 0 1 120rem;
    margin-top: 5.5rem;
    .cont-imgChange {
      flex: 0 1 120rem;
      .pll1024 {
        ${media.lessThan("57.875rem")`            
        display: none;    
          
        `};
        height: 100%;
        width: 100%;

        object-fit: cover;
      }

      .pll926 {
        display: none;
      }
      .pll926 {
        ${media.lessThan("57.875rem")`            
        display: block; 

        `};
        height: 100%;
        width: 100%;

        ${media.lessThan("32rem")`            
        display: none; 

        `};
      }

      .pll512 {
        display: none;
        ${media.lessThan("32rem")`            
        display: block; 
        height: 100%;
        width: 100%;  
        object-fit:cover;
        `};
      }
    }

    ${media.lessThan("64rem")`       
       height: 25rem;

     `};

    ${media.lessThan("57.875rem")`       
      margin-top: 4.1rem;

     `};
  }
`;
