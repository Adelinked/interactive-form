const FrontCardPreview = ({
  cardNumber,
  cardHolderName,
  expDateMonth,
  expDateYear,
}) => {
  return (
    <div className="frontCardPreview">
      <div className="fullCircle">
        <div className="emptyCircle"></div>
      </div>
      <div className="frontCardNumber">
        {cardNumber ? cardNumber : "0000 0000 0000 0000"}
      </div>
      <div className="fontCardNameDateContainer">
        <div className="frontCardHolderName">
          {cardHolderName ? cardHolderName : "JANE APPLESEED"}
        </div>
        <div className="frontCardDate">
          {expDateMonth ? expDateMonth : "00"}/
          {expDateYear ? expDateYear : "00"}
        </div>
      </div>
    </div>
  );
};

export default FrontCardPreview;
