import './App.css'
import {useState} from 'react'

function App() {
    let [fruitCounter, setFruitCounter] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0,
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target); // Collect form data
        console.log(Object.fromEntries(formData.entries())); // Log as an object
    };

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article className="fruitCard">
                <h2>🍓Aardbeien</h2>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            strawberries: fruitCounter.strawberries - 1
                        })
                    }
                    disabled={fruitCounter.strawberries <= 0}
                    className="minus-button"
                >
                    -
                </button>
                <h3>{fruitCounter.strawberries}</h3>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            strawberries: fruitCounter.strawberries + 1
                        })
                    }
                    className="plus-button"
                >
                    +
                </button>
            </article>

            <article className="fruitCard">
                <h2>🍌Bananen</h2>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            bananas: fruitCounter.bananas - 1
                        })
                    }
                    disabled={fruitCounter.bananas <= 0}
                    className="minus-button"
                >
                    -
                </button>
                <h3>{fruitCounter.bananas}</h3>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            bananas: fruitCounter.bananas + 1
                        })
                    }
                    className="plus-button"
                >
                    +
                </button>
            </article>

            <article className="fruitCard">
                <h2>🍏Appels</h2>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            apples: fruitCounter.apples - 1
                        })
                    }
                    disabled={fruitCounter.apples <= 0}
                    className="minus-button"
                >
                    -
                </button>
                <h3>{fruitCounter.apples}</h3>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            apples: fruitCounter.apples + 1
                        })
                    }
                    className="plus-button"
                >
                    +
                </button>
            </article>

            <article className="fruitCard">
                <h2>🥝Kiwi&apos;s</h2>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            kiwis: fruitCounter.kiwis - 1
                        })
                    }
                    disabled={fruitCounter.kiwis <= 0}
                    className="minus-button"
                >
                    -
                </button>
                <h3>{fruitCounter.kiwis}</h3>
                <button
                    type="button"
                    onClick={() =>
                        setFruitCounter({
                            ...fruitCounter,
                            kiwis: fruitCounter.kiwis + 1
                        })
                    }
                    className="plus-button"
                >
                    +
                </button>
            </article>

            <button
                type="button"
                className="reset-button"
                onClick={() => {
                    setFruitCounter({
                        ...fruitCounter,
                        strawberries: 0,
                        bananas: 0,
                        apples: 0,
                        kiwis: 0
                    })
                }}

            >
                reset
            </button>

            <form className="delivery-form" onSubmit={handleSubmit}>
                <label htmlFor="first-name">Voornaam <input type="text" id="first-name" name="first-name"/></label>
                <label htmlFor="last-name">Achternaam <input type="text" id="last-name" name="last-name"/></label>
                <label htmlFor="last-name">Leeftijd <input type="number" id="last-name" name="last-name"
                                                           placeholder="0"/></label>
                <label htmlFor="zip-code">Postcode <input type="text" id="zip-code" name="zip-code"/></label>
                <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                <select id="delivery-options-day" value="delivery-options-day" name="delivery-options-day">
                    <option value="weekly">Iedere week</option>
                    <option value="every-2-weeks">Om de week</option>
                    <option value="monthly">Om de maand</option>
                </select>
                <div>
                    <input type="radio" id="daytime-delivery" value="daytime-delivery" name="delivery-frequency" checked />
                    <label htmlFor="daytime-delivery">Overdag</label>
                    <input type="radio" id="evening-delivery" value="evening-delivery" name="delivery-frequency"/>
                    <label htmlFor="evening-delivery">&apos;s Avonds</label>
                </div>
                <label htmlFor="delivery-note">Opmerking</label>
                <textarea id="delivery-note" name="delivery-note"></textarea>
                <label htmlFor="accept-terms-conditions"><input type="checkbox" id="accept-terms-conditions" name="accept-terms-conditions" /> Ik ga akkoord met de voorwaarden</label>
                <input type="submit" value="Verzend"/>
            </form>
        </>
    )
}

export default App
