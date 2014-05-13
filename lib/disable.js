/*global jQuery, window, document*/

(function ($, window, document, undefined) {
  'use strict';

  $.fn.disable = function disable() {
    return this.on('click.disable', function (event) {
        event.preventDefault();
      }).addClass('disabled').prop('disabled', true);
  };

  $.fn.enable = function enable() {
    return this.off('click.disable').removeClass('disabled').prop('disabled', false);
  };

})(jQuery, window, document);
