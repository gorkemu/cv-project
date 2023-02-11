import React, { useState } from "react";
import Personal from "./Personal";
import EducationList from "./EducationList";
import ExperienceList from "./ExperienceList";
import uniqid from 'uniqid';

const CV = () => {
    const [cv, setCv] = useState({
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
            },
        ],
        experience: [
            {
                id: uniqid(),
                company: '',
                position: '',
                from: '',
                to: ''
            },
        ],
        isEditing: true
    })
    
    const handlePersonalInput = (e) => {
        const { name, value } = e.target;
        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value
            }
        }))
    }

    const handleEducationInput = (e, id) => {
        const { name, value } = e.target
        setCv((prevState) => {
            const newEducation = prevState.education.map((educationItem) => {
                if (educationItem.id === id) {
                    return { ...educationItem, [name]: value }
                }
                return educationItem
            })
            return { ...prevState, education: [...newEducation] }
        })
    }

    const handleExperienceInput = (e, id) => {
        const { name, value } = e.target;
        setCv((prevState) => {
            const newExperience = prevState.experience.map((experienceItem) => {
                if (experienceItem.id === id) {
                    return { ...experienceItem, [name]: value }
                }
                return experienceItem
            })
            return { ...prevState, experience: [...newExperience] }    
        })
    }

    const addEducation = () => {
        setCv((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uniqid(),
                    school: '',
                    titleOfStudy: '',
                    graduationDate: ''
                },
            ],
        }))
    }

    const addExperience = () => {
        setCv((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uniqid(),
                    company: '',
                    position: '',
                    from: '',
                    to: ''
                },
            ],
        }))
    }

    const deleteEducation = (id) => {
        setCv((prevState) => {
            const newEducation = prevState.education.filter((educationItem) => educationItem.id !== id);
            return { ...prevState, education: [...newEducation] }
        })
    }

    const deleteExperience = (id) => {
        setCv((prevState) => {
            const newExperience = prevState.experience.filter((experienceItem) => experienceItem.id !== id);
            return { ...prevState, experience: [...newExperience] }
        })
    }

    const onPreview = () => {
        setCv((prevState) => ({
            ...prevState,
            isEditing: false
        }))
    }

    const onEdit = () => {
        setCv((prevState) => ({
            ...prevState,
            isEditing: true
        }))
    }

    return (
        <div className="CV">
            <Personal
                handlePersonalInput={handlePersonalInput}
                name={cv.personalInfo.name}
                email={cv.personalInfo.email}   
                phoneNumber={cv.personalInfo.phoneNumber}
                address={cv.personalInfo.address}
                isEditing={cv.isEditing} />
            <EducationList
                handleEducationInput={handleEducationInput}
                education={cv.education}
                isEditing={cv.isEditing}
                onAddEducation={addEducation}
                onDeleteEducation={deleteEducation} />
            <ExperienceList
                handleExperienceInput={handleExperienceInput}
                experience={cv.experience}
                isEditing={cv.isEditing}
                onAddExperience={addExperience}
                onDeleteExperience={deleteExperience} />
            <div>
                {cv.isEditing
                    ? <button onClick={onPreview}>Preview</button>
                    : <button onClick={onEdit}>Edit</button>
                }
            </div>
        </div>
    )
}

export default CV;