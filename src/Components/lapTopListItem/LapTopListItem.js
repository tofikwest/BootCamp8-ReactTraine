import React from "react";
import data from "../../data";
const LapTopListItem = ({
  name,
  image,
  isSale,
  description,
  colors,
  price,
}) => {
  return (
    <li>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>
        Sale: {isSale ? "Действует акционная цена" : "В акции не участвует"}
      </p>
      <p>{description}</p>
      <ul>
        {data.laptops.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <p>
        Цена: <span>{price}</span>
      </p>
    </li>
  );
};

export default LapTopListItem;
