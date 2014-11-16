var appConfig = require('../config');

var dest = appConfig.paths.build.base;
var src = appConfig.paths.src.base;

module.exports = {

  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },

  sass: {
    src: appConfig.paths.src.sass + "/*.{sass,scss}",
    dest: appConfig.paths.build.css ,
    loadPaths: appConfig.paths.src.sassIncludePaths
  },

  images: {
    src: appConfig.paths.src.images + "/**",
    dest: appConfig.paths.build.images
  },

  browserify: {
    // Enable source maps
    debug: true,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: appConfig.paths.src.js + '/main.js',
      dest: appConfig.paths.build.js,
      outputName: 'main.js'
    }]
  },

  modernizr: {
    dest: appConfig.paths.build.js + '/libs'
  }
};
