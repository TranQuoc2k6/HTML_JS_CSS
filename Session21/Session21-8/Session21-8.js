for(let i = 100 ; i < 999 ; i++ ) {
    let hangdonvi = Math.floor( i % 10 );
    let hangchuc = Math.floor( ( i / 10 ) % 10 );
    let hangtram = Math.floor( i / 100 );
    let sum = Math.pow(hangdonvi , 3 ) + Math.pow(hangchuc , 3 ) + Math.pow(hangtram , 3 ) 
if(sum === i ) {
    console.log(i);
}
}