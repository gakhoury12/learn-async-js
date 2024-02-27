const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

netPerRowPromises = [];

Promise.any(negsPerRowPromises)
    .then((results)=> {
        console.log(resuls);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));