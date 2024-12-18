import axios from "axios";
import { useContext } from "react";

import { ThemeContext } from "../Context/theme";

const API = () => {
    const { dark } = useContext(ThemeContext);
    const handleSelection = async (event) => {
        const selectionValue = event.target.value;
        const APIHeader = document.getElementById("APIHeader");
        const APIResponseHolder = document.getElementById("APIResponseHolder");
        APIResponseHolder.innerHTML = "";
        APIHeader.innerHTML = selectionValue;
        const url = "https://resume-api-ruby.vercel.app/" + selectionValue;
        axios.get(url)
            .then((response) => {

                APIResponseHolder.innerHTML = JSON.stringify(response.data, null, 5);
            }
            )
            .catch((error) => console.log(error));
    }
    return (
        <div className="flex flex-col items-center m-16 gap-2 pt-8" id="resumeAPI">
            <h2 className="text-3xl">Get to Know Me Via API:</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <h4 className="text-xs">Built with Node, Express, and Vercel.</h4>
                <button className={`text-xs p-1 rounded ${
              dark
                ? "bg-violet hover:bg-light-red"
                : "bg-tea-green hover:bg-light-red"
            }`}><a target="_blank" href="https://github.com/katieperry4/resume-api">GitHub</a></button>
            </div>
            <label className="pt-8" >Select Topic:</label>
            <select name="APISelect" onChange={handleSelection}>
                <option className={`${dark ? "option-dark" : "option-light"}`} value=""> </option>
                <option className={`${dark ? "option-dark" : "option-light"}`} value="contact">Contact Info</option>
                <option className={`${dark ? "option-dark" : "option-light"}`} value="projects">Projects</option>
                <option className={`${dark ? "option-dark" : "option-light"}`} value="experience">Experience</option>
                <option className={`${dark ? "option-dark" : "option-light"}`} value="certifications">Certifications</option>
                <option className={`${dark ? "option-dark" : "option-light"}`} value="hobbies">Hobbies</option>
            </select>
            <div id="ResponseContainer" className="flex flex-col items-center w-1/2 md:w-2/3">
                <h1 id="APIHeader"></h1>
                <pre id="APIResponseHolder" className="w-full text-xs whitespace-pre-wrap break-word md:break-keep">
                    
                </pre>
            </div>
        </div>
    );
}


export default API;