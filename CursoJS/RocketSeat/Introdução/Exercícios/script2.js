// Verificar se vetor possui item

// function temHabilidade(skills) {  // código aqui
//     if (skills.indexOf('Javascript') >= 0) return true;
//     else false;
// }

// var skills = ["Javascript", "ReactJS", "React Native"];

// console.log(temHabilidade(skills));

//  Vetor de Objetos

var usuarios = [  
    {
        nome: "Diego",    
        habilidades: ["Javascript", "ReactJS", "Redux"]  
    },  
    
    {    
        nome: "Gabriel",    
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
    }];

    // console.log(usuarios[0].nome);
    let str = "";
for (const user of usuarios) {
    
    console.log(`O ${user.nome} possui as habilidades:  `);
    
    for (const pos of user.habilidades) {
        str = user.habilidades.join();
    }
    console.log(str);
}