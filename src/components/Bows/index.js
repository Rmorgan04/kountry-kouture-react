import { bows } from "../../data/data";
import { NavLink } from "react-router-dom";

function Bows() {
    return (
        <div>
            <h2>Bows</h2>
            <ul className="product-container">
                {bows.map((product) => (
                    <li><NavLink key={product.id} to="collections/seasonal/:productId">
                        <div className="product-details">
                            <div className="product-img-container">
                                <img className="product-img" src={`${product.img}`} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <p>{product.name} </p>
                            </div>
                        </div>
                    </NavLink></li>
                ))}
            </ul>
        </div>
    )
};


export default Bows;