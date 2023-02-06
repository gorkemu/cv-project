import React, { Component } from "react";

class Experience extends Component {
    render() {
        const isEditing = this.props.isEditing;
        return (
            <section>
                <h2>Experience</h2>
                <div className="block">
                    <h3>Company: </h3>
                    <div>
                        {isEditing
                            ? <input
                                type="text"
                                name="company"
                                onChange={this.props.handleExperienceInput}
                                value={this.props.company}></input>
                            : <p>{this.props.company}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>Position: </h3>
                    <div>
                        {isEditing
                            ? <input
                                type="text"
                                name="position"
                                onChange={this.props.handleExperienceInput}
                                value={this.props.position}></input>
                            : <p>{this.props.position}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>From: </h3>
                    <div>
                        {isEditing
                            ? <input
                                type="date"
                                name="from"
                                onChange={this.props.handleExperienceInput}
                                value={this.props.from}></input>
                            : <p>{this.props.from}</p>
                        }
                    </div>
                </div>
                <div className="block">
                    <h3>To: </h3>
                    <div>
                        {isEditing
                            ? <input
                                type="date"
                                name="to"
                                onChange={this.props.handleExperienceInput}
                                value={this.props.to}></input>
                            : <p>{this.props.to}</p>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;