import React, { Component } from "react";
import NewExperience from "./NewExperience";

class Experience extends Component {
    render() {
        return (
            <section>
                <h2>Experience</h2>
                <NewExperience />
                <button>Add New Experience</button>
            </section>
        )
    }
}

export default Experience;