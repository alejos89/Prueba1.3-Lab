import { banner2 } from "../banner2/banner2Component.js";
export function login(){
    let login=document.createElement("div");
    login.className="login";

    login.appendChild(banner2());

  


    return login;
}