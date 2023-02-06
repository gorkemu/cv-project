import React, { Component } from "react";

class Education extends Component {
    
    render() {
        const { handleEducationInput, school, titleOfStudy, graduationDate, isEditing } = this.props;
        return (
            <section>
                <h2>Education</h2>
                <div className="block">
                    <h3>School Name: </h3>
                    <div>
                        {isEditing
                            ? <input name="school" onChange={handleEducationInput} value={school}></input>
                            : <p>{school}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Title of Study: </h3>
                    <div>
                        {isEditing
                            ? <input name="titleOfStudy" onChange={handleEducationInput} value={titleOfStudy}></input>
                            : <p>{titleOfStudy}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Graduation Date: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="graduationDate" onChange={handleEducationInput} value={graduationDate}></input>
                            : <p>{graduationDate}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;