import axios from "axios";
import { Order } from "../../entities/order";
import { useEffect, useState } from "react";

const OrderList: React.FC = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await axios.get<Order[]>("http://localhost:3000/order");
          setOrders(response.data);
        } catch (e) {
          console.error("Error fetching orders: ", e);
        }
      };
  
      fetchOrders();
    }, []);

    const updateOrders = async () => {
        try {
          const response = await axios.get<Order[]>("http://localhost:3000/order");
          setOrders(response.data);
        } catch (e) {
          console.error("Error fetching orders: ", e);
        }
    }

    return (
        <div>
            <h1>Orders</h1>
            <button onClick={() => updateOrders()}>
    Mostrar pedidos
</button>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.id} - {order.user_id} - {order.item_id} - {order.quantity} - {order.total}
                    </li>
                ))}
        </div>
    );
  };
  
  export default OrderList;