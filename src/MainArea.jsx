import React from "react";
import HomePage from "./HomePage";

import About from "./About";
import CardPage from "./CardPage";
import Form from "./Form";
import PanelPage from "./PanelPage";


function MainArea({ page }) {
  return (
    <main>
      {(page === 'Home') && <HomePage />}
      {(page === 'About Us') && <About />}
      {(page === 'Food Information') && <CardPage />}
      {(page === 'Form Survey') && <Form />}
      {(page === 'Meet Our Team') && <PanelPage />}
    </main>
  );
}

export default MainArea;