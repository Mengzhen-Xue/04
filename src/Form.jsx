import { useState, useEffect } from "react";
import "./Form.css";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [lunchDescription, setLunchDescription] = useState("");
    const [dinnerDescription, setDinnerDescription] = useState("");
    const [sameMeal, setSameMeal] = useState(false);
    const [healthiestFood, setHealthiestFood] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [lunchDescriptionError, setLunchDescriptionError] = useState("");
    const [dinnerDescriptionError, setDinnerDescriptionError] = useState("");

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setLunchDescriptionError("");
        setDinnerDescriptionError("");

        let isValid = true;

        if (!firstName) {
            setFirstNameError("First name is required!");
            isValid = false;
        }
        if (!lastName) {
            setLastNameError("Last name is required!");
            isValid = false;
        }
        if (!email) {
            setEmailError("Email is required!");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Email is invalid! Please enter a valid email.");
            isValid = false;
        }
        if (!lunchDescription) {
            setLunchDescriptionError("Lunch description is required!");
            isValid = false;
        }
        if (!sameMeal && !dinnerDescription) {
            setDinnerDescriptionError("Dinner description is required!");
            isValid = false;
        }

        if (isValid) {
            console.log("Submitting form:", { firstName, lastName, email, lunchDescription, dinnerDescription, healthiestFood });
            alert("Form submitted successfully!");
        }
    };
    const handleSameMealChange = (e) => {
        const isChecked = e.target.checked;
        setSameMeal(isChecked);
        if (isChecked) {
            setDinnerDescription(lunchDescription);
        } else {
            setDinnerDescription("");
        }
    };

    useEffect(() => {
        document.title = "Form Page";
    }, []);

    return (
        <div>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main id="main-content">
                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="form-heading">Daily Food Intake</h1>
                        <p className="form-note">Please note that processing your submission may take 24 to 72 hours, and results will be sent to your email.</p>

                        <div className="form-section">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {firstNameError && <p className="error">{firstNameError}</p>}
                        </div>

                        <div className="form-section">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {lastNameError && <p className="error">{lastNameError}</p>}
                        </div>

                        <div className="form-section">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <hr />
                        <div className="form-section">
                            <label htmlFor="healthiestFood">What type of food do you think is the healthiest:</label>
                            <select
                                name="selectedOption"
                                value={healthiestFood}
                                onChange={(e) => setHealthiestFood(e.target.value)}
                            >
                                <option value="">Select Option</option>
                                <option value="fruit">Fruit</option>
                                <option value="meat">Meat</option>
                                <option value="vegetable">Vegetable</option>
                                <option value="grain">Grain</option>
                                <option value="dairy">Dairy</option>
                                <option value="nut">Nut</option>
                                <option value="seed">Seed</option>
                                <option value="legume">Legume</option>
                                <option value="seafood">Seafood</option>
                            </select>
                        </div>
                        <hr />
                        <div className="form-section">
                            <label htmlFor="lunchDescription">Lunch Description:</label>
                            <input
                                type="text"
                                id="lunchDescription"
                                value={lunchDescription}
                                onChange={(e) => setLunchDescription(e.target.value)}
                                placeholder="Please describe in detail the type and amount of food you eat at lunch."
                            />
                            {lunchDescriptionError && <p className="error">{lunchDescriptionError}</p>}
                        </div>

                        <div className="form-section">
                            <label htmlFor="sameMeal">
                                <input
                                    type="checkbox"
                                    id="sameMeal"
                                    checked={sameMeal}
                                    onChange={handleSameMealChange}
                                />
                                My dinner is the same as lunch
                            </label>
                        </div>

                        <div className="form-section">
                            <label htmlFor="dinnerDescription">Dinner Description:</label>
                            <input
                                type="text"
                                id="dinnerDescription"
                                value={dinnerDescription}
                                onChange={(e) => setDinnerDescription(e.target.value)}
                                placeholder="Please describe in detail the type and amount of food you eat at dinner."
                            />
                            {dinnerDescriptionError && <p className="error">{dinnerDescriptionError}</p>}
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Form;
