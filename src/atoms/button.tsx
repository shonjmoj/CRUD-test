import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        ref={ref}
        className="border border-gray-500 px-3 py-2 text-base rounded outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:shadow"
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
