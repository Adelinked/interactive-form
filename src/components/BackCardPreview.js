const FrontCardPreview = ({ cvc }) => {
  return (
    <div className="backCardPreview">
      <div className="backCardCvc">{cvc ? cvc : "000"}</div>
    </div>
  );
};

export default FrontCardPreview;
