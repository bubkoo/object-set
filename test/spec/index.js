'use strict';

var expect = require('chai').expect;


describe('object-set', function () {

  var set = require('../../');

  it('common', function () {

    var object = { 'a': [{ 'b': { 'c': 3 } }] };


    expect(set(object, 'a[0].b.c', 4).a[0].b.c).to.be.equal(4);

    expect(set({ foo: { bar: 'baz' } }, 'foo.arr[0]', 3)).to.be.eql({
      foo: {
        bar: 'baz',
        arr: [3]
      }
    });

    expect(set({ foo: { bar: 'baz' } }, 'foo.arr[1]', 3)).to.be.eql({
      foo: {
        bar: 'baz',
        arr: [, 3]
      }
    });

    expect(set({ foo: { bar: 'baz' } }, 'foo.obj.key', 3)).to.be.eql({
      foo: {
        bar: 'baz',
        obj: { key: 3 }
      }
    });

    expect(set(null, 'foo.obj.key', 3)).to.be.null;

    expect(set({ foo: 1 }, 'foo.obj.key', 3)).to.be.eql({ foo: 1 });
  });
});
