// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
import { openDetails } from "./fetch.js";
document.getElementById("navbar").innerHTML= navbar();

let ne= JSON.parse(localStorage.getItem("news"));

openDetails(ne);