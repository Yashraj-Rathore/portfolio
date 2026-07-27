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
    screen.getAllByRole("link", { name: /lead recovery/i })[0]
  ).toHaveAttribute(
    "href",
    "https://github.com/Yashraj-Rathore/LeadRecovery"
  );
  expect(screen.queryByText("Private product build")).not.toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /download résumé/i })
  ).toHaveAttribute(
    "href",
    "/Yash_Rathore_General_Software_Engineer_Resume.pdf"
  );
  expect(
    screen.getByRole("link", { name: /download résumé/i })
  ).toHaveAttribute(
    "download",
    "Yash_Rathore_General_Software_Engineer_Resume.pdf"
  );
  expect(screen.queryByText("Allegro")).not.toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /full-stack developer · deputy team lead/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText("35+")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /b\.eng\. \(honours\) · software engineering/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /send me a message/i })).toHaveAttribute(
    "href",
    "mailto:rathore.yash6@yahoo.com"
  );
});
