import React, { Component } from "react";

class Personal extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const isEditing = this.props.isEditing;

        return (
            <section>
                <h2>Personal Information</h2>
                <div className="block">
                    <h3>Name: </h3>
                    {isEditing
                        ? <input name="name" onChange={this.props.handlePersonalInput} value={this.props.name}></input>
                        : <p>{this.props.name}</p>
                    }
                </div>
                <div className="block">
                    <h3>Email: </h3>
                    <div>
                        {isEditing
                            ? <input name="email" onChange={this.props.handlePersonalInput} value={this.props.email}></input>
                            : <p>{this.props.email}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Phone Number: </h3>
                    <div>
                        {isEditing
                            ? <input name="phoneNumber" onChange={this.props.handlePersonalInput} value={this.props.phoneNumber}></input>
                            : <p>{this.props.phoneNumber}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Address: </h3>
                    <div>
                        {isEditing
                            ? <input name="address" onChange={this.props.handlePersonalInput} value={this.props.address}></input>
                            : <p>{this.props.address}</p>
                        }
                    </div>
                </div>
            </section>  
        );
    }
}

export default Personal;