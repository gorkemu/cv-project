import React, { Component } from "react";

class NewEducation extends Component {
    render() {
        return (
            <form>
                <label>
                    <h3>School Name</h3>
                    <input type="text"></input>
                </label>
                <label>
                    <h3>Title of Study</h3>
                    <input type="text"></input>
                </label>
                <label>
                    <h3>Graduation Date</h3>
                    <input type="date"></input>
                </label>
                <button>Delete</button>
            </form>
        );
    }
}

export default NewEducation;

