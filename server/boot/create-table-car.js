module.exports = function(app) {
  app.dataSources.rakLocalMysql.automigrate('Car', function(err) {
    if (err) throw err;
 
    app.models.Car.create([
      {name: 'Car1'},
      {name: 'Car2'},
      {name: 'Car3'},
    ], function(err, Car) {
      if (err) throw err;
 
      console.log('Models created: \n', Car);
    });
  });
  
  app.dataSources.rakLocalMysql.automigrate('user', function(err) {
    if (err) throw err;
 
    app.models.user.create([
      {name: 'User1', password: 'sdsdsd', email: 'demo@demo.com'},
      {name: 'User2', password: 'sdsdsd', email: 'demo2@demo.com'},
      {name: 'User3', password: 'sdsdsd', email: 'demo3@demo.com'},
    ], function(err, user) {
      if (err) throw err;
 
      console.log('Models created: \n', user);
    });
  });
  
  app.dataSources.rakLocalMysql.automigrate('AccessToken', function(err) {
    if (err) throw err;
    console.log('AccessToken Models created: \n');
  });
  
  app.dataSources.rakLocalMysql.automigrate('ACL', function(err) {
    if (err) throw err;
    console.log('ACL Models created: \n');
  });
  
  app.dataSources.rakLocalMysql.automigrate('RoleMapping', function(err) {
    if (err) throw err;
    console.log('RoleMapping Models created: \n');
  });
  
  app.dataSources.rakLocalMysql.automigrate('Role', function(err) {
    if (err) throw err;
    console.log('Role Models created: \n');
  });
  
  app.dataSources.rakLocalMysql.automigrate('UserCredential', function(err) {
    if (err) throw err;
    console.log('UserCredential Models created: \n');
  });
  
  app.dataSources.rakLocalMysql.automigrate('UserIdentity', function(err) {
    if (err) throw err;
    console.log('UserIdentity Models created: \n');
  });
  
};