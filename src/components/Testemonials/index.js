import { NavLink } from "react-router-dom";
import { testemonials } from "../../data/data";

function Testemonials() {
    return (
            <div className="review-slider">
                <div className="review-container">
                    {testemonials.map((item) => (
                        <div className="review-content" key={item.id}>
                            <div className="user-review">
                                <p className="user-name">{item.user}</p>
                                <p className="review-date">{item.date}</p>
                            </div>
                            <div className="product-review">
                                <img className="product-review-img" src={`${item.product.img}`} alt={item.product.name}/>
                                <NavLink to="/collections/bows/:productId">{item.product.name}</NavLink>
                            </div>
                            <div className="review-stars">
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                            </div>
                            <div>
                                <p className="review-quote">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
};

export default Testemonials;

{/* <div className="review-content">
                        <div className="user-review">
                            <p className="user-name">Dogbert</p>
                            <p className="review-date">11/23/2021</p>
                        </div>
                        <div className="product-review">
                            <img className="product-img" src="https://i.imgur.com/EuhJfEG.jpg" alt=""/>
                            <a href="#" className="product-name">Little Pink Piggy</a>
                            <div className="review-stars">
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                                <img src="https://i.imgur.com/xeBhAsE.png" alt="" className="star"/>
                            </div>
                        </div>
                        <div>
                        <p className="review-quote">This is the most bestest bows in the whole world!</p>
                        </div>
                    </div> */}