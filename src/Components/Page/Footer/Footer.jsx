import React from 'react';
import './footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppStore from '../../../Images/App_Store.png';
import GooglePlay from '../../../Images/Google_Play.png';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer({user}) {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="mail-input-container">
          <h2>Enter your email to subscribe to our newsletter</h2>
          <div className="mail-input">
            <MailOutlineIcon />
            <input type="email" placeholder='Your email'/>
            <div className="mail-send">
              <SendIcon />
            </div>
          </div>
        </div>
        <div className="footer-links">
          <section>
            <h4>CONNECT</h4>
            <strong>{user.email}</strong>
            <ul className="social-icons">
              <li>
                <InstagramIcon fontSize='medium' />
              </li>
              <li>
                <TelegramIcon fontSize='medium' />
              </li>
              <li>
                <TwitterIcon fontSize='medium' />
              </li>
            </ul>
          </section>
          <section>
            <h4>MOBILE APP</h4>
            <div className='store-section'>
              <img src={AppStore} alt="" />
              <img src={GooglePlay} alt="" />
            </div>
          </section>
          <section>
            <h4>ABOUT</h4>
            <ul className='links'>
              <li>• About This Marketplace</li>
              <li>• Frequently Asked Questions</li>
            </ul>
          </section>
          <section>
            <h4>LEGALESE</h4>
            <ul className='links'>
              <li>• Terms</li>
              <li>• Privacy</li>
              <li>• Returns {'&'} Refunds</li>
              <li>• Taxes {'&'} Fees</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
