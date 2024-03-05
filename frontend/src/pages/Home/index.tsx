import "./style.css";
import Header from "../../components/Header";
import ItemList from "../../components/Item/Item";
import OrderList from "../../components/Order/Order";

function App() {
  return (
    <div className="home">
      <Header />
      <ItemList />
    </div>
  );
}

export default App;
