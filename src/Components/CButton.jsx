import { cn } from "../utils/class";

export const CButton = ({
  children,
  className,
  noPadding,
  transparent,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        `
          bg-carrotOrange
          px-2
          sm:px-4
          md:px-6
          py-2
          md:py-4
          text-xs
          sm:text-sm
          md:text-base
          font-ubuntu
          uppercase
          text-white
          outline-none
          border-none
          shadow-none
          focus:outline-none
          `,
        {
          "p-0 md:p-0 sm:p-0": noPadding,
          "bg-transparent": transparent,
        },
        className
      )}
    >
      {children}
    </button>
  );
};
