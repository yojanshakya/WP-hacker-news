import { ComponentPropsWithRef } from 'react'

export enum ButtonTypes   {
	"success" = "success",
	"danger" = "danger",
	"plain" = "plain"
}

type IProps = ComponentPropsWithRef<"button"> & {
	buttonType ?: ButtonTypes 
}
export function Button({ buttonType  = ButtonTypes.success,...props}: IProps) {
	const buttonClassMap : Record<ButtonTypes, string> = {
		"danger": "button__danger",
		"success": "button__success",
		"plain":"" 
	}

	return (
		<button {...props} className={`button ${props.className} ${buttonClassMap[buttonType] }`}/>
	)
}
