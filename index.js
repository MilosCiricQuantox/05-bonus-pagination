const container = document.querySelector('.container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let page = 1;
let hasMore = true;


next.addEventListener('click', function () {
    if(hasMore) {
        page++;
        console.log(page);
        getUsers();
    }
})

prev.addEventListener('click', function () {
    console.log(page);
    if(page !== 1){
        page--;
        getUsers();
    } 
    else {
        page = 1
    }
})


async function getUsers() {
        const response = await fetch(`http://localhost:3001/api/users?page=${page}&limit=5`);
        const data = await response.json();
        console.log(data);
    
        const arr = data.results;
        let has = data.hasMore;
        hasMore = has;
        console.log(has);
        container.innerHTML = '';
        arr.forEach(user => {
                container.insertAdjacentHTML('beforeend', `<p>${user.name}</p>`);
            })    
        } 
        
getUsers();