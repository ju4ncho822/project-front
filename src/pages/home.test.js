import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "./home";

describe("Home", () => {
  it("debe renderizar el carrusel correctamente", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const carouselImages = container.getElementsByTagName("img");  
    expect(carouselImages.length).toBe(4); 
    expect(carouselImages[0]).toHaveAttribute("src", "img/cajas.jpg");
    expect(carouselImages[1]).toHaveAttribute("src", "img/ram.jpg");
    expect(carouselImages[2]).toHaveAttribute("src", "img/procesador.jpg");
    expect(carouselImages[3]).toHaveAttribute("src", "img/graficas.jpg");


    const buttons = screen.getAllByText("Ver más");
    expect(buttons.length).toBe(4); 
    
    expect(buttons[0]).toHaveAttribute("href", "/products/category/gabinetes");
    expect(buttons[1]).toHaveAttribute("href", "/products/category/ram");
    expect(buttons[2]).toHaveAttribute("href", "/products/category/procesadores");
    expect(buttons[3]).toHaveAttribute("href", "/products/category/graficas");
  });
});
