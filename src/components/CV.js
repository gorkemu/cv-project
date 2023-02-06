import React, { Component } from "react";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import uniqid from 'uniqid';

class CV extends Component {
    constructor(props) {
        super(props);
        this.handlePersonalInput = this.handlePersonalInput.bind(this);
        this.handleEducationInput = this.handleEducationInput.bind(this);
        this.handleExperienceInput = this.handleExperienceInput.bind(this);
        this.onPreview = this.onPreview.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.state = {
            personalInfo: {
                id: uniqid(),
                name: '',
                email: '',
                phoneNumber: ''
            },
            education: [
                {
                    id: uniqid(),
                    school: '',
                    titleOfStudy: '',
                    graduationDate: ''
                }
            ],
            experience: [
                {
                    id: uniqid(),
                    company: '',
                    position: '',
                    from: '',
                    to: ''
                }
            ],
            isEditing: true
        }
    }
    
    handlePersonalInput(e) {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value
            }
        }))
    }

    handleEducationInput(e) {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            education: {
                ...prevState.education,
                [name]: value
            }
        }))
    }

    handleExperienceInput(e) {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            experience: {
                ...prevState.experience,
                [name]: value
            }
        }))
    }

    onPreview() {
        this.setState({
            isEditing: false
        })
    }

    onEdit() {
        this.setState({
            isEditing: true
        })
    }

    render() {
        const isEditing = this.state.isEditing;

        return (
            <div className="CV">
                <Personal
                    handlePersonalInput={this.handlePersonalInput}
                    name={this.state.personalInfo.name}
                    email={this.state.personalInfo.email}
                    phoneNumber={this.state.personalInfo.phoneNumber}
                    isEditing={this.state.isEditing} />
                <Education
                    handleEducationInput={this.handleEducationInput}
                    school={this.state.education.school}
                    titleOfStudy={this.state.education.titleOfStudy}
                    graduationDate={this.state.education.graduationDate}
                    isEditing={this.state.isEditing} />
                <Experience
                    handleExperienceInput={this.handleExperienceInput}
                    company={this.state.experience.company}
                    position={this.state.experience.position}
                    from={this.state.experience.from}
                    tp={this.state.experience.to}
                    isEditing={this.state.isEditing} />
                <div>
                    {isEditing
                        ? <button onClick={this.onPreview}>Preview</button>
                        : <button onClick={this.onEdit}>Edit</button>
                    }
                </div>
            </div>
        )
    }
}

export default CV;