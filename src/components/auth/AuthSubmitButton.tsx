import { ButtonHTMLAttributes } from "react";
import { Button } from "../ui/button";

type AuthSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function AuthSubmitButton({
  children,
  ...props
}: AuthSubmitButtonProps) {
  return (
    <Button
      {...props}
      type="submit"
      className="w-full py-6 bg-[#483375] hover:bg-opacity-90 hover:bg-[#483375] 
      disabled:bg-opacity disabled:bg-opacity-75 rounded-sm"
    >
      {children}
    </Button>
  );
}
