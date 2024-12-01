import { Link } from "react-router-dom";
import "./home.css"

export default function Home() {
    return (
        <>
            <div id="carouselE" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselE" data-bs-slide-to="0" className="active" aria-current="true"
                        aria-label="slide 1"></button>
                    <button type="button" data-bs-target="#carouselE" data-bs-slide-to="1" aria-current="true"
                        aria-label="slide 2"></button>
                    <button type="button" data-bs-target="#carouselE" data-bs-slide-to="2" aria-current="true"
                        aria-label="slide 3"></button>
                    <button type="button" data-bs-target="#carouselE" data-bs-slide-to="3" aria-current="true"
                        aria-label="slide 4"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/cajas.jpg" className="d-block w-100" alt="" />
                        <div className="carousel-caption">
                            <h5>Gabinetes</h5>
                            <Link to="/products/category/gabinetes" className="btn btn-primary mt-3">Ver más</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/ram.jpg" className="d-block w-100" alt="" />
                        <div className="carousel-caption">
                            <h5>RAM</h5>
                            <Link to="/products/category/ram" className="btn btn-primary mt-3">Ver más</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/procesador.jpg" className="d-block w-100" alt="" />
                        <div className="carousel-caption">
                            <h5>Procesadores</h5>
                            <Link to="/products/category/procesadores" className="btn btn-primary mt-3">Ver más</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/graficas.jpg" className="d-block w-100" alt="" />
                        <div className="carousel-caption">
                            <h5>Targetas Graficas</h5>
                            <Link to="/products/category/graficas" className="btn btn-primary mt-3">Ver más</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselE" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselE" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                </button>
            </div>
        </>
    );
}
