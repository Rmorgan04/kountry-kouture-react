import { SeasonalProducts } from "../../data/data";
import Testemonials from "../Testemonials";
import Seasonal from "../Collections/Seasonal";


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
            <section>
            <h2 classNameName="collection-header">Seasonal Items</h2>
                <Seasonal collection={SeasonalProducts}/>
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
                <div className="babes_grid">
                    <img src="img/alfie.jpg" alt=""/>
                    <img src="img/amy.jpg" alt=""/>
                    <img src="img/charlotte.jpg" alt=""/>
                    <img src="img/cupcake.jpg" alt=""/>
                    <img src="img/leo.jpg" alt=""/>
                    <img src="img/princess.jpg" alt=""/>
                    <img src="img/ruffles.jpg" alt=""/>
                    <img src="img/yippy.jpg" alt=""/>
                </div>
            </section>
        </main>
    )
};

export default Landing;