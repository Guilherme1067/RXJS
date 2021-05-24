const {of,Observable}= require('rxjs')
const {map} = require('rxjs/operators')

function terminadoCom(parteFinal){
    return function (fonte){
        return Observable.create(subscriber => {
            fonte.subscribe( {
                next(valor){
                    if(Array.isArray(valor)){
                        subscriber.next(
                        valor.filter(nome => nome.endsWith(parteFinal))
                        )}
                    else if(valor.endsWith(parteFinal)){
                        subscriber.next(valor)
                    }
                },
                error(){
                    subscriber.error(e)
                },
                complete(){
                    subscriber.complete();
                }
            })
        })
    }
}
of(['Ana Silva','Maria Silva', 'Pedro Rocha'])
.pipe(terminadoCom('Silva'))        
.subscribe(console.log)