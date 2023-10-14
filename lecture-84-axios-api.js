// // // 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// // // axios is a js library
// // // it helps to make request from browser (plain js/Vue/React/Angular), node.js


// console.log(window);


axios.get("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));




axios.get("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));





// // / + very easy to use
// // // + it supports all modern browser includig IE
// // // + it returns promise
// // // + throws error brilliantly
// // / + No need to set header cause axios is intelligent








// // axios (config)
// // axios (url [, config])
// // axios aget (url [, config])
// // axios.post (url [, config])
// // axios.put (url [, config])
// // axios.patch (url- [, config])
// // axios.delete (url: [, config])
// // axios returns response object - data, status, statusText,
// headers, config