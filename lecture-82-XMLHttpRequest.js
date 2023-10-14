// 1. Button selection
const getButton = document.getElementById('get-button');
const sendButton = document.getElementById('send-button');

// 3. Create a function to send an HTTP request
const sendRequest = function (method, url) {
    const promise = new Promise((resolve, reject) => {
        // 4. Create an XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // 5. Specify the HTTP method (GET or POST) and the URL
        xhr.open(method, url);

        // 6. Set the response type to JSON
        xhr.responseType = "json";

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject('Request failed with status: ' + xhr.status);
            }
        };

        xhr.onerror = function () {
            reject('Request failed');
        };

        xhr.send();
    });

    return promise;
}

const getData = function () {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((error) => {
            console.error(error);
        });
}

const sendData = function () {
    const requestData = {
        title: "foo",
        body: "bar",
        userId: 1
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


// 2. Add click event listeners to the buttons
getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);
