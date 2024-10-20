import React, { useState } from 'react';
// import { useCart } from '../../CartContext/CartContext';
import './plantscard.css';
import { images } from '../../staticdata/images';

const products = [
        {
          "id": 1,
          "image": images.combo,
          "name": "Monstera",
          "tagline": "Indoor Plant, Low Maintenance",
          "starRating": 4.9,
          "price": 359,
          "discountedPrice": 299,
          "isIndoor": true
        },
        {
          "id": 2,
          "image": images.combo,
          "name": "Snake Plant",
          "tagline": "Air Purifying Plant",
          "starRating": 4.7,
          "price": 499,
          "discountedPrice": 450,
          "isIndoor": true
        },
        {
          "id": 3,
          "image": images.combo,
          "name": "Peace Lily",
          "tagline": "Indoor Flowering Plant",
          "starRating": 4.8,
          "price": 599,
          "discountedPrice": 550,
          "isIndoor": true
        },
        {
          "id": 4,
          "image": images.combo,
          "name": "Fiddle Leaf Fig",
          "tagline": "Large Leaf, Indoor Plant",
          "starRating": 4.5,
          "price": 1200,
          "discountedPrice": 1100,
          "isIndoor": true
        },
        {
          "id": 5,
          "image": images.combo,
          "name": "Areca Palm",
          "tagline": "Air Purifying, Indoor Plant",
          "starRating": 4.6,
          "price": 850,
          "discountedPrice": 750,
          "isIndoor": true
        },
        {
          "id": 6,
          "image": images.combo,
          "name": "Spider Plant",
          "tagline": "Low Maintenance Plant",
          "starRating": 4.3,
          "price": 350,
          "discountedPrice": 300,
          "isIndoor": true
        },
        {
          "id": 7,
          "image": images.combo,
          "name": "Money Plant",
          "tagline": "Easy to Grow, Indoor Plant",
          "starRating": 4.7,
          "price": 250,
          "discountedPrice": 199,
          "isIndoor": true
        },
        {
          "id": 8,
          "image": images.combo,
          "name": "Rubber Plant",
          "tagline": "Glossy Leaves, Indoor Plant",
          "starRating": 4.9,
          "price": 1200,
          "discountedPrice": 1050,
          "isIndoor": true
        },
        {
          "id": 9,
          "image": images.combo,
          "name": "Boston Fern",
          "tagline": "Hanging Plant, Indoor/Outdoor",
          "starRating": 4.4,
          "price": 500,
          "discountedPrice": 450,
          "isIndoor": true
        },
        {
          "id": 10,
          "image": images.combo,
          "name": "Aloe Vera",
          "tagline": "Medicinal Plant",
          "starRating": 4.8,
          "price": 350,
          "discountedPrice": 300,
          "isIndoor": false
        },
        {
          "id": 11,
          "image": images.combo,
          "name": "Philodendron",
          "tagline": "Tropical Indoor Plant",
          "starRating": 4.6,
          "price": 400,
          "discountedPrice": 350,
          "isIndoor": true
        },
        {
          "id": 12,
          "image": images.combo,
          "name": "ZZ Plant",
          "tagline": "Very Low Maintenance",
          "starRating": 4.8,
          "price": 300,
          "discountedPrice": 250,
          "isIndoor": true
        },
        {
          "id": 13,
          "image": images.combo,
          "name": "Chinese Evergreen",
          "tagline": "Colorful Foliage",
          "starRating": 4.4,
          "price": 350,
          "discountedPrice": 300,
          "isIndoor": true
        },
        {
          "id": 14,
          "image": images.combo,
          "name": "Dracaena",
          "tagline": "Hardy Indoor Plant",
          "starRating": 4.7,
          "price": 600,
          "discountedPrice": 500,
          "isIndoor": true
        },
        {
          "id": 15,
          "image": images.combo,
          "name": "Pothos",
          "tagline": "Easy to Grow Vine",
          "starRating": 4.6,
          "price": 200,
          "discountedPrice": 150,
          "isIndoor": true
        },
        {
          "id": 16,
          "image": images.combo,
          "name": "Calathea",
          "tagline": "Ornamental Foliage Plant",
          "starRating": 4.5,
          "price": 750,
          "discountedPrice": 700,
          "isIndoor": true
        },
        {
          "id": 17,
          "image": images.combo,
          "name": "Bamboo Palm",
          "tagline": "Natural Air Purifier",
          "starRating": 4.8,
          "price": 600,
          "discountedPrice": 550,
          "isIndoor": true
        },
        {
          "id": 18,
          "image": images.combo,
          "name": "Croton",
          "tagline": "Colorful Indoor Plant",
          "starRating": 4.4,
          "price": 450,
          "discountedPrice": 400,
          "isIndoor": true
        },
        {
          "id": 19,
          "image": images.combo,
          "name": "African Violet",
          "tagline": "Beautiful Flowering Plant",
          "starRating": 4.7,
          "price": 500,
          "discountedPrice": 450,
          "isIndoor": true
        },
        {
          "id": 20,
          "image": images.combo,
          "name": "Jade Plant",
          "tagline": "Succulent, Easy to Care",
          "starRating": 4.6,
          "price": 300,
          "discountedPrice": 250,
          "isIndoor": true
        },
        {
          "id": 21,
          "image": images.combo,
          "name": "English Ivy",
          "tagline": "Beautiful Climbing Plant",
          "starRating": 4.5,
          "price": 400,
          "discountedPrice": 350,
          "isIndoor": true
        },
        {
          "id": 22,
          "image": images.combo,
          "name": "Pansy",
          "tagline": "Colorful Flowering Plant",
          "starRating": 4.4,
          "price": 250,
          "discountedPrice": 200,
          "isIndoor": false
        },
        {
          "id": 23,
          "image": images.combo,
          "name": "Petunia",
          "tagline": "Flowering Plant, Easy to Grow",
          "starRating": 4.5,
          "price": 300,
          "discountedPrice": 250,
          "isIndoor": false
        },
        {
          "id": 24,
          "image": images.combo,
          "name": "Geranium",
          "tagline": "Flowering Plant, Bright Colors",
          "starRating": 4.3,
          "price": 350,
          "discountedPrice": 300,
          "isIndoor": false
        },
        {
          "id": 25,
          "image": images.combo,
          "name": "Chrysanthemum",
          "tagline": "Colorful Flowering Plant",
          "starRating": 4.6,
          "price": 400,
          "discountedPrice": 350,
          "isIndoor": false
        },
        {
          "id": 26,
          "image": images.combo,
          "name": "Lavender",
          "tagline": "Fragrant Flowering Plant",
          "starRating": 4.8,
          "price": 500,
          "discountedPrice": 450,
          "isIndoor": false
        },
        {
          "id": 27,
          "image": images.combo,
          "name": "Bougainvillea",
          "tagline": "Vibrant Outdoor Plant",
          "starRating": 4.7,
          "price": 600,
          "discountedPrice": 550,
          "isIndoor": false
        },
        {
          "id": 28,
          "image": images.combo,
          "name": "Hibiscus",
          "tagline": "Exotic Flowering Plant",
          "starRating": 4.5,
          "price": 700,
          "discountedPrice": 650,
          "isIndoor": false
        },
        {
          "id": 29,
          "image": images.combo,
          "name": "Daisy",
          "tagline": "Bright Flowering Plant",
          "starRating": 4.6,
          "price": 200,
          "discountedPrice": 150,
          "isIndoor": false
        },
        {
          "id": 30,
          "image": images.combo,
          "name": "Marigold",
          "tagline": "Colorful Flowering Plant",
          "starRating": 4.4,
          "price": 250,
          "discountedPrice": 200,
          "isIndoor": false
        },
        {
          "id": 31,
          "image": images.combo,
          "name": "Zinnia",
          "tagline": "Beautiful Flowering Plant",
          "starRating": 4.7,
          "price": 300,
          "discountedPrice": 250,
          "isIndoor": false
        },
        {
          "id": 32,
          "image": images.combo,
          "name": "Orchid",
          "tagline": "Exotic Flowering Plant",
          "starRating": 4.8,
          "price": 1000,
          "discountedPrice": 900,
          "isIndoor": true
        },
        {
          "id": 33,
          "image": images.combo,
          "name": "Tulip",
          "tagline": "Spring Flowering Plant",
          "starRating": 4.9,
          "price": 350,
          "discountedPrice": 300,
          "isIndoor": false
        },
        {
          "id": 34,
          "image": images.combo,
          "name": "Cactus",
          "tagline": "Low Maintenance Succulent",
          "starRating": 4.6,
          "price": 250,
          "discountedPrice": 200,
          "isIndoor": true
        },
        {
          "id": 35,
          "image": images.combo,
          "name": "Succulent",
          "tagline": "Easy to Care for Plant",
          "starRating": 4.5,
          "price": 300,
          "discountedPrice": 250,
          "isIndoor": true
        },
        {
          "id": 36,
          "image": images.combo,
          "name": "Air Plant",
          "tagline": "Unique Indoor Plant",
          "starRating": 4.8,
          "price": 350,
          "discountedPrice": 300,
          "isIndoor": true
        },
        {
          "id": 37,
          "image": images.combo,
          "name": "Hoya Plant",
          "tagline": "Beautiful Trailing Plant",
          "starRating": 4.6,
          "price": 400,
          "discountedPrice": 350,
          "isIndoor": true
        },
        {
          "id": 38,
          "image": images.combo,
          "name": "String of Pearls",
          "tagline": "Unique Succulent Plant",
          "starRating": 4.5,
          "price": 450,
          "discountedPrice": 400,
          "isIndoor": true
        },
        {
          "id": 39,
          "image": images.combo,
          "name": "Bird of Paradise",
          "tagline": "Tropical Plant",
          "starRating": 4.7,
          "price": 800,
          "discountedPrice": 700,
          "isIndoor": false
        },
        {
          "id": 40,
          "image": images.combo,
          "name": "Magnolia",
          "tagline": "Beautiful Flowering Tree",
          "starRating": 4.8,
          "price": 1000,
          "discountedPrice": 900,
          "isIndoor": false
        },
        {
          "id": 41,
          "image": images.combo,
          "name": "Lemon Tree",
          "tagline": "Citrus Tree",
          "starRating": 4.5,
          "price": 1200,
          "discountedPrice": 1100,
          "isIndoor": false
        },
        {
          "id": 42,
          "image": images.combo,
          "name": "Pine Tree",
          "tagline": "Evergreen Tree",
          "starRating": 4.6,
          "price": 1500,
          "discountedPrice": 1400,
          "isIndoor": false
        },
        {
          "id": 43,
          "image": images.combo,
          "name": "Citrus Tree",
          "tagline": "Fruiting Tree",
          "starRating": 4.8,
          "price": 1500,
          "discountedPrice": 1400,
          "isIndoor": false
        },
        {
          "id": 44,
          "image": images.combo,
          "name": "Cherry Blossom",
          "tagline": "Beautiful Flowering Tree",
          "starRating": 4.7,
          "price": 2000,
          "discountedPrice": 1900,
          "isIndoor": false
        },
        {
          "id": 45,
          "image": images.combo,
          "name": "Maple Tree",
          "tagline": "Colorful Foliage",
          "starRating": 4.6,
          "price": 2500,
          "discountedPrice": 2400,
          "isIndoor": false
        },
        {
          "id": 46,
          "image": images.combo,
          "name": "Ornamental Grass",
          "tagline": "Low Maintenance Garden Plant",
          "starRating": 4.5,
          "price": 600,
          "discountedPrice": 550,
          "isIndoor": false
        },
        {
          "id": 47,
          "image": images.combo,
          "name": "Boxwood",
          "tagline": "Popular Landscaping Plant",
          "starRating": 4.8,
          "price": 800,
          "discountedPrice": 700,
          "isIndoor": false
        },
        {
          "id": 48,
          "image": images.combo,
          "name": "Yew Tree",
          "tagline": "Traditional Hedge Plant",
          "starRating": 4.4,
          "price": 900,
          "discountedPrice": 850,
          "isIndoor": false
        },
        {
          "id": 49,
          "image": images.combo,
          "name": "Lavender Tree",
          "tagline": "Fragrant Flowering Tree",
          "starRating": 4.7,
          "price": 1000,
          "discountedPrice": 950,
          "isIndoor": false
        },
        {
          "id": 50,
          "image": images.combo,
          "name": "Juniper Tree",
          "tagline": "Low Maintenance Outdoor Plant",
          "starRating": 4.5,
          "price": 800,
          "discountedPrice": 750,
          "isIndoor": false
        }
      ]

const PAGE_SIZE = 9;

const PlantsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const { addToCart } = useCart(); // Use the cart context

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <div className="container">
      {/* <h1>Plant Shop</h1> */}
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div className="product-box" key={product.id}>
            <div className="favorite-icon" onClick={() => alert(`Added ${product.name} to favorites!`)}>
              ❤️
            </div>
            <img src={product.image} alt={product.name} className="product-image" />
            <button onClick={() => alert(`your product is ${product.name}`)}>View Product</button>
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
            <p>Rating: {product.starRating}</p>
            <p>
              Price: 
               <span className="discounted-price">${product.price}</span>
              ${product.discountedPrice}
               </p>
            {/* <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button> */}
            <button className="btn btn-secondary "><span>-</span>Add to Cart<span>+</span></button>
            <button className="btn btn-secondary">Buy on Rent</button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlantsCard;