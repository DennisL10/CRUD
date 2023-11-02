import './render-buttons.css'
import useStore from "../../store/use-store";

export const renderButtons = ( element ) => {

    const nextButtons = document.createElement('button');
    nextButtons.innerHTML = 'Next >';

    const prevButtons = document.createElement('button');
    prevButtons.innerHTML = '< Prev';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = useStore.getCurrentPage();

    element.append( prevButtons, currentPageLabel, nextButtons );
}