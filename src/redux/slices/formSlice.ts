import { createSlice } from "@reduxjs/toolkit";
import formFields from "../../field-set.json";
import { TypedUseSelectorHook, useSelector } from "react-redux";

interface FormState {
  fields: any[];
  submitedData: any;
  errors: any;
}

type RootState = {
  form: FormState;
};

const initialState: FormState = {
  fields: formFields,
  submitedData: {},
  errors: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { id, value } = action.payload;
      const fieldsFlat = state.fields.flat();
      const fieldIndex = fieldsFlat.findIndex((field) => field.id === id);
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
        fieldsFlat[fieldIndex].value = value;
        state.fields = fieldsFlat;
      } else {
        const newField = { id, value };
        state.fields.push(newField);
      }
    },

    submitForm: (state) => {
      state.submitedData = {};
      state.fields.forEach((field) => {
        if (field.value !== "") {
          state.submitedData[field.id] = field.value;
        }
      });
    },
  },
});

export const { updateField, submitForm } = formSlice.actions;

export default formSlice.reducer;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
