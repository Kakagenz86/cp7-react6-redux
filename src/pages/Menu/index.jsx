import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
    const { List } = useSelector((state) => state.menuReducer);
    console.log(List)

    return (
        <div>
            <h1>Ini Menu</h1>
            {List.map((item, index) => (
                    <div key={index}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                    </div>
                ))}
                <Link to="/">Home</Link>
        </div>
    );
}

export default Menu;