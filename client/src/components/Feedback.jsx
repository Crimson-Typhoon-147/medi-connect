import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting feedback to the backend (if any)
    console.log({
      name,
      feedback,
      rating,
    });
    alert('Thank you for your feedback!');
    setName('');
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-container" style={styles.container}>
      <h2 style={styles.title}>Patient Feedback & Review</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Rating (1-5):
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            style={styles.input}
            max="5"
            min="1"
          />
        </label>
        <label style={styles.label}>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            style={styles.textarea}
          />
        </label>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    color: '#555',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Feedback;
