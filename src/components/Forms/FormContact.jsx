import React, { useState } from "react";
import Button from "../Buttons/Button";
import "../../styles/components/Forms/FormContact.css";
import * as motion from "motion/react-client";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const FadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
    },
  },
};

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    if (!name || !email || !object || !message) {
      setError("Tous les champs sont obligatoires.");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Veuillez entrer une adresse e-mail valide.");
      setSuccess("");
      return;
    }

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_jcianh2";
    const templateId = "template_i07cmjj";
    const publicKey = "GwgEWzMNGtDoAFCqO";

    // Create a new object that contains dynamic template params
    const templateParams = {
      user_name: name,
      user_email: email,
      user_object: object,
      to_name: "La Divine Comédie 78",
      user_message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setName("");
        setEmail("");
        setObject("");
        setMessage("");
        setCharCount(0);
        setError("");
        setSuccess("Votre message a été envoyé avec succès !");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setError(
          "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
        );
        setSuccess("");
      });
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setCharCount(e.target.value.length);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="emailForm"
      variants={FadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {error && <p className="error-message color-red">{error}</p>}
      {success && <p className="success-message color-green">{success}</p>}
      <label className="font-semibold">
        Prénom & NOM<span className="color-red">*</span>
      </label>
      <input
        type="text"
        placeholder="Votre Prénom NOM"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className="font-semibold">
        E-mail<span className="color-red">*</span>
      </label>
      <input
        type="email"
        placeholder="Votre e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label className="font-semibold">
        Objet<span className="color-red">*</span>
      </label>
      <input
        type="text"
        placeholder="Objet de la demande"
        value={object}
        onChange={(e) => setObject(e.target.value)}
        required
      />
      <label className="font-semibold">
        Message<span className="color-red">*</span>
      </label>
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={handleMessageChange}
        maxLength={500}
        required
      ></textarea>
      <small className="char-count">{charCount}/500 caractères</small>
      <div className="check-pc">
        <input type="checkbox" required />
        <p>
          Accepter la{" "}
          <Link to="/politique-confidentialite">
            Politique de Confidentialité
          </Link>
        </p>
      </div>
      <Button type="submit">Envoyer le message</Button>
    </motion.form>
  );
};

export default FormContact;
