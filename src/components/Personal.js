import React from "react";

const Personal = ({ handlePersonalInput, name, email, phoneNumber, address, isEditing }) => {
    
    return (
        <section>
            <h2>Personal Information</h2>
            <div className="block">
                <h3>Name: </h3>
                {isEditing
                    ? <input name="name" onChange={handlePersonalInput} value={name}></input>
                    : <p>{name}</p>
                }
            </div>
            <div className="block">
                <h3>Email: </h3>
                <div>
                    {isEditing
                        ? <input name="email" onChange={handlePersonalInput} value={email}></input>
                        : <p>{email}</p>
                    }
                </div>
            </div>
            <div className="block">
                <h3>Phone Number: </h3>
                <div>
                    {isEditing
                        ? <input name="phoneNumber" onChange={handlePersonalInput} value={phoneNumber}></input>
                        : <p>{phoneNumber}</p>
                    }
                </div>
            </div>
            <div className="block">
                <h3>Address: </h3>
                <div>
                    {isEditing
                        ? <input name="address" onChange={handlePersonalInput} value={address}></input>
                        : <p>{address}</p>
                    }
                </div>
            </div>
        </section>  
    );
}

export default Personal;