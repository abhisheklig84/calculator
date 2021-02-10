let input= document.getElementById('input');
let output= document.getElementById('output');

function calculate(data)
{
    switch(data){
        case 'AC':
        input.innerHTML="";
        output.innerHTML="0";
        break;

        case 'C':
        input.innerHTML= input.innerHTML.substr(0, input.innerHTML.length-1);
        break;

        case "=":
        output.innerHTML= math.evaluate(input.innerHTML) ;
        break;
        
    default:
    input.innerHTML+= data;

    }
}