import React  from "react";
import Education from "./Education";

const EducationList = ({ handleEducationInput, education, isEditing, onAddEducation, onDeleteEducation }) => {

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

export default EducationList;