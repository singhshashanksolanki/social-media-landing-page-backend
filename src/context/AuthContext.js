import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: {
        "_id": "637ce1c21869995c47c6fb18",
        "username": "Shashank1234",
        "email": "shashank1234@gmail.com",
        "password": "$2b$10$GINqbFXqdkXRUW.GCaxSOuXXNljVeYtHueoM5IDiBHLFSuvndVES6",
        "profilePicture": "",
        "coverPicture": "",
        "followers":[],
        "isAdmin":false,
        "followings":[]},
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
        {children}
        </AuthContext.Provider>
    );
};