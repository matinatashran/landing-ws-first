// components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import NewestProduct from "./components/NewestProduct";

function App() {
  return (
    <div className="xl:container m-auto p-3 flex flex-col gap-3">
      <Navbar />
      <Header />
      <SubHeader />
      <NewestProduct />
    </div>
  );
}

export default App;
