const initial = {
  name: "ali",
 currentUser:''
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.Payload };
    
    case "ALL_USER":
      return { ...state, allUsers: action.payload };
  
    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };
     
    case "ALL_MSG":
      return { ...state, AllMessages: action.payload };
  
    default:
      return state;
  }
};

export default reducer;
