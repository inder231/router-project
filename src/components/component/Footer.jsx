import React from 'react'
import {Link} from 'react-router-dom';
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer} >
      <div className={styles.footer_up} >
        <div><Link to="/faq" >FAQ</Link></div>
        <div>Careers</div>
        <div>Press and Media</div>
        <div>Sitemap</div>
      </div>
      <hr/>
      <div className={styles.footer_down}>
        <div>
          <ul>
            <li><h3>ONLINE STORE</h3></li>
            <li>Sell online</li>
            <li>Features</li>
            <li>Examples</li>
            <li>Website builder</li>
            <li>Themes</li>
          </ul>
        </div>
        <div>
          <ul>
          <li><h3>SUPPORT</h3></li>
          <li>24/7 support</li>
          <li>Free tools</li>
          <li>API documentaton</li>
          <li>Logo Maker</li>
          <li>Legal</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer