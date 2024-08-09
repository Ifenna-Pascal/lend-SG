import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { cn } from "../../../utilities/class-names";

type ButtonType = ComponentProps<"button"> & ComponentProps<"a">;
export interface BaseButtonProps extends ButtonType {}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[5px] font-sora gap-2.5 font-outfit transition-colors disabled:pointer-events-none duration-300 font-medium disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-white bg-primary-gradient",
        primary:
          "hover:bg-gradient-to-r from-[#4BD5A8] to-[#007E2D] duration-300 text-white bg-[#1A1A1A] border-2 border-gray-500 hover:text-white hover:border hover:border-gradient-to-r from-[#4BD5A8] to-[#007E2D]",
        outline:
          "bg-[#FB72001A] text-white border duration-300 hover:bg-primary-100 hover:border-none border-[#FB7200CC]",
      },
      size: {
        default: "w-[227px] font-[12px] h-[43px] p-[10px]",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends BaseButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className, fullWidth }))}
      {...props}
    />
  );
};

export default Button;
