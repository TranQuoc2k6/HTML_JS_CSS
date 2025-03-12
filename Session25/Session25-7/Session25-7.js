function stypeString(str) {
    let words = str.split(" "); 
    let result = "";
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            let firstChar = word[0].toUpperCase(); 
            let remainingChars = word.substring(1).toLowerCase(); 
            result += firstChar + remainingChars;
        }
        if (i < words.length - 1) {
            result += " "; 
        }
    }

    console.log(result);
}

stypeString("quOc");     
stypeString("tRaN");   
