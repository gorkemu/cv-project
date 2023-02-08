import React, { Component } from "react";
import Education from "./Education";

class EducationList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleEducationInput, education, isEditing } = this.props;
        const educationItems = education.map((educationItem) => (
            <Education
                key={educationItem.id}
                id={educationItem.id}
                educationItem={educationItem}
                isEditing={isEditing}
                handleEducationInput={handleEducationInput} ></Education>
        ));


        return (
            <section>
                <h2>Education</h2>
                {educationItems}
                <button>Add Education</button>
            </section>
        )
    }
}

export default EducationList;