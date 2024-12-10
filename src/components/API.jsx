import axios from "axios";

const API = () => {
    const handleSelection = async (event) => {
        const selectionValue = event.target.value;
        const APIHeader = document.getElementById("APIHeader");
        const APIResponseHolder = document.getElementById("APIResponseHolder");
        APIResponseHolder.innerHTML = "";
        APIHeader.innerHTML = selectionValue;
        const url = "https://resume-api-ruby.vercel.app/" + selectionValue;
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                APIResponseHolder.innerHTML = JSON.stringify(response.data, null, 5);
            }
        )
            .catch((error) => console.log(error));
    }
    return(
        <div className="flex flex-col items-center m-16 gap-2 pt-8">
            <h2 className="text-3xl">Get to Know Me Via API:</h2>
            <label >Select Topic</label>
            <select name="APISelect" onChange={handleSelection}>
                <option class="dropdown-option" value=""> </option>
                <option class="dropdown-option" value="contact">Contact Info</option>
                <option class="dropdown-option" value="projects">Projects</option>
                <option class="dropdown-option" value="experience">Experience</option>
                <option class="dropdown-option" value="hobbies">Hobbies</option>
            </select>
            <div id="ResponseContainer" className="flex flex-col items-center">
                <h1 id="APIHeader"></h1>
                <pre>
                <p id="APIResponseHolder"></p>
                </pre>
            </div>
        </div>
    );
}


export default API;