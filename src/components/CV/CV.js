import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

class CV extends Component {
    render() {
        return (
            <div>
                <Personal />
                <Education />
                <Experience />
                <button>Display</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default CV;