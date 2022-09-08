import { useState, useEffect } from "react";
import DoneComponent from "./DoneComponent";

const formatCardNumber = (cardNumber) => {
  return cardNumber
    .replace(/\s/g, "")
    .split("")
    .map((i, index) =>
      Number.isInteger(Number(i)) &&
      (index === 3 || index === 7 || index === 11)
        ? i + " "
        : i
    )
    .join("");
};

const CardForm = ({ formValues, setFormValues, initialForm }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    formValidate();
  }, [formValues, touched]);

  const handleOnBLur = (e) => {
    const target = e.target;
    const name = target.name;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleChange = (e) => {
    const target = e.target;

    const name = target.name;
    let value = target.value;
    if (name === "cardNumber") {
      // handle the card number for the 0000 0000 0000 0000 pattern writting
      const newCardNumber =
        formValues["cardNumber"] > value ? value : formatCardNumber(value); // deleting or adding characters
      setFormValues({
        ...formValues,
        ["cardNumber"]: newCardNumber,
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }

    setTouched({
      ...touched,
      [name]: true,
    });
  };
  const formValidate = (beforeSubmit = false) => {
    let err = [];

    let testField = beforeSubmit || touched["cardHolderName"];
    if (testField && formValues.cardHolderName?.length === 0)
      err["cardHolderName"] = "can't be blank";
    else if (testField && formValues.cardHolderName?.length < 5)
      err["cardHolderName"] = "should contain at least 5 caracacters";
    else if (testField && formValues.cardHolderName?.length > 30)
      err["cardHolderName"] = "shouldn't contain more than 30 caracacters";

    testField = beforeSubmit || touched["cardNumber"];
    if (
      testField &&
      formValues.cardNumber.length > 0 &&
      !/^\d+$|(^(\d+\s)+$)|(^(\d+\s)+\d+$)/.test(formValues.cardNumber)
    ) {
      err["cardNumber"] = "Wrong format, numbers only";
    } else if (testField && formValues.cardNumber?.length <= 0) {
      err["cardNumber"] = "can't be blank";
    } else if (testField && formValues.cardNumber.length !== 19)
      err["cardNumber"] = "should contain exaclty 16 digits";

    testField = beforeSubmit || touched["expDateMonth"];
    if (testField && formValues.expDateMonth?.length <= 0)
      err["expDateMonth"] = "can't be blank";
    else if (testField && formValues.expDateMonth?.length !== 2)
      err["expDateMonth"] = "not 2 digits long";

    testField = beforeSubmit || touched["expDateYear"];
    if (testField && formValues.expDateYear?.length <= 0)
      err["expDateYear"] = "can't be blank";
    else if (testField && formValues.expDateYear?.length !== 2)
      err["expDateYear"] = "not 2 digits long";

    testField = beforeSubmit || touched["cvc"];
    if (testField && formValues.cvc?.length <= 0) err["cvc"] = "can't be blank";
    else if (testField && formValues.cvc?.length !== 3)
      err["cvc"] = "not 3 digits long";

    setErrors(err);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formValidate(true);
    if (
      Object.values(formValues).filter(Boolean).length === 5 &&
      Object.keys(errors).length === 0
    ) {
      setDone(true);
    }
    if (done) {
      setFormValues(initialForm);
      setErrors({});
      setTouched({});
      setDone(false);
    }
  };

  useEffect(() => {
    document.getElementById("cardHolderName").focus();
  }, []);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {!done ? (
          <>
            <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
            <input
              className={
                errors["cardHolderName"] ? "inputErrorClass" : "inputClass"
              }
              id="cardHolderName"
              name="cardHolderName"
              value={formValues.cardHolderName}
              onChange={handleChange}
              onBlur={handleOnBLur}
              onFocus={handleOnBLur}
              required={formValues.cardHolderName.length === 0}
              placeholder="e.g. Jane Appleseed"
              maxLength={24}
            />

            <div className="errorDiv">{errors["cardHolderName"]}</div>

            <label htmlFor="cardNumber">CARD NUMBER</label>
            <input
              id="cardNumber"
              name="cardNumber"
              className={
                errors["cardNumber"] ? "inputErrorClass" : "inputClass"
              }
              value={formValues.cardNumber}
              onChange={handleChange}
              onBlur={handleOnBLur}
              required={formValues?.cardNumber?.length === 0}
              placeholder="e.g. 1234 5678 9123 0000"
              pattern="\d{4,}*"
              maxLength={19}
            />
            <div className="errorDiv">{errors["cardNumber"]}</div>
            <div className="dateCvcContainer">
              <div className="dateContainer">
                <label htmlFor="expDateMonth">EXP. DATE (MM/YY)</label>
                <div>
                  <input
                    id="expDateMonth"
                    name="expDateMonth"
                    className={
                      errors["expDateMonth"] ? "inputErrorClass" : "inputClass"
                    }
                    value={formValues.expDateMonth}
                    onChange={handleChange}
                    onBlur={handleOnBLur}
                    required={formValues?.expDateMonth?.length === 0}
                    placeholder="MM"
                    maxLength={2}
                    size={2}
                  />

                  <input
                    id="expDateYear"
                    name="expDateYear"
                    className={
                      errors["expDateYear"] ? "inputErrorClass" : "inputClass"
                    }
                    value={formValues.expDateYear}
                    onChange={handleChange}
                    onBlur={handleOnBLur}
                    required={formValues?.expDateYear?.length === 0}
                    placeholder="YY"
                    maxLength={2}
                    size={2}
                  />
                </div>{" "}
                <div className="errorDiv">
                  {errors["expDateMonth"] ?? errors["expDateYear"]}
                </div>
              </div>
              <div className="cvcContainer">
                <label htmlFor="cvc">CVC</label>
                <input
                  id="cvc"
                  name="cvc"
                  className={errors["cvc"] ? "inputErrorClass" : "inputClass"}
                  value={formValues.cvc}
                  onChange={handleChange}
                  onBlur={handleOnBLur}
                  required={formValues?.cvc?.length === 0}
                  placeholder="e.g. 123"
                  maxLength={3}
                  size={3}
                />
                <div className="errorDiv">{errors["cvc"]}</div>
              </div>
            </div>
          </>
        ) : (
          <DoneComponent />
        )}
        <button
          className=""
          type="submit"
          id="submit"
          name="submit"
          disabled={
            Object.keys(errors).length !== 0 ||
            Object.values(formValues).filter(Boolean).length !== 5
          }
        >
          {done ? "Continue" : "Confirm"}
        </button>
      </form>
    </>
  );
};
export default CardForm;
