const PersonController = require('../controllers/person.controller');
module.exports = (app) => {
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson); 
    app.get('/api/people', PersonController.getAllPeople); 
    app.get('/api/people/:id', PersonController.getPerson);
    app.patch('/api/people/:id', PersonController.updatePerson);
    app.delete('/api/people/:id', PersonController.deletePerson);



    /* This is new */
}


//can be the same route as POST as long as we have a different http verb



