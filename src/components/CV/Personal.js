import React, { Component } from "react";

class Personal extends Component {
    render() {
        return (
            <section>
                <h2>Personal Information</h2>
                <form>
                    <label>
                        <h3>Name</h3>
                        <input></input>
                    </label>
                    <label>
                        <h3>Email</h3>
                        <input></input>
                    </label>
                    <label>
                        <h3>Phone Number</h3>
                        <input></input>
                    </label>
                </form>
            </section>
        );
    }
}

export default Personal;