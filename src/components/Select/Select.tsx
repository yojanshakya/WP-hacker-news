import React, { ComponentPropsWithRef } from 'react'

export function Select(props: ComponentPropsWithRef<"select">) {
	

	return (
		<select {...props} className={`${props.className?? ""} select`}>
			{
				props.children
			}
		</select>
	)
}
