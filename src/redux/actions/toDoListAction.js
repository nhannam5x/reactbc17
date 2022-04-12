import axios from "axios";

export const getApiTaskAction = async (dispatch) =>{
    //Xử lý bất đồng bộ rồi mới có dữ liệu lên redux = tham số dispatch
    try{
         const result = await axios({
             url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
             method:'GET'
         })
 
         // console.log(result.data);
         //await setArrTask(result.data)
         const action = {
             type:"GET_ALL_TASK_API",
             arrTask: result.data
         } 
         
         dispatch(action);
     }catch(err){
     }
}
