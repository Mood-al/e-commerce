import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
const ProductContext = React.createContext();
export class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      let singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState({
      products,
    });
  };
  addToCart = (id) => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItems(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      {
        cart: [...this.state.cart, product],
      },
      () => this.addTotal()
    );
  };
  getItems(id) {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  }
  handleDetails = (id) => {
    const product = this.getItems(id);
    this.setState({
      detailProduct: product,
    });
  };
  openModal = (id) => {
    const product = this.getItems(id);
    this.setState({ modalOpen: true, modalProduct: product });
  };
  closeModal = (val) => {
    if (val) {
      this.setState({ modalOpen: false });
    }
  };
  decreament = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    selectedItem.count = selectedItem.count - 1;
    selectedItem.total = selectedItem.count * selectedItem.price;
    this.setState(
      {
        cart: tempCart,
      },
      this.addTotal()
    );
    if (selectedItem.count < 0) {
      const newCart = tempCart.filter((item) => item.id !== id);
      this.setState(
        {
          cart: newCart,
        },
        this.addTotal()
      );
    }
  };
  increament = (id) => {
    let tempCart = [...this.state.cart];
    const selectedItem = tempCart.find((item) => item.id === id);
    selectedItem.count = selectedItem.count + 1;
    selectedItem.total = selectedItem.count * selectedItem.price;
    this.setState(
      {
        cart: tempCart,
      },
      this.addTotal
    );
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    let index = tempProducts.indexOf(this.getItems(id));
    let removedProducts = tempProducts[index];
    removedProducts.inCart = false;
    removedProducts.total = 0;
    removedProducts.count = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
      };
    }, this.addTotal());
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      this.setProducts(),
      this.addTotal()
    );
  };
  addTotal = () => {
    let tempTotal = 0;
    this.state.cart.map((item) => (tempTotal += item.total));
    let tempTax = tempTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2));
    let total = tax + tempTotal;
    this.setState(() => {
      return {
        cartSubTotal: tempTotal,
        cartTax: tax,
        cartTotal: total,
      };
    });
  };
  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            addToCart: this.addToCart,
            handleDetails: this.handleDetails,
            openModal: this.openModal,
            closeModal: this.closeModal,
            decreament: this.decreament,
            increament: this.increament,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;
