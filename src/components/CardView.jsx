import ShopCard from './ShopCard';

export default function CardsView({ cards }) {
	return (
		<div className="shop-cards">
			{cards.map((card, idx) => <ShopCard card={card} key={idx} />)}
		</div>
	);
}
