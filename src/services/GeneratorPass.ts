const GeneratorPass = () =>{
    let password: string = '';
    let characters: string = 'Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!';
    let passwordLength: number = 8;

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(
           Math.floor( Math.random() * characters.length)
        );
    }

    return password;
}

export default GeneratorPass;