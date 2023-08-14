import { useState } from "react";
import { postServiceCall } from "../API/Services";

function AddContactForm({ setOriginalArr, setLoading }) {
    const [inputData, setInputData] = useState({
            name: '',
            phone: '',
            email: '',
            id: '',
        })

    const handleSubmit = (event) => {
        event.preventDefault();
        postServiceCall(inputData, setOriginalArr, setLoading)
        clearInput()
    };
    
    const clearInput = (event) => {
        setInputData({
            name: '',
            phone: '',
            email: '',
            id:''
        });
    }
    
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
                    <button className="buttonStyleAdd" type="submit"> Add Contact</button>
                </form>  
            </div>
    )
}

export default AddContactForm;