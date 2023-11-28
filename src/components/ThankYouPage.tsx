import { useTypedSelector } from "../redux/slices/formSlice";
import { FieldContainer } from "./styledComponents/FieldContainer";
import { InputContainer, Items } from "./styledComponents/InputContainer";
import {
  StyledImage,
  StyledThankyouPage,
  Subtitle,
  Title,
} from "./styledComponents/StyledForm";
import ThankyouImage from "../thanku.jpg";

const ThankyouPage = () => {
  const submitedData = useTypedSelector((state) => state.form.submitedData);
  const fieldStructure = useTypedSelector((state) => state.form.fieldStructure);

  return (
    <StyledThankyouPage>
      <Title>Thank you!</Title>
      <Subtitle>Your Submitted Information</Subtitle>
      <StyledImage src={ThankyouImage} alt="thank-you-image" />
      {fieldStructure.map((field, index) => {
        if (Array.isArray(field)) {
          return (
            <FieldContainer key={index}>
              {field.map((subField) => (
                <InputContainer key={subField.id}>
                  <Items>{submitedData[subField.id]}</Items>
                </InputContainer>
              ))}
            </FieldContainer>
          );
        } else {
          return (
            <InputContainer key={field.id}>
              <Items>{submitedData[field.id]}</Items>
            </InputContainer>
          );
        }
      })}
    </StyledThankyouPage>
  );
};

export default ThankyouPage;
