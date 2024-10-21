import * as React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`text-black flex w-full rounded-md border border-gray-500 bg-tranparent placeholder:text-gray-500 italic p-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 outline-none shadow`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
