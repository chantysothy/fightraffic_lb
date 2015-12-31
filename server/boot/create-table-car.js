module.exports = function(app) {
  app.dataSources.rakLocalMysql.automigrate('Car', function(err) {
    if (err) throw err;
 
    app.models.Car.create([
      /*{name: 'Car1', userId:1},
      {name: 'Car2', userId:2},*/
      {name: 'Sample Car', oddEven:'odd', image:'img/car-1.jpg', totalSeats:5, seatsLeft:2, isSun:true, startHr:12, startMin:30, startAMPM:'AM', endHr:06, endMin:10, endAMPM:'PM', startPlace:'Haiderpur', endPlace:'Gurgaon', milage:24, distance:30, message:"Smoking and Drinking will not be allowed", userId:4},
    ], function(err, Car) {
      if (err) throw err;
 
      console.log('Models created: \n', Car);
    });
  });
  
  app.dataSources.rakLocalMysql.automigrate('user', function(err) {
    if (err) throw err;
 
    app.models.user.create([
      /*{name: 'User1', password: 'sdsdsd', email: 'demo@demo.com',carId:1},
      {name: 'User2', password: 'sdsdsd', email: 'demo2@demo.com',carId:2},*/
      {name: 'Sample User', password: 'sdsdsd', email: 'demo3@demo.com',carId:32},
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