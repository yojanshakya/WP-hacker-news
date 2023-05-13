import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", ()=>{
	it("displays the provided text", ()=>{
		const text = "Hello";
		render(<Button>{text}</Button>)

		expect(screen.getByRole("button")).toHaveTextContent(text)
	})

	describe("when loading props", ()=>{
		describe("is true", ()=>{
			it("displays the loading text", async ()=>{

				render(<Button isLoading>Hello world</Button>)
				
				expect(screen.getByRole("button")).toHaveTextContent("Loading...")
			})

			it("contains the disabled attribute", async ()=>{

				render(<Button isLoading>Hello world</Button>)

				expect(screen.getByRole("button")).toBeDisabled();
			})
		})

		describe("is false", ()=>{
			it("doesnot contain the disabled attribute", async ()=>{
				render(<Button >Hello world</Button>)
				
				expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
			})

			it("doesnot show the loading text", async ()=>{

				render(<Button>Hello world</Button>)

				expect(screen.getByRole("button")).not.toHaveTextContent("Loading...")
			})
		})
	})
	
})