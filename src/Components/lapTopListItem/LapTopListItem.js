import React from 'react'
const LapTopListItem = () => {
  return (
          <li>
          <h3>{laptop.name}</h3>
          <img src={laptop.image} alt={laptop.name} />
          <p>
              Sale:{" "}
              {laptop.isSale ? "Действует акционная цена" : "В акции не участвует"}
          </p>
          <p>{laptop.description}</p>
          <ul>
              {laptop.colors.map((color) => (
              <li key={color}>{color}</li>
              ))}
          </ul>
          <p>
              Цена: <span>{laptop.price}</span>
          </p>
          </li>
      );
      };

  );
}

export default LapTopListItem;