import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isEditing = this.props.isEditing;
        return (
            <section>
                <h2>Education</h2>
                <div className="block">
                    <h3>School Name: </h3>
                    <div>
                        {isEditing
                            ? <input type="text" name="school" onChange={this.props.handleEducationInput} value={this.props.school}></input>
                            : <p>{this.props.school}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Title of Study: </h3>
                    <div>
                        {isEditing
                            ? <input type="text" name="titleOfStudy" onChange={this.props.handleEducationInput} value={this.props.titleOfStudy}></input>
                            : <p>{this.props.titleOfStudy}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Graduation Date: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="graduationDate" onChange={this.props.handleEducationInput} value={this.props.graduationDate}></input>
                            : <p>{this.props.graduationDate}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;