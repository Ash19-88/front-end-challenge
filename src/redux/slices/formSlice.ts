import { createSlice } from "@reduxjs/toolkit";
import formFields from "../../field-set.json";
import { TypedUseSelectorHook, useSelector } from "react-redux";

interface FormState {
  fields: any[];
  submitedData: any;
}

type RootState = {
  form: FormState;
};

const initialState: FormState = {
  fields: formFields,
  submitedData: {},
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
