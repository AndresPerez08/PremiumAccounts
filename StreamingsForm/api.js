const array = location.href.split("/");
const page = array[array.length-1];
const service = page?.substring(4, page.length-5);
console.log(service)

function onClickBuyButton(){
    const decision = confirm(`Esta seguro que quiere contratar ${service}?`);
    if (decision){
        alert(`Felicidades has contratado ${service}!`)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById(`Buy${service}`);
    button.addEventListener("click", onClickBuyButton);
});

