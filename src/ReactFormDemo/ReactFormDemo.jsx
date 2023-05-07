import React, { Component } from "react";
import CreateProduct from "./CreateProduct";

export default class ReactFormDemo extends Component {
  state = {
    arrProduct: [
      {
        idProduct: "01",
        name: "Iphone X",
        price: 2000,
        type: "Phone",
        img: "./img/applephone.jpg",
        desc: "Điện thoại iphone X",
      },
      {
        idProduct: "02",
        name: "Iphone XS Max",
        price: 3000,
        type: "Phone",
        img: "./img/applephone.jpg",
        desc: "Điện thoại iphone XS Max",
      },
    ],
    productEdit: {
      idProduct: "",
      name: "",
      price: 0,
      type: "",
      img: "",
      desc: "",
    },
  };

  addProduct = (prodInfo) => {
    console.log(prodInfo);
    this.state.arrProduct.push(prodInfo);
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  delProduct = (idProductDel) => {
    console.log(idProductDel);
    let indexDel = this.state.arrProduct.findIndex(
      (item) => item.idProduct === idProductDel
    );
    if (indexDel != -1) {
      this.state.arrProduct.splice(indexDel, 1);
    }
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  updateProduct = (newProduct) => {
    let prod = this.state.arrProduct.find(
      (prod) => prod.idProduct == newProduct.idProduct
    );
    if (prod) {
      for (let key in prod) {
        prod[key] = newProduct[key];
      }
    }
    //setState sau khi cập nhật
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };
  render() {
    return (
      <div>
        <CreateProduct
          productEdit={this.state.productEdit}
          addProduct={this.addProduct}
          updateProduct={this.updateProduct}
        />
        <table className="table mt-2">
          <thead className="bg-dark text-white fw-bold">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Img</th>
              <th>Price</th>
              <th>Type</th>
              <th>Des</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrProduct.map((prod) => {
              return (
                <tr key={prod.idProduct}>
                  <td>{prod.idProduct}</td>
                  <td>{prod.name}</td>
                  <td>
                    <img src={prod.img} width={50} height={50} alt="" />
                  </td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.desc}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.setState({
                          productEdit: prod,
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.delProduct(prod.idProduct);
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
