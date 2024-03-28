import bgLightImg from "./assets/images/bg-mobile-light.jpg";
import bgDarkImg from "./assets/images/bg-desktop-dark.jpg";
import Navbar from "./components/navbar/Navbar";
import "./styles.css";
import AddTodo from "./components/addTodo/AddTodo";

function App() {
  return (
    <div className="m-0 p-0 w-screen h-screen box-border bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <img
        src={bgLightImg}
        alt="background light mode image"
        className="w-full h-1/3 dark:hidden"
      />

      <img
        src={bgDarkImg}
        alt="background dark mode image"
        className="w-full h-1/3 hidden dark:block"
      />
      <div className="fixed top-0 min-w-full min-h-full px-6">
        <Navbar />
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
