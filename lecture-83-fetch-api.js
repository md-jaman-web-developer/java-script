// // 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// // fetch() has replaced XMLHttpRequest
// / fetch() - global method for making HTTP Request
// /12 ways to call - then, async await
// // + fetch) is easy to use compare to XMLHttpRequest
// // + fetch() returns a promise
// /- returned promise can only handle network error
// / - does not support all the older browser


console.log();

try {
    // console.log(window);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => {
            if (!response.ok) {
                const message = `error:${response.status}`
                throw new Error(message);
            }
            return response.json();
        })
        .then(
            (response) => { console.log(response) }
        )

} catch (error) {
    console.log("error:" + error);
}








fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));