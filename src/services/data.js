import { keyframes } from "@emotion/react";
import axios from "axios"

export const getData = async () => {
    
    let response = await axios.get("https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc&page=1&per_page=100")
    let data = response.data.items

    let newdata = []
    for(let x = 0; x < data.length; x++) {

        newdata[x] = {
            id : x,
            sl_no: x+1,
            name : data[x].name,
            description : data[x].description,
            owner : data[x].owner["login"],
            stargazers_count : data[x].stargazers_count,
            forks_count : data[x].forks_count,
            language : data[x].language,
            url : data[x].html_url
        }
    }
    console.log(data)
    return newdata;
}