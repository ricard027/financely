import tw from "tailwind-styled-components";
import { HtmlHTMLAttributes } from "react";

interface IInputContainerProps {
  placeholder?: String;
  label?: string;
  type: Number | string;
  hasError: Boolean;
}

const error = `boder border-solid border-red-500
`;

const InputContainer = tw.input<IInputContainerProps>`
${({ hasError }) => (hasError ? error : ``)}
`;

interface IInputContainerProps extends HtmlHTMLAttributes<HTMLInputElement> {}
const InputComponent = ({ label, placeholder }: IInputContainerProps) => {
  return (
    <div>
      <label>{label}</label>
      <InputContainer placeholder={placeholder} />
    </div>
  );
};
export default InputComponent;
