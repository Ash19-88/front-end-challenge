import { createSlice } from "@reduxjs/toolkit";
import formFields from "../../field-set.json";
import { TypedUseSelectorHook, useSelector } from "react-redux";

interface FormState {
  submitedData: any;
  errors: any;
  fieldStructure: any[];
}

interface Field {
  id: string;
  value: string;
}

type RootState = {
  form: FormState;
};

const initialState: FormState = {
  submitedData: {},
  errors: {},
  fieldStructure: formFields,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { id, value } = action.payload;
      let fieldIndex = -1;
      state.fieldStructure.forEach((field, index) => {
        if (Array.isArray(field)) {
          const subFieldIndex = field.findIndex(
            (subField: Field) => subField.id === id
          );
          if (subFieldIndex !== -1) {
            fieldIndex = index;
          }
        } else if (field.id === id) {
          fieldIndex = index;
        }
      });
      if (fieldIndex !== -1) {
        /* Validations */
        switch (id) {
          case "firstName":
            if (value.length < 3) {
              state.errors[id] = "Name must have more than 3 letters";
            } else {
              delete state.errors[id];
            }
            break;
          case "lastName":
            if (value.length < 3) {
              state.errors[id] = "Last name must have more than 3 letters";
            } else {
              delete state.errors[id];
            }
            break;
          case "Email":
            const emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(value)) {
              state.errors[id] = "Invalid email";
            } else {
              delete state.errors[id];
            }
            break;

          case "phone":
            const phoneRegex = /\d{3}/;
            if (!phoneRegex.test(value)) {
              state.errors[id] = "Phone must contain an area code";
            } else {
              delete state.errors[id];
            }
            break;
        }
        if (Array.isArray(state.fieldStructure[fieldIndex])) {
          state.fieldStructure[fieldIndex].forEach((subField: Field) => {
            if (subField.id === id) {
              subField.value = value;
            }
          });
        } else {
          state.fieldStructure[fieldIndex].value = value;
        }
      }
    },

    submitForm: (state) => {
      state.submitedData = {};
      state.fieldStructure.forEach((field) => {
        if (Array.isArray(field)) {
          field.forEach((subField: Field) => {
            if (subField.value !== "") {
              state.submitedData[subField.id] = subField.value;
            }
          });
        } else if (field.value !== "") {
          state.submitedData[field.id] = field.value;
        }
      });
    },
  },
});

export const { updateField, submitForm } = formSlice.actions;

export default formSlice.reducer;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
