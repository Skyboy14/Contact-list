import { useState } from "react";
import { deleteServiceCall, getAllUsers } from "../API/Services";
import '../StyleSheets/ContactList.css'
import AddContactForm from "./ContactDetails";
import UpdateContactForm from "./ContactUpdate";
import SpinLoader from "./SpinLoader";

function ContactList() {
    const [arrayItem, setArrayItem] = useState([])
    const [showAddContact, setShowAddContact] = useState(false)
    const [showEditContact, setShowEditContact] = useState(false)
    const [editId, setEditId] = useState(null)
    const [loading, setLoading] = useState(false);

    // contacts will be fetch one page is loaded only once
    useState(() => {
        getAllUsers(setArrayItem, setLoading)
    }, [])

    // table to display contact
    return (
      <div className="cover-contact-list">
        <div className="title-contact-list">
            Contact List
            </div>

            {/* while loading we will show spinner */}
            {loading ? 
                <SpinLoader loading={loading} />
            :
            <div className="cover2">
                <div className="table-cover-contact-list">
                    <table className="table-contact-list">
                        <thead className="table-head-contact-list">
                            <tr>
                                <th>
                                Name
                            </th>
                            <th>
                                Phone Number
                            </th>
                            <th>
                                Email Address
                            </th>
                            <th>
                                Remove
                            </th> 
                            <th>
                                Edit
                            </th>
                            </tr>                            
                        </thead>
                        <tbody className="table-body-contact-list">
                        {arrayItem && arrayItem.map((item) => (
                            <tr key={item.id} className="table-row-contact-list">
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.phone}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td className="remove">
                                    {/* Delete call, to delet the contact  */}
                                    <button onClick={(e)=>deleteServiceCall(item.id, arrayItem, setArrayItem, setLoading)}>
                                        Remove
                                    </button>  
                                </td>
                                <td className="remove">
                                    {/* Edit call, to edit the details of existing contact  */}
                                    <button onClick={(e) => { setShowEditContact(true);  setEditId(item.id)}}>
                                        Edit
                                    </button>  
                                </td>
                            </tr>
                        ))} 
                        </tbody>
                    </table>
                </div>
            
                    <div style={{ marginLeft: '85px' }}>
                        {/* Show Add contct Field  */}
                    {!showEditContact &&
                        <>
                        {!showAddContact  && <button className="buttonStyleAdd" onClick={(event) => setShowAddContact(true)}>
                        Add Contact
                        </button>
                        }
                        {showAddContact && <button className="buttonStyleAdd cancel" onClick={(event) => setShowAddContact(false)}>
                            Cancel
                        </button>
                        }
                        {/* Add contact component  */}    
                        {
                            showAddContact &&                               
                            <AddContactForm
                                setOriginalArr={setArrayItem}
                                setLoading={setLoading}
                            />
                        }
                    
                    </>
                    }
                    {showEditContact && <button className="buttonStyleAdd cancel" onClick={(event) => setShowEditContact(false)}>
                        Cancel Edit
                    </button>
                    }
                        {/* Edit contact component  */}
                    {
                            showEditContact &&
                            <UpdateContactForm
                                id={editId}
                                originalArr={arrayItem}
                                setOriginalArr={setArrayItem}
                                close={setShowEditContact}
                                setLoading={setLoading}
                            />
                    }
                </div>
            </div>          
        } 

     </div>
  );
}

export default ContactList;