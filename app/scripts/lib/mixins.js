import _ from 'lodash';
import React from 'react';

var lifecycleMethods = [
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount'
];

export default function mixin(...mixins) {
  class Mixin extends React.Component {}
  _.each(lifecycleMethods, (method) => {
    Mixin.prototype[method] = function() {
      _.each(mixins, (mixin) => {
        if(mixin[method]) mixin[method].bind(this)();
      });
    };
  });
  _.each(mixins, (mixin) => {
    _.each(mixin, (method, name) => {
      if (!_.contains(lifecycleMethods, name)) {
        Mixin.prototype[name] = method.bind(this);
      }
    });
  });
  return Mixin;
}
