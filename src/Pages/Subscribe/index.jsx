import React from 'react';

const Subscribe = () => {
  return (
    <div className='page-content bg-white'>
      {/* Construction */}
      <section className='content-inner under-construction' id='app-banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-md-5'>
              <div className='inner-construction'>
                <h3 className='dz-head'>
                  We are digging
                  <br /> deep down
                </h3>
                <p className='const-p'>
                  We are currently facing some issues with our system and our
                  team is working hard to resolve it. You can subscribe to our
                  mailing list if you want to get notified
                </p>
                <div className='space-right m-b25'>
                  <form
                    className='dzSubscribe'
                    action='assets/script/mailchamp.php.html'
                    method='post'
                  >
                    <div className='dzSubscribeMsg text-white' />
                    <div className='input-group'>
                      <input
                        name='dzEmail'
                        required='required'
                        type='text'
                        className='form-control'
                        placeholder='Enter Your Email:'
                      />
                      <button
                        name='submit'
                        value='submit'
                        type='submit'
                        className='btn btn-primary w-100 btn-hover-3'
                      >
                        <span className='btn-text' data-text='Subscribe'>
                          Subscribe
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <p className='font-14'>You can also follow us on</p>
                <div className='dz-social-icon'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        className='btn-social btn-md text-dark'
                        href='https://www.facebook.com/'
                      >
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='btn-social btn-md text-dark'
                        href='https://twitter.com/'
                      >
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='btn-social btn-md text-dark'
                        href='https://www.youtube.com/'
                      >
                        <i className='fa-brands fa-youtube' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='btn-social btn-md text-dark'
                        href='https://www.instagram.com/'
                      >
                        <i className='fab fa-instagram' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='btn-social btn-md text-dark'
                        href='https://www.linkedin.com/'
                      >
                        <i className='fa-brands fa-linkedin-in' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-7 col-md-7'>
              <div className='construction-media'>
                <img
                  className='move-1'
                  src='assets/images/background/pic18.png'
                  alt='/'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Construction */}
    </div>
  );
};

export default Subscribe;
