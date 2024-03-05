import { useEffect, useState } from "react";
import axios from "axios";
import { Item } from "../../entities/Item";
import "./style.css"; // Importe o arquivo style.css

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
          <div className="item-list">
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="item"
                >
                  <h3>{item.name}</h3>
                  <p>Preço: {formatPrice(item.price)}</p>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="item-image"
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
