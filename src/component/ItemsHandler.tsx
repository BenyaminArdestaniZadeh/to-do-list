import DeleteButton from "./DeleteButton";
const ItemHandler = ({ items, setItems }: any) => {
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
