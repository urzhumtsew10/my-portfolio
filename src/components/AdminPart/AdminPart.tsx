import { FC, useState } from "react";
import "../AdminPart/AdminPart.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { Order } from "./Order";

export const AdminPart: FC<{}> = () => {
  interface AdminFields {
    password: string;
  }

  const PASSWORD = "Admin_part_$";

  const { handleSubmit, register, reset } = useForm<AdminFields>();
  const [isSignIn, setIsSignIn] = useState(false);

  interface Order {
    _id: string;
    name: string;
    userContact: string;
    description: string;
    price: string;
    time: string;
  }

  const [orders, setOrders] = useState<Order[]>([
    {
      _id: "",
      name: "",
      userContact: "",
      description: "",
      price: "",
      time: "",
    },
  ]);

  const tryOpenAdminPart: SubmitHandler<AdminFields> = async (data) => {
    if (data.password === PASSWORD) {
      const response = await axios.post(
        "https://my-portfolio-api-coral.vercel.app/orders",
        data
      );
      setOrders(response.data);
      setIsSignIn(true);
      reset();
    }
  };

  return (
    <div className="adminPart">
      {!isSignIn && (
        <form
          onSubmit={handleSubmit(tryOpenAdminPart)}
          className="adminPart__adminForm"
        >
          <h2 className="adminForm__title">Log in</h2>
          <input
            {...register("password")}
            name="password"
            className="adminForm__input"
            type="password"
            placeholder="Enter password"
          />
          <button className="adminForm__btn">Enter</button>
        </form>
      )}
      {isSignIn && (
        <div className="adminPart__ordersBlock">
          {orders &&
            orders.map(
              ({ _id, name, price, time, description, userContact }) => (
                <Order
                  key={_id}
                  name={name}
                  contact={userContact}
                  description={description}
                  price={price}
                  time={time}
                />
              )
            )}
        </div>
      )}
    </div>
  );
};
