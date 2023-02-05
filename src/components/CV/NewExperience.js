import React, { Component } from "react";

class NewExperience extends Component {
    render() {
        return (
            <form>
                <label>
                    <h3>Company</h3>
                    <input type="text"></input>
                </label>
                <label>
                    <h3>Position</h3>
                    <input type="text"></input>
                </label>
                <label>
                    <h3>From</h3>
                    <input type="date"></input>
                </label>
                <label>
                    <h3>To</h3>
                    <input type="date"></input>
                </label>
                <button>Delete</button>
            </form>
        );
    }
}

export default NewExperience;