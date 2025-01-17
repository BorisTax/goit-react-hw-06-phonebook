import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import style from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <label className={style.subTitle}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
        />
      </label>

      <label className={style.subTitle}>
        Number
        <input
          className={style.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter your number"
          required
        />
      </label>

      <button type="submit" className={style.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
