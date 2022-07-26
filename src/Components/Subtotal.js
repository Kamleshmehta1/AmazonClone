import React from "react";
import "./Subtotal.css";
import { getBasketTotal } from "./Reducer";
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from "./StateProvider";

const Subtotal = () => {
  const [{ basket }, dispatch] = UseStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
