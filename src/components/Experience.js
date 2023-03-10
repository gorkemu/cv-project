import React from "react";

const Experience = ({ handleExperienceInput, experienceItem, isEditing, id, onDeleteExperience }) => {
    
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
            {isEditing &&
                    <button className="delete-btn" onClick={() => onDeleteExperience(id)}>Delete Experience</button>}
        </section>
    )
}

export default Experience;