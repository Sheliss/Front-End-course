console.log('CLIENT');

// fetch() => xhr + promise

// type: last | first
// fetch('/users?type=first')
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
//         document.body.innerHTML += data;
//     });


let search_result, searchBtn;

window.addEventListener('load', () => {
    search_result = document.querySelector('#search_result');
    searchBtn = document.querySelector('#search');

    // events
    searchBtn.addEventListener('click', onSearch);
});

function onSearch() {
    const userNameElem = document.querySelector('#userName');
    
    if (userNameElem.value.length > 2) {
        fetch(`/users/${userNameElem.value}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.length) {
                    search_result.value = data;
                } else {
                    search_result.value = 'Empty';
                }
                
            })
    }

    userNameElem.value = '';
}
