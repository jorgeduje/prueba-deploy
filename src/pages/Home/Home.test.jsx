import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)
describe("Testing Home", async () => {
  it("Render Home", () => {
    render(<Home email="pepito@gmail.com" password="123456" />);

    let email = document.getElementById("email")
    expect(email).toHaveTextContent("pepito@gmail.com")

    let pass = document.getElementById("password")
    expect(pass).toHaveTextContent("123456")
    expect(pass.textContent).toHaveLength(6)
    
  });
});
