const {XMLHttpRequest} = require('xmlhttprequest')
const {ajax} = require('rxjs/ajax')
const {map} = require('rxjs/operators')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
.pipe(
    map(resp => resp.xhr.responseText)  
)
.subscribe(console.log)