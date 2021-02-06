function changeShowContent(state){
        state.leftsideitems.showcontent=!state.leftsideitems.changeShowContent;
    }
    function fetchData(state,urlData){
        // const url='https://jsonplaceholder.typicode.com/todos';
        state.tableItems=urlData;
    }
export default {
    changeShowContent,
    fetchData
}