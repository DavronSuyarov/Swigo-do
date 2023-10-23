import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='site-header mo-left header transparent-white style-1'>
      {/* <header class="site-header mo-left header header-transparent style-1"></header> */}
      {/* Main Header */}
      <div className='sticky-header main-bar-wraper navbar-expand-lg'>
        <div className='main-bar clearfix '>
          <div className='container clearfix'>
            {/* Website Logo */}
            <div className='logo-header mostion'>
              <a href='index.html' className='anim-logo'>
                <img src='assets/images/logo.png' alt='/' />
              </a>
            </div>
            {/* Nav Toggle Button */}
            <button
              className='navbar-toggler collapsed navicon justify-content-end'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavDropdown'
              aria-controls='navbarNavDropdown'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span />
              <span />
              <span />
            </button>
            {/* EXTRA NAV */}
            <div className='extra-nav'>
              <div className='extra-cell'>
                <ul>
                  <li>
                    <a
                      className='btn btn-white btn-square btn-shadow'
                      data-bs-toggle='offcanvas'
                      href='#offcanvasLogin'
                      role='button'
                      aria-controls='offcanvasLogin'
                    >
                      <i className='flaticon-user' />
                    </a>
                  </li>
                  <li>
                    <button
                      type='button'
                      className='btn btn-white btn-square btn-shadow cart-btn'
                    >
                      <i className='flaticon-shopping-bag-1' />
                      <span className='badge'>6</span>
                    </button>
                    <ul className='dropdown-menu cart-list'>
                      <li className='cart-item'>
                        <div className='media'>
                          <div className='media-left'>
                            <a href='product-detail.html'>
                              <img
                                alt='/'
                                className='media-object'
                                src='assets/images/shop/pic2.jpg'
                              />
                            </a>
                          </div>
                          <div className='media-body'>
                            <h6 className='dz-title'>
                              <a
                                href='product-detail.html'
                                className='media-heading'
                              >
                                Double Burger
                              </a>
                            </h6>
                            <span className='dz-price'>$28.00</span>
                            <span className='item-close'>×</span>
                          </div>
                        </div>
                      </li>
                      <li className='cart-item'>
                        <div className='media'>
                          <div className='media-left'>
                            <a href='product-detail.html'>
                              <img
                                alt='/'
                                className='media-object'
                                src='assets/images/shop/pic3.jpg'
                              />
                            </a>
                          </div>
                          <div className='media-body'>
                            <h6 className='dz-title'>
                              <a
                                href='product-detail.html'
                                className='media-heading'
                              >
                                Cheese Burger
                              </a>
                            </h6>
                            <span className='dz-price'>$20.00</span>
                            <span className='item-close'>×</span>
                          </div>
                        </div>
                      </li>
                      <li className='cart-item'>
                        <div className='media'>
                          <div className='media-left'>
                            <a href='product-detail.html'>
                              <img
                                alt='/'
                                className='media-object'
                                src='assets/images/shop/pic4.jpg'
                              />
                            </a>
                          </div>
                          <div className='media-body'>
                            <h6 className='dz-title'>
                              <a
                                href='product-detail.html'
                                className='media-heading'
                              >
                                Burger
                              </a>
                            </h6>
                            <span className='dz-price'>$15.00</span>
                            <span className='item-close'>×</span>
                          </div>
                        </div>
                      </li>
                      <li className='cart-item text-center d-flex justify-content-between'>
                        <h6 className='text-primary mb-0'>Total:</h6>
                        <h6 className='text-primary mb-0'>$63</h6>
                      </li>
                      <li className='text-center d-flex'>
                        <a
                          href='shop-cart.html'
                          className='btn btn-primary me-2 w-100 d-block btn-hover-1'
                        >
                          <span>View Cart</span>
                        </a>
                        <a
                          href='our-menu-1.html'
                          className='btn btn-outline-primary w-100 d-block btn-hover-1'
                        >
                          <span>Menu</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            {/* EXTRA NAV */}
            {/* Header Nav */}
            <div
              className='header-nav navbar-collapse collapse justify-content-end'
              id='navbarNavDropdown'
            >
              <div className='logo-header'>
                <a href='index.html' className='anim-logo'>
                  <img src='assets/images/logo.png' alt='/' />
                </a>
              </div>
              <ul className='nav navbar-nav navbar'>
                <li className='sub-menu-down'>
                  <a href='javascript:void(0);'>Home</a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/'>Home 01</Link>
                    </li>
                    <li>
                      <a href='index-2.html'>Home 02</a>
                    </li>
                    <li>
                      <a href='index-3.html'>Home 03</a>
                    </li>
                  </ul>
                </li>
                <li className='has-mega-menu'>
                  <a href='javascript:void(0);'>Pages</a>
                  <ul className='mega-menu'>
                    <li>
                      <a href='javascript:;'>Pages</a>
                      <ul>
                        <li>
                          <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                          <Link to='/faq'>FAQ</Link>
                        </li>
                        <li>
                          <Link to='/team'>Team</Link>
                        </li>
                        <li>
                          <Link to='/team-detail'>Team Detail</Link>
                        </li>
                        <li>
                          <Link to='/testimonial'>Testimonial</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='javascript:;'>Pages</a>
                      <ul>
                        <li>
                          <Link to='/services'>Services</Link>
                        </li>
                        <li>
                          <Link to='/service-detail'>Service Detail</Link>
                        </li>
                        <li>
                          <Link to='/error-404'>Error 404</Link>
                        </li>
                        <li>
                          <Link to='/coming-soon'>Coming Soon</Link>
                        </li>
                        <li>
                          <Link to='/subscribe'>Under Maintenance</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='javascript:;'>Our Menus</a>
                      <ul>
                        {/* <li>
                          <a href='our-menu-1.html'>Menu Style 1</a>
                        </li>
                        <li>
                          <a href='our-menu-2.html'>Menu Style 2</a>
                        </li> */}
                        <li>
                          <Link to='our-menu'>Menu</Link>
                        </li>
                        {/* <li>
                          <a href='our-menu-4.html'>Menu Style 4</a>
                        </li>
                        <li>
                          <a href='our-menu-5.html'>Menu Style 5</a>
                        </li> */}
                      </ul>
                    </li>
                    <li className='header-adv p-0'>
                      <img src='assets/images/adv-media.jpg' alt='/' />
                    </li>
                  </ul>
                </li>
                <li className='sub-menu-down'>
                  <a href='javascript:void(0);'>Shop</a>
                  <ul className='sub-menu'>
                    {/* <li>
                      <a href='shop-style-1.html'>Shop Style 1</a>
                    </li> */}
                    <li>
                      <Link to='/shop'>Shopping</Link>
                    </li>
                    <li>
                      <Link to='/shop-cart'>Shop Cart</Link>
                    </li>
                    <li>
                      <Link to='shop-wishlist'>Shop Wishlist</Link>
                    </li>
                    <li>
                      <Link to='/shop-checkout'>Shop Checkout</Link>
                    </li>
                    <li>
                      <Link to='/product-detail'>Product Detail</Link>
                    </li>
                  </ul>
                </li>
                <li className='has-mega-dawn'>
                  <a href='javascript:void(0);'>Blogs</a>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/blog-grid'>Blog Grid </Link>
                    </li>
                    <li>
                      <Link to='/blog-detail'>Blog Detail</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/contact-us'>Contact Us</Link>
                </li>
              </ul>
              <div className='dz-social-icon'>
                <ul>
                  <li>
                    <a
                      target='_blank'
                      className='fab fa-facebook-f'
                      href='https://www.facebook.com/'
                    />
                  </li>
                  <li>
                    <a
                      target='_blank'
                      className='fab fa-twitter'
                      href='https://twitter.com/'
                    />
                  </li>
                  <li>
                    <a
                      target='_blank'
                      className='fab fa-linkedin-in'
                      href='https://www.linkedin.com/'
                    />
                  </li>
                  <li>
                    <a
                      target='_blank'
                      className='fab fa-instagram'
                      href='https://www.instagram.com/'
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header End */}
    </header>
  );
};

export default Navbar;
