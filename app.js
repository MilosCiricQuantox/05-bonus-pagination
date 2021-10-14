const container = document.querySelector('.container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let hasMore = true;

const urlParams = new URLSearchParams(window.location.search);
let page = urlParams.get('page') ?? 1;
let limit = urlParams.get('limit') ?? 3;

let url =`http://localhost:3001/api/users?page=${page}&limit=${limit}`

next.addEventListener('click', function () {
    console.log('radi');
    if(hasMore) {
        page++;
        console.log(page);
        update();
        getUsers(url);
    }
})

prev.addEventListener('click', function () {
    console.log(page);
    if(page != 1){
        page--;
        update();
        getUsers(url);
    } 
    else {
        page = 1
    }
})

function update() {
    window.location.search = `?page=${page}&limit=${limit}`
}

async function getUsers(url) {
        const response = await fetch(url);
        const data = await response.json();
        const arr = data.results;
        let has = data.hasMore;
        hasMore = has;
        container.innerHTML = '';
        arr.forEach(user => {
                container.insertAdjacentHTML('beforeend', `<p>${user.name}</p>`);
            })    
        } 
        
getUsers(url);

