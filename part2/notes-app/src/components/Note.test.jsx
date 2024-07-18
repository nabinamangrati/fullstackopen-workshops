import { render, screen } from "@testing-library/react";
import Note from "./Notes";
import userEvent from "@testing-library/user-event";

test("renders content", () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const { container } = render(<Note note={note} />);
  screen.debug();
  const div = container.querySelector(".note");
  expect(div).toHaveTextContent(
    "Component testing is done with react-testing-library"
  );

  // const element = screen.getByText(
  //   "Component testing is done with react-testing-library"
  // );
  // expect(element).toBeDefined();
});
test("clicking the button calls event handler once", async () => {
  const note = {
    content: "Component testing is done with react-testing-library",
    important: true,
  };

  const mockHandler = vi.fn();

  render(<Note note={note} updatedNote={mockHandler} />);

  const user = userEvent.setup();
  const button = screen.getByText("change true");
  // const button = screen.getByText("change true", { exact: false });
  await user.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});
