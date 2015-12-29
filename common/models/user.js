module.exports = function(User) {
  
  	/*
  
  User.getUserData = function(tokenId, fn) {
    this.relations.accessTokens.modelTo.findById(tokenId, function(err, accessToken) {
      if (err) {
        fn(err);
      } else if (accessToken) {
        this.relations.identities.modelTo.findById(User.id, function(err, identities) {
			return identities;
		});
      } else {
        fn(new Error('could not find accessToken'));
      }
    });
  };
  */
};
