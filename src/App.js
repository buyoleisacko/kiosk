import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Spinach",
      veg1Img:
        "https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      spinachQuantity: 10,

      veg2: "Onion",
      veg2Img:
        "https://image.shutterstock.com/image-photo/full-frame-shot-purple-onions-260nw-1284082165.jpg",
      onionQuantity: 30,

      veg3: "Carrots",
      veg3Img:
        "https://www.jessicagavin.com/wp-content/uploads/2019/02/carrots-7-1200.jpg",
      carrotQuabtity: 50,

      type2: "Fruits",

      fruit1: " banana",
      fruit1Img:
        "https://media.istockphoto.com/photos/banana-picture-id636739634?k=6&m=636739634&s=612x612&w=0&h=BQ9Z6DobjFzclh3LN7nKSljrRqycJPCq65CS8rtUHU4=",
      bananaQuantity: 200,

      fruit2: " Mango",
      fruit2Img:
        "https://st3.depositphotos.com/1020804/12760/i/450/depositphotos_127608560-stock-photo-mango-cubes-and-mango-fruit.jpg",
      mangoQuantity: 50,

      appleImg:
        "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528",

      appleImgQuantity: 30,
      appleImgPrice: 100,

      bunchImg:
        "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      bunch2Img:
        "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

      bunch3Img:
        "https://images.pexels.com/photos/2820144/pexels-photo-2820144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>    MY MAMA MBOGA WEBSITE</h1>
        <h> We sell {this.state.type1} </h>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg1Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.spinachQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bunchImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
[2:57 pm, 08/08/2020] Shirley: </section>
      </div>
    );
  }
}

export default App;
