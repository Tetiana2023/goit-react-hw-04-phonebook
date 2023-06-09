import { nanoid } from 'nanoid';
import  { useState } from 'react';
import css from './ContactForm.module.css';
import { PropTypes } from 'prop-types';


export const FormContact = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name,value } = event.target;

    switch(name) {
      case 'name':
        setName(value);
       break;
       
       case 'number':
        setNumber(value);
        break;

        default: 
        return;
    }
   }
   const handleSubmit = e => {
     e.preventDefault();
      onSubmit({name, number});
     reset();
    
     }

   const reset = ()=> {
   setName('');
   setNumber('')
   }
  const nameId = nanoid();
  const numberId = nanoid();
  return (
  <form className={css.form} onSubmit={handleSubmit}>
  <label htmlFor={nameId}>
    Name
    <input id={nameId}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      onChange={handleInputChange}
    />
  </label>
  <label htmlFor={numberId}>
    Number
    <input id={numberId}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number}
      onChange={handleInputChange}
    />
  </label>

  <button className={css.formbtn} type="submit">Add contact </button>
</form>
  )
}
FormContact.propTypes = { 
  onSubmit:PropTypes.func.isRequired,

}

// export class FormContact extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
// nameId = nanoid();
// numberId = nanoid();

// handleInputChange = event => {
//   // console.log(event.currentTarget.value)
//   const { name, value } = event.currentTarget;
//   this.setState({ [name]: value });
// };

// handleSubmit = e => {
//   e.preventDefault();
// //   console.log(this.state);
//   this.props.onSubmit(this.state);
//   this.reset();

// };
// reset = ()=> {
//     this.setState({ name: '',
//     number: ''})
// }
// // render() {
// //     return (
// //         <form className={css.form} onSubmit={this.handleSubmit}>
// //           <label htmlFor={this.nameId}>
// //             Name
// //             <input id={this.nameId}
// //               type="text"
// //               name="name"
// //               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// //               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// //               required
// //               value={this.state.name}
// //               onChange={this.handleInputChange}
// //             />
// //           </label>
// //           <label htmlFor={this.numberId}>
// //             Number
// //             <input id={this.numberId}
// //               type="tel"
// //               name="number"
// //               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// //               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
// //               required
// //               value={this.state.number}
// //               onChange={this.handleInputChange}
// //             />
// //           </label>

// //           <button className={css.formbtn} type="submit">Add contact </button>
// //         </form>

// //      )
// }
// }