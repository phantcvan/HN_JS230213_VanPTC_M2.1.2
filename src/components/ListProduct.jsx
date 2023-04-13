import React, { useState } from "react";


function ListProduct() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      quantity: 0,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },
    {
      id: 2,
      title: "Fanta",
      price: 5,
      quantity: 0,
      image:
        "https://www.coca-cola.com.tr/content/dam/one/tr/tr/product-images/fanta-portakal_product_image.png",
    },
    {
      id: 3,
      title: "Sprite",
      price: 5,
      quantity: 0,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      title: "Ayran",
      price: 3,
      quantity: 0,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      title: "Salgam",
      price: 4,
      quantity: 0,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 6,
      title: "Cay",
      price: 3,
      quantity: 0,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 7,
      title: "Kahve",
      price: 10,
      quantity: 0,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 8,
      title: "Soda",
      price: 4,
      quantity: 0,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 9,
      title: "Bisiklet",
      price: 1000,
      quantity: 0,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },
    {
      id: 10,
      title: "Lüx Kol Saati",
      price: 25000,
      quantity: 0,
      image:
        "https://www.dogansaatcilik.com.tr/ProductImages/118687/big/seiko-ssc719p-erkek-kol-saati__0296960735052182.jpg",
    },
    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      quantity: 0,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 12,
      title: "Iskender",
      price: 50,
      quantity: 0,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12,
      quantity: 0,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 14,
      title: "Malikane",
      price: 2500000000,
      quantity: 0,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750000,
      quantity: 0,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      quantity: 0,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      quantity: 0,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 18,
      title: "Ada",
      price: 125000000,
      quantity: 0,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 22,
      title: "Stadium",
      price: 2500000,
      quantity: 0,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
    {
      id: 23,
      title: "Bitcoin",
      price: 60000,
      quantity: 0,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
    },
    {
      id: 19,
      title: "Messi Tshirt",
      price: 250,
      quantity: 0,
      image:
        "https://st2.myideasoft.com/idea/fr/55/myassets/products/366/paris-saint-germain-cup-away-stadium-shirt-2021-22-kids-with-messi-30-printing-ss4-p-12087703-u-6v44pc9ht2ynaiyuv5uk-v-af3dfad2f9b44448a3068821419095db_min.jpg?revision=1628627354",
    },
  ]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("");

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



  return (
    <>
      {console.log("TỔNG TIỀN", total)}
      {console.log("GIỎ HÀNG", cart)}
      <div className='navbar-content'>
        {total > 0 ?
          (<div>To Spend <span>${(128000000000 - total).toLocaleString("en-US")} </span>You Have a Lot of money</div>
          ) : (<div>To Spend <span>${(128000000000 - total).toLocaleString("en-US")} </span>You Have money</div>
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
            <div style={{ width: "60%" }}>{product.title}</div>
            <div style={{ width: "30%", textAlign: "left" }}>
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

export default ListProduct;
