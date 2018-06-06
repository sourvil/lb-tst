module.exports = {
    up: function(dataSource, next) {
      dataSource.autoupdate(['ps-entity'], function (err) {
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
  