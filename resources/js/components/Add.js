import axios from "axios";
import React, { Component } from "react";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: "",
            departure: "",
            arrivalTime: "",
            ticketPrice: ""
        };
        // bind the methods or functions to the
        this.handleRouteInputChange = this.handleRouteInputChange.bind(this);
        this.handleDepartureInputChange = this.handleDepartureInputChange.bind(this);
        this.handleArrivalTimeInputChange = this.handleArrivalTimeInputChange.bind(this);
        this.handleTicketPriceInputChange = this.handleTicketPriceInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleRouteInputChange(event) {
        this.setState({
            route: event.target.value,
        });
    }
    handleDepartureInputChange(event) {
        this.setState({
            departure: event.target.value,
        });
    }
    handleArrivalTimeInputChange(event) {
        this.setState({
            arrivalTime: event.target.value,
        });
    }
    handleTicketPriceInputChange(event) {
        this.setState({
            ticketPrice: event.target.value,
        });
    }
    handleFormSubmit(event) {
        event.preventDefault();
        axios.post("/api/trainSchedule/store", {
                    route: this.state.route,
                    departure: this.state.departure,
                    arrivalTime: this.state.arrivalTime,
                    ticketPrice: this.state.ticketPrice
        })
            .then((response) => {
                this.setState({
                    route: '',
                    departure: '',
                    arrivalTime: '',
                    ticketPrice: ''
                })
                this.props.history.push("/");
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Add New Train Schedules
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <label>Enter Route</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={
                                                this.handleRouteInputChange
                                            }
                                            value={this.state.route}
                                            className="form-control"
                                            placeholder="Enter text"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Departure</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={
                                                this.handleDepartureInputChange
                                            }
                                            value={this.state.departure}
                                            className="form-control"
                                            placeholder="Enter Departure"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter ArrivalTime</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={
                                                this
                                                    .handleArrivalTimeInputChange
                                            }
                                            value={this.state.arrivalTime}
                                            className="form-control"
                                            placeholder="Enter ArrivalTime"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter TicketPrice</label>
                                        <input
                                            type="text"
                                            required
                                            onChange={
                                                this
                                                    .handleTicketPriceInputChange
                                            }
                                            value={this.state.ticketPrice}
                                            className="form-control"
                                            placeholder="Enter TicketPrice"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;
