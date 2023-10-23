import React from 'react';

const ComingSoon = () => {
  return (
    <div className='page-content bg-white'>
      <div className='coming-wrapper overflow-hidden'>
        <div className='container'>
          <img
            className='bg-img dz-move'
            src='assets/images/background/pic17.png'
            alt='/'
          />
          <div className='row'>
            <div className='col-lg-8 m-auto'>
              <div className='inner-content text-center'>
                <div className='logo-header'>
                  <a href='index.html' className='logo anim-logo'>
                    <img src='assets/images/logo.png' alt='/' />
                  </a>
                </div>
                <h3 className='coming-head'>WE ARE COMING SOON!</h3>
                <p className='coming-para'>Stay tuned for something amazing</p>
                <lottie-player
                  src='assets/json/coming-soon.json'
                  className='coming-media'
                  background='transparent'
                  speed={1}
                  loop
                  autoPlay
                />
              </div>
              <div className='middle-content'>
                <h5 className='font-weight-400 m-b20'>
                  Subscribe to our mailing list to get latest updates
                </h5>
                <form
                  className='dzSubscribe m-b15'
                  action='assets/script/mailchamp.php.html'
                  method='post'
                >
                  <div className='dzSubscribeMsg text-white' />
                  <div className='input-group'>
                    <input
                      name='dzEmail'
                      required='required'
                      type='text'
                      className='form-control bg-grey'
                      placeholder='Enter Your Email'
                    />
                    <div className='input-group-addon'>
                      <button
                        name='submit'
                        value='submit'
                        type='submit'
                        className='btn btn-primary btn-hover-2'
                      >
                        <span>Send Request</span>
                        <i className='fa-solid fa-paper-plane' />
                      </button>
                    </div>
                  </div>
                </form>
                <div className='dz-social-icon text-center'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        className='text-dark'
                        href='https://www.facebook.com/'
                      >
                        <i className='fab fa-facebook-f' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='text-dark'
                        href='https://twitter.com/'
                      >
                        <i className='fab fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='text-dark'
                        href='https://www.youtube.com/'
                      >
                        <i className='fa-brands fa-youtube' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='text-dark'
                        href='https://www.instagram.com/'
                      >
                        <i className='fab fa-instagram' />
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        className='text-dark'
                        href='https://www.linkedin.com/'
                      >
                        <i className='fa-brands fa-linkedin-in' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="coming-footer text-center">
            <p>© Copyrights <span className="heart" /> by <a href="https://dexignzone.com/" target="_blank">DexignZone</a> | 2023 All Rights Reserved</p>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
