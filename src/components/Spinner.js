import {spinnerSearchEl,spinnerJobDetailsEl} from "../common.js";


const Spinner =whichSpinner=>{
    const spinnerSelect = whichSpinner === 'search' ? spinnerSearchEl : spinnerJobDetailsEl;
    spinnerSelect.classList.toggle('spinner--visible');
}
export default Spinner;