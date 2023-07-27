import { FunctionComponent, HtmlHTMLAttributes } from "react";

interface IButtonContainerProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  children: string;
}

export const ButtonComponent: FunctionComponent<IButtonContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className="bg-gradient-to-tr from-purple-600 to-blue-600 px-4 py-2 w-[300px] text-white rounded-md hover:to-blue-700 hover:from-purple-700 mt-6"
    >
      {children}
    </button>
  );
};
