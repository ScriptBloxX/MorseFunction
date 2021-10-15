// How to use this function?
// Morse(code type,text);
// This code will return a morse value

console.log(Morse('Encode','i love you'));
console.log(Morse('Decode','.. ~ .-.. --- ...- . ~ -.-- --- ..-'));

function Morse(code_type,text){
    if(code_type !== 'Encode' && code_type !== 'Decode') return 'Invalid code type'
    if(text===undefined || text===null) return 'Invalid text type'
    var getCode = ''
    if(code_type==='Encode'){
        text = text.toLowerCase()
        for (let i=0;i<text.length; i++){
            var indexI = text[i]
            if(indexI==='a'){
                getpush('.-')
            }else if(indexI==='b'){
                getpush('-...')
            }else if(indexI==='c'){
                getpush('-.-.')
            }else if(indexI==='d'){
                getpush('-..')
            }else if(indexI==='e'){
                getpush('.')
            }else if(indexI==='f'){
                getpush('..-.')
            }else if(indexI==='g'){
                getpush('--.')
            }else if(indexI==='h'){
                getpush('....')
            }else if(indexI==='i'){
                getpush('..')
            }else if(indexI==='j'){
                getpush('.---')
            }else if(indexI==='k'){
                getpush('-.-')
            }else if(indexI==='l'){
                getpush('.-..')
            }else if(indexI==='m'){
                getpush('--')
            }else if(indexI==='n'){
                getpush('-.')
            }else if(indexI==='o'){
                getpush('---')
            }else if(indexI==='p'){
                getpush('.--.')
            }else if(indexI==='q'){
                getpush('--.-')
            }else if(indexI==='r'){
                getpush('.-.')
            }else if(indexI==='s'){
                getpush('...')
            }else if(indexI==='t'){
                getpush('-')
            }else if(indexI==='u'){
                getpush('..-')
            }else if(indexI==='v'){
                getpush('...-')
            }else if(indexI==='w'){
                getpush('.--')
            }else if(indexI==='x'){
                getpush('-..-')
            }else if(indexI==='y'){
                getpush('-.--')
            }else if(indexI==='z'){
                getpush('--..')
            }else if(indexI==='1'){
                getpush('.----')
            }else if(indexI==='2'){
                getpush('..---')
            }else if(indexI==='3'){
                getpush('...--')
            }else if(indexI==='4'){
                getpush('....-')
            }else if(indexI==='5'){
                getpush('.....')
            }else if(indexI==='6'){
                getpush('-....')
            }else if(indexI==='7'){
                getpush('--...')
            }else if(indexI==='8'){
                getpush('---..')
            }else if(indexI==='9'){
                getpush('----.')
            }else if(indexI==='0'){
                getpush('-----')
            }else if(indexI===' '){
                getpush('~')
            }
        }
        return getCode
    }else if
    (code_type==='Decode'){
        var deCArr = []
        while(text.includes(' ')){
            var getOf = text.indexOf(' ')
            deCArr.push(text.substring(0,getOf))
            text = text.slice(getOf+1)
        }
        deCArr.push(text)
        for (let i=0;i<deCArr.length; i++){
            var deIndex = deCArr[i]
            if(deIndex==='.-'){
                getpush('a')
            }else if(deIndex==='-...'){
                getpush('b')
            }else if(deIndex==='-.-.'){
                getpush('c')
            }else if(deIndex==='-..'){
                getpush('d')
            }else if(deIndex==='.'){
                getpush('e')
            }else if(deIndex==='..-.'){
                getpush('f')
            }else if(deIndex==='--.'){
                getpush('g')
            }else if(deIndex==='....'){
                getpush('h')
            }else if(deIndex==='..'){
                getpush('i')
            }else if(deIndex==='.---'){
                getpush('j')
            }else if(deIndex==='-.-'){
                getpush('k')
            }else if(deIndex==='.-..'){
                getpush('l')
            }else if(deIndex==='--'){
                getpush('m')
            }else if(deIndex==='-.'){
                getpush('n')
            }else if(deIndex==='---'){
                getpush('o')
            }else if(deIndex==='.--.'){
                getpush('p')
            }else if(deIndex==='--.-'){
                getpush('q')
            }else if(deIndex==='.-.'){
                getpush('r')
            }else if(deIndex==='...'){
                getpush('s')
            }else if(deIndex==='-'){
                getpush('t')
            }else if(deIndex==='..-'){
                getpush('u')
            }else if(deIndex==='...-'){
                getpush('v')
            }else if(deIndex==='.--'){
                getpush('w')
            }else if(deIndex==='-..-'){
                getpush('x')
            }else if(deIndex==='-.--'){
                getpush('y')
            }else if(deIndex==='--..'){
                getpush('z')
            }else if(deIndex==='.----'){
                getpush('1')
            }else if(deIndex==='..---'){
                getpush('2')
            }else if(deIndex==='...--'){
                getpush('3')
            }else if(deIndex==='....-'){
                getpush('4')
            }else if(deIndex==='.....'){
                getpush('5')
            }else if(deIndex==='-....'){
                getpush('6')
            }else if(deIndex==='--...'){
                getpush('7')
            }else if(deIndex==='---..'){
                getpush('8')
            }else if(deIndex==='----.'){
                getpush('9')
            }else if(deIndex==='-----'){
                getpush('0')
            }else if(deIndex==='~'){
                getpush(' ')
            }
        }
        return getCode
    }
    function getpush(mCode){ 
        if(mCode.includes('.')===true || mCode.includes('-')===true || mCode.includes('~')===true){
            getCode=getCode+mCode+' ';
        }else{
            getCode=getCode+mCode;
        }        
    }
}
