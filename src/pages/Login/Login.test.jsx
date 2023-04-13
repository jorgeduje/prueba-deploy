import {render, screen, fireEvent} from "@testing-library/react"
import { describe, it, expect } from "vitest"
import matchers from "@testing-library/jest-dom/matchers"
import Login from "./Login"

expect.extend(matchers)

describe("Testing login", async ()=>{
  it("login", ()=>{
    
    render(<Login />)

    let form = screen.findByRole("form")
    expect(form).toBeDefined()

    let email = screen.getByPlaceholderText("email")
    expect(email).toHaveValue("")

    let pass = screen.getByPlaceholderText("password")
    expect(pass).toHaveValue("")

    fireEvent.change(email, {target: {value: "jorge@gmail.com"}})
    expect(email).toHaveValue("jorge@gmail.com")
    
    fireEvent.change(pass, {target: {value: "123456"}})
    expect(pass).toHaveValue("123456")
    
  })
})