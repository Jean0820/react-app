export type Data = {
  description: string;
  amount: number;
  category: string;
};

export type Expenses = {
  sendData: (data: Data) => void;
};

export type ExpensesTableProps = {
  expenses: Data[];
  onDelete: (data: Data) => void;
};

export type Post = {
  id: string;
  title: string;
  body: string;
  userId: number;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}