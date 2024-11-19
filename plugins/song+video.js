const {cmd , commands} = require('../command')

cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
