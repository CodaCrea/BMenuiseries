import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ratingStars } from "../config";
import "../style/Rating.css";

const Rating = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState("");
  const url = "https://demoweb.go.yo.fr/rating.php";

  const OnSubmit = async (value) => {
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
      paraElmtText.textContent = "L'envoi n'a pas été effectué.";
      divElmt.id = 'contactBlocParaError';
      divElmt.append(paraElmt, paraElmtText);
      form.append(divElmt);
      setTimeout(function () {
        divElmt.remove();
      }, 5000);
    };
  };

  return (
    <main className="rating_container">
      <section className="rating_bloc_img-title">
        <img src={ratingStars} alt="Étoiles jaunes" />
        <div className="rating_bloc_title">
          <h1>Soumettez votre avis</h1>
        </div>
      </section>
      <section className="rating_form">
        <form id="contactForm" name="formContact" method="post">
          <div className="rating_form_bloc">
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
                  value: /^[A-Z][A-Za-zéèê-]+$/,
                  message: "Caractère non autorisé ou majuscule manquante",
                },
              })} />
            <div className="rating_errors_message">
              <p>{errors.name?.message}</p>
            </div>
          </div>

          <div className="rating_form_bloc">
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
                  value: /^[A-Z][A-Za-zéèê-]+$/,
                  message: "Caractère non autorisé ou majuscule manquante",
                },
              })} />
            <div className="rating_errors_message">
              <p>{errors.firstName?.message}</p>
            </div>
          </div>

          <div className="rating_form_bloc">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              minLength="10"
              placeholder="Facultatif"
              {...register("email", {
                required: false,
                pattern: {
                  value: /[A-Za-z[0-9._-]+@[A-Za-z 0-9.-]+\.[A-Za-z]{2,3}$/,
                  message: "Email ou format d'email incorrect"
                }
              })} />
            <div className="rating_errors_message">
              <p>{errors.email?.message}</p>
            </div>
          </div>

          <div className="rating_form_bloc">
            <label htmlFor="message">Message *</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre avis compte beaucoup pour nous"
              {...register("message", {
                required: "* Champ obligatoire"
              })}></textarea>
            <div className="rating_errors_message">
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

          <div className="rating_bloc-button">
            <input onClick={handleSubmit(OnSubmit)} type="submit" name="submit" value="Envoyer" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default Rating;