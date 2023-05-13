import { ComponentPropsWithRef } from 'react'

export default function TextInput(props : ComponentPropsWithRef<"input">) {
	
	return (
		<input {...props} className={`${props.className ?? ""} input `}/>
	)
}
