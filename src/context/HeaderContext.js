import React from "react";

export const HeaderContext = React.createContext({
  onChangeView: (view) => {},
  onSearch: (word) => {},
  mainContainerRef: "",
});

const HeaderContextWrapper = (props) => {
  return (
    <HeaderContext.Provider
      value={{
        onChangeView: props.onChangeView,
        onSearch: props.onSetSearchedWord,
        mainContainerRef: props.mainContainerRef,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextWrapper;
