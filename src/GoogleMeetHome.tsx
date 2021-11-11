import GoogleMeetCard from "./GoogleMeetCard";
const ListOfPeople = [
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
  {
    id: "01",
    label: "Priyanka",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
  },
];
const GoogleMeetHomePage = () => {
  const _renderList = () => {
    return ListOfPeople.map((item, index) => {
      return (
        <GoogleMeetCard key={item.id} label={item.label} image={item.image} />
      );
    });
  };
  console.log(_renderList());
  return (
    <>
      <div style={{ display: "center", margin: "20px" }}>
        Google Meet Elements
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{_renderList()}</div>
    </>
  );
};
export default GoogleMeetHomePage;
