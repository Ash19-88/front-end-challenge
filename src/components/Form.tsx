import React from "react";
import { useDispatch } from "react-redux";
import {
  submitForm,
  updateField,
  useTypedSelector,
} from "../redux/slices/formSlice";
import { StyledForm } from "./styledComponents/StyledForm";
import { StyledInput } from "./styledComponents/StyledInput";
import { FieldContainer } from "./styledComponents/FieldContainer";
import { StyledSelect } from "./styledComponents/StyledSelect";
import { StyledTextarea } from "./styledComponents/StyledTextarea";
import { ErrorsContainer } from "./styledComponents/ErrorsContainer";
import { Button } from "./styledComponents/Button";
import { InputContainer } from "./styledComponents/InputContainer";
import { ArrayInputs } from "./styledComponents/ArrayInputs";

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
    <StyledForm onSubmit={handleSubmit}>
      {fields.map((field) => {
        if (Array.isArray(field)) {
          return (
            <FieldContainer>
              {field.map((subField) => (
                <InputContainer key={subField.id}>
                  <ArrayInputs
                    id={subField.id}
                    placeholder={subField.placeholder}
                    required={subField.required}
                    type={subField.type}
                    value={subField.value}
                    onChange={(e) => handleChange(subField.id, e.target.value)}
                  />
                </InputContainer>
              ))}
            </FieldContainer>
          );
        } else if (field.type === "select") {
          return (
            <InputContainer key={field.id}>
              <StyledSelect
                id={field.id}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              >
                {field.options.map((option: string, index: any) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </StyledSelect>
            </InputContainer>
          );
        } else if (field.type === "textarea") {
          return (
            <InputContainer key={field.id}>
              <StyledTextarea
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            </InputContainer>
          );
        } else {
          return (
            <InputContainer key={field.id}>
              <StyledInput
                id={field.id}
                placeholder={field.placeholder}
                required={field.required}
                type={field.type}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            </InputContainer>
          );
        }
      })}
      <ErrorsContainer>
        {errors.firstName && <li>{errors.firstName}</li>}
        {errors.lastName && <li>{errors.lastName}</li>}
        {errors.Email && <li>{errors.Email}</li>}
        {errors.phone && <li>{errors.phone}</li>}
      </ErrorsContainer>

      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};

export default Form;
