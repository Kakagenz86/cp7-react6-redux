import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { TYPES } from "../../redux/Types";

const Menu = () => {
    // const { List } = useSelector((state) => state.menuReducer);
    // console.log(List)

    const { menuList } = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        listMenu();
    }, []);
    const listMenu = async () => {
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

    return (
        <div>
            <h1>Ini Menu</h1>
            {/* {List.map((item, index) => (
                    <div key={index}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                    </div>
                ))} */}

                {menuList.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                    </div>
                ))}

                <Link to="/">Home</Link>
        </div>
    );
}

export default Menu;