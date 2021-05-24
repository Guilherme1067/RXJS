const {Observable}=require('rxjs')

function mostraElementos(tempo,...elementos){
    return new  Observable( subscriber => {
        (elementos || []).forEach((el,i) => {
                setTimeout( () =>{
                 subscriber.next(el)

                 if(elementos.length === i + 1){
                    subscriber.complete()
                }
           }, tempo *(i + 1))
        })
    })
}

mostraElementos(1000,1,2,3).subscribe(console.log)