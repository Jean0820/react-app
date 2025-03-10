import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(5, { message: "The min number of characters is 5" }),
  age: z.number().min(5),
});

type formData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      age: 0,
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="pt-1 text-danger">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="pt-1 text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
