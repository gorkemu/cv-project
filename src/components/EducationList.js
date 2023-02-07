import React, { Component } from "react";
import Education from "./Education";

class EducationList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleEducationInput, education, isEditing } = this.props;

        return (
            <section>
                <h2>Education</h2>
                <Education
                    handleEducationInput={handleEducationInput}
                    education={education}
                    isEditing={isEditing}
                />
                <button>Add Education</button>
            </section>
        )
    }
}

export default EducationList;