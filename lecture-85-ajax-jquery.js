// / 4 ways to call api: - XMLHttpRequest,
// fetch, •axios, jqueny
//•add jquery libraray cdn
// ajax - asynchronous javascript and xml






console.clear();

const makeRequest = async (url, method) => {

    const result = await $.ajax({
        URL: url,
        method: method,
    });
    console.log(result);
}



const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1'");
}

getData();
