function retorna(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando Date')
    }

    if (!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
       // hour: '2-digit',
       // minute: '2-digit',
       // second: '2-digit',
        hour12: false
        //hou12 serve para mudar o formato da hora, caso seja false, será em formato de 24h, caso seja true, em formato de 12(10AM, 10PM)
    })
}

try{
let hora = retorna()
console.log(hora)

} catch(e){
    console.log('Deu ruim')
    
} finally {
    console.log('Tenha um good day')
}
