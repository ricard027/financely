import { LegacyRef, forwardRef, ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  hasError?: Boolean;
}

const InputComponent = (
  { label, placeholder, hasError, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  return (
    <div className="flex flex-col text-gray-200">
      <label className="mt-2">{label}</label>
      <input
        placeholder={placeholder}
        {...props}
        ref={ref}
        className={`rounded-md px-4 py-2 w-[300px] bg-gray-700   ${
          hasError
            ? "text-red-500 border border-solid border-red-500 placeholder-red-500"
            : "text-gray-200 placeholder:text-gray-400"
        }`}
      />
    </div>
  );
};
export default forwardRef(InputComponent);
