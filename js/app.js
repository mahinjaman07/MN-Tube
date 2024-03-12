// let myArr = [10, 250, 350, 5, 50, 45, 55];

// myArr.sort((x,y) => y - x);
//  console.log(myArr);

const loader = document.getElementById('loading');
const error404 = document.getElementById('error404');
const categoryEl = document.querySelectorAll('.category');
let sortData = false;
categoryEl.forEach(category =>{
    
    category.addEventListener('click', ()=>{
        document.querySelectorAll('.special').forEach(el=>{
            el.classList.remove('special');
        })
        category.classList.toggle('special');
        if (category.innerHTML === "Music"){
            displayData(1001)
        }
        else if (category.innerHTML === "Comedy"){
            displayData(1003)
        }
        else if (category.innerHTML === "Drawing"){
            displayData(1005)
        }
        else{
            displayData(1000)
        }
    })
});

const displayData = (id)=>{
    
    const categoryContainer = elementById("videosContainer");
    categoryContainer.innerHTML = "";

    let url = `https://openapi.programming-hero.com/api/videos/category/${id}`;
    fetchData(url).then(data =>{
        
        const AllData = data.data;
        loader.classList.remove('hidden');
        error404.classList.add('hidden');
        if(AllData.length < 1){
            setTimeout(() =>{
                loader.classList.add('hidden');
                error404.classList.remove('hidden');
            }, 1000)
            
        }
        else if(sortData){
                setTimeout(()=>{
                    AllData.sort((x, y) => parseFloat(y?.others?.views) - parseFloat(x?.others?.views));
                    AllData.forEach(video => {
                        error404.classList.add('hidden');
                        const card = div(video);
                        card.classList.add('card')
                        categoryContainer.appendChild(card);
                        loader.classList.add('hidden');
                    })
                }, 1000)
        }
        else{
            setTimeout(() =>{
                AllData.forEach(video => {
                    error404.classList.add('hidden');
                    const card = div(video);
                    card.classList.add('card')
                    categoryContainer.appendChild(card);
                    loader.classList.add('hidden');
                })
            }, 1000)
        }

        
    })
    
}

displayData(1000)

elementById('sortView').addEventListener('click',()=>{
    sortData = true;
    categoryEl.forEach(category => {
            document.querySelectorAll('.special').forEach(el => {
                el.classList.remove('special');
            })
            document.querySelector('.category').classList.add('special');
    });
    displayData(1000);
})