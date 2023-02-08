import React, { Component } from "react";

class Experience extends Component {
    render() {
        const { handleExperienceInput, experienceItem, isEditing, id } = this.props;
        return (
            <section>
                <div className="block">
                    <h3>Company: </h3>
                    <div>
                        {isEditing
                            ? <input name="company" onChange={(e) => handleExperienceInput(e, id)} value={experienceItem.company}></input>
                            : <p>{experienceItem.company}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Position: </h3>
                    <div>
                        {isEditing
                            ? <input name="position" onChange={(e) => handleExperienceInput(e, id)} value={experienceItem.position}></input>
                            : <p>{experienceItem.position}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>From: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="from" onChange={(e) => handleExperienceInput(e, id)} value={experienceItem.from}></input>
                            : <p>{experienceItem.from}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>To: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="to" onChange={(e) => handleExperienceInput(e, id)} value={experienceItem.to}></input>
                            : <p>{experienceItem.to}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;