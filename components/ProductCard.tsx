import React from 'react';

interface ProductCardProps {
    title: string;
    price: number;
    rating: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, rating, imageUrl }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{title}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Rating: {rating}⭐</p>
        </div>
    );
};

export default ProductCard;