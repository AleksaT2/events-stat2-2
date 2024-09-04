import ShopItem from './ShopItem';

export default function ListView({ items }) {
	return (
		<div className="shop-items">
			{items.map((item, idx) => <ShopItem item={item} key={idx} />)}
		</div>
	);
}