module.exports = {
    up: function(dataSource, next) {
      dataSource.autoupdate(['City'], function (err) {
        if (err) {
          return next(err);
        }
  
        next()
      })
    },
    down: function(dataSource, next) {
      next();
    }
  };
  