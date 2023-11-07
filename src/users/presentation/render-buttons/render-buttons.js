import './render-buttons.css'
import useStore from "../../store/use-store";
import { renderTable } from '../render-table/render-table'

export const renderButtons = ( element ) => {

    const nextButtons = document.createElement('button');
    nextButtons.innerHTML = 'Next >';

    const prevButtons = document.createElement('button');
    prevButtons.innerHTML = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = useStore.getCurrentPage();

    element.append( prevButtons, currentPageLabel, nextButtons );

    nextButtons.addEventListener('click', async() => {
        await useStore.loadNextPage();
        currentPageLabel.innerHTML= useStore.getCurrentPage();
        renderTable( element );
    })

    prevButtons.addEventListener('click', async() => {
        await useStore.loadPreviousPage();
        currentPageLabel.innerHTML= useStore.getCurrentPage();
        renderTable( element );
    })
}