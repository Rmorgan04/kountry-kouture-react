import { babes } from "../../data/data"

function Babes() {
    return (
        <div className="babes_grid">
            {babes.map((image) => (
                <img src={`${image}`} alt="" />
            ))}
        </div>
    )
};

export default Babes;