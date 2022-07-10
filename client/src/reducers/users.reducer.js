import { GET_USERS } from "../actions/users.actions";

const initialState = { usersArray: [],};

function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                usersArray: action.payload,
            }; 
            }
        default: 
        return state;
    }
}


export default usersReducer;