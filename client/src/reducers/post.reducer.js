import { GET_POSTS, LIKE_POST, UNLIKE_POST, UPDATE_POST, DELETE_POST } from "../actions/post.actions";

const initialState = {
   postArray: [],
   likers:[],
   
};
function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                postArray: action.payload,
            }; 
            }
            case LIKE_POST:
                return state.map((item) => {
                    if (item.id === action.payload.postId) {
                        return {
                            ...item,
                            likers : [action.payload.userId, ...item.likers]
                        }
                    }
                    return item;
                })
            case UNLIKE_POST:
                return state.map((item) => {
                    if (item.id === action.payload.postId) {
                        return {
                            ...item,
                            likers: item.likers.filter((id) => id !== action.payload.userId)
                        };
                    }
                    return item;
                })

                case UPDATE_POST:
                    return state.map((item) => {
                        if(item.id === action.payload) {
                            return {
                                ...item,
                                message: action.payload.message
                            }
                        }else
                        return item;
                    })
                 case DELETE_POST:
                      return state.filter((item) => item.id !== action.payload)
        default: 
        return state;
    }
}

export default postReducer;