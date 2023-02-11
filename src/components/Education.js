import React from "react";

const Education = ({ handleEducationInput, educationItem, isEditing, id, onDeleteEducation }) => {
    
    return (
        <section>
            <div className="block">
                <h3>School Name: </h3>
                <div>
                    {isEditing
                        ? <input name="school" onChange={(e) => handleEducationInput(e,id)} value={educationItem.school} ></input>
                        : <p>{educationItem.school}</p>
                    }
                </div>
            </div>
            <div className="block">
                <h3>Title of Study: </h3>
                <div>
                    {isEditing
                        ? <input name="titleOfStudy" onChange={(e) => handleEducationInput(e, id)} value={educationItem.titleOfStudy} ></input>
                        : <p>{educationItem.titleOfStudy}</p>
                    }
                </div>
            </div>
            <div className="block">
                <h3>Graduation Date: </h3>
                <div>
                    {isEditing
                        ? <input type="date" name="graduationDate" onChange={(e) => handleEducationInput(e, id)} value={educationItem.graduationDate}></input>
                        : <p>{educationItem.graduationDate}</p>
                    }
                </div>
            </div>
            {isEditing && 
                <button className="delete-btn" onClick={() => onDeleteEducation(id)}>Delete Education</button>}
        </section>
    )
}

export default Education;