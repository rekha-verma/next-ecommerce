import Link from "next/link";
import HeartIcon from "../icons/heart";

export default function ProductCard() {
    return (
        <div className="categories-products">
            <div className="product-container border max-w-80 border-2 rounded-lg p-2 relative flex items-center justify-center flex-col">
                <button className="fav-container absolute top-5 right-5">
                    <HeartIcon width={16} height={16} />
                </button>
                <div className="image-container">
                    <img src="https://productimages.hepsiburada.net/s/3/1500/9593922158642.jpg"></img>
                </div>
                <div className="text-container">
                    <h4 className="product-brand-text">Adidas</h4>
                    <h4 className="product-name-text">Adidas Shoes</h4>
                    <div className="product-price-container">
                        <div className="product-discount">10%</div>
                        <div className="product-price"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}