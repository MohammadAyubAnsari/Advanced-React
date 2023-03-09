import React from "react";
import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChnageHandler = (event) => {
    props.onChnageFilter(event.taeger.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <lable>Filter by year</lable>
        <select value={props.selected} onChnage={dropdownChnageHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
