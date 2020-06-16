// making requests using xmr
const request = new XMLHttpRequest();
request.open('GET','https://5ee87855ffee0c0016a12ddd.mockapi.io/api/v1/users');
// create a function to handle the response
request.onload = () => {
    const response  = request.response;
    const data = JSON.parse(response);
    console.log(data);
}
request.send();