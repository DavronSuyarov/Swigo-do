import React from 'react';

const HomePage = () => {
  return (
    <>
      <div>
        {/* <div id='loading-area' className='loading-page-3'>
          <img src='assets/images/loading.gif' alt='' />
        </div> */}
        <div>
          {/* Header */}
          {/* <Navbar /> */}
          {/* Header */}
          {/* Offcanvas Form Start */}
          <div
            className='offcanvas offcanvas-end'
            tabIndex={-1}
            id='offcanvasLogin'
          >
            <div className='offcanvas-body'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              />
              <div className='offcanvas-form'>
                <div className='login-head'>
                  <h4 className='title'>Welcome Back</h4>
                  <p>
                    We’d love have you join our 100% remote network of creatord
                    &amp; freelance.
                  </p>
                  <button
                    name='submit'
                    value='submit'
                    type='submit'
                    className='btn google-btn w-100 d-block'
                  >
                    <svg
                      width={26}
                      height={26}
                      viewBox='0 0 26 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_1381_2836)'>
                        <path
                          d='M5.76215 15.7122L4.85713 19.0908L1.54929 19.1607C0.560727 17.3272 0 15.2294 0 13.0001C0 10.8443 0.524266 8.81147 1.45356 7.02148H1.45427L4.39918 7.56139L5.68923 10.4886C5.41922 11.2758 5.27206 12.1208 5.27206 13.0001C5.27216 13.9543 5.44502 14.8687 5.76215 15.7122Z'
                          fill='#FBBB00'
                        />
                        <path
                          d='M25.7722 10.5715C25.9215 11.3579 25.9994 12.1701 25.9994 13.0001C25.9994 13.9308 25.9015 14.8387 25.7151 15.7144C25.0823 18.6944 23.4287 21.2965 21.138 23.138L21.1373 23.1373L17.428 22.948L16.903 19.6708C18.423 18.7794 19.6109 17.3844 20.2366 15.7144H13.2852V10.5715H20.338H25.7722Z'
                          fill='#518EF8'
                        />
                        <path
                          d='M21.1374 23.1371L21.1381 23.1378C18.9103 24.9285 16.0802 26 12.9995 26C8.04883 26 3.74456 23.2329 1.54883 19.1607L5.76169 15.7122C6.85953 18.6421 9.68596 20.7279 12.9995 20.7279C14.4238 20.7279 15.7581 20.3428 16.9031 19.6707L21.1374 23.1371Z'
                          fill='#28B446'
                        />
                        <path
                          d='M21.2974 2.99284L17.086 6.44069C15.901 5.69999 14.5003 5.27211 12.9996 5.27211C9.61098 5.27211 6.73168 7.45352 5.68884 10.4886L1.45384 7.02142H1.45312C3.61671 2.85 7.97527 0 12.9996 0C16.1538 0 19.046 1.12359 21.2974 2.99284Z'
                          fill='#F14336'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_1382_2836'>
                          <rect width={26} height={26} fill='white' />
                        </clipPath>
                      </defs>
                    </svg>{' '}
                    Sign Up with Google
                  </button>
                  <h6 className='login-title'>
                    <span>OR</span>
                  </h6>
                </div>
                <div className='form-group m-b15'>
                  <label className='form-label'>Email*</label>
                  <div className='input-group'>
                    <input
                      name='dzEmail'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Enter Your Email'
                    />
                  </div>
                </div>
                <div className='form-group m-b30'>
                  <label className='form-label'>Password*</label>
                  <div className='input-group search-input'>
                    <input
                      name='password'
                      type='password'
                      className='form-control dz-password'
                      placeholder='Enter a Password'
                    />
                    <div className='show-pass'>
                      <svg
                        className='eye-close'
                        xmlns='http://www.w3.org/2000/svg'
                        width={22}
                        height={22}
                        fill='#8ea5c8'
                      >
                        <path d='M11 17.188a8.71 8.71 0 0 1-1.576-.147.69.69 0 0 1-.579-.678.7.7 0 0 1 .817-.676 7.33 7.33 0 0 0 1.339.127c4.073 0 7.61-3.566 8.722-4.812a18.51 18.51 0 0 0-2.434-2.274.69.69 0 0 1 .335-1.226.69.69 0 0 1 .268.019c.087.024.169.064.24.12a18.79 18.79 0 0 1 3.036 2.939.69.69 0 0 1 0 .848c-.185.234-4.581 5.763-10.167 5.763zm7.361-13.549a.69.69 0 0 0-.972 0l-2.186 2.186a10.68 10.68 0 0 0-2.606-.864c-.527-.099-1.061-.149-1.597-.149-5.585 0-9.982 5.528-10.166 5.763a.69.69 0 0 0 0 .848c.897 1.09 1.915 2.075 3.033 2.936.529.415 1.083.796 1.66 1.142l-1.888 1.887c-.066.063-.118.139-.154.223a.69.69 0 0 0 .145.757.67.67 0 0 0 .226.15c.085.034.175.052.266.051a.69.69 0 0 0 .265-.056c.084-.036.16-.088.223-.154l13.75-13.75a.69.69 0 0 0 0-.972zm-13.65 9.636A18.51 18.51 0 0 1 2.278 11C3.39 9.754 6.927 6.187 11 6.187a7.31 7.31 0 0 1 1.348.127 8.92 8.92 0 0 1 1.814.55L12.895 8.13c-.661-.437-1.453-.632-2.241-.552a3.44 3.44 0 0 0-2.085.989c-.56.56-.91 1.297-.989 2.085a3.44 3.44 0 0 0 .552 2.241l-1.601 1.604a14.43 14.43 0 0 1-1.82-1.222zm4.432-1.392c-.134-.275-.204-.577-.206-.883a2.07 2.07 0 0 1 .6-1.456 2.12 2.12 0 0 1 2.338-.392l-2.731 2.731z' />
                      </svg>
                      <svg
                        className='eye-open'
                        xmlns='http://www.w3.org/2000/svg'
                        width={20}
                        height={20}
                        fill='#8ea5c8'
                      >
                        <path d='M19.873 9.611c-.179-.244-4.436-5.985-9.873-5.985S.305 9.367.127 9.611a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.66.66 0 0 0 0-.778zM10 15.055c-4.005 0-7.474-3.81-8.501-5.055C2.525 8.753 5.986 4.945 10 4.945c4.005 0 7.473 3.809 8.501 5.055-1.025 1.247-4.487 5.054-8.501 5.054zm0-9.011A3.96 3.96 0 0 0 6.044 10 3.96 3.96 0 0 0 10 13.956 3.96 3.96 0 0 0 13.956 10 3.96 3.96 0 0 0 10 6.044zm0 6.593A2.64 2.64 0 0 1 7.363 10 2.64 2.64 0 0 1 10 7.363 2.64 2.64 0 0 1 12.637 10 2.64 2.64 0 0 1 10 12.637z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  name='submit'
                  value='submit'
                  type='submit'
                  className='btn btn-primary w-100 d-block btn-hover-2'
                >
                  <span>Sign In</span>
                </button>
                <p className='text-center m-t30'>
                  Not registered?
                  <a
                    className='register text-primary font-weight-500'
                    data-bs-toggle='offcanvas'
                    href='#offcanvasRegister'
                    role='button'
                    aria-controls='offcanvasRegister'
                  >
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='offcanvas offcanvas-end'
            tabIndex={-1}
            id='offcanvasRegister'
          >
            <div className='offcanvas-body'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              />
              <div className='offcanvas-form'>
                <div className='login-head'>
                  <h4 className='title'>Join Our Network</h4>
                  <p>
                    We’d love have you join our 100% remote network of creatord
                    &amp; freelance.
                  </p>
                  <button
                    name='submit'
                    value='submit'
                    type='submit'
                    className='btn google-btn w-100 d-block'
                  >
                    <svg
                      width={26}
                      height={26}
                      viewBox='0 0 26 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_1383_2836)'>
                        <path
                          d='M5.76215 15.7122L4.85713 19.0908L1.54929 19.1607C0.560727 17.3272 0 15.2294 0 13.0001C0 10.8443 0.524266 8.81147 1.45356 7.02148H1.45427L4.39918 7.56139L5.68923 10.4886C5.41922 11.2758 5.27206 12.1208 5.27206 13.0001C5.27216 13.9543 5.44502 14.8687 5.76215 15.7122Z'
                          fill='#FBBB00'
                        />
                        <path
                          d='M25.7722 10.5715C25.9215 11.3579 25.9994 12.1701 25.9994 13.0001C25.9994 13.9308 25.9015 14.8387 25.7151 15.7144C25.0823 18.6944 23.4287 21.2965 21.138 23.138L21.1373 23.1373L17.428 22.948L16.903 19.6708C18.423 18.7794 19.6109 17.3844 20.2366 15.7144H13.2852V10.5715H20.338H25.7722Z'
                          fill='#518EF8'
                        />
                        <path
                          d='M21.1374 23.1371L21.1381 23.1378C18.9103 24.9285 16.0802 26 12.9995 26C8.04883 26 3.74456 23.2329 1.54883 19.1607L5.76169 15.7122C6.85953 18.6421 9.68596 20.7279 12.9995 20.7279C14.4238 20.7279 15.7581 20.3428 16.9031 19.6707L21.1374 23.1371Z'
                          fill='#28B446'
                        />
                        <path
                          d='M21.2974 2.99284L17.086 6.44069C15.901 5.69999 14.5003 5.27211 12.9996 5.27211C9.61098 5.27211 6.73168 7.45352 5.68884 10.4886L1.45384 7.02142H1.45312C3.61671 2.85 7.97527 0 12.9996 0C16.1538 0 19.046 1.12359 21.2974 2.99284Z'
                          fill='#F14336'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_138_536'>
                          <rect width={26} height={26} fill='white' />
                        </clipPath>
                      </defs>
                    </svg>{' '}
                    Sign Up with Google
                  </button>
                  <h6 className='login-title'>
                    <span>OR</span>
                  </h6>
                </div>
                <div className='form-group m-b15'>
                  <label className='form-label'>Name*</label>
                  <div className='input-group'>
                    <input
                      name='dzName'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Enter Your Name'
                    />
                  </div>
                </div>
                <div className='form-group m-b15'>
                  <label className='form-label'>Email*</label>
                  <div className='input-group'>
                    <input
                      name='dzEmail'
                      required
                      type='text'
                      className='form-control'
                      placeholder='Enter Your Email'
                    />
                  </div>
                </div>
                <div className='form-group m-b30'>
                  <label className='form-label'>Password*</label>
                  <div className='input-group search-input'>
                    <input
                      name='password'
                      type='password'
                      className='form-control dz-password'
                      placeholder='Create a Password'
                    />
                    <div className='show-pass'>
                      <svg
                        className='eye-close'
                        xmlns='http://www.w3.org/2000/svg'
                        width={22}
                        height={22}
                        fill='#8ea5c8'
                      >
                        <path d='M11 17.188a8.71 8.71 0 0 1-1.576-.147.69.69 0 0 1-.579-.678.7.7 0 0 1 .817-.676 7.33 7.33 0 0 0 1.339.127c4.073 0 7.61-3.566 8.722-4.812a18.51 18.51 0 0 0-2.434-2.274.69.69 0 0 1 .335-1.226.69.69 0 0 1 .268.019c.087.024.169.064.24.12a18.79 18.79 0 0 1 3.036 2.939.69.69 0 0 1 0 .848c-.185.234-4.581 5.763-10.167 5.763zm7.361-13.549a.69.69 0 0 0-.972 0l-2.186 2.186a10.68 10.68 0 0 0-2.606-.864c-.527-.099-1.061-.149-1.597-.149-5.585 0-9.982 5.528-10.166 5.763a.69.69 0 0 0 0 .848c.897 1.09 1.915 2.075 3.033 2.936.529.415 1.083.796 1.66 1.142l-1.888 1.887c-.066.063-.118.139-.154.223a.69.69 0 0 0 .145.757.67.67 0 0 0 .226.15c.085.034.175.052.266.051a.69.69 0 0 0 .265-.056c.084-.036.16-.088.223-.154l13.75-13.75a.69.69 0 0 0 0-.972zm-13.65 9.636A18.51 18.51 0 0 1 2.278 11C3.39 9.754 6.927 6.187 11 6.187a7.31 7.31 0 0 1 1.348.127 8.92 8.92 0 0 1 1.814.55L12.895 8.13c-.661-.437-1.453-.632-2.241-.552a3.44 3.44 0 0 0-2.085.989c-.56.56-.91 1.297-.989 2.085a3.44 3.44 0 0 0 .552 2.241l-1.601 1.604a14.43 14.43 0 0 1-1.82-1.222zm4.432-1.392c-.134-.275-.204-.577-.206-.883a2.07 2.07 0 0 1 .6-1.456 2.12 2.12 0 0 1 2.338-.392l-2.731 2.731z' />
                      </svg>
                      <svg
                        className='eye-open'
                        xmlns='http://www.w3.org/2000/svg'
                        width={20}
                        height={20}
                        fill='#8ea5c8'
                      >
                        <path d='M19.873 9.611c-.179-.244-4.436-5.985-9.873-5.985S.305 9.367.127 9.611a.66.66 0 0 0 0 .778c.178.244 4.436 5.985 9.873 5.985s9.694-5.74 9.873-5.984a.66.66 0 0 0 0-.778zM10 15.055c-4.005 0-7.474-3.81-8.501-5.055C2.525 8.753 5.986 4.945 10 4.945c4.005 0 7.473 3.809 8.501 5.055-1.025 1.247-4.487 5.054-8.501 5.054zm0-9.011A3.96 3.96 0 0 0 6.044 10 3.96 3.96 0 0 0 10 13.956 3.96 3.96 0 0 0 13.956 10 3.96 3.96 0 0 0 10 6.044zm0 6.593A2.64 2.64 0 0 1 7.363 10 2.64 2.64 0 0 1 10 7.363 2.64 2.64 0 0 1 12.637 10 2.64 2.64 0 0 1 10 12.637z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  name='submit'
                  value='submit'
                  type='submit'
                  className='btn btn-primary w-100 d-block btn-hover-2'
                >
                  <span>Sign Up</span>
                </button>
                <p className='text-center m-t30'>
                  Already have an account?
                  <a
                    className='text-primary font-weight-500'
                    data-bs-toggle='offcanvas'
                    href='#offcanvasLogin'
                    role='button'
                    aria-controls='offcanvasLogin'
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Offcanvas Form End */}
          <div className='page-content bg-white'>
            {/* Banner */}
            <div className='main-bnr-one'>
              <div className='slider-pagination'>
                <div className='main-button-prev'>
                  <i className='icon-arrow-up' />
                </div>
                <div className='main-slider-pagination' />
                <div className='main-button-next'>
                  <i className='icon-arrow-down' />
                </div>
              </div>
              <div className='main-slider-1 swiper'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='banner-inner'>
                      <div className='container'>
                        <div className='row align-items-center'>
                          <div className='col-xl-7 col-lg-7 col-md-7'>
                            <div className='banner-content'>
                              <span
                                className='sub-title wow fadeInUp'
                                data-wow-delay='0.2s'
                              >
                                High Quality Test Station{' '}
                              </span>
                              <h1
                                className='title  wow fadeInUp'
                                data-wow-delay='0.4s'
                              >
                                Choosing The
                                <br /> Best{' '}
                                <span className='text-primary'>
                                  Quality Food
                                </span>
                              </h1>
                              <p className='wow fadeInUp' data-wow-delay='0.6s'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <div
                                className='banner-btn d-flex align-items-center wow fadeInUp'
                                data-wow-delay='0.8s'
                              >
                                <a
                                  href='contact-us.html'
                                  className='btn btn-primary btn-md shadow-primary m-r30 btn-hover-1'
                                >
                                  <span>Book a Table</span>
                                </a>
                                <a
                                  href='about-us.html'
                                  className='btn btn-outline-primary btn-md shadow-primary btn-hover-1'
                                >
                                  <span>View More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-5 col-lg-5 col-md-5'>
                            <div
                              className='banner-media wow fadeInRight'
                              data-wow-delay='1s'
                            >
                              <img
                                src='assets/images/main-slider/slider1/pic1.png'
                                alt='/'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src='assets/images/main-slider/slider1/img3.png'
                        className='img1'
                        alt='/'
                      />
                      <img
                        src='assets/images/main-slider/slider1/img1.png'
                        className='img2'
                        alt='/'
                      />
                      <img
                        src='assets/images/main-slider/slider1/img2.png'
                        className='img3'
                        alt='/'
                      />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='banner-inner'>
                      <div className='container'>
                        <div className='row align-items-center'>
                          <div className='col-xl-7 col-lg-7 col-md-7'>
                            <div className='banner-content'>
                              <span
                                className='sub-title wow fadeInUp'
                                data-wow-delay='0.2s'
                              >
                                The Best Food Stations
                              </span>
                              <h1
                                className='title wow fadeInUp'
                                data-wow-delay='0.4s'
                              >
                                Where Food <br /> Meets
                                <span className='text-primary'>
                                  {' '}
                                  Best Passion
                                </span>
                              </h1>
                              <p className='wow fadeInUp' data-wow-delay='0.6s'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <div
                                className='banner-btn d-flex align-items-center wow fadeInUp'
                                data-wow-delay='0.8s'
                              >
                                <a
                                  href='contact-us.html'
                                  className='btn btn-primary btn-md shadow-primary m-r30 btn-hover-1'
                                >
                                  <span>Book a Table</span>
                                </a>
                                <a
                                  href='about-us.html'
                                  className='btn btn-outline-primary btn-md shadow-primary btn-hover-1'
                                >
                                  <span>View More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-5 col-lg-5 col-md-5'>
                            <div
                              className='banner-media wow fadeInRight'
                              data-wow-delay='1s'
                            >
                              <img
                                src='assets/images/main-slider/slider1/pic1.png'
                                alt='/'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src='assets/images/main-slider/slider1/img3.png'
                        className='img1'
                        alt='/'
                      />
                      <img
                        src='assets/images/main-slider/slider1/img1.png'
                        className='img2'
                        alt='/'
                      />
                      <img
                        src='assets/images/main-slider/slider1/img2.png'
                        className='img3'
                        alt='/'
                      />
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='banner-inner'>
                      <div className='container'>
                        <div className='row align-items-center'>
                          <div className='col-xl-7 col-lg-7 col-md-7'>
                            <div className='banner-content'>
                              <span
                                className='sub-title wow fadeInUp'
                                data-wow-delay='0.2s'
                              >
                                Exploring the Delicious World
                              </span>
                              <h1
                                className='title wow fadeInUp'
                                data-wow-delay='0.4s'
                              >
                                Delicious Eats <br /> And{' '}
                                <span className='text-primary'>
                                  Tasty Drinks
                                </span>
                              </h1>
                              <p className='wow fadeInUp' data-wow-delay='0.6s'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                              </p>
                              <div
                                className='banner-btn d-flex align-items-center wow fadeInUp'
                                data-wow-delay='0.8s'
                              >
                                <a
                                  href='contact-us.html'
                                  className='btn btn-primary btn-md shadow-primary m-r30 btn-hover-1'
                                >
                                  <span>Book a Table</span>
                                </a>
                                <a
                                  href='about-us.html'
                                  className='btn btn-outline-primary btn-md shadow-primary btn-hover-1'
                                >
                                  <span>View More</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className='col-xl-5 col-lg-5 col-md-5'>
                            <div
                              className='banner-media wow fadeInRight'
                              data-wow-delay='1s'
                            >
                              <img
                                src='assets/images/main-slider/slider1/pic1.png'
                                alt='/'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        src='assets/images/main-slider/slider1/img3.png'
                        className='img1'
                        alt='/'
                      />
                      <img
                        src='assets/images/main-slider/slider1/img1.png'
                        className='img2'
                        alt='/'
                      />
                      <img
                        src='assets/images/main-slider/slider1/img2.png'
                        className='img3'
                        alt='/'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div
                  className='main-thumb1-area swiper-btn-lr wow fadeInUp'
                  data-wow-delay='0.6s'
                >
                  <div className='swiper main-thumb1'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <div className='food-card'>
                          <div className='dz-media'>
                            <img
                              src='assets/images/main-slider/slider1/thumb/pic1.jpg'
                              alt='/'
                            />
                          </div>
                          <div className='dz-content'>
                            <h5 className='title'>BreakFast</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='food-card'>
                          <div className='dz-media'>
                            <img
                              src='assets/images/main-slider/slider1/thumb/pic2.jpg'
                              alt='/'
                            />
                          </div>
                          <div className='dz-content'>
                            <h5 className='title'>Lunch</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div className='food-card'>
                          <div className='dz-media'>
                            <img
                              src='assets/images/main-slider/slider1/thumb/pic3.jpg'
                              alt='/'
                            />
                          </div>
                          <div className='dz-content'>
                            <h5 className='title'>Dinner</h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='thumb-button-prev btn-prev-1'>
                    <i className='fa-solid fa-angle-left' />
                  </div>
                  <div className='thumb-button-next btn-next-1'>
                    <i className='fa-solid fa-angle-right' />
                  </div>
                </div>
              </div>
            </div>
            {/* Banner */}
            {/* Image Box 2 */}
            <section className='content-inner bg-white section-wrapper-2 overflow-hidden'>
              <div className='container'>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    Special Menu
                  </h2>
                </div>
                <div className='row'>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.1s'
                  >
                    <div className='dz-img-box style-2 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/small/pic1.jpg'
                          alt='/'
                        />
                      </div>
                      <div className='dz-content'>
                        <h4 className='dz-title'>
                          <a href='product-detail.html'>Pizza</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                        <h5 className='dz-price text-primary'>$55.00</h5>
                        <a
                          href='shop-cart.html'
                          className='btn btn-primary btn-hover-2'
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.2s'
                  >
                    <div className='dz-img-box style-2 box-hover active'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/small/pic2.jpg'
                          alt='/'
                        />
                      </div>
                      <div className='dz-content'>
                        <h4 className='dz-title'>
                          <a href='product-detail.html'>Rice</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                        <h5 className='dz-price text-primary'>$50.00</h5>
                        <a
                          href='shop-cart.html'
                          className='btn btn-primary btn-hover-2'
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.3s'
                  >
                    <div className='dz-img-box style-2 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/small/pic3.jpg'
                          alt='/'
                        />
                      </div>
                      <div className='dz-content'>
                        <h4 className='dz-title'>
                          <a href='product-detail.html'>Green Salad</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                        <h5 className='dz-price text-primary'>$45.00</h5>
                        <a
                          href='shop-cart.html'
                          className='btn btn-primary btn-hover-2'
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.4s'
                  >
                    <div className='dz-img-box style-2 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/small/pic4.jpg'
                          alt='/'
                        />
                      </div>
                      <div className='dz-content'>
                        <h4 className='dz-title'>
                          <a href='product-detail.html'>Pasta</a>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                        <h5 className='dz-price text-primary'>$35.0</h5>
                        <a
                          href='shop-cart.html'
                          className='btn btn-primary btn-hover-2'
                        >
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className='bg1 dz-move-down'
                src='assets/images/background/pic2.png'
                alt='/'
              />
              <img
                className='bg2 dz-parallax'
                data-parallax-speed='0.05'
                src='assets/images/background/pic3.png'
                alt='/'
              />
            </section>
            {/* Image Box-2 */}
            {/* Image Box-3  */}
            <section className='content-inner-1 section-wrapper-3 overflow-hidden'>
              <div className='container'>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    Today's Menu
                  </h2>
                </div>
                <div className='row inner-section-wrapper'>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.2s'
                  >
                    <div className='dz-img-box style-3 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/grid2/pic2.jpg'
                          alt='/'
                        />
                      </div>
                      <span className='dz-tag'>TOP SELLER</span>
                      <div className='dz-content'>
                        <h5 className='dz-title'>
                          <a href='our-menu-1.html'>Pasta</a>
                        </h5>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                      </div>
                      <div className='dz-hover-content'>
                        <div className='dz-info'>
                          <h5 className='dz-title mb-0'>
                            <a href='our-menu-1.html'>Pasta</a>
                          </h5>
                          <span className='dz-price'>$35.00</span>
                        </div>
                        <a
                          href='shop-cart.html'
                          className='btn btn-cart btn-white text-primary btn-square'
                        >
                          <i className='flaticon-shopping-cart' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.4s'
                  >
                    <div className='dz-img-box style-3 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/grid2/pic5.jpg'
                          alt='/'
                        />
                      </div>
                      <span className='dz-tag'>TOP SELLER</span>
                      <div className='dz-content'>
                        <h5 className='dz-title'>
                          <a href='our-menu-1.html'>Oreo Shake</a>
                        </h5>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                      </div>
                      <div className='dz-hover-content'>
                        <div className='dz-info'>
                          <h5 className='dz-title mb-0'>
                            <a href='our-menu-1.html'>Shake</a>
                          </h5>
                          <span className='dz-price'>$55.00</span>
                        </div>
                        <a
                          href='shop-cart.html'
                          className='btn btn-cart btn-white text-primary btn-square'
                        >
                          <i className='flaticon-shopping-cart' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.6s'
                  >
                    <div className='dz-img-box style-3 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/grid2/pic4.jpg'
                          alt='/'
                        />
                      </div>
                      <span className='dz-tag'>TOP SELLER</span>
                      <div className='dz-content'>
                        <h5 className='dz-title'>
                          <a href='our-menu-1.html'>Dal Fry</a>
                        </h5>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                      </div>
                      <div className='dz-hover-content'>
                        <div className='dz-info'>
                          <h5 className='dz-title mb-0'>
                            <a href='our-menu-1.html'>Dal</a>
                          </h5>
                          <span className='dz-price'>$25.00</span>
                        </div>
                        <a
                          href='shop-cart.html'
                          className='btn btn-cart btn-white text-primary btn-square'
                        >
                          <i className='flaticon-shopping-cart' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInUp'
                    data-wow-delay='0.8s'
                  >
                    <div className='dz-img-box style-3 box-hover'>
                      <div className='dz-media'>
                        <img
                          src='assets/images/gallery/grid2/pic6.jpg'
                          alt='/'
                        />
                      </div>
                      <span className='dz-tag'>TOP SELLER</span>
                      <div className='dz-content'>
                        <h5 className='dz-title'>
                          <a href='our-menu-1.html'>Pizza</a>
                        </h5>
                        <p>Lorem ipsum dolor sit amet, dipiscing elit, sed</p>
                      </div>
                      <div className='dz-hover-content'>
                        <div className='dz-info'>
                          <h5 className='dz-title mb-0'>
                            <a href='our-menu-1.html'>Pizza</a>
                          </h5>
                          <span className='dz-price'>$90.00</span>
                        </div>
                        <a
                          href='shop-cart.html'
                          className='btn btn-cart btn-white text-primary btn-square'
                        >
                          <i className='flaticon-shopping-cart' />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-12 text-center m-t10'>
                    <a
                      href='our-menu-2.html'
                      className='btn btn-md btn-primary btn-hover-1'
                    >
                      <span>See All Dishes</span>
                    </a>
                  </div>
                </div>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    Quality Services
                  </h2>
                </div>
                {/* Icon Wrapper 1 */}
                <div className='icon-wrapper1'>
                  <div className='row wow fadeInUp' data-wow-delay='0.2s'>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div
                        className='icon-bx-wraper style-1 box-hover center'
                        style={{
                          backgroundImage:
                            'url(assets/images/gallery/grid/pic1.jpg)',
                        }}
                      >
                        <div className='inner-content'>
                          <div className='icon-bx m-b25'>
                            <span className='icon-cell icon-md'>
                              <i className='flaticon-restaurant' />
                            </span>
                          </div>
                          <div className='icon-content'>
                            <h5 className='dz-title'>Restaurant</h5>
                            <p>
                              Lorem ipsum dolor sit amet, dipiscing elit, sed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div
                        className='icon-bx-wraper style-1 box-hover center'
                        style={{
                          backgroundImage:
                            'url(assets/images/gallery/grid/pic2.jpg)',
                        }}
                      >
                        <div className='inner-content'>
                          <div className='icon-bx m-b25'>
                            <span className='icon-cell icon-md'>
                              <i className='flaticon-martini' />
                            </span>
                          </div>
                          <div className='icon-content'>
                            <h5 className='dz-title'>Bar</h5>
                            <p>
                              Lorem ipsum dolor sit amet, dipiscing elit, sed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div
                        className='icon-bx-wraper style-1 box-hover center'
                        style={{
                          backgroundImage:
                            'url(assets/images/gallery/grid/pic3.jpg)',
                        }}
                      >
                        <div className='inner-content'>
                          <div className='icon-bx m-b25'>
                            <span className='icon-cell icon-md'>
                              <i className='flaticon-coffee-cup' />
                            </span>
                          </div>
                          <div className='icon-content'>
                            <h5 className='dz-title'>Cafe</h5>
                            <p>
                              Lorem ipsum dolor sit amet, dipiscing elit, sed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-6'>
                      <div
                        className='icon-bx-wraper style-1 box-hover center'
                        style={{
                          backgroundImage:
                            'url(assets/images/gallery/grid/pic4.jpg)',
                        }}
                      >
                        <div className='inner-content'>
                          <div className='m-b25'>
                            <span className='icon-cell icon-md'>
                              <i className='flaticon-cake' />
                            </span>
                          </div>
                          <div className='icon-content'>
                            <h5 className='dz-title'>Dessert</h5>
                            <p>
                              Lorem ipsum dolor sit amet, dipiscing elit, sed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Icon Wrapper 1 */}
              </div>
              <img
                className='bg1 dz-parallax'
                data-parallax-speed='0.05'
                src='assets/images/background/pic3.png'
                alt='/'
              />
              <img
                className='bg2 dz-parallax'
                data-parallax-speed='0.05'
                src='assets/images/background/pic4.png'
                alt='/'
              />
            </section>
            {/* Image Box-3 */}
            {/* Image Box-1  */}
            <section className='content-inner-1 bg-white overflow-hidden pt-sm-0'>
              <div className='container'>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    From Our Menu
                  </h2>
                </div>
                <div className='swiper-btn-lr'>
                  <div className='swiper portfolio-swiper'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.4s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic1.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Burger</a>
                              </h5>
                              <span className='dz-price'>$20.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.6s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic2.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Pasta</a>
                              </h5>
                              <span className='dz-price'>$10.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.8s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic3.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Tandoor</a>
                              </h5>
                              <span className='dz-price'>$15.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.10s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic4.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Dal Fry</a>
                              </h5>
                              <span className='dz-price'>$65.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.4s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic1.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Burger</a>
                              </h5>
                              <span className='dz-price'>$20.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.6s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic2.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Pasta</a>
                              </h5>
                              <span className='dz-price'>$10.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.8s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic3.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Tandoor</a>
                              </h5>
                              <span className='dz-price'>$15.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='swiper-slide'>
                        <div
                          className='dz-img-box style-1 wow fadeInUp'
                          data-wow-delay='0.10s'
                        >
                          <div className='dz-media'>
                            <img
                              src='assets/images/gallery/grid2/pic4.jpg'
                              alt='/'
                            />
                          </div>
                          <span className='dz-tag'>TOP SELLER</span>
                          <div className='dz-content'>
                            <div className='dz-info'>
                              <h5 className='dz-title mb-0'>
                                <a href='our-menu-1.html'>Dal Fry</a>
                              </h5>
                              <span className='dz-price'>$65.00</span>
                            </div>
                            <a
                              href='shop-cart.html'
                              className='btn btn-cart btn-white text-primary btn-square'
                            >
                              <i className='flaticon-shopping-cart' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pagination mt-xl-0 m-t40'>
                    <div className='img-button-prev btn-prev-long'>
                      <i className='fa-solid fa-arrow-left' />
                    </div>
                    <div className='img-button-next btn-next-long'>
                      <i className='fa-solid fa-arrow-right' />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Image Box-1 */}
            {/* Search Section*/}
            <section
              className='content-inner-1 section-wrapper-1 bg-parallax'
              style={{
                backgroundImage: 'url("assets/images/background/pic1.png")',
                backgroundAttachment: 'fixed',
              }}
            >
              <div className='container'>
                <div className='section-head text-center'>
                  <h2
                    className='title text-white wow flipInX'
                    data-wow-delay='0.2s'
                  >
                    Reservation
                  </h2>
                </div>
                <form action='#'>
                  <div className='row'>
                    <div
                      className='col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp'
                      data-wow-delay='0.2s'
                    >
                      <div className='input-group input-line'>
                        <div className='input-group-prepand'>
                          <i className='flaticon-user' />
                        </div>
                        <input
                          name='dzName'
                          required
                          type='text'
                          className='form-control'
                          placeholder='Your Name'
                        />
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp'
                      data-wow-delay='0.2s'
                    >
                      <div className='input-group input-line'>
                        <div className='input-group-prepand'>
                          <i className='flaticon-phone-call' />
                        </div>
                        <input
                          name='dzPhoneNumber'
                          required
                          type='text'
                          className='form-control dz-number'
                          placeholder='Phone Number'
                        />
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp'
                      data-wow-delay='0.2s'
                    >
                      <div className='input-group input-line'>
                        <div className='input-group-prepand'>
                          <i className='flaticon-email-1' />
                        </div>
                        <input
                          name='dzEmail'
                          required
                          type='text'
                          className='form-control'
                          placeholder='Your Email'
                        />
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp'
                      data-wow-delay='0.4s'
                    >
                      <div className='input-group input-line'>
                        <div className='input-group-prepand'>
                          <i className='flaticon-two-people' />
                        </div>
                        <select className='form-select default-select'>
                          <option>Number Of People</option>
                          <option>Member 1</option>
                          <option>Member 2</option>
                          <option>Member 3</option>
                          <option>Member 4</option>
                          <option>Member 5</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp'
                      data-wow-delay='0.4s'
                    >
                      <div className='input-group input-line'>
                        <div className='input-group-prepand'>
                          <i className='flaticon-calendar-date' />
                        </div>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='datePickerOnly'
                          placeholder='Date'
                        />
                      </div>
                    </div>
                    <div
                      className='col-lg-4 col-md-6 m-b30 m-sm-b50 wow fadeInUp'
                      data-wow-delay='0.4s'
                    >
                      <div className='input-group input-line'>
                        <div className='input-group-prepand'>
                          <i className='flaticon-clock' />
                        </div>
                        <input
                          required
                          type='text'
                          className='form-control'
                          id='timePickerOnly'
                          placeholder='Time'
                        />
                      </div>
                    </div>
                    <div className='col-lg-12 col-md-12 text-center'>
                      <button
                        type='submit'
                        name='submit'
                        value='submit'
                        className='btn btn-lg btn-white btn-hover-1'
                      >
                        <span>Book a Table</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            {/* Search Section*/}
            {/* Testimonials */}
            <section className='content-inner-1 section-wrapper-2 right overflow-hidden'>
              <div className='container'>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    Customer's Comment
                  </h2>
                </div>
                <div className='row gx-0 wow fadeInUp' data-wow-delay='0.4s'>
                  <div className='col-lg-7 col-md-12'>
                    <div className='swiper testimonial-one-thumb'>
                      <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                          <img
                            src='assets/images/testimonial/small/pic1.jpg'
                            alt='/'
                          />
                        </div>
                        <div className='swiper-slide'>
                          <img
                            src='assets/images/testimonial/small/pic2.jpg'
                            alt='/'
                          />
                        </div>
                        <div className='swiper-slide'>
                          <img
                            src='assets/images/testimonial/small/pic3.jpg'
                            alt='/'
                          />
                        </div>
                        <div className='swiper-slide'>
                          <img
                            src='assets/images/testimonial/small/pic4.jpg'
                            alt='/'
                          />
                        </div>
                        <div className='swiper-slide'>
                          <img
                            src='assets/images/testimonial/small/pic5.jpg'
                            alt='/'
                          />
                        </div>
                        <div className='swiper-slide'>
                          <img
                            src='assets/images/testimonial/small/pic6.jpg'
                            alt='/'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-5 col-md-12'>
                    <div className='swiper testimonial-one-swiper h-100'>
                      <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                          <div className='testimonial-1'>
                            <div className='testimonial-text'>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                            </div>
                            <div className='testimonial-info'>
                              <h5 className='testimonial-name'>John Doe</h5>
                              <span className='testimonial-position'>
                                Food Expert
                              </span>
                            </div>
                            <i className='flaticon-right-quote quote' />
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-1'>
                            <div className='testimonial-text'>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                            </div>
                            <div className='testimonial-info'>
                              <h5 className='testimonial-name'>Jolly Roy</h5>
                              <span className='testimonial-position'>
                                Food Tester
                              </span>
                            </div>
                            <i className='flaticon-right-quote quote' />
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-1'>
                            <div className='testimonial-text'>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                            </div>
                            <div className='testimonial-info'>
                              <h5 className='testimonial-name'>Thomas Hed</h5>
                              <span className='testimonial-position'>
                                Food Expert
                              </span>
                            </div>
                            <i className='flaticon-right-quote quote' />
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-1'>
                            <div className='testimonial-text'>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                            </div>
                            <div className='testimonial-info'>
                              <h5 className='testimonial-name'>Kally Mint</h5>
                              <span className='testimonial-position'>
                                Food Expert
                              </span>
                            </div>
                            <i className='flaticon-right-quote quote' />
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-1'>
                            <div className='testimonial-text'>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                            </div>
                            <div className='testimonial-info'>
                              <h5 className='testimonial-name'>Ronny joy</h5>
                              <span className='testimonial-position'>
                                Assistant
                              </span>
                            </div>
                            <i className='flaticon-right-quote quote' />
                          </div>
                        </div>
                        <div className='swiper-slide'>
                          <div className='testimonial-1'>
                            <div className='testimonial-text'>
                              <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.
                              </p>
                            </div>
                            <div className='testimonial-info'>
                              <h5 className='testimonial-name'>Dolly kom</h5>
                              <span className='testimonial-position'>
                                Food Expert
                              </span>
                            </div>
                            <i className='flaticon-right-quote quote' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className='bg1 dz-move-down'
                src='assets/images/background/pic2.png'
                alt='/'
              />
            </section>
            {/* Testimonial */}
            {/* Team Section 1*/}
            <section className='content-inner-1 overflow-hidden bg-light'>
              <div className='container'>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    Master Chefs
                  </h2>
                </div>
              </div>
              <div className='container'>
                <div className='swiper team-swiper swiper-visible swiper-btn-lr'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.2s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic1.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>Sarah Albert</a>
                            </h6>
                            <span className='dz-position'>Senior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.4s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic2.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>John Doe</a>
                            </h6>
                            <span className='dz-position'>Senior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.6s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic3.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>Jemy Carline</a>
                            </h6>
                            <span className='dz-position'>Junior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.8s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic4.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>Cotlin Care</a>
                            </h6>
                            <span className='dz-position'>Senior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.2s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic1.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>Sarah Albert</a>
                            </h6>
                            <span className='dz-position'>Senior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.4s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic2.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>John Doe</a>
                            </h6>
                            <span className='dz-position'>Senior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.6s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic3.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>Jemy Carline</a>
                            </h6>
                            <span className='dz-position'>Junior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-team style-1 wow fadeInUp'
                        data-wow-delay='0.8s'
                      >
                        <div className='dz-media'>
                          <img src='assets/images/team/pic4.jpg' alt='/' />
                        </div>
                        <div className='dz-content'>
                          <div className='clearfix'>
                            <h6 className='dz-name'>
                              <a href='team-detail.html'>Cotlin Care</a>
                            </h6>
                            <span className='dz-position'>Senior Chef</span>
                          </div>
                          <ul className='team-social'>
                            <li>
                              <a
                                className='share-btn'
                                href='javascript:void(0);'
                              >
                                <i className='flaticon-share' />
                              </a>
                              <ul className='sub-team-social'>
                                <li>
                                  <a
                                    className='fb-btn'
                                    href='https://www.facebook.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-facebook-f' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='tw-btn'
                                    href='https://twitter.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-twitter' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='in-btn'
                                    href='https://www.instagram.com/'
                                    target='_blank'
                                  >
                                    <i className='fab fa-instagram' />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className='lin-btn'
                                    href='https://www.linkedin.com/'
                                    target='_blank'
                                  >
                                    <i className='fa-brands fa-linkedin-in' />
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pagination mt-xl-0 m-t40'>
                    <div className='team-button-prev btn-prev-long'>
                      <i className='fa-solid fa-arrow-left' />
                    </div>
                    <div className='team-button-next btn-next-long'>
                      <i className='fa-solid fa-arrow-right' />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Team Section 1 */}
            {/* Our Blog  */}
            <section className='content-inner-1 overflow-hidden'>
              <div className='container'>
                <div className='section-head text-center'>
                  <h2 className='title wow flipInX' data-wow-delay='0.2s'>
                    News &amp; blog
                  </h2>
                </div>
                <div className='swiper blog-swiper swiper-visible swiper-btn-lr'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp'
                        data-wow-delay='0.4s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic1.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 26
                                  Jan 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 2.5K{' '}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              Taste of Paradise Dishes
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp'
                        data-wow-delay='0.6s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic2.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 15
                                  Mar 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 1.5K
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              The Spices Route Taste
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half wow overlay-shine dz-img-effect zoom fadeInUp'
                        data-wow-delay='0.4s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic3.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 20
                                  Sep 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 2.0K
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              The Fork &amp; Knife
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp'
                        data-wow-delay='0.6s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic4.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 30
                                  Nov 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 3.5K{' '}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              Flavors Of The World
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp'
                        data-wow-delay='0.4s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic1.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 26
                                  Jan 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 2.5K{' '}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              Taste of Paradise Dishes
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp'
                        data-wow-delay='0.6s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic2.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 15
                                  Mar 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 1.5K
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              The Spices Route Taste
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half wow overlay-shine dz-img-effect zoom fadeInUp'
                        data-wow-delay='0.4s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic3.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 20
                                  Sep 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 2.0K
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              The Fork &amp; Knife
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div
                        className='dz-card style-1 blog-half overlay-shine dz-img-effect zoom wow fadeInUp'
                        data-wow-delay='0.6s'
                      >
                        <div className='dz-media'>
                          <a href='blog-standard.html'>
                            <img
                              src='assets/images/blog/grid/pic4.jpg'
                              alt='/'
                            />
                          </a>
                        </div>
                        <div className='dz-info'>
                          <div className='dz-meta'>
                            <ul>
                              <li>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-calendar-date' /> 30
                                  Nov 2023
                                </a>
                              </li>
                              <li className='dz-comment'>
                                <a href='javascript:void(0);'>
                                  <i className='flaticon-chat-bubble' /> 3.5K{' '}
                                </a>
                              </li>
                            </ul>
                          </div>
                          <h5 className='dz-title'>
                            <a href='blog-standard.html'>
                              Flavors Of The World
                            </a>
                          </h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have.
                          </p>
                          <div className='read-btn'>
                            <a
                              href='blog-standard.html'
                              className='btn btn-primary btn-hover-2'
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='pagination mt-xl-0 m-t40'>
                    <div className='blog-button-prev btn-prev-long'>
                      <i className='fa-solid fa-arrow-left' />
                    </div>
                    <div className='blog-button-next btn-next-long'>
                      <i className='fa-solid fa-arrow-right' />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Our Blog End  */}
            {/* Map Iframe */}
            <div className='map-iframe style-1'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244934.17139458598!2d75.27787773507539!3d25.125368923263647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678086292169!5m2!1sen!2sin'
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
            {/* Map Iframe */}
          </div>
          {/*Footer*/}
        </div>
      </div>
    </>
  );
};

export default HomePage;
