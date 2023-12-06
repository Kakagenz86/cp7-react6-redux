import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TYPES } from "../../redux/Types";

const Home = () => {
    // const state = useSelector((state) => state.authReducer);
    const { authReducer } = useSelector((state) => state);
    const dispatch = useDispatch();

    const { listUser } = useSelector((state) => state.userReducer);

    console.log(authReducer)

    const handleLogin = () => {
        dispatch({ 
            type: TYPES.LOGIN, 
            payload: {
                isAuth: true
            }
        });
    };

    const handleLogout = () => {
        dispatch({ 
            type: TYPES.LOGOUT, 
            payload: {
                isAuth: false
            }
        });
    };

    return (
        <div>
            <h1>Ini Home</h1>
            <p>{authReducer.isAuth ? "anda sudah login" : "anda belum login"}</p>
            {!authReducer.isAuth ? (<button onClick={handleLogin}>Login</button>) : (<button onClick={handleLogout}>Log Out</button>)}
            {listUser.map((item, index) => (
                    <div key={index}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                    </div>
                ))}
            <Link to="/menu">Menu</Link>
        </div>
    );
}

export default Home;