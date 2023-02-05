import React, { Component } from "react";
import NewEducation from "./NewEducation";


class Education extends Component {
    render() {
        return (
            <section>
                <h2>Education</h2>
                <NewEducation />   
                <button>Add New Education</button>
            </section>
        )
    }
}

export default Education;