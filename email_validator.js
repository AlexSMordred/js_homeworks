var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];



function validAdress(array){

    const objectInfo = []
    const pattern =  /@(?![m]).*\..*\b/;
    
    for (let i in array){
        if (pattern.test(array[i].email)){
            objectInfo.push(array[i])
        }
    }

    return objectInfo
}

console.log(validAdress(arr))