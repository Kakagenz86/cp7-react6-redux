import axios from "axios";
import { TYPES } from "../Types";

export const listMenu = () => async (dispatch) => {
    try {
        const response = await axios.get("https://api.mudoapi.tech/menus");
        console.log(response.data.data.Data);
        dispatch({ 
            type: TYPES.MENU_LIST, 
            payload: {
                menuList: response.data.data.Data
            }
        });
    } catch (error) {
        console.log(error);
    }
};
