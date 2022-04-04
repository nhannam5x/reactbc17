import React, { Component } from 'react'
import axios from 'axios'
export default class ToDoApp extends Component {
    
    state = {
        arrTask: []
    }

    getTaskApi = () =>{
        let promise =axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method:'GET'
        });
        //Thành công
        promise.then(result =>{
            // console.table(result.data);
            this.setState({
                arrTask: result.data
            })
        })
        //Thất bại
        promise.catch((error) => {
            console.log({error});
        })
    }
    componentDidMount() {
        //Hàm life cycle này chạy sau khi render thực thi xong
        this.getTaskApi();
    }
    render() {
    return (
      <div className='container'>
          <button className='btn btn-success' onClick={()=>{
              this.getTaskApi();
          }}></button>
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
                              {this.state.arrTask.filter(task => task.status === false).map((task,indes)=>{
                                    return <tr>
                                        <td>{task.taskName}</td>
                                        <td>
                                            <span className='badge badge-danger'>incomplete</span>
                                        </td>
                                    </tr>
                                })}
                          </tbody>
                          <tfoot>
                              {/*Load công việc làm rồi */}
                                {this.state.arrTask.filter(task => task.status === true).map((task,indes)=>{
                                    return <tr>
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
}
