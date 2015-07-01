/* Copyright (c) 2015 Hyunje Alex Jun and other contributors
 * Licensed under the MIT License
 */
'use strict';

var instances = require('../instances')
  , updateGeometry = require('../update-geometry');

function bindNativeScrollHandler(element, i, extra) {
  i.event.bind(element, 'scroll', function () {
    updateGeometry(element);
  });
  if (extra) {
    i.event.bind(extra, 'scroll', function () {
      updateGeometry(element);
    });
  }
}

module.exports = function (element, extra) {
  var i = instances.get(element);
  bindNativeScrollHandler(element, i, extra);
};
