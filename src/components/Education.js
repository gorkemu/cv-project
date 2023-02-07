import React, { Component } from "react";

class Education extends Component {
    render() {
        const { handleEducationInput, education, isEditing } = this.props;
        return (
            <section>
                <div className="block">
                    <h3>School Name: </h3>
                    <div>
                        {isEditing
                            ? <input name="school" onChange={handleEducationInput} value={education.school} ></input>
                            : <p>{education.school}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Title of Study: </h3>
                    <div>
                        {isEditing
                            ? <input name="titleOfStudy" onChange={handleEducationInput} value={education.titleOfStudy} ></input>
                            : <p>{education.titleOfStudy}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Graduation Date: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="graduationDate" onChange={handleEducationInput} value={education.graduationDate}></input>
                            : <p>{education.graduationDate}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;