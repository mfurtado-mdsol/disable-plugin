/*global jasmine, describe, it, $, expect, spyOnEvent*/

'use strict';

var fixtures  = jasmine.getFixtures();

// given relative path test/fixtures/ to karma
fixtures.fixturesPath = 'base/spec/fixtures/';

describe('disable', function () {
  it('should add `disabled` class', function () {
    fixtures.load('btn.html');
    var $btn = $('.btn');
    $btn.disable();
    expect($btn).toHaveClass('disabled');
    expect($btn).toHaveProp('disabled', true);
  });
  it('should be chainable', function () {
    fixtures.load('btn.html');
    var $btn = $('.btn');
    $btn.disable().addClass('test');
    expect($btn).toHaveClass('test');
  });
  it('should prevent clicks from working on <a> tags', function () {
    fixtures.load('a.html');
    var $a = $('.a'),
        spy = spyOnEvent('.a', 'click');
    $a.disable().click();
    expect(spy).toHaveBeenPrevented();
  });
});

describe('enable', function () {
  it('should remove the `disabled` class', function () {
    fixtures.load('disabled-btn.html');
    var $btn = $('.btn');
    expect($btn).toHaveClass('disabled');
    expect($btn).toHaveProp('disabled', true);
    $btn.enable();
    expect($btn).not.toHaveClass('disabled');
    expect($btn).not.toHaveProp('disabled', true);
  });
  it('should be chainable', function () {
    fixtures.load('disabled-btn.html');
    var $btn = $('.btn');
    $btn.enable().addClass('test');
    expect($btn).toHaveClass('test');
  });
  it('should restore clickability on <a> tags', function () {
    fixtures.load('a.html');
    var $a = $('.a'),
        spy = spyOnEvent('.a', 'click');
    $a.disable().enable().click();
    expect(spy).not.toHaveBeenPrevented();
  });
});
