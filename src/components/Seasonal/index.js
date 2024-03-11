import { NavLink } from "react-router-dom";

function Seasonal({collection}) {
    return (
        <div className="collection-section">
            {collection.map((product) => (
                <ul>
                    <li><NavLink key={product.id} to="collections/seasonal/:productId">
                        <div className="collection-container">
                            <div className="collection-img-container">
                                <img className="collection-img" src={`${product.img}`} alt={product.name} />
                            </div>
                            <div className="collection-info">
                                <p>{product.name} </p>
                            </div>
                        </div>
                    </NavLink></li>
                </ul>
            ))}
        </div>
        
    )
};

export default Seasonal;