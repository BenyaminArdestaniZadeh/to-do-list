import { createContext, useState } from "react";
type Props = {
  children: JSX.Element[] | JSX.Element;
};

export const ItemsContext = createContext<string[]>([]);

export default function ItemsProvider(props: Props) {
  const [items, setItems] = useState<string[]>([]);

  return (
    <>
      <ItemsContext.Provider value={[items, setItems]}>
        {props.children}
      </ItemsContext.Provider>
    </>
  );
}