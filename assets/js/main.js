var $ = window.jQuery = require('../components/jquery/dist/jquery');

require('../components/foundation/js/foundation/foundation');
require('../components/foundation/js/foundation/foundation.reveal');

module.exports = {
  init: function() {
    $(document).foundation();
  }
};

module.exports.init();