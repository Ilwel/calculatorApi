//project_name => calculator api
//author       => iueu

//imports::
const express = require('express');
const app     = express();
const router  = require('./router');
const cors    = require('cors');

    //configs::
        app.use(express.json());
        app.use(cors());
        
    //routes::
        app.use(router);
        

//listen::
const PORT = 8080;
app.listen(PORT, () => {
    
    console.log('servidor aberto na porta ' + PORT);
    
})