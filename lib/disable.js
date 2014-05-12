/*global jQuery, window, document*/

(function ($, window, document, undefined) {
  'use strict';

  $.fn.disable = function disable() {
    return this.each(function () {
      var $this = $(this);
      $this.on('click.disable', function (event) {
        event.preventDefault();
      });
      $this.addClass('disabled').prop('disabled', true);
    });
  };

  $.fn.enable = function enable() {
    return this.each(function () {
      var $this = $(this);
      $this.off('click.disable');
      $this.removeClass('disabled').prop('disabled', false);
    });
  };

})(jQuery, window, document);
