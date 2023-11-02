import { loadUsersByPage } from "../use-cases/load-users";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
   const user = await loadUsersByPage( state.currentPage + 1 );
   if ( user.length === 0 ) return;

   state.currentPage += 1;
   state.users = user;

}

const loadPreviousPage = async() => {
    throw new Error('Not Implemented');
}

const onUserChanged = () =>{
    throw new Error('Not Implemented');
}

const reloadPage = async() => {
    throw new Error('Not Implemented');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
    
}