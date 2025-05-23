import { Link } from "react-router";
import { JSX } from "react";

const CartEmpty = (): JSX.Element => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img
      src="https://www.asp-eg.com/resources/assets/front/images/cartempty.png"
      alt="Empty cart"
    />
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);

export default CartEmpty;
