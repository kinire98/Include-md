import Showdown from "showdown";

function includeMD () {
    const $md = document.querySelectorAll("[data-md]");


    const fetchMD = (el) => fetch(el.dataset.md)
    .then(res => res.ok ? res.text(): Promise.reject(res))
    .then(text => el.innerHTML = new Showdown.Converter().makeHtml(text))
    .catch(err=>{
        let message = err.statusText || "An error has ocurred";
        el.innerHTML=`Error ${err.status}: ${message}`;
    });

    
    for (let i = 0; i < $md.length; i++) fetchMD($md[i])
}

module.exports = includeMD;