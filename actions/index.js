import axios from "axios"

export const increase = () => ({ type: 'INCREASE' })
export const decrease = () => ({ type: 'DECREASE' })
export const fetchuser = () => ({
	type: 'FETCH_USERS', 
	payload: axios.get("https://jsonplaceholder.typicode.com/users")
})