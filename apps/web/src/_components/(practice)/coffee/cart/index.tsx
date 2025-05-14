import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";
import S from "./styles.module.scss";
import Image from "next/image";

const CoffeeKioskCart = () => {
  const deleteCart = useCoffeKioskStore((state) => state.deleteCart);
  const cart = useCoffeKioskStore((state) => state.cart);
  const totalAmout = cart.reduce(
    (prev, curr) => (prev += curr.price * curr.quantity),
    0
  );
  return (
    <div className={S.cart}>
      <div className={S.cartList}>
        <ul className={S.rail}>
          {cart.map((item) => (
            <li key={item.id}>
              <div className={S.thumbnail}>
                <button className={S.delete} onClick={() => deleteCart(item)}>
                  X
                </button>
                <Image src={item.image} alt={item.name} fill />
              </div>
              <p className={S.name}>{item.name} sad ddsadasds </p>
              <p className={S.price}>{item.price.toLocaleString()}원</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={S.totalWrap}>
        <div className={S.total}>
          <p className={S.label}>총 결제 금액</p>
          <p className={S.amount}>{totalAmout.toLocaleString()}</p>
        </div>
        <button className={S.pay}>결제</button>
      </div>
    </div>
  );
};

export default CoffeeKioskCart;
