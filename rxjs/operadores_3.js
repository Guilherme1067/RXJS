const {Observable } = require('rxjs')

function elementos(tempo, ...elementos){
    return Observable.create(subscriber => {
        
        (elementos || []).forEach((el,i) => {
            setTimeout(() => {
                subscriber.next(el)
            }, tempo * (i + 1))
        })
    })
}

elementos(1000,2,5,6)
.subscribe(console.log)