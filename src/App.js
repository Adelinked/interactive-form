import { useState } from "react";
import CardForm from "./components/CardForm";
import FrontCardPreview from "./components/FrontCardPreview";
import BackCardPreview from "./components/BackCardPreview";

const initialForm = {
  cardHolderName: "",
  cardNumber: "",
  expDateMonth: "",
  expDateYear: "",
  cvc: "",
};

export default function App() {
  const [formValues, setFormValues] = useState(initialForm);

  return (
    <div className="App">
      <div className="container">
        <div className="purpuleContainer">
          <BackCardPreview cvc={formValues.cvc} />
          <FrontCardPreview {...formValues} />
        </div>
        <div className="whiteContainer">
          <CardForm
            formValues={formValues}
            setFormValues={setFormValues}
            initialForm={initialForm}
          />
        </div>
      </div>
    </div>
  );
}
