import { ContCart, MainCart } from "./StyledCart/StyledCart";
import NotDataCart from "./NotDataCart";
import { FaWindowClose } from "react-icons/fa";
import { AnimatePresence, m } from "framer-motion";
import CartDataOrder from "./CartDataOrder/CartDataOrder";
import { CiMoneyCheck1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Cart = ({
  openCart,
  setOpenCart,
  orderRequieredRecommend,
  setOrderRequieredRecommend,
}) => {
  const Navigate = useNavigate();

  const closeCart = () => {
    document.querySelector("html").style.overflowY = "";
    setOpenCart(!openCart);
  };

  const deleteBurger = (id) => {
    const newOrdersBurgers = orderRequieredRecommend.filter((d) => d.id !== id);
    setOrderRequieredRecommend(newOrdersBurgers);
  };

  const pagoSelection = () => {
    Navigate("/home/menu/pago");
    document.querySelector("html").style.overflowY = "";
  };

  return (
    <>
      <MainCart onClick={closeCart}>
        <ContCart onClick={(e) => e.stopPropagation()}>
          <m.div className="data">
            <m.button
              onClick={closeCart}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1 }}
              className="buttonCloseCart"
            >
              <FaWindowClose />
            </m.button>
            {orderRequieredRecommend.length > 0 ? (
              <AnimatePresence>
                {orderRequieredRecommend.map((d) => (
                  //Informacion para mostrar el carrito
                  <m.div
                    key={`card-order-${d.id}`}
                    //Pasamos la funcion para eliminar el card, que no desea el usuario
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  >
                    <CartDataOrder
                      //Pasamos los datos que el usuario haya pedido en el carrito
                      dataCart={d}
                      deleteBurger={deleteBurger}
                    />
                  </m.div>
                ))}
              </AnimatePresence>
            ) : (
              <NotDataCart />
            )}

            {orderRequieredRecommend.length > 0 && (
              <button
                onClick={pagoSelection}
                className="buttonBuyOrder"
                style={{ width: "100%" }}
              >
                Buy <CiMoneyCheck1 />{" "}
              </button>
            )}
          </m.div>
        </ContCart>
      </MainCart>
    </>
  );
};

export default Cart;
