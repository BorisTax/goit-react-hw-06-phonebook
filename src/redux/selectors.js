import { createSelector } from "reselect";

// export const getContacts = state => state.contacts;

export const getContacts = state => state.contacts.list;

export const getStatusFilter = state => state.filter;

export const getFilteredContacts = createSelector(
    [getContacts, getStatusFilter],
    (contacts, filter) => {
        console.log(contacts)
        if (!contacts || !Array.isArray(contacts)) {
            return [];
        }

        return contacts.filter(contact =>
            contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);
