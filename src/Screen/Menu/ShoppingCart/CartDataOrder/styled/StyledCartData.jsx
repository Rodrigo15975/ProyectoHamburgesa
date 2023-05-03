import styled from "styled-components";

export const ContMain = styled.div`
  padding: 0.3rem 0.8rem 0.3rem 0.8rem;
  .ContDataCart {
    border: 0.1rem solid #ffbf45;
    display: flex;
    border-radius: 0.7rem;
    justify-content: center;
    padding: 0.5rem;
    .DataCart {
      font-family: Itim, cursive;
      flex: 0 1 17rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
      }

      .Cart {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.2rem;

        //Descrpcion en el cart de la pedido burger

        .CartDescription {
          h2 {
            margin-bottom: 0.5rem;
            color: #ffd495;
            font-size: var(--step-1);
          }
        }

        .BuyPhaseBurger {
          flex: 0 1 100%;
          display: flex;
          
          .priceburger{
            p{
              color:  rgb(255 65 109);
            }
          }
        }

        .CantidadPrice {
          border: 0.1rem solid black;
          height: 1.7rem;
          border-radius: 1rem;
          align-items: center;
          .buttonBuy {
            flex: 0 1 50%;

            p {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              
              .CountPrice {
                border: 0.1rem solid black;
                width: 3rem;
                height: 1.2rem;
                border-radius: 0.5rem;
                
                display: flex;  
                align-items: center;
                justify-content: center;
              }
            }
          }
        }

        //Botones de agregar y restar
        .ContbtnAddSubTraction {
          gap: 1rem;
          align-items: center;
          //SubContaddysub
          .btnAddSub {
            display: flex;
            gap: 1rem;
            button {
              width: 2rem;
              border-radius: 2rem;
              border: 0.1rem solid black;
              background-color: transparent;
              height: 2rem;
            }
          }

          .trash-burger{
            button{
              display: flex;
              align-items: center;
              justify-content: center;
              svg{
                font-size: 1.5rem;
                color: red;
              }
            }
          }
        }
      }
    }
    .Data {
      flex-wrap: wrap;
    }
  }
`;
