import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  return (
    <>
      <div>
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
          {/* Banner  */}
          <div className='dz-breadcrumb-bnr'>
            <div className='container'>
              <nav aria-label='breadcrumb' className='breadcrumb-row'>
                <ul className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item'>Blog</li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Blog Details
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Banner End */}
          {/* Blog Detail */}
          <section className='content-inner'>
            <div className='min-container'>
              <div className='row'>
                <div className='col-xl-12 col-lg-12'>
                  <div className='blog-single dz-card sidebar'>
                    <div className='dz-media rounded-md'>
                      <img src='assets/images/blog/detail/pic1.jpg' alt='/' />
                    </div>
                    <div className='dz-info'>
                      <h1 className='title'>Restaurant Has The Answer</h1>
                      <div className='dz-meta'>
                        <ul>
                          <li className='dz-user'>
                            <a href='javascript:void(0);'>
                              <i className='flaticon-user' /> By{' '}
                              <span>KK Sharma</span>
                            </a>
                          </li>
                          <li className='dz-date'>
                            <a href='javascript:void(0);'>
                              <i className='flaticon-calendar-date' /> 26 Jan
                              2023
                            </a>
                          </li>
                          <li className='dz-comment'>
                            <a href='javascript:void(0);'>
                              <i className='flaticon-chat-bubble' /> 2.5K{' '}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className='dz-post-text'>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                        <blockquote className='wp-block-quote'>
                          <p>
                            Create An Information Architecture That’s Easy To
                            Use Way Precise Usability Considerations For
                            Partially
                          </p>
                          <cite>Ronald M. Spino</cite>
                          <i className='flaticon-right-quote quotes' />
                        </blockquote>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <ul>
                          <li>A wonderful serenity has taken possession.</li>
                          <li>
                            Of my entire soul, like these sweet mornings of
                            spring which.
                          </li>
                          <li>I enjoy with my whole heart.</li>
                          <li>
                            This spot, which was created For the bliss of souls
                            like mine.
                          </li>
                        </ul>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                    <div className='dz-share-post'>
                      <div className='post-tags'>
                        <h6 className='font-14 m-b0 m-r10 d-inline'>Tags:</h6>
                        <a href='product-detail.html'>Pizza Veronese</a>
                        <a href='product-detail.html'>Chicken</a>
                        <a href='product-detail.html'>Pizza</a>
                        <a href='product-detail.html'>Burger</a>
                        <a href='product-detail.html'>Sandwich</a>
                      </div>
                      <div className='dz-social-icon'>
                        <ul>
                          <li>
                            <a
                              target='_blank'
                              className='btn-social btn-sm text-primary'
                              href='https://www.facebook.com/'
                            >
                              <i className='fab fa-facebook-f' />
                            </a>
                          </li>
                          <li>
                            <a
                              target='_blank'
                              className='btn-social btn-sm text-primary'
                              href='https://twitter.com/'
                            >
                              <i className='fab fa-twitter' />
                            </a>
                          </li>
                          <li>
                            <a
                              target='_blank'
                              className='btn-social btn-sm text-primary'
                              href='https://www.instagram.com/'
                            >
                              <i className='fab fa-instagram' />
                            </a>
                          </li>
                          <li>
                            <a
                              target='_blank'
                              className='btn-social btn-sm text-primary'
                              href='https://www.linkedin.com/'
                            >
                              <i className='fa-brands fa-linkedin-in' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='clear' id='comment-list'>
                    <div className='comments-area' id='comments'>
                      <h4 className='comments-title'>Comments (03)</h4>
                      <div className='clearfix'>
                        {/* comment list END */}
                        <ul className='comment-list'>
                          <li className='comment'>
                            <div className='comment-body'>
                              <div className='comment-author vcard'>
                                <img
                                  className='avatar photo'
                                  src='assets/images/testimonial/mini/pic1.jpg'
                                  alt='/'
                                />
                                <cite className='fn'>Monsur Rahman Lito</cite>
                              </div>
                              <p className='font-14 mb-0'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                              <div className='reply'>
                                <a
                                  href='javascript:void(0);'
                                  className='comment-reply-link'
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                            <ol className='children'>
                              <li className='comment odd parent'>
                                <div className='comment-body'>
                                  <div className='comment-author vcard'>
                                    <img
                                      className='avatar photo'
                                      src='assets/images/testimonial/mini/pic2.jpg'
                                      alt='/'
                                    />
                                    <cite className='fn'>Jake Johnson</cite>
                                  </div>
                                  <p className='font-14 mb-0'>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                  </p>
                                  <div className='reply'>
                                    <a
                                      href='javascript:void(0);'
                                      className='comment-reply-link'
                                    >
                                      Reply
                                    </a>
                                  </div>
                                </div>
                                {/* list END */}
                              </li>
                            </ol>
                            {/* list END */}
                          </li>
                          <li className='comment'>
                            <div className='comment-body'>
                              <div className='comment-author vcard'>
                                <img
                                  className='avatar photo'
                                  src='assets/images/testimonial/mini/pic3.jpg'
                                  alt='/'
                                />
                                <cite className='fn'>John Doe</cite>
                              </div>
                              <p className='font-14 mb-0'>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                              <div className='reply'>
                                <a
                                  href='javascript:void(0);'
                                  className='comment-reply-link'
                                >
                                  Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* comment list END */}
                        {/* Form */}
                        <div className='comment-respond style-1' id='respond'>
                          <h4 className='comment-reply-title' id='reply-title'>
                            Good Comments
                            <small>
                              <a
                                style={{ display: 'none' }}
                                href='javascript:void(0);'
                                id='cancel-comment-reply-link'
                                rel='nofollow'
                              >
                                Cancel reply
                              </a>
                            </small>
                          </h4>
                          <form
                            className='comment-form'
                            id='commentform'
                            method='post'
                          >
                            <p className='comment-form-author'>
                              <label htmlFor='author'>
                                Name <span className='required'>*</span>
                              </label>
                              <input
                                type='text'
                                name='dzName'
                                placeholder='Author'
                                id='author'
                              />
                            </p>
                            <p className='comment-form-email'>
                              <label htmlFor='email'>
                                Email <span className='required'>*</span>
                              </label>
                              <input
                                type='text'
                                placeholder='Email'
                                name='dzEmail'
                                id='email'
                              />
                            </p>
                            <p className='comment-form-comment'>
                              <label htmlFor='comment'>Comment</label>
                              <textarea
                                rows={8}
                                name='comment'
                                placeholder='Type Comment Here'
                                id='comment'
                                defaultValue={''}
                              />
                            </p>
                            <p className='form-submit'>
                              <button
                                type='submit'
                                className='btn btn-primary btn-hover-1'
                                id='submit'
                              >
                                <span>Submit Now</span>
                              </button>
                            </p>
                          </form>
                        </div>
                        {/* Form */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Blog Detail End */}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
