import { FC } from "react";

export const Order: FC<{
  name: string;
  contact: string;
  price: string;
  time: string;
  description: string;
}> = ({ name, contact, price, time, description }) => {
  return (
    <div className="ordersBlock__order">
      <p className="order__userName order_text">
        name: <span className="order_span">{name}</span>
      </p>
      <p className="order__userName order_text">
        contact: <span className="order_span">{contact}</span>
      </p>
      <p className="order__userName order_text">
        price: <span className="order_span">{price}$</span>
      </p>
      <p className="order__userName order_text">
        time: <span className="order_span">{time}</span>
      </p>
      <p className="order__userName order_text">
        description: <span className="order_span">{description}</span>
      </p>
    </div>
  );
};
