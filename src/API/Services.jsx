import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const url = "https://jsonplaceholder.typicode.com/users";


export function getAllUsers(setArrayItem, setLoading) {
    setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();                
                setArrayItem(json)
                console.log("success while fetching contact list", json);
                setLoading(false)
            } catch (error) {
                console.log("error while fetching contact list", error);
                setLoading(false)
            }
        };
        fetchData();
}

export function postServiceCall(newItem, setList, setLoading) {
    setLoading(true);
    axios.post(url, {
            name: newItem.name,
            phone: newItem.phone,
            email: newItem.email,
  })
  .then(function (response) {
    var arr = {
            name: response.data.name,
            phone: response.data.phone,
            email: response.data.email,
            id: uuidv4()            
      }
      setList(prevData => [...prevData, arr]);
      setLoading(false);
  })
  .catch(function (error) {
      console.log('aka-err', error);
      setLoading(false);
  });
};
  
export function deleteServiceCall(id, list, setList, setLoading) {   
    setLoading(true);
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
          const updatedData = list.filter(item => item.id !== id);
          setList(updatedData);
          setLoading(false);
      })
      .catch(error => {
          console.error('Error deleting item:', error);
          setLoading(false);
      });
};
  
export function updateServiceCall(id, updatedData, list, setList, setLoading) {
    setLoading(true);
    const updatedDataList = list.map(item => {
      if (item.id === id) {
          return {
                ...item,
                name: updatedData.name,
                phone: updatedData.phone,
                email: updatedData.email  };
      }
      return item;
    });

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,
        updatedDataList.find(item => item.id === id))
      .then(response => {
          setList(updatedDataList);
          setLoading(false);
      })
      .catch(error => {
          console.error('Error updating item:', error);
          setLoading(false);
      });
  };









