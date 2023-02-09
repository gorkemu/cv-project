import React, { Component } from "react";
import Education from "./Education";

class EducationList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleEducationInput, education, isEditing, onAddEducation, onDeleteEducation } = this.props;
        const educationItems = education.map((educationItem) => (
            <Education
                key={educationItem.id}
                id={educationItem.id}
                educationItem={educationItem}
                isEditing={isEditing}
                handleEducationInput={handleEducationInput}
                onDeleteEducation={onDeleteEducation}></Education>
        ));


        return (
            <section>
                <h2>Education</h2>
                {educationItems}
                {isEditing &&
                    <button onClick={onAddEducation}>Add Education</button>}
            </section>
        )
    }
}

export default EducationList;