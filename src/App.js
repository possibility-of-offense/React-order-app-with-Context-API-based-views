import { useRef, useState } from "react";
import Items from "./components/Items/Items";
import Header from "./components/UI/Header";
import Image from "./components/UI/Image";
import Separator from "./components/UI/Separator";
import CartContextWrapper from "./context/CartContext";
import HeaderContextWrapper from "./context/HeaderContext";
import ItemsContextWrapper from "./context/ItemsContext";

function App() {
  const [showView, setShowView] = useState("items");
  const [searchedWord, setSearchedWord] = useState("");
  const mainContainerRef = useRef();

  return (
    <div className="App">
      <CartContextWrapper view={showView}>
        <HeaderContextWrapper
          onSetSearchedWord={setSearchedWord}
          onChangeView={setShowView}
          mainContainerRef={mainContainerRef}
        >
          <Header />
        </HeaderContextWrapper>
        <Image
          src="/images/meals.jpg"
          className="img-fluid"
          alt="Meals on table"
          title="Meals on table"
          style={{ height: "60vh", width: "100%", objectFit: "cover" }}
        />

        <Separator />

        <ItemsContextWrapper
          view={showView}
          onChangeView={setShowView}
          searchedWord={searchedWord}
        >
          <Items ref={mainContainerRef} />
        </ItemsContextWrapper>

        {showView === "cart_items" && "no"}
      </CartContextWrapper>
    </div>
  );
}

export default App;
