import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTaskAction, checkDoneTaskAction, deleteTaskApiAction, getApiTaskAction, rejectTaskApiAction } from '../../../redux/actions/toDoListAction';
export default function ToDoListHook() {

    // const [arrTask,setArrTask] = useState([]);
    const [task, setTask] = useState({
        taskName:'',
        status: false
    })
const {arrTask} = useSelector(state => state.toDoListReducer);
const dispatch = useDispatch();
    useEffect( async ()=>{
    //     try{
    //     //gọi api
    //     const result = await axios({
    //         url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
    //         method:'get'
    //     })

    //     // console.log(result.data);
    //     //await setArrTask(result.data)
    //     const action = {
    //         type:"GET_ALL_TASK_API",
    //         arrTask: result.data
    //     } 
        
    //     dispatch(action);
    // }catch(err){
    //     // console.log({err});
    //     // if(err.response.status == 404) {
    //     //     props.history.push('/');
    //     // }
    // }

    /*
        Trong redux có 2 dạng action
        + action: {type:'',payload:'data_gui_id'}
        + action: (dispatch) => {xử lý logic => dispatch}
    */
   const action = getApiTaskAction;
   dispatch(action);
    },[])
    
    const addTaskApi = async (event) =>{//Khi người dùng submit hoặc enter
        //xử lý thêm task
        const action = addTaskAction(task);//Sau khi gọi hàm kết quả trả về là (dispatch) => { }
        dispatch(action);
    }
 
    const handleCheckDoneTask = (taskName)=>{
        //gọi api = action thunk
        const action = checkDoneTaskAction(taskName);
        dispatch(action);
    }

    const handleDeleteTask = (taskName) =>{
        const action = deleteTaskApiAction(taskName);
        dispatch(action);
    }

    const handleRejectTask = (taskName) =>{
        const action = rejectTaskApiAction(taskName);
        dispatch(action);
    }
  return (
    <div className='container'>
    <h3 className='text-center'>To do app</h3>
    <form className='card' onSubmit={addTaskApi}>
        <div className='card-header'>
            <div className='input-group-prepend mb-3'>
                <button className='input-group-text btn btn-success' type='submit'>Add task</button>
                <input className='form-control' id='taskName'onChange={(e)=>{
                    let {value,id} = e.target;
                    setTask({
                        ...task,
                        [id]:value
                    }) 
                }}/>
            </div>
            <div className='card-body'>
                <table className='table'>
                    <tbody>
                        {/*Load công việc chưa làm */}
                        { arrTask.filter(task => task.status === false).map((task,index)=>{
                              return <tr key={index}>
                                  <td>{task.taskName}</td>
                                  <td>
                                      <span className='badge badge-danger'>incomplete</span>
                                      <i className='fa fa-check-circle text-success' style={{padding:10,cursor:'pointer',fontSize:30}} onClick={()=>{
                                        handleCheckDoneTask(task.taskName)
                                      }}></i>
                                      <i className='fa fa-trash text-danger' style={{padding:10,cursor:'pointer',fontSize:30}} onClick={()=>{
                                        handleDeleteTask(task.taskName)
                                      }}></i>
                                  </td>
                              </tr>
                          })}
                    </tbody>
                    <tr>
                        <td colSpan={2}>
                            <hr />
                        </td>
                    </tr>
                    <tfoot>
                        {/*Load công việc làm rồi */}
                          { arrTask.filter(task => task.status === true).map((task,index)=>{
                              return <tr key={index}>
                                  <td>{task.taskName}</td>
                                  <td>
                                      <span className='badge badge-success'>complete</span>
                                      <i className='fa fa-undo text-warning' style={{padding:10,cursor:'pointer',fontSize:30}} onClick={()=>{
                                          handleRejectTask(task.taskName)
                                      }}></i>
                                      <i className='fa fa-trash text-danger' style={{padding:10,cursor:'pointer',fontSize:30}} onClick={()=>{
                                        handleDeleteTask(task.taskName)
                                      }}></i>
                                  </td>
                              </tr>
                          })}
                    </tfoot>
                </table>
            </div>
        </div>
    </form>
</div>
  )
}
