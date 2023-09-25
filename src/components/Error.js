import {errorEl,errorTextEl} from "../common.js";

const Error =(message)=>{
    errorTextEl.textContent =message;
    errorEl.classList.add('error--visible');
    setTimeout(()=>{
        errorEl.classList.remove('error--visible');
    },2000);
}
export default Error;