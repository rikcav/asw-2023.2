import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../entities/Item";

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<Item[]>("http://localhost:3000/item");
        setItems(response.data);
      } catch (e) {
        console.error("Error fetching items: ", e);
      }
    };

    fetchItems();
  }, []);

  const renderDescription = (description: string) => {
    return description;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div>
      {[
        "Entrada",
        "Prato Principal",
        "Acompanhamento",
        "Sobremesa",
        "Bebida",
      ].map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  style={{ flex: "0 0 220px", margin: "10px" }}
                >
                  <h3>{item.name}</h3>
                  <p>Preço: {formatPrice(item.price)}</p>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <p>{renderDescription(item.description)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
