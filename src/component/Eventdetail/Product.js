import React, { useState } from "react";
import "./Product.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./CartReducer";
import { MockData } from "./MockData"; // Import mock data

const Products = () => {
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    // Dùng mock data thay vì gọi API
    const data = MockData;

    return (
        <div className="product">
            {data ? (
                <>
                    <div className="left">
                        <div className="images">
                            <img
                                src={data?.attributes?.img?.data?.attributes?.url}
                                alt=""
                                onClick={(e) => setSelectedImg("img")}
                            />
                            <img
                                src={data?.attributes?.img2?.data?.attributes?.url}
                                alt=""
                                onClick={(e) => setSelectedImg("img2")}
                            />
                        </div>
                        <div className="mainImg">
                            <img
                                src={data?.attributes[selectedImg]?.data?.attributes?.url}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className="price">${data?.attributes?.price}</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className="quantity">
                            <button
                                onClick={() =>
                                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                                }
                            >
                                -
                            </button>
                            {quantity}
                            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                        </div>
                        <button
                            className="add"
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: data.id,
                                        title: data.attributes.title,
                                        desc: data.attributes.desc,
                                        price: data.attributes.price,
                                        img: data.attributes.img.data.attributes.url,
                                        quantity,
                                    })
                                )
                            }
                        >
                            <AddShoppingCartIcon /> ADD TO CART
                        </button>
                        <div className="links">
                            <div className="item">
                                <FavoriteBorderIcon /> ADD TO WISH LIST
                            </div>
                            <div className="item">
                                <BalanceIcon /> ADD TO COMPARE
                            </div>
                        </div>
                        <div className="info">
                            <span>Vendor: Polo</span>
                            <span>Product Type: T-Shirt</span>
                            <span>Tag: T-Shirt, Women, Top</span>
                        </div>
                        <hr />
                        <div className="info">
                            <span>DESCRIPTION</span>
                            <hr />
                            <span>ADDITIONAL INFORMATION</span>
                            <hr />
                            <span>FAQ</span>
                        </div>
                    </div>
                    <div className="detail">
                        <h2>Detail</h2>
                        <hr />
                        <div>{data?.attributes?.description}</div>
                    </div>
                </>
            ) : (
                "Loading..."
            )}
        </div>
    );
};

export default Products;
