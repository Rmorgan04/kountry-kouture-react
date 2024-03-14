import { NavLink } from "react-router-dom";
import Seasonal from "../Seasonal";
import Bows from "../Bows";
import { SeasonalProducts, bows } from "../../data/data";

function Collections() {
    return (
        <div className="collection-page-container">
            <ul>
                <li><NavLink to="/collections">Seasonal</NavLink></li>
                <li><NavLink to="/collections/bows">Bows</NavLink></li>
                <li><NavLink to="/collections/boys">Boys Clothing</NavLink></li>
                <li><NavLink to="/collections/girls">Girls Clothing</NavLink></li>
            </ul>
            <h2>Collections</h2>
            <h3>Seasonal</h3>
            <Seasonal collection={SeasonalProducts} />
            <Bows collection={bows} />
        </div>
    )
};


export default Collections;