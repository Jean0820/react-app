import { useState } from "react";
import { Data, ExpensesTableProps } from "./type";
import categories from "./utiles";

const ExpensesTable = ({
  expenses,
  onDelete,
}: ExpensesTableProps) => {
  const [category, setCategory] = useState("");

  const filteredExpenses = expenses.filter((expense: Data) => {
    if (category == "") return expense;
    return expense.category === category;
  });

  const totalAmount = filteredExpenses.reduce(
    (total: number, expense: Data) => {
      return total + expense.amount;
    },
    0
  ).toFixed(2);

  if (expenses.length === 0) return null; ;

  return (
    <div className="p-4 border rounded-sm">
      <div className="mb-3">
        <select
          onChange={(event) => setCategory(event.target.value)}
          id="category"
          className="form-select"
        >
          <option></option>
          <option value="">All Category</option>
          {categories.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense: Data) => (
              <tr>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    onClick={() => onDelete(expense)}
                    type="submit"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>$ {totalAmount}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <footer></footer>
      </table>
    </div>
  );
};

export default ExpensesTable;
