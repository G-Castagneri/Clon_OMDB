
import { useDispatch } from "react-redux";
import { addFavorite } from "../state/favorite";

const useOnClickFavorite = (title, user) => {
  const dispatch = useDispatch();
  const data = { title, user };
  dispatch(addFavorite(data));
};

export default useOnClickFavorite;
