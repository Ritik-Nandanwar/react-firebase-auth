import React, { useEffect, useState } from "react";
const MainSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    await fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
    console.log(products);
  };
  return (
    <>
      <div className="container">
        <div className="card grey" style={{ padding: "28px" }}>
          <div className="row">
            {products.map((product) => (
              <card
                className="card-panel hoverable grey lighten-5 col s12 m6 center valign-wrapper"
                style={{
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "12px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={product.title}
              >
                <div className="card-image">
                  <img
                    style={{
                      height: "80px",
                      width: "80px",
                      marginRight: "16px",
                    }}
                    src={product.thumbnail}
                    alt=""
                    className="col"
                  />
                </div>
                <span className="truncate">{product.title}</span>
                <button className="btn">click</button>
              </card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
