const arr = [1,3,4,5,6];

const newArr = arr.map(item => item * 2);

console.log(newArr);


const execPromise = async () => {
    const response = await minhaPromise();
    console.log(response);
}

execPromise();