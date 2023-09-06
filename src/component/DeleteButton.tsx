import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface DeleteButtonType {
  items: string[];
  setItems: (items: string[]) => void;
  index: number;
}

const DeleteButton = ({ items, setItems, index }: DeleteButtonType) => {
  const handleDeletButton = () => {
    const newList = [...items];
    newList.splice(index, 1);
    setItems(newList);
  };

  return (
    <>
      <button
        type="submit"
        className="delete-button-style"
        onClick={handleDeletButton}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  );
};
export default DeleteButton;
