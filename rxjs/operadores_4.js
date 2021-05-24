const {from, Observable}= require('rxjs')


function primeiro(){
    return function(source){
        return Observable.create( subscriber => {
            source.subscribe({
                next(v){
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}

function ultimo (){
    return source => {
       return  new Observable(subscriber =>{
           let ultimo
            source.subscribe({
                next(v){
                    ultimo = v
                },
                complete(){
                    if(ultimo !== undefined){
                        subscriber.next(ultimo)
                    }
                    subscriber.complete()

                }
            })
        })
    }
}

function nenhum(){
    return function (source){
        return Observable.create(subscriber => {
            source.subscribe({
                next(v){
                    subscriber.complete()
                }
            }
            )
        })
    }
}




from([4,5,6,7,8])
.pipe(
    // nenhum(),
    // primeiro(),
    ultimo()
)
.subscribe(console.log)