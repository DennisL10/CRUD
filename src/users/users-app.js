import usersStore from './store/use-store'

export const UserApp = async( element ) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
}