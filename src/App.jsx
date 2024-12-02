import './App.css'
import {useState} from 'react'
import FruitAmountEntry from "./components/fruitAmountEntry/FruitAmountEntry.jsx";
import Button from "./components/button/Button.jsx";
import InputLabel from "./components/inputLabel/InputLabel.jsx";

function App() {
    let [fruitCounter, setFruitCounter] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0,
    });

    const [formData, setFormdata] = useState({
        firstName: '',
        lastName: '',
        age: '',
        zipCode: '',
        deliveryFrequency: 'weekly',
        deliveryTime: 'daytime-delivery',
        acceptTerms: false,
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target); // Collect form data
        console.log(Object.fromEntries(formData.entries())); // Log as an object
    };

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleFruitUpdate = (product, newCount) => {
        setFruitCounter((prev) => ({
            ...prev,
            [product]: newCount,
        }));
    };

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruit-amount-entry">

                <FruitAmountEntry
                    productName="🍓Aardbeien"
                    product="strawberries"
                    count={fruitCounter.strawberries}
                    onUpdate={handleFruitUpdate}
                />

                <FruitAmountEntry
                    productName="🍌Bananen"
                    product="bananas"
                    count={fruitCounter.bananas}
                    onUpdate={handleFruitUpdate}
                />

                <FruitAmountEntry
                    productName="🍏Appels"
                    product="apples"
                    count={fruitCounter.apples}
                    onUpdate={handleFruitUpdate}
                />

                <FruitAmountEntry
                    productName="🥝Kiwi&apos;s"
                    product="kiwis"
                    count={fruitCounter.kiwis}
                    onUpdate={handleFruitUpdate}
                />
                {/*<article className="fruitCard">*/}
                {/*    <h2>🍓Aardbeien</h2>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                strawberries: fruitCounter.strawberries - 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        disabled={fruitCounter.strawberries <= 0}*/}
                {/*        className="minus-button"*/}
                {/*    >*/}
                {/*        -*/}
                {/*    </button>*/}
                {/*    <h3>{fruitCounter.strawberries}</h3>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                strawberries: fruitCounter.strawberries + 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        className="plus-button"*/}
                {/*    >*/}
                {/*        +*/}
                {/*    </button>*/}
                {/*</article>*/}
                {/*<article className="fruitCard">*/}
                {/*    <h2>🍌Bananen</h2>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                bananas: fruitCounter.bananas - 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        disabled={fruitCounter.bananas <= 0}*/}
                {/*        className="minus-button"*/}
                {/*    >*/}
                {/*        -*/}
                {/*    </button>*/}
                {/*    <h3>{fruitCounter.bananas}</h3>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                bananas: fruitCounter.bananas + 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        className="plus-button"*/}
                {/*    >*/}
                {/*        +*/}
                {/*    </button>*/}
                {/*</article>*/}
                {/*<article className="fruitCard">*/}
                {/*    <h2>🍏Appels</h2>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                apples: fruitCounter.apples - 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        disabled={fruitCounter.apples <= 0}*/}
                {/*        className="minus-button"*/}
                {/*    >*/}
                {/*        -*/}
                {/*    </button>*/}
                {/*    <h3>{fruitCounter.apples}</h3>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                apples: fruitCounter.apples + 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        className="plus-button"*/}
                {/*    >*/}
                {/*        +*/}
                {/*    </button>*/}
                {/*</article>*/}
                {/*<article className="fruitCard">*/}
                {/*    <h2>🥝Kiwi&apos;s</h2>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                kiwis: fruitCounter.kiwis - 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        disabled={fruitCounter.kiwis <= 0}*/}
                {/*        className="minus-button"*/}
                {/*    >*/}
                {/*        -*/}
                {/*    </button>*/}
                {/*    <h3>{fruitCounter.kiwis}</h3>*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() =>*/}
                {/*            setFruitCounter({*/}
                {/*                ...fruitCounter,*/}
                {/*                kiwis: fruitCounter.kiwis + 1*/}
                {/*            })*/}
                {/*        }*/}
                {/*        className="plus-button"*/}
                {/*    >*/}
                {/*        +*/}
                {/*    </button>*/}
                {/*</article>*/}
                <Button
                    type="button"
                    className="resetButton"
                    onClick={() => {
                        setFruitCounter({
                            strawberries: 0,
                            bananas: 0,
                            apples: 0,
                            kiwis: 0,
                        })
                    }}
                    buttonText="Reset"
                />
            </div>

            <form className="delivery-form" onSubmit={handleSubmit}>
                <InputLabel
                    labelName="firstName"
                    inputText="Voornaam"
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="inputField"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required={true}
                />
                <InputLabel
                    labelName="lastName"
                    inputText="Achternaam"
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="inputField"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required={true}
                />
                <InputLabel
                    labelName="age"
                    inputText="Leeftijd"
                    type="number"
                    id="age"
                    name="age"
                    className="inputField"
                    value={formData.age}
                    onChange={handleInputChange}
                    required={false}
                />
                <InputLabel
                    labelName="zipCode"
                    inputText="Postcode"
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className="inputField"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required={true}
                />

                {/*<label htmlFor="first-name">*/}
                {/*    Voornaam*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        id="first-name"*/}
                {/*        name="firstName"*/}
                {/*        value={formData.firstName}*/}
                {/*        onChange={handleInputChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*</label>*/}

                {/*<label htmlFor="lastName">*/}
                {/*    Achternaam*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        id="lastName"*/}
                {/*        name="lastName"*/}
                {/*        value={formData.lastName}*/}
                {/*        onChange={handleInputChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*</label>*/}

                {/*<label htmlFor="age">*/}
                {/*    Leeftijd*/}
                {/*    <input*/}
                {/*        type="number"*/}
                {/*        id="age"*/}
                {/*        name="age"*/}
                {/*        value={formData.age}*/}
                {/*        onChange={handleInputChange}*/}
                {/*        placeholder="0"*/}
                {/*    />*/}
                {/*</label>*/}

                {/*<label htmlFor="zipCode">*/}
                {/*    Postcode*/}
                {/*    <input*/}
                {/*        type="text"*/}
                {/*        id="zipCode"*/}
                {/*        name="zipCode"*/}
                {/*        value={formData.zipCode}*/}
                {/*        onChange={handleInputChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*</label>*/}

                <label htmlFor="deliveryFrequency">
                    Bezorgfrequentie
                </label>
                <select
                    id="deliveryFrequency"
                    name="deliveryFrequency"
                    required
                >
                    <option value="weekly">Iedere week</option>
                    <option value="every-2-weeks">Om de week</option>
                    <option value="monthly">Om de maand</option>
                </select>

                <div>
                    <InputLabel
                        labelName="daytimeDelivery"
                        type="radio"
                        id="daytimeDelivery"
                        value="daytimeDelivery"
                        name="deliveryTime"
                        checked={formData.deliveryTime === "daytimeDelivery"}
                        onChange={handleInputChange}
                        required={true}
                    >
                        Overdag
                    </InputLabel>
                    <InputLabel
                        labelName="eveningDelivery"
                        type="radio"
                        id="eveningDelivery"
                        value="eveningDelivery"
                        name="deliveryTime"
                        checked={formData.deliveryTime === "daytimeDelivery"}
                        onChange={handleInputChange}
                        required={true}
                    >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        's Avonds
                    </InputLabel>

                    {/*<label htmlFor="daytimeDelivery">*/}
                    {/*    <input*/}
                    {/*        type="radio"*/}
                    {/*        id="daytimeDelivery"*/}
                    {/*        value="daytimeDelivery"*/}
                    {/*        name="deliveryTime"*/}
                    {/*        checked={formData.deliveryTime === "daytimeDelivery"}*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*    Overdag*/}
                    {/*</label>*/}
                    {/*<label htmlFor="eveningDelivery">*/}
                    {/*    <input*/}
                    {/*        type="radio"*/}
                    {/*        id="eveningDelivery"*/}
                    {/*        value="eveningDelivery"*/}
                    {/*        name="deliveryTime"*/}
                    {/*        checked={formData.deliveryTime === "eveningDelivery"}*/}
                    {/*        onChange={handleInputChange}*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*    &apos;s Avonds*/}
                    {/*</label>*/}
                </div>

                <label htmlFor="deliveryNote">
                    Opmerking
                    <textarea
                        id="deliveryNote"
                        name="deliveryNote"
                    ></textarea>
                </label>
                <label htmlFor="acceptTerms">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <Button
                    type="submit"
                    buttonText="Verzend"
                />
            </form>
        </>
    )
}

export default App
