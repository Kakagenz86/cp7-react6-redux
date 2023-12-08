import { useState } from "react";
import axios from "axios";
import { TYPES } from "../../redux/Types";
import { useSelector, useDispatch } from "react-redux";

const LoginPages = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState ('')

    const { authReducer } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        const bodyPayload = {
            username: username,
            password: password
        }

        dispatch({
            type: TYPES.LOADING,
            payload: {
                loading: true
            }
        })

        axios
        .post(`https://api.mudoapi.tech/login`, bodyPayload)
        .then((res) => {
            // console.log(res.data.message)
            dispatch({ 
                type: TYPES.SUBMIT, 
                payload: {
                    success: res.data.message,
                    loading: false
                }
            });
            
        })
        .catch((err) => {
            console.log(err.response)
            dispatch({ 
                type: TYPES.ERROR, 
                payload: {
                    error: err.response.data.message,
                    loading: false
                }
            });
        })
    }
    return (
        <div>
                {authReducer.success.length ? (<h1>{authReducer.success}</h1>) : (<h1>{authReducer.error}</h1>)}
            <div>
                <label htmlFor="">Username: </label>
                <input onChange={handleUsername} type="text" />
            </div>
            <div>
                <label htmlFor="">Password: </label>
                <input onChange={handlePassword} type="text" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default LoginPages;