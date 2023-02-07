import React, { Component } from "react";
import Personal from "./Personal";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
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
            education: {
                    id: uniqid(),
                    school: '',
                    titleOfStudy: '',
                    graduationDate: ''
            },
            experience: {
                    id: uniqid(),
                    company: '',
                    position: '',
                    from: '',
                    to: ''
            },
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
        const { personalInfo: { name, email, phoneNumber, address }, education, experience, isEditing } = this.state;

        return (
            <div className="CV">
                <Personal
                    handlePersonalInput={this.handlePersonalInput}
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    address={address}
                    isEditing={isEditing} />
                <EducationList
                    handleEducationInput={this.handleEducationInput}
                    education={education}
                    isEditing={isEditing} />
                <ExperienceList
                    handleExperienceInput={this.handleExperienceInput}
                    experience={experience}
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