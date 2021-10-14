const container = document.querySelector('.container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let hasMore = true;

const urlParams = new URLSearchParams(window.location.search);
let page = urlParams.get('page') ?? 1;
let limit = urlParams.get('limit') ?? 3;
limit = 50;

let url =`http://localhost:3001/api/users?page=${page}&limit=${limit}`

getUsers(url);

async function getUsers(url) {
        const response = await fetch(url);
        const data = await response.json();
        const arr = data.results;
        let has = data.hasMore;
        hasMore = has;
        arr.forEach(user => {
                container.insertAdjacentHTML('beforeend', `<p>${user.name}</p>`);
            })    
        } 
        
window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        page++;
        getUsers(url);
    }
});
    
