import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Deposito from "./Deposito";

describe("Deposito", () => {
  test("testa um deposito sem valor", () => {
    render(<Deposito />);

    const button = screen.getByText("Inserir");
    userEvent.click(button);

    expect(screen.getByRole("alert")).toHaveTextContent("Informe o valor");
  });

  test("testa input do valor de deposito sem decimais", () => {
    render(<Deposito />);

    const input = screen.getByLabelText("Valor");
    fireEvent.change(input, { target: { value: "48" } });
    expect(input.value).toBe("R$ 48,00");
  });

  test("testa input do valor de deposito com decimais", () => {
    render(<Deposito />);

    const input = screen.getByLabelText("Valor");
    fireEvent.change(input, { target: { value: "81,32" } });
    expect(input.value).toBe("R$ 81,32");
  });
});
