import React, { useContext } from "react";
// import { Appcontext } from "../context/Appcontext";
import { Themecontext } from "../context/Themecontext";
import styles from "../styles/home.module.css";
const Home = () => {
  // const { data } = useContext(Appcontext);
  const { mode } = useContext(Themecontext);
  return (
    <div className={mode === "light" ? styles.light : styles.dark}>
      <div style={{ flex: 1 }}>
        <img
          src="https://media.istockphoto.com/photos/home-page-picture-id1002351782?s=612x612"
          alt=""
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <h2>Welcome to My routing website</h2>
        <img
        style={{borderRadius:"20px"}}
          src="https://media.istockphoto.com/photos/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-picture-id1154370446?s=612x612"
          width="250px"
          alt=""
        />
      </div>
      {/* <div className={styles.homeFoodItems} >
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
      </div> */}
    </div>
  );
};

export default Home;
