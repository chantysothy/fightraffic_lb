module.exports = function(app) {
  app.dataSources.rakLocalMysql.automigrate('Car', function(err) {
    if (err) throw err;
 
    app.models.Car.create([
      {name: 'Car1'},
      {name: 'Car2'},
      {name: 'Car3'},
    ], function(err, coffeeShops) {
      if (err) throw err;
 
      console.log('Models created: \n', coffeeShops);
    });
  });
};