import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Resgate from "./Resgate";

describe("Resgate", () => {
  test("testa um resgate sem valor", () => {
    render(<Resgate />);

    const button = screen.getByText("Inserir");
    userEvent.click(button);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Informe o código de barras"
    );
  });

  test("testa input do valor de resgate sem decimais", () => {
    render(<Resgate />);

    const input = screen.getByLabelText("Valor");
    fireEvent.change(input, { target: { value: "803" } });
    expect(input.value).toBe("R$ 803,00");
  });

  test("testa input do valor de resgate com decimais", () => {
    render(<Resgate />);

    const input = screen.getByLabelText("Valor");
    fireEvent.change(input, { target: { value: "112,04" } });
    expect(input.value).toBe("R$ 112,04");
  });
});
