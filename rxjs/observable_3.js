const {Observable, noop} = require('rxjs')


const entre = (min,max) => {
    return new Observable(subscriber => {
        Array((max-min) + 1).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

entre(4,10).subscribe(
     num => console.log(`num = ${num}`),
     noop,
     () => console.log("Fim!"))