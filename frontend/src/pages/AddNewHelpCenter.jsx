import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import '../styles/HelpForm.css';


const HelpForm = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            
            e.preventDefault();
            setIsLoading(true);
            const title = e.target.title.value;
            const description = e.target.description.value;
            
            const {status} = await axios.post('http://localhost:8000/api/v1/help-centers', { title, description });
            
            if(status === 201){
                setIsLoading(false);
                e.target.reset();
                navigate('/');
            }
        
        } catch (error) {
        
            console.error(error);
            setIsLoading(false);
        
        }
    
    };

  return (
    <div className="help-form-card">
      <h3>Submit a Request</h3>
      <form onSubmit={handleSubmit} className="help-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="title" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows="4" placeholder="description..." required></textarea>
        </div>
        {!isLoading&&<button type="submit" className="submit-button">Submit</button>}
        {isLoading&&<div className="submit-button">please wait...</div>}
      </form>
    </div>
  );
}

export default HelpForm;
