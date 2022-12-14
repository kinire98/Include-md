const $md = document.querySelectorAll("[data-md]");
const includeMD = (el) => fetch(el.dataset.md)
    .then(res => res.ok ? res.text(): Promise.reject(res))
    .then(text => el.innerHTML = new showdown.Converter().makeHtml(text))
    .catch(err=>{
        let message = err.statusText || "An error has ocurred";
        el.innerHTML=`Error ${err.status}: ${message}`;
    })
document.addEventListener("DOMContentLoaded",() => {
    for(let i=0; i<$md.length;i++){
        includeMD($md[i]);
    }
}) 
