import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    // const state = useSelector((state) => state.authReducer);
    const { authReducer } = useSelector((state) => state);
    // console.log(authReducer)

    return (
        <div>
            <h1>Ini Home</h1>
            <p>{authReducer.isAuth ? "anda sudah login" : "anda belum login"}</p>
            <Link to="/menu">Menu</Link>
        </div>
    );
}

export default Home;