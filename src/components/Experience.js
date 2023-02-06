import React, { Component } from "react";

class Experience extends Component {
    render() {
        const {handleExperienceInput,company,position,from,to, isEditing } = this.props;
        return (
            <section>
                <h2>Experience</h2>
                <div className="block">
                    <h3>Company: </h3>
                    <div>
                        {isEditing
                            ? <input name="company" onChange={handleExperienceInput} value={company}></input>
                            : <p>{company}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Position: </h3>
                    <div>
                        {isEditing
                            ? <input name="position" onChange={handleExperienceInput} value={position}></input>
                            : <p>{position}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>From: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="from" onChange={handleExperienceInput} value={from}></input>
                            : <p>{from}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>To: </h3>
                    <div>
                        {isEditing
                            ? <input type="date" name="to" onChange={handleExperienceInput} value={to}></input>
                            : <p>{to}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;