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
        "https://image.shutterstock.com/image-photo/composition-assorted-raw-organic-vegetables-260nw-598749548.jpg",
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

vegetableImage: "https://image.shutterstock.com/image-photo/composition-assorted-raw-organic-vegetables-260nw-598749548.jpg",

   appleImage: "data:image/jpeg;base64,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",


spinachImage: "https://media.gettyimages.com/photos/spinach-bunch-isolated-on-white-background-picture-id172689786?s=612x612",
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
              <img className="photo" src={this.state.vegetableImage} alt="" />
            </div>
            <div className="product-info">
              <h5> Vegetables </h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.spinachQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.appleImage} alt="" />
            </div>
            <div className="product-info">
              <h5> Apples</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.spinachQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.veg2Img} alt="" />
            </div>
            <div className="product-info">
              <h5> Onions</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.spinachQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.spinachImage} alt="" />
            </div>
            <div className="product-info">
              <h5> Spinach</h5>
              <p> Kes {this.state.appleImgPrice}</p>
              <p> Quantity {this.state.appleImgQuantity} </p>
             
            </div>
          </div>
 </section>
      </div>
    );
  }
}

export default App;
