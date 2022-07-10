import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import {Themecontext} from "../context/Themecontext"
import styles from '../styles/home.module.css';
const Home = () => {
  const {data} = useContext(Appcontext);
  const {mode} = useContext(Themecontext);
  return (
    <div className={mode==='light'?styles.light:styles.dark} >
      <h4>Here are some products...</h4>
      <br />
      <br />
      <hr />
      <div className={styles.homeFoodItems} >
        {data?.map((ele) => (
          <div key={ele.id} >
          <div key={ele.id}>
            <img src={ele.src} width="60px" alt="" />
            <p>
              <b>{ele.name}</b>
            </p>
            <p>
              Price:&#8377;{ele.costForTwo} <i>Rating:{ele.rating}</i>
            </p>
          </div>
          <button>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
