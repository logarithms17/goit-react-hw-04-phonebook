import React, { Component } from 'react'
import css from './ContactListItem.module.css'
import PropTypes from 'prop-types'

export default class ContactListItem extends Component {

    componentWillUnmount() {
        console.log("data deleted")
    }
    render() {
    const {filteredContact, deleteInfo} = this.props
    
    return (
        <li className={css.contactList}>
            {filteredContact.name}: {filteredContact.number}
            <button className={css.listButton} onClick={() => {deleteInfo(filteredContact.id)}}> Delete</button>
        </li>
    )
}
}

ContactListItem.propTypes = {
    deleteInfo: PropTypes.func.isRequired,
    filteredContact: PropTypes.shape({
        // id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired
        
}