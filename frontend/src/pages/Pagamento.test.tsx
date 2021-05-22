import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagamento from "./Pagamento";

describe("Pagamento", () => {
  test("testa um pagamento sem valor", () => {
    render(<Pagamento />);

    const button = screen.getByText("Inserir");
    userEvent.click(button);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Informe o código de barras"
    );
  });

  test("testa input do valor de pagamento sem decimais", () => {
    render(<Pagamento />);

    const input = screen.getByLabelText("Valor");
    fireEvent.change(input, { target: { value: "1025" } });
    expect(input.value).toBe("R$ 1025,00");
  });

  test("testa input do valor de pagamento com decimais", () => {
    render(<Pagamento />);

    const input = screen.getByLabelText("Valor");
    fireEvent.change(input, { target: { value: "421,3" } });
    expect(input.value).toBe("R$ 421,30");
  });
});
