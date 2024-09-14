import React, { useState } from "react";
import './Why_Choose_Gelato.css';
import '../Header.css';
import FirstImage from "../../assets/images/img2.webp"

function Why_Choose_Gelato() {
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIssOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <header className="header">
                <h4 className='heading_link'><a href="#">FREE SHIPPING for orders over $300. Order today <i className="fa-solid fa-circle-exclamation"></i></a></h4>

                <nav className="navbar">
                    <div className="navbar-container">
                        <div className="logo">
                            <img src="./images/gelato_logo_black.svg" alt="img" />
                        </div>
                        <ul className="nav-links">
                            <li><a href="#home"><img src="./images/contact_us_img.svg" />Contact us</a></li>
                            <li><a href="#products"><img src="./images/INR_img.svg" />IN/INR</a></li>
                            <li><a href="#about"><img src="./images/cart_img.svg" />Cart</a></li>
                            <li><a href="#contact"><img src="./images/sign_img.svg" />Sign in</a></li>
                            <li><button className='Button1'>Sign up for free</button></li>
                        </ul>
                    </div>
                </nav>

                <div className="horizontal-line"></div>

                <div className='dropdown-menu-header'>
                    <ul>
                        <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >Product</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li>
                        <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >Start selling</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li> <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >Tools and apps</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li> <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >Pricing</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li> <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >Resources</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li> <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >Pro sellers</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li> <li>
                            <select value={selectedOption} onChange={handleChange}>
                                <option value={"#"} >GelatoConnect</option>
                                <option value={"#"} >Mens clothing</option>
                                <option value={"#"} >Women clothing</option>
                                <option value={"#"} >Kids & baby clothing</option>
                                <option value={"#"} >Wall art</option>
                                <option value={"#"} >Calenders</option>
                                <option value={"#"} >Cards</option>
                                <option value={"#"} >Photo books</option>
                                <option value={"#"} >Hats</option>
                                <option value={"#"} >Phone cases</option>
                                <option value={"#"} >Mugs & Bottle</option>
                                <option value={"#"} >Stationery & Business</option>
                            </select>
                        </li>
                    </ul>
                </div>

                <div className='horizontal-line'></div>

                <div className="seller-container">
                    <div className="image-text-container">
                        <div className="single-image-text-container">
                            <h2>Scale globally and sustainably with Gelato's local production</h2>
                            <span>Sign up for free and only pay for what you sell</span>
                            <p>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
                            <div className="button-container">
                                <a href="https://www.gelato.com/in/tools-and-apps">Get started for free</a>
                                <a href="https://www.gelato.com/in/tools-and-apps">See our products</a>
                            </div>
                            <div className="star-rating-container">
                                <img className="shopify-logo" src='./images/shopify_img.webp' alt='img' />
                                <div className='rating-container'>
                                    <div>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    4.8/5
                                </div>
                                based on 887 reviews
                            </div>
                        </div>
                    </div>
                    <img src="./images/img1.webp" alt="img" />
                </div>

                <div className="seller-container-header">
                    <div className="seller-container-inner-header">
                        <div>
                            <p>90%</p>
                            <p>of all orders are produced locally</p>
                        </div>
                        <div>
                            <p>90%</p>
                            <p>of all orders are produced locally</p>
                        </div>
                        <div>
                            <p>90%</p>
                            <p>of all orders are produced locally</p>
                        </div>
                    </div>
                </div>
            </header>

            <h4 className='heading_link mobile-link'><a href="#">FREE SHIPPING for orders over $300. Order today <i className="fa-solid fa-circle-exclamation"></i></a></h4>

            <nav className={`${isOpen && "active"} mobile-header`}>
                <div class="nav-bar">
                    <div className="nav-bar-container">
                        <i class='fas fa-bars' onClick={() => setIssOpen(true)}></i>
                        <img src="./images/gelato_logo_black.svg" alt="Logo" />
                    </div>
                    <a className="signup">Sign up for free</a>
                    <div class="menu">
                        <div class="logo-toggle">
                            <div className="logo-toggle-container">
                                <i class='fa-solid fa-times siderbarClose' onClick={() => setIssOpen(false)}></i>
                                <div className="language-box">
                                    <i className="fas fa-globe"></i>
                                    EN/INR
                                </div>
                                <div className="vertical-line"></div>
                                <div className="language-box">
                                    <i className="fas fa-cart-shopping"></i>
                                    Cart
                                </div>
                            </div>

                            <div className="horizontal-line"></div>

                            <div className="d-flex justify-content-between my-2">
                                <a className="signup">Sign up for free</a>
                                <div className="vertical-line"></div>
                                <div className="language-box">
                                    <i className="fas fa-user"></i>
                                    <span className="me-2">Sign in</span>
                                </div>
                            </div>

                            <div className="horizontal-line"></div>
                        </div>

                        <ul class="nav-links">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Start Selling</a></li>
                            <li><a href="#">Tools and Apps</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Pro sellers</a></li>
                            <li><a href="#">GelatoConnect</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="head-container">
                <h1>Why choose Gelato</h1>
                <div className="image-container">
                    <img src={FirstImage} alt="img" width={"61%"} />
                    <div className="image-text-container">
                        <div className="single-image-text-container">
                            <h4> ▻ World's largest print-on-demand network</h4>
                            <p>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                        </div>
                        <div className="single-image-text-container">
                            <h4> ▻ Sell globally, produce locally</h4>
                            <p>Your products are produced close to your customers, wherever they are.</p>
                        </div>
                        <div className="single-image-text-container">
                            <h4> ▻ 100% free editing tools</h4>
                            <p>Create your custom products using our suite of free tools.</p>
                        </div>
                        <div className="single-image-text-container">
                            <h4> ▻ 60+logistics partners</h4>
                            <p>Our global network of logistics partners ensures your products are delivered fast.</p>
                        </div>
                        <div className="single-image-text-container">
                            <h4> ▻ High-quality products</h4>
                            <p>We partner with the world's leading brands to ensure the best quality products.</p>
                        </div>
                        <div className="single-image-text-container">
                            <h4> ▻ Endless creativity with Shutterstock Images</h4>
                            <p>Access millions of images and graphics to create unique products you can sell in your store.</p>
                        </div>
                        <div className="single-image-text-container">
                            <h4> ▻ 1-click integration to the leading ecommerce platforms</h4>
                            <p>Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>
                        </div>
                    </div>
                </div>

                <div className="seller-container">
                    <div className="image-text-container">
                        <div className="single-image-text-container">
                            <span>For print on demand sellers</span>
                            <h2>Accelerate business growth with innovative design tools and apps</h2>
                            <p>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
                            <a href="https://www.gelato.com/in/tools-and-apps">Get Started</a>
                        </div>
                    </div>
                    <img src="./images/gif.webp" alt="img" />
                </div>

                <div className="seller-container">
                    <img src="./images/gif2.gif" alt="img" />
                    <div className="image-text-container">
                        <div className="single-image-text-container">
                            <span>For print producers</span>
                            <h2>GelatoConnect</h2>
                            <p>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
                            <a href="https://www.gelato.com/in/connect/printing-united-2024">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="meet-container">
                    <div className="image-text-container">
                        <div className="single-image-text-container">
                            <h2>Meet GelatoConnect at Printing United</h2>
                            <p>Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</p>
                            <a href="https://www.gelato.com/in/connect/printing-united-2024">Book a Meeting</a>
                        </div>
                        <img src="./images/img3.webp" alt="img" />
                    </div>
                </div>

            </section>
        </>
    );
}
export default Why_Choose_Gelato;