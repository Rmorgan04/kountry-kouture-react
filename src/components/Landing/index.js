import { SeasonalProducts } from "../../data/data";
import Testemonials from "../Testemonials";
import Seasonal from "../Seasonal";
import Babes from "../Babes";
import { NavLink } from "react-router-dom";


// TODO - Replace Kouture Babes AND Testemonials sections with their own components
function Landing() {
    return (
        <main>
            <section className="hero">
                <div className="hero-container">
                    <h2>all things <span>beautiful</span></h2>
                    <h3>all bows are handmade with <span>love</span></h3>
                </div>
            </section>
            <section className="collection">
            <h2 className="seasonal-header">Seasonal Items</h2>
                <Seasonal collection={SeasonalProducts}/>
                <div className="shop-all-button-container">
                <span class="material-symbols-outlined flower">
                    spa
                    </span><span class="material-symbols-outlined flower">
                    spa
                    </span>
                    <NavLink to='/collections'><button className="shop-all-btn">Shop All</button></NavLink>
                <span class="material-symbols-outlined flower">
                    spa
                    </span><span class="material-symbols-outlined flower">
                    spa
                    </span>
            </div>
            </section>
            <section className="email-sub">
                <div className="email-container">
                    <h2><span>Subscribe</span> to our Email</h2>
                    <p>for insider news, product launches, and more.</p>
                    <div className="sub-btn">
                        <input className="email-input" type="email" placeholder="email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
            <section className="testemonials">
                <h3>let our <span>customers</span> speak for us</h3>
            <Testemonials />
            </section>
            <section className="babes">
                <h3>Kountry Kouture <span>Babes</span></h3>
                <Babes />
            </section>
        </main>
    )
};

export default Landing;