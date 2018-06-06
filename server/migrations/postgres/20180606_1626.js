module.exports = {
    up: function(dataSource, next) {
      dataSource.autoupdate(['Country'], function (err) {
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
  