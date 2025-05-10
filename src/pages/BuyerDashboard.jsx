import React, { useState } from "react";

const BuyerDashboard = () => {
  const [tender, setTender] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const [tenders, setTenders] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTender((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTenders((prev) => [...prev, tender]);
    setTender({ title: "", description: "", deadline: "" });
    setIsSubmitted(true);
  };

  return (
    <div className="dashboard-container">
      <h1>Buyer Dashboard</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={tender.title}
          onChange={handleChange}
          placeholder="Tender Title"
          required
        />
        <textarea
          name="description"
          value={tender.description}
          onChange={handleChange}
          placeholder="Tender Description"
          required
        ></textarea>
        <input
          type="date"
          name="deadline"
          value={tender.deadline}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Tender</button>
      </form>

      {isSubmitted && (
        <div>
          <h2>Your Tenders</h2>
          {tenders.map((t, index) => (
            <div key={index}>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <p>Deadline: {t.deadline}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;
