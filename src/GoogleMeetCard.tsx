import "../Style/Google_meetCard.css";
const GoogleMeetCard = (data: any) => {
  const { image, label } = data;
  return (
    <div className="Google_meetCard">
      <div className="card_cmp">
        <button className="roundButton"></button>
        <img className="img_card" width={85} src={image} alt={label} />

        <h5 className="User_name">Priyanka</h5>
      </div>
    </div>
  );
};
export default GoogleMeetCard;
