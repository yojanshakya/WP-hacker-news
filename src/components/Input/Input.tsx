import React, { ComponentPropsWithRef } from 'react'

export default function Input(props : ComponentPropsWithRef<"input">) {
	
	return (
		<input {...props}/>
	)
}
