import { ComponentPropsWithRef } from 'react'

export function Label(props: ComponentPropsWithRef<"label">) {
	
	return (
		<label {...props} className={`label ${props.className ?? ""}`}>{props.children}</label>
	)
}
