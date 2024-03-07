import { NavLink } from "react-router-dom";

function Navigation () {
    return (
        <header>
            <section class="social-media">
                <a href="https://www.facebook.com/groups/Missprissbowz/?ref=share&mibextid=K35XfP">Join the VIP <i class="fa fa-facebook"></i></a>
                
            </section>
            <section class="title-and-nav-section">
                <nav class="title-nav-container">
                    <div class="left-nav">
                        <ul>
                            <li><button class="menu-btn"><span class="material-symbols-outlined">menu</span></button></li>
                            <li class="hidden"><NavLink class="home-btn" to="/"><span class="material-symbols-outlined">home</span></NavLink></li>
                            <li><a class="search-btn hidden" href="products.html"><span class="material-symbols-outlined">search</span></a>
                                <div class='menu-dropdown'>    
                                    <div class="menu-content hidden">
                                        <h3 class="menu-title">Collections</h3>
                                        <ul>
                                            <li class="menu-item">Seasonal</li>
                                            <li class="menu-item">Bows</li>
                                            <li class="menu-item">Boy's Clothes</li>
                                            <li class="menu-item">Girls Clothes</li>
                                        </ul>
                                        <h3 class="menu-title">Account</h3>
                                        <ul>
                                            <li class="menu-item"><NavLink to="/login">Sign In</NavLink></li>
                                            <li class="menu-item">Newsletter</li>   
                                        </ul>
                                    </div>
                                </div>
                            </li>     
                        </ul>
                    </div>
                    <div class="title"><h1>Kountry<br/>Kouture</h1></div>
                    <div class="right-nav">
                        <ul>
                            <li><a class="search-btn" href="products.html"><span class="material-symbols-outlined">search</span></a></li>
                            <li class="hidden account-btn"><NavLink to="/login"><span class="material-symbols-outlined">account_circle</span></NavLink></li>
                            <li><a class="cart-btn" href="cart.html"><span class="material-symbols-outlined">shopping_bag</span></a></li>
                        </ul>
                    </div>
                </nav>
                <div class="nav-dropdown">
                    <div class="dropdown">
                        <button class="dropbtn">Collections</button>
                        <div class="dropdown-content">
                            <a href="bows.html">Bows</a>
                            <a href="girls-clothes.html">Girls Clothing</a>
                            <a href="boys-clothes.html">Boys Clothing</a>
                            <a href="pre-orders.html">Pre-Orders</a>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Navigation;