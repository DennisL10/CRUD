import { loadUsersByPage } from "../use-cases/load-users";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    await loadUsersByPage( state.currentPage + 1 );
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

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage,
    
}