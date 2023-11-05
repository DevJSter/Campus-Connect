import React, { useState } from 'react';
import './Form.css' 
import axios from 'axios';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    Age: 20,
    Gender: 1,
    Stream: 2,
    Internships: 1,
    CGPA: 8,
    Certification: 4,
    HistoryOfBacklogs: 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue;
    
    if (name === "Gender") {
      updatedValue = value.toLowerCase() === "male" ? 1 : 0;
    } else if (name === "Stream") {
      updatedValue = value;
    } else {
      updatedValue = value;
    }
  
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://ad95-34-91-108-103.ngrok.io/placement_prediction',
        formData
      );

      console.log('Prediction Result:', response.data);
      // Handle the prediction result as needed
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
 
        <div className="card">
          <h1>Prediction Form</h1>
          <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Age: (1-25)
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Gender: For Male Type 1/For Female Type 0
            <input
              type="text"
              name="Gender"
              value={formData.Gender}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Stream: Civil:0/CS:1/EE:2/EXTC:3/IT:4/Mech:5 
            <input
              type="text"
              name="Stream"
              value={formData.Stream}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Internships:
            <input
              type="number"
              name="Internships"
              value={formData.Internships}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            CGPA:
            <input
              type="number"
              name="CGPA"
              value={formData.CGPA}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Certification:
            <input
              type="number"
              name="Certification"
              value={formData.Certification}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            HistoryOfBacklogs:
            <input
              type="number"
              name="HistoryOfBacklogs"
              value={formData.HistoryOfBacklogs}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
          </form>
        </div>
      
  )
};

export default PredictionForm;