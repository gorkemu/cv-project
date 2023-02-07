import React, { Component } from "react";

class Experience extends Component {
    render() {
        const { handleExperienceInput, experience, isEditing } = this.props;
        return (
            <section>
                <div className="block">
                    <h3>Company: </h3>
                    <div>
                        {isEditing
                            ? <input name="company" onChange={handleExperienceInput} value={experience.company}></input>
                            : <p>{experience.company}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Position: </h3>
                    <div>
                        {isEditing
                            ? <input name="position" onChange={handleExperienceInput} value={experience.position}></input>
                            : <p>{experience.position}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>From: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="from" onChange={handleExperienceInput} value={experience.from}></input>
                            : <p>{experience.from}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>To: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="to" onChange={handleExperienceInput} value={experience.to}></input>
                            : <p>{experience.to}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;