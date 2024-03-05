import { useEffect, useState } from "react";
import axios from "axios";
import { Item  } from "../../entities/Item";
import { Order } from "../../entities/order";
import { User } from "../../entities/User";
import "./style.css"; // Importe o arquivo style.css

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [user, setUser] = useState<User>({} as User);

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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>("http://localhost:3000/user/1");
        setUser(response.data);
      } catch (e) {
        console.error("Error fetching user: ", e);
      }
    };

    fetchUser();
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

  const addToOrder = async (user_id: number, item_id: number, quantity: number, total: number) => {
    try {
      console.log("antes de criar o pedido");
      const data = { user_id, item_id, quantity, total };
      const response = await axios.post("http://localhost:3000/order/", data);
      console.log(response.data);
      console.log("depois de criar o pedido");
    } catch (e) {
      console.error("Error creating order: ", e);
    }
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
                  <button onClick={() => addToOrder(user.id, item.id, 1, item.price)}>
                    Adicionar ao Pedido
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
