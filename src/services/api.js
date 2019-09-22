import axios from "./axios-search";

export async function feedData (val) {
    const response = await axios.post('/search', {search : val, dataType : "users", actionType : "autocomplete"})
    return response.data.match

}
export async function getOne (id) {
    const response = await axios.get(`/users/${id}`)
    return response.data

}