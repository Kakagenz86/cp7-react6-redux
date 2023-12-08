import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { TYPES } from "../../redux/Types";
import { listMenu } from "../../redux/actions/menuAction";

const Menu = () => {
    // const { List } = useSelector((state) => state.menuReducer);
    // console.log(List)

    const { menuList } = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listMenu());
    }, []);
    

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