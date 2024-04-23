import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import './HomePage.css';


function HomePage() {
    const dialogRef = useRef();

    const [modalOpen, setModalOpen] = useState(false);
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        dialogRef.current.close();
        setModalOpen(false);
        setMessageSent(true);
    };

    const handleCancel = () => {
        dialogRef.current.close();
        setModalOpen(false);
    };
    useEffect(() => {
        document.title = "Home Page";
    }
        , []);
    return (
        <>
            <div>
                <a href="#main-content" className="skip-link">Skip to main content</a>
                <main id="main-content">


                    <div className="hero-image">
                        <h1 className="hero-title">A Meal Away: The Benefits of Healthy Foods for You and Me</h1>
                        <div className="container-text">
                            <p className="home-text">Welcome to our website, the best place to learn about food health and calories. We are dedicated to providing you with the latest dietary information, healthy food recommendations and detailed calorie analysis to help you make informed dietary choices. Whether you're looking for the right recipes to lose weight or simply want to learn about the nutritional aspects of everyday foods, we've got everything you need right here. Explore our content and start your journey to healthy eating!</p>
                        </div>
                        <div className="flex-container">

                            <img className="about-image" alt="There are rooms, most recently a warehouse, two fruits, message boards hanging on the walls, words" src="https://images.unsplash.com/photo-1456078003870-929d5986f0f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxoZWFsdGh5Zm9vZCUyMCUyMHBhbGNlfGVufDB8fDB8fHww" />
                            <div className="about-text">
                                <h4>How We Do It </h4>
                                <p className="about-info">Our process involves: We choose our food samples based on a variety of criteria including popularity, nutritional value, and consumer interest.
                                    Utilizing state-of-the-art laboratory techniques and methodologies, we analyze the caloric content and nutritional elements of each food item. Our team of nutritionists and food scientists shares their unique insights, interpreting complex data so that it becomes accessible and actionable for everyday decisions.</p>
                            </div>
                        </div>
                        <div className="choose-container">
                            <div className="choose-title">
                                <h4>Choose Healthy Food Just 3 Steps Away</h4>
                                <div className="choose-steps">
                                    <div className="choose-step">
                                        <p className="text-title">First Step</p>
                                        <p>Select a Food Category: Choose from a variety of food categories such as fruits, vegetables, meats, and more.</p>
                                    </div>
                                    <div className="choose-step">
                                        <p className="text-title">Second Step</p>
                                        <p>Explore the Nutritional Information: Discover the caloric content, macronutrient breakdown, and key vitamins and minerals in each food item.</p>
                                    </div>
                                    <div className="choose-step">
                                        <p className="text-title">Third Step</p>
                                        <p>Make Informed Choices: Armed with the right information, you can now make healthier dietary decisions that align with your health goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="discover-container">
                            <div className="discover-text">
                                <h4>Learn More on Our About Page</h4>
                                <p>For those interested in understanding the depth of our research and the foundations of our methodologies, the About page is your gateway to a wealth of information.
                                    By visiting our About page, you can delve deeper into the mechanics of how we operate and understand the commitment and expertise that drive our mission. We are excited to share our journey with you as we continue to uncover the nutritional truths behind everyday foods.

                                </p>
                            </div>
                            <img className="discover-image" alt="Kiwis and grapes were made into animals, with half an orange underneath and surrounding spices and lime, all floating in the air." src="https://images.unsplash.com/photo-1621484488308-3fc11031f2b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW13b3JrJTIwZm9yJTIwZm9vZHxlbnwwfHwwfHx8MA==" />
                            <img className="discover-image" alt="Man pours olive oil into a bowl with zucchini, spinach and three jars next to it" src="https://images.unsplash.com/photo-1556908153-c0e609dda194?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhlYWx0aHklMjBmb29kfGVufDB8fDB8fHww" />
                            <img className="discover-image" alt="Two women are in the sunflower garden. The woman closer is checking the notes, and the woman farther away is checking the sunflowers." src="https://plus.unsplash.com/premium_photo-1663013515332-262f3b2e0908?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW13b3JrJTIwaGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D" />
                        </div>
                    </div>
                    <Button type="button" visual="link" onClick={() => {
                        dialogRef.current.showModal();
                        setModalOpen(true);
                        setMessageSent(false);
                    }}>
                        Get More Information
                    </Button>

                    <dialog ref={dialogRef}>
                        <form onSubmit={handleSubmit}>
                            <p>If you want more information about the food, fill in your e-mail address and we'll send it to you.
                            </p>
                            <input type="text" placeholder="Enter you email adress" required />
                            <div>
                                <Button type="submit" visual="link">Submit</Button>
                                <Button type="button" visual="link" onClick={handleCancel}>Cancel</Button>
                            </div>
                        </form>
                    </dialog>
                    {messageSent && <p>Information has been sent to your e-mail address!</p>}
                </main>
            </div>
        </>
    );
}

export default HomePage;