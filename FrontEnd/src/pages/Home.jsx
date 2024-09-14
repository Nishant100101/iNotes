import { useContext } from "react";
import Main from "../components/notes/main";
import Homepage from "../components/layout/HomePage";
import { userProvide } from "../components/context/createCxt";

const Home = () => {
  document.title = "iNotes";
  const { isAuth } = useContext(userProvide);

  return <>{isAuth ? <Main /> : <Homepage />}</>;
};
export default Home;
