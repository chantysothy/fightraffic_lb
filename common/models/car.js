module.exports = function(Car) {
	
	Car.beforeRemote('create', function(ctx, modelInstance, next) {
	  ctx.args.data.userId = ctx.req.accessToken.userId;
	  next();
	});
	
};
