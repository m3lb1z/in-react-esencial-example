import { render, screen, fireEvent } from "@testing-library/react";
import Libro from "./Libro";

describe("Libro component", () => {
  const libro = {
    titulo: "The Great Gatsby",
    publicado: 1925,
  };

  test("renders libro title and publication year", () => {
    render(<Libro libro={libro} />);
    const titleElement = screen.getByText(libro.titulo);
    const yearElement = screen.getByText(`Publicado en ${libro.publicado}`);
    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
  });

  test("changes class on button click", () => {
    render(<Libro libro={libro} />);
    const buttonElement = screen.getByText("Seleccionar");
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveClass("seleccionado");
  });
});
