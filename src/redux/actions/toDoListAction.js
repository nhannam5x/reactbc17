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
         console.log(123);
     }
}


export const addTaskAction = (task) => {
    return async (dispatch) =>{
        try {
            let result = await axios({
                url:'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method:'POST',
                data: task//{taskName:'',status:false}
            })
            //Gọi api getalltask...
            console.log('ketQua',result);

            //Tiếp tục dispatch logic getAllTask
            const action = getApiTaskAction();
            dispatch(action)

        } catch(err) {
            console.log(err);
        }
    }
}

//Định nghĩa action gọi api/todoList/doneTask => dispatch getApiArrTask

export const checkDoneTaskAction = (taskName) =>{
    return async(dispatch) =>{
        try {
            let result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/doneTask?=${taskName}`,
                method:'PUT'
            })
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteTaskApiAction = (taskName) =>{
    return async(dispatch) =>{
        try {
            let result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?=${taskName}`,
                method:'DELETE'
            })
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }
}

export const rejectTaskApiAction = (taskName) =>{
    return async(dispatch) =>{
        try {
            let result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?=${taskName}`,
                method:'PUT'
            })
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }
}
