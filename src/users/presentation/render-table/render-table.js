import "./render-table.css";
import usersStore from "../../store/use-store"


let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>FistName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;
const tableBody = document.createElement('tbody');
table.append( tableHeaders, tableBody )
return table;

}
/**
 * 
 * @param {HTML} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();
    if ( !table ) {
        table = createTable();
        element.append( table );

        // TODO 
    }

    let tableHTML = '';
    users.forEach( user => {
        tableHTML += `
        <tr>
            <td>${ user.id }</td>
            <td>${ user.balance }</td>
            <td>${ user.firstName }</td>
            <td>${ user.lastName }</td>
            <td>${ user.isActive }</td>
            <td>
                <a href="#/" data-id="${ user.id }">Select</a>
                |
                <a href="#/" data-id="${ user.id }">Delete</a>
            </td>
        </tr>
    `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;
}