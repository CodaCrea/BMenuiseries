import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactUs } from "../config";
import "../style/Contact.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const url = "https://demoweb.go.yo.fr/contact.php";

  const onSubmit = async (value) => {
    const form = document.getElementById('contactForm');
    const divElmt = document.createElement('div');
    const paraElmt = document.createElement('p');
    const paraElmtText = document.createElement('p');

    setData(JSON.stringify(value));

    try {
      const response = await axios.post(url, data);
      if (response.data) {
        paraElmt.textContent = response.data;
        divElmt.id = 'contactBlocParaSuccess';
        divElmt.append(paraElmt);
        form.append(divElmt);
        setTimeout(function () {
          divElmt.remove();
        }, 5000);
        form.reset();
      }

    } catch (error) {
      paraElmt.textContent = `${error.message} :`;
      paraElmtText.textContent = "L'envoi n'a pas été effectué";
      divElmt.id = 'contactBlocParaError';
      divElmt.append(paraElmt, paraElmtText);
      form.append(divElmt);
      setTimeout(function () {
        divElmt.remove();
      }, 5000);
    }
  };

  return (
    <main className="contact_container">
      <section className="contact_bloc_img-title">
        <img src={contactUs} alt="Portail rouge ouvert" />
        <div className="contact_bloc_title">
          <h1>Nous contacter</h1>
        </div>
      </section>

      <section className="contact_form">
        <form id="contactForm" name="formContact" action={url} method="post">
          <div className="contact_form_bloc">
            <label htmlFor="name">Nom *</label>
            <input
              type="text"
              name="name"
              id="name"
              minLength="3"
              placeholder="Durand"
              {...register("name", {
                required: "* Champ obligatoire",
                pattern: {
                  value: /^[A-Z][A-Za-zéèêëï-]+$/,
                  message: "Caractère non autorisé ou majuscule manquante",
                },
              })} />
            <div className="contact_errors_message">
              <p>{errors.name?.message}</p>
            </div>
          </div>

          <div className="contact_form_bloc">
            <label htmlFor="firstName">Prénom *</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              minLength="3"
              placeholder="John"
              {...register("firstName", {
                required: "* Champ obligatoire",
                pattern: {
                  value: /^[A-Z][A-Za-zéèêëï-]+$/,
                  message: "Caractère non autorisé ou majuscule manquante",
                },
              })} />
            <div className="contact_errors_message">
              <p>{errors.firstName?.message}</p>
            </div>
          </div>

          <div className="contact_form_bloc">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              name="email"
              id="email"
              minLength="10"
              placeholder="john.durand485@gmail.com"
              {...register("email", {
                required: "* Champ obligatoire",
                pattern: {
                  value: /[A-Za-z[0-9._-]+@[A-Za-z 0-9.-]+\.[A-Za-z]{2,3}$/,
                  message: "Email ou format d'email incorrect"
                }
              })} />
            <div className="contact_errors_message">
              <p>{errors.email?.message}</p>
            </div>
          </div>

          <div className="contact_form_bloc">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              minLength="10"
              maxLength="10"
              placeholder="Facultatif"
              {...register("phone", {
                required: false,
                pattern: {
                  value: /^(0)[4679](\s?\d{2}){4}$/,
                  message: 'Numéro incorrect',
                },
              })} />
            <div className="contact_errors_message">
              <p>{errors.phone?.message}</p>
            </div>
          </div>

          <div className="contact_form_bloc contact_form_bloc-message">
            <h2>Votre demande</h2>
            <label htmlFor="object">Description *</label>
            <input
              type="text"
              name="object"
              id="object"
              minLength="3"
              maxLength="50"
              placeholder="Objet *"
              {...register("object", {
                required: "* Champ obligatoire",
                pattern: {
                  value: /^[A-Z]/,
                  message: "Caractère non autorisé ou majuscule manquante",
                },
              })} />
            <div className="contact_errors_message">
              <p>{errors.object?.message}</p>
            </div>

            <label htmlFor="message">Message *</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Décrivez votre demande *"
              {...register("message", {
                required: "* Champ obligatoire"
              })}></textarea>
            <div className="contact_errors_message">
              <p>{errors.message?.message}</p>
            </div>
          </div>

          <div className="checkbox_error">
            <div id="checkbox">
              <input id="check" type="checkbox" name="check"
                {...register("check", {
                  required: "* Validation de l'envoi obligatoire"
                })} />
              <label htmlFor="check">
                J'accepte l'envoi de mes coordonnées *
              </label>
            </div>
            <div className="contact_errors_message">
              <p>{errors.check?.message}</p>
            </div>
          </div>

          <div className="contact_bloc-button">
            <input onClick={handleSubmit(onSubmit)} id="submit" type="submit" name="submit" value="Envoyer" />
          </div>
        </form>
      </section>
    </main >
  );
};
export default Contact;