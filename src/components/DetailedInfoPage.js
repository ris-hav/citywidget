import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailedInfoPage = ({ mockData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  console.log(id);

  const citydetail = mockData.filter((el) => el.id == id);
  console.log(citydetail);
  const { name, area } = citydetail[0];

  return (
    <div>
      <h2>Detailed Information Page</h2>
      <p>City ID: {id}</p>
      <p>City Name: {name}</p>
      <p>City Area: {area} sq mi</p>

      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default DetailedInfoPage;
