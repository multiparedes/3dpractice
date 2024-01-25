import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-900 text-primary-50 hover:bg-primary-900/90 dark:bg-primary-50 dark:text-primary-900 dark:hover:bg-primary-50/90",
        destructive:
          "bg-red-500 text-primary-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-primary-50 dark:hover:bg-red-900/90",
        outline:
          "border border-primary-200 bg-white hover:bg-primary-100 hover:text-primary-900 dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50",
        secondary:
          "bg-secondary-100 text-secondary-900 hover:bg-secondary-100/80 dark:bg-secondary-800 dark:text-secondary-50 dark:hover:bg-secondary-800/80",
        ghost:
          "hover:bg-primary-100 hover:text-primary-900 dark:hover:bg-primary-800 dark:hover:text-primary-50",
        link: "text-primary-900 underline-offset-4 hover:underline dark:text-primary-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
