import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getApiTaskAction } from '../../../redux/actions/toDoListAction';

export default function ToDoListHook() {

    // const [arrTask,setArrTask] = useState([]);
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

  return (
    <div className='container'>
    <h3 className='text-center'>To do app</h3>
    <div className='card'>
        <div className='card-header'>
            <div className='input-group-prepend mb-3'>
                <span className='input-group-text btn btn-success'>Add task</span>
                <input className='form-control' id='taskName'/>
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
                                  </td>
                              </tr>
                          })}
                    </tbody>
                    <tfoot>
                        {/*Load công việc làm rồi */}
                          { arrTask.filter(task => task.status === true).map((task,index)=>{
                              return <tr key={index}>
                                  <td>{task.taskName}</td>
                                  <td>
                                      <span className='badge badge-success'>complete</span>
                                  </td>
                              </tr>
                          })}
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}
