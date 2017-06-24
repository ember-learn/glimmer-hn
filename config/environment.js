'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-hn',
    environment: environment
  };

  ENV.serviceWorker = {
    enabled: true,
    networkFirstURLs: [
      /node-hnapi\.herokuapp\.com/
    ]
  }

    return ENV;
};
