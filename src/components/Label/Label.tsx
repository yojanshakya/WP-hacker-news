import React, { ComponentPropsWithRef } from 'react'

export function Label(props: ComponentPropsWithRef<"label">) {
	

	return (
		<label {...props}>{props.children}</label>
	)
}
