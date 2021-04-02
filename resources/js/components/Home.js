import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { result } from 'lodash';

class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            trainSchedules:[]
        }
    }
    
    componentDidMount(){//react lifecycle method
        //get all the Train Schedule in the backend
        axios.get('/api/trainSchedules')
        .then(response =>{
            this.setState({
                trainSchedules : response.data
            })
        }).catch(err => console.log(err));
    }
  
    async deleteTrain(id){
        let result = await fetch(`/api/trainSchedule/delete`/+id,{
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result);
        
    }
    render(){  
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">All Train Schedules</div>
                        <Link to="/add" className="btn btn-primary col-md-3 m-2 btn-sm mr-4">Add New Train Schedule</Link>
                        <div className="card-body">
                        <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Route</th>
                                    <th scope="col">Departure</th>
                                    <th scope="col">ArrivalTime</th>
                                    <th scope="col">TicketPrice</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                        this.state.trainSchedules !== null
                                        ? this.state.trainSchedules.map(trainSchedule =>(
                                            <tr key={trainSchedule.id}>
                                            <td>{trainSchedule.id}</td>
                                            <td>{trainSchedule.route}</td>
                                            <td>{trainSchedule.departure}</td>
                                            <td>{trainSchedule.arrivalTime}</td>
                                            <td>{trainSchedule.ticketPrice}</td>
                                            <td>
                                                <Link to={`/${trainSchedule.id}/edit`} className="btn btn-warning btn-sm mr-2">Update</Link>
                                                
                                            </td>
                                            <td><span onClick={() =>this.deleteTrain(trainSchedule.id)} className="btn btn-danger btn-sm">Delete</span> 
                                               
                                            </td>
                                            
                                            </tr>
                                            ))
                                        :
                                        null
                                        }
                                    
                                </tbody>
                                </table>
                             </div>
                    </div>
                </div>
            </div>
        </div>
       );
    }  
}
export default Home;


