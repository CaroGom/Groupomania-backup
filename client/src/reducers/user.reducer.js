import { GET_USER } from "../actions/user.actions";

const initialState = {
    userArray: [],
};

 function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                userArray:action.payload,
            }
        default: 
        return state; 
    }

}

export default userReducer;