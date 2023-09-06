import DeleteButton from "./DeleteButton";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
const ItemHandler = () => {
  const [items, setItems] = useContext(ItemsContext);
  return (
    <>
      <div className="list-container">
        <ul>
          {items.map((item: any, index: number) => (
            <li key={index} className="list">
              {item}
              <DeleteButton items={items} setItems={setItems} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ItemHandler;
