import React from "react";
import history from "../../../assets/history";
import GreenButton from "../../GreenButton/GreenButton";
import checkoutStyles from "./form.module.scss";

const Form = () => {
  return (
    <div className={checkoutStyles.outer}>
      <form className={checkoutStyles.orderForm}>
        <h1 style={{ textAlign: "center" }}>Confirm your order!</h1>

        <div>
          <input type="text" required="required" />
          <span className={checkoutStyles.label}>
            <h3>First name</h3>
          </span>{" "}
          <span className={checkoutStyles.back}></span>
        </div>

        <div>
          <input type="text" required="required" />
          <span className={checkoutStyles.label}>
            <h3>Last name</h3>
          </span>{" "}
          <span className={checkoutStyles.back}></span>
        </div>

        <div>
          <input type="email" required="required" />
          <span className={checkoutStyles.label}>
            <h3>Email</h3>
          </span>{" "}
          <span className={checkoutStyles.back}></span>
        </div>

        <div>
          <input type="phone" required="required" />
          <span className={checkoutStyles.label}>
            <h3>Phone</h3>
          </span>
          <span className={checkoutStyles.back}></span>
        </div>

        <GreenButton
          action={() => {
            sessionStorage.clear();
            history.push("/ordered");
          }}
          type="submit"
        >
          Submit
        </GreenButton>
      </form>
    </div>
  );
};

export default Form;
