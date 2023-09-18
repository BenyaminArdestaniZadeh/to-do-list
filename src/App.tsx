import "./App.css";
import Form from "./component/Form";
import ItemsProvider from "./context/ItemsContext";

const App = () => {
  return (
    <>
      <ItemsProvider>
        <Form />
      </ItemsProvider>
    </>
  );
};
export default App;
