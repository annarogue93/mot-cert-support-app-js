
/* create the following mock using the nock library that will return a list of projects for the component to render  */
nock('http://localhost')
   .persist()
   .get('/v1/project')
   .reply(200, [{
       "id" : "1",
       "name" : "Project 1",
       "description" : "This is the first project"
   },{
       "id" : "2",
       "name" : "Project 2",
       "description" : "This is the second project"
   }]);



describe('ProjectList', () => {

    it('renders the list of projects correctly', async () => {
 
    });
 
 });