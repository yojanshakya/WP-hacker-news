import React, { ComponentPropsWithRef } from 'react'

export default function TextInput(props : ComponentPropsWithRef<"input">) {
	
	return (
		<input {...props}/>
	)
}
