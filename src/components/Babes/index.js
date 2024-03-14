import { babes } from "../../data/data"

function Babes() {
    return (
        <div className="babes_grid">
            {babes.map((image) => (
                <img key={image.id} src={`${image.image}`} alt="" />
            ))}
        </div>
    )
};

export default Babes;