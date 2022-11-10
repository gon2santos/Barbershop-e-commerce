import { Link } from "react-router-dom";

interface barberCard {
  name: string;
  image: string;
  rating: number;
  office: string;
}

const BarberCard = (barber: barberCard) => {
  return (
    <div className="lg:h-86 h-50 border align-center p-3 my-0 bg-contain border-black">

     <img
        className="lg:h-48 lg:w-48 object-cover bg-white  rounded-xl m-auto mt-2"
        src="https://s3-media0.fl.yelpcdn.com/bphoto/rE80IDhQKYV1PMd_K_IwhA/348s.jpg"
        alt="barber-image"
      />

      <h3 className="font-medium align-center inline-block text-base">
        {barber.name.toUpperCase()}
      </h3>

      <h2 className="text-base">{barber.rating} Stars</h2>

      <h2 className="text-base">Office</h2>
    </div>
  );
};

export default BarberCard;
