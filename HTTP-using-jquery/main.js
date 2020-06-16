import axios from 'jquery';
let promise = $.get('https://5ee87855ffee0c0016a12ddd.mockapi.io/api/v1/users');
promise
    .then(data => {
    console.log(data);
})
    .catch(error => {
        console.log(error)
    });

    // posting data using jquery

// define user object

const user = {
    name: "Zachary",
    avatar: "zachy.jpg"
}

let postData = axios.post(
    'https://5ee87855ffee0c0016a12ddd.mockapi.io/api/v1/users',user
);
promise
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
