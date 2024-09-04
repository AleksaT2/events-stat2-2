export default function ShopCard({ card }) {
	const { name, price, color, img } = card;

	return (
		<div className="shop-card">
			<div className="shop-card-header">
				<h3 className="product-name card-product-name">{name}</h3>
				<p className="product-color">{color}</p>
			</div>
			<div className="shop-card-img">
				<img className="card-product-img" src={img} alt={name}/>
			</div>
			<div className="shop-card-footer">
				<p className="product-price">${price}</p>
				<button className="add-btn">add to cart</button>
			</div>
		</div>
	)
}