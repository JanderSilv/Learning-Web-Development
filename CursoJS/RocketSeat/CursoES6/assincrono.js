const minhaPromise = () => new Promise((resolve, reject) =>  {
    setTimeout(() => {resolve('OK')}, 2000);
});



async function execPromise() {
    const response = await minhaPromise();
    console.log(response);
}

// Com arrow function
const execPromise = async () => {
    const response = await minhaPromise();
    console.log(response);
}

execPromise();