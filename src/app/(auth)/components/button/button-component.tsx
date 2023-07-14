import tw from "tailwind-styled-components";

interface IButtonContainerProps {
  primary?: boolean;
}

const ButtonContainer = tw.button<IButtonContainerProps>`
${({ primary }) => (primary ? "bg-black" : "bg-white")}
text-white
rounded-sm
px-4
py-2
`;

interface IButtonComponentProps extends IButtonContainerProps {
  children: string;
}

export const ButtonComponent = ({
  children,
  primary,
}: IButtonComponentProps) => {
  return <ButtonContainer primary={primary}>{children}</ButtonContainer>;
};
