import React from "react";
import { useDispatch } from "react-redux";
import {
  submitForm,
  updateField,
  useTypedSelector,
} from "../redux/slices/formSlice";

const Form: React.FC = () => {
  const fields = useTypedSelector((state) => state.form.fields);
  const errors = useTypedSelector((state) => state.form.errors);

  const dispatch = useDispatch();

  const handleChange = (id: string, value: string) => {
    dispatch(updateField({ id, value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitForm());
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        if (Array.isArray(field)) {
          return field.map((subField) => (
            <div key={subField.id}>
              <input
                id={subField.id}
                placeholder={subField.placeholder}
                required={subField.required}
                type={subField.type}
                value={subField.value}
                onChange={(e) => handleChange(subField.id, e.target.value)}
              />
            </div>
          ));
        } else if (field.type === "select") {
          return (
            <div key={field.id}>
              <select
                id={field.id}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              >
                {field.options.map((option: string, index: any) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        } else if (field.type === "textarea") {
          return (
            <div key={field.id}>
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            </div>
          );
        } else {
          return (
            <div key={field.id}>
              <input
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                type={field.type}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            </div>
          );
        }
      })}
      <div style={{ color: "red" }}>{errors.firstName}</div>
      <div>{errors.lastName}</div>
      <div>{errors.Email}</div>
      <div>{errors.phone}</div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
