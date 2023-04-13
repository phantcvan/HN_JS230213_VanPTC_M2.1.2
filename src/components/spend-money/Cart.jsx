import { useState } from "react";
import { productsData } from "./productsData";

function Page() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("");
  const [products, setProducts] = useState(productsData);

  const handleBuyClick = (index) => {
    const newCart = [...cart];
    const buy = products[index];
    const productId = newCart.findIndex(
      (product) => product.id === buy.id
    );
    if (productId !== -1) {
      newCart[productId].quantity++;
    } else {
      newCart.push({ ...buy, quantity: 1 });
    }
    setCart(newCart);

    // Sử dụng mảng giỏ hàng mới được cập nhật để tính tổng giá trị
    const total = newCart.reduce(
      (prevTotal, product) => prevTotal + product.price * product.quantity,
      0
    );
    setTotal(total);

    const newProducts = [...products];
    newProducts[index].quantity++;
    setProducts(newProducts);
  };



  const handleMinusClick = (index) => {
    const newProducts = [...products];
    const sell = products[index];
    const newCart = [...cart];
    if (newProducts[index].quantity >= 1) {
      newProducts[index].quantity--;

      const total = newProducts.reduce(
        (prevTotal, product) => prevTotal + product.price * product.quantity,
        0
      );
      setTotal(total);
      setProducts(newProducts);
    }
    const productId = newCart.findIndex((product) => product.id === sell.id);
    if (productId !== -1) {
      if (newCart[productId].quantity > 1) {
        newCart[productId].quantity--;
      } else if (newCart[productId].quantity === 1) {
        newCart.splice(productId, 1);
      }
    }
    setCart(newCart);
  };


  // nút reset giỏ hàng
  const handleResetCart = () => {
    setCart([]);
    setTotal(0);
    const newProducts = products.map(product => {
      return {
        ...product,
        quantity: 0
      }
    });
    setProducts(newProducts);
  };



  // Button thêm/ bớt ở giỏ hàng
  const handleMinusCart = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity--;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    const total = newCart.reduce(
      (prevTotal, product) => prevTotal + product.price * product.quantity,
      0
    );
    setTotal(total);
    const newProducts = products.map((product) => {
      const cartItem = newCart.find((item) => item.id === product.id);
      if (cartItem) {
        return {
          ...product,
          quantity: cartItem.quantity,
        };
      } else if (product.quantity > 0) {
        return {
          ...product,
          quantity: 0,
        };
      }
      return product;
    });
    setProducts(newProducts);
  };

  const handleBuyCart = (index) => {
    const newCart = [...cart];
    const selectedProduct = newCart[index];
    selectedProduct.quantity++;
    setCart(newCart);
    const total = newCart.reduce(
      (prevTotal, product) => prevTotal + product.price * product.quantity,
      0
    );
    setTotal(total);
    const newProducts = [...products];
    cart.forEach((cartItem) => {
      const productIndex = newProducts.findIndex((productItem) => productItem.id === cartItem.id);
      if (productIndex !== -1) {
        newProducts[productIndex].quantity = cartItem.quantity;
      }
    });
    setProducts(newProducts);
  }

  return (<>
    <div className='navbar-content'>
      {total > 0 ?
        (<div>To Spend <span><b> ${(128000000000 - total).toLocaleString("en-US")}</b> </span>You Have a Lot of money</div>
        ) : (<div>To Spend <span><b> ${(128000000000).toLocaleString("en-US")}</b> </span>You Have money</div>
        )
      }
    </div>
    <div className="container">
      {products.map((products, index) => (
        <div className="element">
          <img src={products.image} alt="Product" />
          <div className='title'>
            <span className="product" id="name">{products.title}</span>
            <span className="product" id="price">$ {products.price.toLocaleString("en-US")}</span>
          </div>
          <div className="buyAndSellContainer">
            <button
              className="btn-sell"
              id="sell"
              onClick={() => handleMinusClick(index)}
            >
              Interest
            </button>
            <span className="product">{products.quantity}</span>
            <button
              className="btn-buy"
              id="buy"
              onClick={() => handleBuyClick(index)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
    <div className="cart">

      <p className="cart_title">Your Cart</p>
      {cart.map((product, index) =>
        <div key={index} className="product_buy">
          <div className="buy_title">{product.title}</div>
          <div  className="buy_quantity">
            <button onClick={() => handleMinusCart(index)}> - </button>
            <span> {product.quantity} </span>
            <button onClick={() => handleBuyCart(index)}> + </button>

          </div>
        </div>
      )}
      {total > 0 ?
        (<div className="total_buy">
          <span className="total_buy">Tổng tiền: ${total.toLocaleString("en-US")}</span>
          <button className="btnReset" onClick={handleResetCart}>Reset Cart</button>
        </div>
        ) : (
          <span className="total_buy">You have no product in cart</span>
        )}



    </div>
  </>
  );
}

export default Page;
