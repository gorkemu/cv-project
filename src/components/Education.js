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
                            ? <input name="school" onChange={handleEducationInput} ></input>
                            : <p>{education.school}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Title of Study: </h3>
                    <div>
                        {isEditing
                            ? <input name="titleOfStudy" onChange={handleEducationInput} ></input>
                            : <p>{education.titleOfStudy}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Graduation Date: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="graduationDate" onChange={handleEducationInput} ></input>
                            : <p>{education.graduationDate}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;