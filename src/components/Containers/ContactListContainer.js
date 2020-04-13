import { connect } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import { getContactsWithFilter } from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  filteredContacts: getContactsWithFilter(state),
});

export default connect(mapStateToProps)(ContactList);
