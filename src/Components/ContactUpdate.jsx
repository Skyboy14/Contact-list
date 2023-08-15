import { useState } from "react";
import { updateServiceCall } from "../API/Services";

function UpdateContactForm({ id, originalArr, setOriginalArr, close, setLoading }) {
    
    // filter with help of id and get the existing data to update
    const updatedItem = id && originalArr.find(item => item.id === id);

    const [inputData, setInputData] = useState({
            name: updatedItem.name,
            phone: updatedItem.phone,
            email: updatedItem.email,
            id: updatedItem.id,
    })

    // update call, to update the existing conatct changes
    const handleSubmit = (event) => {
        event.preventDefault();
        updateServiceCall( id, inputData, originalArr, setOriginalArr, setLoading )
        close(false)
    };

    
    const handleInputChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setInputData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

        return(
            <div>
                <h2>Contact Details</h2>
                <form onSubmit={handleSubmit} >
                    <div className="FormInput">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={inputData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="FormInput">
                        <label htmlFor="phone">Phone No</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={inputData.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="FormInput" style={{paddingBottom:'30px'}}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={inputData.email}
                        onChange={handleInputChange}
                        required
                    />
                    </div>
                    <button className="buttonStyleAdd" type="submit">Update Contact</button>
                </form>  
            </div>
    )
}

export default UpdateContactForm;