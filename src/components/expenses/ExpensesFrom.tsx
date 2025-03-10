import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Expenses } from "./type";
import categories from "./utiles";

const ExpensesFrom = ({ sendData }: Expenses) => {
  const validationSchema = z.object({
    description: z
      .string()
      .min(3, "The description must be at least 3 characters")
      .max(100, "The description must be at most 3 characters"),
    amount: z.number().min(0.01, "The amount must bbe at least 0.01"),
    category: z.string().min(1, "Category filed is required"),
  });

  type formData = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendData(data);
        reset();
      })}
      className="mb-20"
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control "
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          id="category"
          className="form-select"
        >
          <option></option>
          {categories.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpensesFrom;
