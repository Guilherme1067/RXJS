const {from, Observable}= require('rxjs')

function createPipeableOperator(operatorFn){
    return function(source){
        return Observable.create( subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (()=> subscriber.complete())
            })
            source.subscribe(operatorFn(subscriber))
        })
    }
}

function primeiro(){
    return createPipeableOperator(subscriber => ({
            next(v){
                subscriber.next(v)
                subscriber.complete()
            }
    }))
}

function ultimo (){
    let ultimo
    return createPipeableOperator(subscriber => ({
        next(v){
            ultimo = v
        },
        complete(){
            if(ultimo !== undefined){
                subscriber.next(ultimo)
            }
            subscriber.complete()
        }
}))
}

function nenhum(){
        return createPipeableOperator(subscriber => ({
            next(v){
                subscriber.complete()
            }
    }))
    }




from([1,5,6,7,8])
.pipe(
    nenhum(),
    // primeiro(),
    // ultimo()
)
.subscribe(console.log)