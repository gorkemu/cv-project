import React, { Component } from "react";
import Experience from "./Experience";

class ExperienceList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleExperienceInput, experience, isEditing, onAddExperience, onDeleteExperience } = this.props;
        const experienceItems = experience.map((experienceItem) => (
            <Experience
                key={experienceItem.id}
                id={experienceItem.id}
                experienceItem={experienceItem}
                isEditing={isEditing}
                handleExperienceInput={handleExperienceInput}
                onDeleteExperience={onDeleteExperience}></Experience>
        ));
        
        return (
            <section>
                <h2>Experience</h2>
                {experienceItems}
                {isEditing &&
                    <button onClick={onAddExperience}>Add Experience</button>}
            </section>
        )
    }
}

export default ExperienceList;