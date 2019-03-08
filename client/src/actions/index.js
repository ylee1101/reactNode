import axios from 'axios';
import { FETCH_USER } from './types';

// export const fetchUser = () => {
//     return function(dispatch) {
//         axios.get("/api/current_userTesting")
//             .then(res => dispatch({ type: FETCH_USER, payload: res }))
//     }
// }

// if it is a single expression, you dont need {} to cover the function and write return in front of function
export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_userTesting");
    
    dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data })
}