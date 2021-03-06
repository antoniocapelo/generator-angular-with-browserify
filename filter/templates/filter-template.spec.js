'use strict';
require('./<%= name %>');

//require angular mock for testing
require('angular-mocks');

describe('filter 100000', function() {
    var <%= name %>Filter;
    beforeEach(angular.mock.module('<%= name %>Module'));
    beforeEach(angular.mock.inject(function(_$filter_) {
        <%= name %>Filter = _$filter_('<%= name %>Filter');
    }));

    it('should be equal 100,000', function() {
        expect(<%=name %>Filter(100000)).toEqual('100,000');
    });
});
