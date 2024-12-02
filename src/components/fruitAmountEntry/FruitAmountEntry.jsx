// import React from 'react';

import Button from "../button/Button.jsx";

const FruitAmountEntry = ({productName, product, count, onUpdate}) => {
    return (
        <div className="fruit-amount-entry">
            <article className="fruitCard">
                <h2>{productName}</h2>
                <button
                    type="button"
                    onClick={() => onUpdate(product, Math.max(0, count - 1))} // Prevent negative values
                    disabled={count <= 0}
                    className="minus-button"
                >
                    -
                </button>
                <h3>{count}</h3>
                <Button
                    type="button"
                    onClick={() => onUpdate(product, count + 1)}
                    className="plus-button"
                    buttonText="+"
                />
            </article>
        </div>
    );
};

export default FruitAmountEntry;