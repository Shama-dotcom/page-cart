import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';

import './Card.css';

const Cards = ({ item, handleClick }) => {
  const { title, price, description, image, category, rating, size, stock } =
    item;

  const [quantity, setQuantity] = useState();

  const handleDecrement = () => {
    setQuantity((prevCount) => prevCount - 1);
    console.log('clicked');
  };

  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
    console.log('clicked');
  };
  return (
    <>
      <div className="cards">
        <div className="image_box">
          {' '}
          <img src={image} alt="" />
          <h5>
            Name: <br />
            <span className="title">{title}</span>
          </h5>
          <h5>Price: {price} $</h5>
          <h5>
            Quantity:{' '}
            <div>
              <button onClick={handleDecrement}>+</button>
              <button>{quantity}</button>
              <button onClick={handleIncrement}>-</button>
            </div>
          </h5>
          <button onClick={() => handleClick(item)}>
            Add to Cart <FaCartPlus />
          </button>
        </div>
        <div className="details">
          <div>
            <h5>
              Category: <br />
              <span className="category">{category}</span>
            </h5>
            <h5>
              {' '}
              Description: <br />{' '}
              <span className="description">{description}</span>
            </h5>
            <h5>
              {' '}
              Size: <br />
              <span className="size"> {size}</span>
            </h5>
            <h5>
              Stock: <br />
              <span className="stock">{stock}</span>
            </h5>
            <h5>
              Rating: <br />
              <h4 className="rate">{rating}</h4>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

// <select onChange={(e) => onFilterQuantity(e.target.value)}>
//               <option>0</option>
//               <option >1</option>
//               <option>2</option>
//               <option>3</option>
//               <option>4</option>
//               <option>5</option>
//               <option>6</option>
//               <option>7</option>
//               <option>8</option>
//               <option>9</option>
//               <option>10</option>
//               <option>11</option>
//               <option>12</option>
//               {/* <option>13</option>
//               <option>14</option>
//               <option>15</option>
//               <option>16</option>
//               <option>17</option>
//               <option>18</option>
//               <option>19</option>
//               <option>20</option> */}
//             </select>
