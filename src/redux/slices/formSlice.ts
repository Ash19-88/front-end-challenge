import { createSlice } from "@reduxjs/toolkit";
import formFields from "../../field-set.json";
import { TypedUseSelectorHook, useSelector } from "react-redux";

interface FormState {
  fields: any[];
  submittedData: any;
}

type RootState = {
  form: FormState;
};

const initialState: FormState = {
  fields: formFields,
  submittedData: {},
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
        const updatedFields = [...fieldsFlat];
        updatedFields[fieldIndex].value = value;
        state.fields = updatedFields;
      }
    },
    submitForm: (state) => {
      state.submittedData = {};
      state.fields.forEach((field) => {
        state.submittedData[field.id] = field.value;
      });
    },
  },
});

export const { updateField, submitForm } = formSlice.actions;

export default formSlice.reducer;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
