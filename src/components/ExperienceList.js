import React, { Component } from "react";
import Experience from "./Experience";

class ExperienceList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { handleExperienceInput, experience, isEditing } = this.props;
        
        return (
            <section>
                <h2>Experience</h2>
                <Experience handleExperienceInput={handleExperienceInput}
                    experience={experience}
                    isEditing={isEditing} />
                <button>Add Experience</button>
            </section>
        )
    }
}

export default ExperienceList;