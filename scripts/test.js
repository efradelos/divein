import _ from 'lodash';

var lifecycleMethods = [
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount'
];

function mixin(...mixins) {
  var Mixin = () => {};
  _.each(lifecycleMethods, (method) => {
    Mixin.prototype[method] = () => {
      _.each(mixins, (mixin) => {
        if(mixin[method]) mixin[method]();
      });
    };
  });
  return Mixin;
}

var a = {
  componentWillMount: () => {
    console.log('a mounted');
  }
};

var b = {
  componentWillMount: () => {
    console.log('b mounted');
  }
};

class Comp extends mixin(a, b) {
  test() {
    console.log('test');
  }
}

var comp = new Comp();
comp.test();
comp.componentWillMount();
comp.componentDidMount();
