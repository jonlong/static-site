var config = {
  blog: {
    title: 'Static Site Template',
    baseURL: '//sample.github.io/'
  },
  port: 3000,
  paths: {
    src: {
      base: './src',
      content: './posts',
      assets: './assets',
      templates: './templates',
      sass: './assets/sass',
      images: './assets/images',
      components: './assets/components',
      sassIncludePaths: [
        './assets/components'
      ]
    },
    build: {
      base: './build',
      css: './build/assets/css',
      html: './build/**/*.html',
      images: './build/assets/images',
      js: './build/assets/js'
    }
  }
};

module.exports = config;
