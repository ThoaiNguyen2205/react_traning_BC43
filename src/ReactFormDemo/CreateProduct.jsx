import React, { Component } from "react";

export default class CreateProduct extends Component {
  state = {
    values: {
      idProduct: "",
      name: "",
      price: "",
      img: "",
      type: "phone",
      desc: "",
    },
    errors: {
      idProduct: "(*)",
      name: "(*)",
      price: "(*)",
      img: "(*)",
      desc: "(*)",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra nêys this.state.values hợp lệ thì mới add
    // Duyệt this.state.errors
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        alert("Dữ liệu nhập chưa hợp lệ");
        return;
      }
    }
    // call api....
    let { addProduct } = this.props;
    // validation trước thêm
    addProduct(this.state.values);
  };
  handleChangeInput = (e) => {
    let { value, id } = e.target; // e.target chính là thẻ input đang diễn ra sự kiện oninput
    let dataType = e.target.getAttribute("data-type");
    let minLength = e.target.getAttribute("data-minlength");
    let maxLength = e.target.getAttribute("data-maxlength");
    // xử lý this.state.values
    let newValue = { ...this.state.values };
    newValue[id] = value;

    // xử lý erros
    let newError = { ...this.state.errors };
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống";
    } else {
      if (dataType) {
        switch (dataType) {
          case "number": {
            let regexNumber = /^\d+$/;
            if (!regexNumber.test(value)) {
              messError = id + "phải là số !";
            }
            break;
          }
          case "string": {
            let regexString = /^[a-z A-Z 0-9]+$/;
            if (!regexString.test(value)) {
              messError = id + " phải là ký tự !";
            }
            break;
          }
        }
      }
    }
    newError[id] = messError;

    // cập nhật lại value và cả error sau khi xử lý
    this.setState(
      {
        values: newValue,
        errors: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // can thiệp trước khi props mới truyền vào và render ra giao diện thì đem props gắn bào state

  //Cách 2:
  // Chỉ chạy khi props thay đổi và trước khi render (thường dùng cho việc gán props vào state)
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.productEdit,
    });
  }

  render() {
    let { idProduct, name, price, img, type, desc } = this.state.values;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">product info</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>id</p>
                <input
                  data-type="number"
                  className="form-control"
                  id="idProduct"
                  name="idProduct"
                  value={idProduct}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">
                  {this.state.errors.idProduct}
                </p>
              </div>
              <div className="form-group">
                <p>name</p>
                <input
                  data-type="string"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.name}</p>
              </div>
              <div className="form-group">
                <p>price</p>
                <input
                  data-type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={price}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.price}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="from-group">
                <p>img</p>
                <input
                  type="text"
                  className="form-control"
                  id="img"
                  name="img"
                  value={img}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.img}</p>
              </div>
              <div className="form-group">
                <p>type</p>
                <select
                  className="form-control"
                  id="type"
                  name="type"
                  value={type}
                  onInput={this.handleChangeInput}
                >
                  <option value="phone">Phone</option>
                  <option value="tablet">Tablet</option>
                  <option value="laptop">laptop</option>
                </select>
              </div>
              <div className="form-group">
                <p>desc</p>
                <input
                  data-minlength="6"
                  data-maxlength="32"
                  className="form-control"
                  id="desc"
                  name="des"
                  value={desc}
                  onInput={this.handleChangeInput}
                />
                <p className="text text-danger">{this.state.errors.desc}</p>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-success my-2"
              onSubmit={this.handleSubmit}
            >
              Create
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                let { updateProduct } = this.props;
                // gửi ra dữ liệu sau khi thay đổi product
                updateProduct({ ...this.state.values });
              }}
            >
              Update
            </button>
          </div>
        </div>
      </form>
    );
  }
}
