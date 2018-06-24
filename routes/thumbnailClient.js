'use strict'

const cote = require('cote');

const requester = new cote.Requester({ name: 'thumbnail requester' });

requester.send({
    path: path_file,
    file: file_name
},
res => {
    console.log(`convierto ${result}`)
}
)

