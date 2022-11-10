const itemReducer = (state, action) => {
  switch (action.type) {
    case "VALIDATE_INPUT":
      if (!isNaN(Number(action.payload)) && Number(action.payload) >= 1) {
        state = {
          ...state,
          isValidForm: true,
          inputValue: action.payload,
          isValidInput: true,
          isFormSubbmitted: false,
        };
      } else {
        state = { ...state, inputValue: action.payload, isValidInput: false };
      }
      break;

    case "INPUT_BLUR":
      state = { ...state, isFormSubmitted: true, isValidForm: true };
      break;

    case "FORM_SUBMISSION":
      state = {
        ...state,
        isValidForm: state.isValidInput === false ? false : true,
        isFormSubmitted: true,
        inputValue: 1,
      };

      break;

    default:
      break;
  }

  return state;
};

export default itemReducer;
