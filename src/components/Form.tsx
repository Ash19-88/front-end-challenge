import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  submitForm,
  updateField,
  useTypedSelector,
} from "../redux/slices/formSlice";
import { StyledForm, Title } from "./styledComponents/StyledForm";
import { StyledInput } from "./styledComponents/StyledInput";
import { FieldContainer } from "./styledComponents/FieldContainer";
import { StyledOption, StyledSelect } from "./styledComponents/StyledSelect";
import { StyledTextarea } from "./styledComponents/StyledTextarea";
import { ErrorsContainer } from "./styledComponents/ErrorsContainer";
import { Button } from "./styledComponents/Button";
import { InputContainer } from "./styledComponents/InputContainer";
import { ArrayInputs } from "./styledComponents/ArrayInputs";
import { useNavigate } from "react-router-dom";

const Form: React.FC = () => {
  const fieldStructure = useTypedSelector((state) => state.form.fieldStructure);
  const errors = useTypedSelector((state) => state.form.errors);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (id: string, value: string) => {
    dispatch(updateField({ id, value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(submitForm());
    setSubmitted(true);
    navigate("/thankyou");
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <Title>Information Form</Title>
        {fieldStructure.map((field, index) => {
          if (Array.isArray(field)) {
            return (
              <FieldContainer key={index}>
                {field.map((subField) => (
                  <InputContainer key={subField.id}>
                    <ArrayInputs
                      id={subField.id}
                      placeholder={subField.placeholder}
                      required={subField.required}
                      title={subField.title}
                      type={subField.type}
                      value={subField.value}
                      onChange={(e) =>
                        handleChange(subField.id, e.target.value)
                      }
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
                  title={field.title}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                >
                  {field.options.map((option: string, index: any) => (
                    <StyledOption key={index} value={option}>
                      {option}
                    </StyledOption>
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
                  title={field.title}
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
                  title={field.title}
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
        <Button type="submit" title="submit">
          Submit
        </Button>
      </StyledForm>
    </div>
  );
};

export default Form;
