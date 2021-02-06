import axios from 'axios'
function changeShowContent({commit}){
    commit('changeShowContent');
}
async function fetchData({commit}){
    const url="https://jsonplaceholder.typicode.com/todos";
    const response= await axios.get(url);
    commit('fetchData',response.data);
}
export default {
    changeShowContent,
    fetchData
}