function elementById(id){
    return document.getElementById(id);
}

function elementByClass(className){
    return document.getElementsByClassName(className);
}

function fetchData(url){
    return fetch(url).then(response => response.json());
}

function div(obb){
    let div = document.createElement('div');
    div.innerHTML = `
            <div class ="relative my-5">
            <img src="${obb?.thumbnail}" class="h-52 w-96 rounded">
            <div class = "absolute bottom-5 right-5">
            ${obb?.others?.posted_date ? `<p class = "bg-slate-500 rounded  text-white py-1 px-5">${getHours(obb?.others?.posted_date)}hrs ${getMinutes(obb?.others?.posted_date)} min ago</p>` : ""}
            </div>
            </div>

            <div>
            <div class = "flex gap-2">
            <div class ="">
            <img src = "${obb?.authors[0]?.profile_picture}" class ="rounded-full w-10 h-10">
            </div>

            <div>
            <p class = "font-bold text-1xl text-black">${obb?.title}</p>
            <p class ="flex w-full gap-3 items-center">${obb?.authors[0]?.profile_name} ${obb?.authors[0].verified === true ? `<img src = "images/verified.png" class = "w-5 h-5">` : ''}</p>
            <p>${obb?.others?.views}</p>
            </div>
            
            </div>

            </div>
            `
            return div;
}

function getHours(secound){
    let hours = Math.floor(secound / 3600);
    let minutes = Math.floor((secound - hours * 3600) / 60);
    return hours;
}

function getMinutes(secound){
    let hours = Math.floor(secound / 3600);
    let minutes = Math.floor((secound - hours * 3600) / 60);
    return minutes;
}
