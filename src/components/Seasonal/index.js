import { NavLink } from "react-router-dom";

function Seasonal({collection}) {
    return (
        <div>
            <ul className="product-container">
                {collection.map((product) => (
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

export default Seasonal;