let userinput = +prompt('enter table')
let userinput2 = prompt('1 till ?')
for(let i = 1; i <= userinput2; i++ )
    document.write(userinput + " " + 'x' +" "+ i +" "+'=' +" "+ userinput*i + "<br/>" );