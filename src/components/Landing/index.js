

// TODO - Replace Kouture Babes AND Testemonials sections with their own components
function Landing() {
    return (
        <main>
            <section class="product">
                <div class="product-container">
                    <h2>all things <span>beautiful</span></h2>
                    <h3>all bows are handmade with <span>love</span></h3>
                </div>
            </section>
            <section class="email-sub">
                <div class="email-container">
                    <h2><span>Subscribe</span> to our Email</h2>
                    <p>for insider news, product launches, and more.</p>
                    <div class="sub-btn">
                        <input class="email-input" type="email" placeholder="email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
            <section class="testemonials">
                <h3>let our <span>customers</span> speak for us</h3>
            <div class="review-slider">
                <div class="review-container">
                    <div class="review-content">
                        <div class="user-review">
                            <p class="user-name">Dogbert</p>
                            <p class="review-date">11/23/2021</p>
                            <p class="review-quote">This is the most bestest bows in the whole world!</p>
                        </div>
                        <div class="product-review">
                            <img class="product-img" src="../../data/Img/bow6.png" alt=""/>
                            <a href="#" class="product-name">Little Pink Piggy</a>
                            <div class="review-stars">
                                <img src="../../data/Img/fill star.png" alt="" class="star"/>
                                <img src="../data/Img/fill star.png" alt="" class="star"/>
                                <img src="../data/Img/fill star.png" alt="" class="star"/>
                                <img src="../data/Img/fill star.png" alt="" class="star"/>
                                <img src="../data/Img/fill star.png" alt="" class="star"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section class="babes">
                <h3>Kountry Kouture <span>Babes</span></h3>
                <div class="babes_grid">
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