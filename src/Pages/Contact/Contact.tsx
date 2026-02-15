import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="contact__title">Contact</h1>
      <p className="contact__subtitle">
        Interested in working together? Send a message and I’ll reply within 1–2
        business days.
      </p>
      <form className="contact__form">
        <label className="contact__field">
          Name
          <input className="contact__input" type="text" name="name" />
        </label>
        <label className="contact__field">
          Email
          <input className="contact__input" type="email" name="email" />
        </label>
        <label className="contact__field">
          Message
          <textarea className="contact__input contact__textarea" name="message" rows={5} />
        </label>
        <button className="contact__button" type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
