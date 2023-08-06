const ItemHandler = ({items}:any) => {

  return (
    <>
      <div className="list-container">
        <ul>
          {items.map((item: any, index: number) => (
            <li key={index} className="list">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ItemHandler;
