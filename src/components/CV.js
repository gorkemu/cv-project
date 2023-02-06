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
                name: '',
                email: '',
                phoneNumber: '',
                address: ''
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
        const { personalInfo, education, experience, isEditing } = this.state;

        return (
            <div className="CV">
                <Personal
                    handlePersonalInput={this.handlePersonalInput}
                    name={personalInfo.name}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                    isEditing={isEditing} />
                <Education
                    handleEducationInput={this.handleEducationInput}
                    school={education.school}
                    titleOfStudy={education.titleOfStudy}
                    graduationDate={education.graduationDate}
                    isEditing={isEditing} />
                <Experience
                    handleExperienceInput={this.handleExperienceInput}
                    company={experience.company}
                    position={experience.position}
                    from={experience.from}
                    tp={experience.to}
                    isEditing={isEditing} />
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