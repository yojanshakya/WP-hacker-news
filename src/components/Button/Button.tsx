import { ComponentPropsWithRef } from "react";
import { Spinner } from "../Spinner/Spinner";

export enum ButtonTypes {
  "success" = "success",
  "danger" = "danger",
  "plain" = "plain",
}

type IProps = ComponentPropsWithRef<"button"> & {
  buttonType?: ButtonTypes;
  isLoading?: boolean;
};
export function Button({
  buttonType = ButtonTypes.success,
  isLoading = false,
	children,
  ...props
}: IProps) {
  const buttonClassMap: Record<ButtonTypes, string> = {
    danger: "button__danger",
    success: "button__success",
    plain: "",
  };

  return (
    <button
      {...props}
      className={`button ${props.className ?? ""} ${
        buttonClassMap[buttonType]
      }`}
			disabled={props.disabled || isLoading}
    >
			{
				isLoading ? <Spinner/> : children
			}
		</button>
  );
}
