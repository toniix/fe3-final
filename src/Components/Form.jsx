import React, { useState } from "react";
import {form} from "../styles/components.module.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState(false);
 const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regexNum = /^[0-9]/;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const { name, email, message } = formData;

    setError(false);
    setErrorName(false);
    setErrorEmail(false);
    setErrorMessage(false);

 
    if (name.trim().length <= 5 || regexNum.test(name)) {
      setErrorName(true);
      return;
    }

    if (!regexEmail.test(email)) {  
      setErrorEmail(true);
      return;
    }

    if (message.trim().length < 10) {
      setErrorMessage(true);
      return;
    }
    
    setMessage(formData);
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    console.log("Form submitted");
  };
  return (
    <div className={form}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errorName ? (
          <p style={{ color: "red" }}>
            El nombre debe tener minimo 6 caracteres y no puede ser un numero
          </p>
        ) : null}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errorEmail ? (
          <p style={{ color: "red" }}>El email debe ser válido</p>
        ) : null}
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
        {errorMessage && (
          <p style={{ color: "red" }}>
            El mensaje debe tener minimo 10 caracteres
          </p>
        )}
        <button>Send</button>
      </form>
      {error && (
        <p style={{ color: "red" }}>
          Por favor verifique su información nuevamente
        </p>
      )}
      {message && (
        <div style={{ marginTop: "16px", color: "green" }}>
          <h4>
            Gracias {message.name}, te contactaremos cuando antes vía mail.
          </h4>
        </div>
      )}
    </div>
  );
};

export default Form;
