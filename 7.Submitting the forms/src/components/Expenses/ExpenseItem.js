import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Clicked !!!");
    setTitle("Updated !!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={props.amount} />
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
