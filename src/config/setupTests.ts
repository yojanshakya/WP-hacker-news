import "@testing-library/jest-dom/extend-expect";
import { afterEach,expect } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// todo 
// mock server

expect.extend(matchers);

afterEach(() => {
	cleanup();
});