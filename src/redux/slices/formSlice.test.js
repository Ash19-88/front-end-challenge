import formReducer from "../slices/formSlice";
import { updateField, submitForm } from "../slices/formSlice";

describe("formSlice", () => {
  it("should handle updateField", () => {
    const nextState = formReducer(
      undefined,
      updateField({ id: "1", value: "test" })
    );
    const field = nextState.fields.find((field) => field.id === "1");
    expect(field && field.value).toEqual("test");
  });

  it("should handle submitForm", () => {
    const nextState = formReducer(undefined, submitForm());
    expect(nextState.submitedData).toEqual({});
  });
});
