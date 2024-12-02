// import React from 'react';
import Button from "../button/Button.jsx";
import './FruitAmountEntry.css';

const FruitAmountEntry = ({productName, product, count, onUpdate}) => {
    return (
        <>
            <article className="fruitCard">
                <h2>{productName}</h2>
                <button
                    type="button"
                    onClick={() => onUpdate(product, Math.max(0, count - 1))}
                    disabled={count <= 0}
                    className="minusButton"
                >
                    -
                </button>
                <h3>{count}</h3>
                <Button
                    type="button"
                    onClick={() => onUpdate(product, count + 1)}
                    className="plusButton"
                    buttonText="+"
                />
            </article>
        </>
    );
};

export default FruitAmountEntry;