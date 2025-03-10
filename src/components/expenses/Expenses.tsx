import { useState } from "react";
import ExpensesFrom from "./ExpensesFrom";
import ExpensesTable from "./ExpensesTable";
import { Data } from "./type";

const Expenses = () => {
  const [expenses, setExpenses] = useState<Data[] | []>([]);
  const handleReceiveData = (data: Data) => {
    setExpenses([...expenses, data]);
    console.log("expenses:", expenses);
  };

  const handleDelete = (data: Data) => {
    setExpenses(expenses.filter((expense) => expense !== data));
    console.log("expenses after delete:", expenses);
  };

  return (
    <div className="min-w-[20rem]">
      <ExpensesFrom sendData={handleReceiveData} />
      <ExpensesTable onDelete={handleDelete} expenses={expenses} />
    </div>
  );
};

export default Expenses;
