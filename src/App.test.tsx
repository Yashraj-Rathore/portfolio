import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio identity and real project links", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /complex systems, made human/i })
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("link", { name: /paymentops orchestrator/i })[0]
  ).toHaveAttribute(
    "href",
    "https://github.com/Yashraj-Rathore/paymentops-orchestrator"
  );
  expect(
    screen.getByRole("heading", { name: "Lead Recovery" })
  ).toBeInTheDocument();
  expect(screen.getByText("Private product build")).toBeInTheDocument();
  expect(screen.queryByText("Allegro")).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /send me a message/i })).toHaveAttribute(
    "href",
    "mailto:rathore.yash6@yahoo.com"
  );
});
