import { useState } from "react";
import ItemHandler from "./ItemsHandler";

const Form = () => {
  // for what the user enters to make them dynamic
  const [inputValue, setInputValue] = useState<any>("");
  // to display what the user has entered
  const [items, setItems] = useState<string[]>([]);

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="todo-container">
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="list">
            <input
              type="text"
              name="list"
              placeholder="Please add your list"
              value={inputValue}
              onChange={handleInputValue}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <ItemHandler items={items} setItems={setItems} />
      </div>
    </>
  );
};
export default Form;
