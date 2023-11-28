import formReducer from "../slices/formSlice";
import { updateField, submitForm } from "../slices/formSlice";

describe("formSlice", () => {
  it("should handle updateField", () => {
    const nextState = formReducer(
      undefined,
      updateField({ id: "firstName", value: "test" })
    );

    let field = null;
    let index = -1;

    for (let i = 0; i < nextState.fieldStructure.length; i++) {
      const fieldOrArray = nextState.fieldStructure[i];

      if (Array.isArray(fieldOrArray)) {
        const subField = fieldOrArray.find(
          (subField) => subField.id === "firstName"
        );
        if (subField) {
          field = subField;
          index = i;
          break;
        }
      } else if (fieldOrArray.id === "firstName") {
        field = fieldOrArray;
        index = i;
        break;
      }
    }

    expect(field && field.value).toEqual("test");
  });
  it("should handle updateField and set error for firstName", () => {
    const nextState = formReducer(
      undefined,
      updateField({ id: "firstName", value: "t" })
    );
    expect(nextState.errors.firstName).toEqual(
      "Name must have more than 3 letters"
    );
  });

  it("should handle updateField and set error for lastName", () => {
    const nextState = formReducer(
      undefined,
      updateField({ id: "lastName", value: "t" })
    );
    expect(nextState.errors.lastName).toEqual(
      "Last name must have more than 3 letters"
    );
  });

  it("should handle updateField and set error for Email", () => {
    const nextState = formReducer(
      undefined,
      updateField({ id: "Email", value: "test" })
    );
    expect(nextState.errors.Email).toEqual("Invalid email");
  });

  it("should handle updateField and set error for phone", () => {
    const nextState = formReducer(
      undefined,
      updateField({ id: "phone", value: "test" })
    );
    expect(nextState.errors.phone).toEqual("Phone must contain an area code");
  });

  it("should handle submitForm", () => {
    const nextState = formReducer(undefined, submitForm());
    expect(nextState.submitedData).toEqual({});
  });
});
