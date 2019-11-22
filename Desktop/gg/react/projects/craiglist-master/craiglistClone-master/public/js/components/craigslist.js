webpackJsonp([0],{

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(161);

var _Header = __webpack_require__(277);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(280);

var _Home2 = _interopRequireDefault(_Home);

var _Listings = __webpack_require__(281);

var _Listings2 = _interopRequireDefault(_Listings);

var _Category = __webpack_require__(278);

var _Category2 = _interopRequireDefault(_Category);

var _Details = __webpack_require__(279);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/:city', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:item', component: _Details2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(255);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(112);

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = __webpack_require__(161);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedCityDropdown = function () {
      _this.setState({
        cityDropdown: !_this.state.cityDropdown
      });
    };

    _this.selectCity = function (city) {
      _this.setState({
        selectedCity: city
      }, function () {
        var city = _this.state.citiesData.filter(function (item) {
          return item.title == _this.state.selectedCity;
        });
        var _this$props = _this.props,
            match = _this$props.match,
            history = _this$props.history;

        history.push('/' + city[0].slug);
      });
    };

    _this.loopCities = function () {
      var self = _this;
      return _this.state.citiesData.map(function (item, i) {
        return _react2.default.createElement(
          'li',
          { key: i, onClick: _this.selectCity.bind(null, item.title) },
          item.title
        );
      });
    };

    _this.state = {
      name: 'Joe',
      cityDropdown: false,
      selectedCity: 'New York City',
      citiesData: []
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      _axios2.default.get('/api/cities').then(function (response) {
        var _self$props = self.props,
            match = _self$props.match,
            history = _self$props.history;

        var city = response.data.filter(function (item) {
          return item.slug == match.params.city;
        });
        self.setState({
          citiesData: response.data,
          selectedCity: city[0].title
        }, function () {
          // console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;


      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'left-menu' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' + match.params.city, className: 'logo' },
            'Craigslist'
          ),
          _react2.default.createElement(
            'div',
            { className: 'city-dropdown', onClick: this.clickedCityDropdown },
            this.state.selectedCity,
            _react2.default.createElement('i', { className: 'fas fa-chevron-down ' + (this.state.cityDropdown ? 'fa-chevron-up' : 'fa-chevron-down') }),
            _react2.default.createElement(
              'div',
              { className: 'scroll-area ' + (this.state.cityDropdown ? 'active' : '') },
              _react2.default.createElement(
                'ul',
                null,
                this.loopCities()
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'right-menu' },
          _react2.default.createElement(
            'div',
            { className: 'user-img' },
            _react2.default.createElement('i', { className: 'far fa-user' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'user-dropdown' },
            'My Account',
            _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'post-btn' },
            'Post to Classifieds'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(112);

var _axios2 = _interopRequireDefault(_axios);

var _queryString = __webpack_require__(514);

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.loopItems = function () {
      if (_this.state.itemsData != undefined) {
        return _this.state.itemsData.map(function (item, i) {
          return _react2.default.createElement(
            'div',
            { className: 'item', key: i },
            _react2.default.createElement(
              'div',
              { className: 'image', style: {
                  backgroundImage: 'url(\'' + item.images[0] + '\')'
                } },
              _react2.default.createElement(
                'div',
                { className: 'price' },
                '$',
                item.price
              ),
              'image'
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement('i', { className: 'far fa-star' }),
              _react2.default.createElement(
                'h5',
                null,
                item.title
              ),
              _react2.default.createElement(
                'h6',
                null,
                item.city
              )
            )
          );
        });
      }
    };

    _this.showMakeModelDropdown = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          location = _this$props.location,
          history = _this$props.history;


      if (match.params.listings == 'cars-and-trucks') {
        return _react2.default.createElement(
          'div',
          { className: 'make-model-comp' },
          _react2.default.createElement(
            'div',
            { className: 'form-group make' },
            _react2.default.createElement(
              'label',
              null,
              'Make'
            ),
            _react2.default.createElement(
              'select',
              { name: 'make', className: 'make', onChange: _this.handleChange },
              _react2.default.createElement(
                'option',
                { value: 'bmw' },
                'bmw'
              ),
              _react2.default.createElement(
                'option',
                { value: 'benz' },
                'benz'
              ),
              _react2.default.createElement(
                'option',
                { value: 'honda' },
                'honda'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group model' },
            _react2.default.createElement(
              'label',
              null,
              'Model'
            ),
            _react2.default.createElement(
              'select',
              { name: 'model', className: 'model', onChange: _this.handleChange },
              _react2.default.createElement(
                'option',
                { value: 'x6' },
                'x6'
              ),
              _react2.default.createElement(
                'option',
                { value: 'cseries' },
                'cseries'
              ),
              _react2.default.createElement(
                'option',
                { value: 'cob' },
                'cob'
              )
            )
          )
        );
      }
    };

    _this.handleChange = function (event) {
      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState(_defineProperty({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.submitFilters = function () {
      var self = _this;
      var _this$props2 = _this.props,
          match = _this$props2.match,
          location = _this$props2.location,
          history = _this$props2.history;
      var _this$state = _this.state,
          min_price = _this$state.min_price,
          max_price = _this$state.max_price,
          sort = _this$state.sort,
          select_view = _this$state.select_view;


      document.location.href = '/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort=' + sort + '&select_view=' + select_view;

      var queryParams = _queryString2.default.parse(_this.props.location.search);
    };

    _this.state = {
      min_price: 0,
      max_price: 3000,
      sort: 'newest',
      select_view: 'gallery'
    };
    return _this;
  }

  _createClass(Category, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      var self = this;
      var queryParams = _queryString2.default.parse(this.props.location.search);
      var min_price = queryParams.min_price,
          max_price = queryParams.max_price,
          sort = queryParams.sort,
          select_view = queryParams.select_view;


      if (queryParams.min_price != undefined) {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category + '?min_price=' + min_price + '&max_price=' + max_price + '&sort=' + sort + '&select_view=' + select_view).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      } else {
        _axios2.default.get('/api/' + match.params.city + '/' + match.params.category).then(function (response) {
          self.setState({
            itemsData: response.data
          }, function () {
            console.log(self.state);
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          match = _props2.match,
          location = _props2.location,
          history = _props2.history;

      return _react2.default.createElement(
        'div',
        { className: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { name: 'min_price', className: 'min-price', onChange: this.handleChange, value: this.state.min_price },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5000' },
                    '5000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '10000' },
                    '10000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '20000' },
                    '20000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '30000' },
                    '30000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '40000' },
                    '40000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '50000' },
                    '50000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '60000' },
                    '60000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '70000' },
                    '70000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '80000' },
                    '80000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '90000' },
                    '90000'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max_price', className: 'max-price', onChange: this.handleChange, value: this.state.max_price },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5000' },
                    '5000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '10000' },
                    '10000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '20000' },
                    '20000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '30000' },
                    '30000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '40000' },
                    '40000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '50000' },
                    '50000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '60000' },
                    '60000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '70000' },
                    '70000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '80000' },
                    '80000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '90000' },
                    '90000'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '90000' },
                    '100000'
                  )
                )
              )
            ),
            this.showMakeModelDropdown(),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn', onClick: this.submitFilters },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reset-btn' },
                'Reset'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'list-view' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'white-box' },
              _react2.default.createElement(
                'section',
                { className: 'change-view' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group view-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'select_view', className: 'select-view', onChange: this.handleChange, value: this.state.select_view },
                    _react2.default.createElement(
                      'option',
                      { value: 'gallery' },
                      'Gallery View'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'list' },
                      'List View'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'thumb' },
                      'Thumb View'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group sort-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'sort', className: 'sort-dropdown', onChange: this.handleChange, value: this.state.sort },
                    _react2.default.createElement(
                      'option',
                      { value: 'newest' },
                      'Newest'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'oldest' },
                      'Oldest'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'all-items' },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Gallery = __webpack_require__(282);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Details = function (_Component) {
  _inherits(Details, _Component);

  function Details() {
    _classCallCheck(this, Details);

    var _this = _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'details-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'white-box' },
            _react2.default.createElement(
              'section',
              { className: 'submenu' },
              _react2.default.createElement(
                'div',
                { className: 'direction' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'prev' },
                  'prev'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'next' },
                  'next'
                )
              ),
              _react2.default.createElement(
                'nav',
                { className: 'sub-links' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'More ads by this user'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Share'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Contact Seller'
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'content-area' },
              _react2.default.createElement(
                'div',
                { className: 'media-column' },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'details-column' },
                _react2.default.createElement(
                  'div',
                  { className: 'date' },
                  'Posted: Feb 28th'
                ),
                _react2.default.createElement(
                  'h3',
                  { className: 'title' },
                  'Black 2016 BMW'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'price' },
                  '$45,000'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'more-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Vin'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'WERaDAFafadfaf'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '34255'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'Manual'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Details;
}(_react.Component);

exports.default = Details;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(161);

var _axios = __webpack_require__(112);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.loopCategories = function () {
      var _this$props = _this.props,
          match = _this$props.match,
          history = _this$props.history;
      // if statement for data

      if (_this.state.categoriesData != '') {
        // return back the loop of categories
        return _this.state.categoriesData.map(function (category, i) {
          var loopListings = function loopListings() {
            return category.listings.map(function (listing, index) {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' + match.params.city + '/' + category.title + '/' + listing.slug, key: index },
                listing.name
              );
            });
          };

          return _react2.default.createElement(
            'div',
            { className: 'categories', key: i },
            _react2.default.createElement(
              'a',
              { href: '/' + match.params.city + '/' + category.title, className: 'title' },
              category.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'group-links' },
              loopListings()
            )
          );
        });
      } else {
        return 'LOADING';
      }
    };

    _this.loopTags = function () {
      var testTags = ['a', 's', 'f', 'g', 'h', 'j', 'l'];
      return testTags.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { key: i, className: 'tag' },
          'Apple Macbook'
        );
      });
    };

    _this.state = {
      name: 'Joe',
      categoriesData: ''
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city == undefined) {
        history.push('/nyc');
      }

      var self = this;
      _axios2.default.get('/api/' + match.params.city).then(function (response) {
        self.setState({
          categoriesData: response.data
        }, function () {
          console.log(self.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            null,
            'Connecting People ',
            _react2.default.createElement('br', null),
            ' Everywhere :)'
          ),
          _react2.default.createElement(
            'section',
            { className: 'links' },
            this.loopCategories()
          ),
          _react2.default.createElement(
            'section',
            { className: 'trending' },
            _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' }),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'far fa-clock' }),
              'Trending Now'
            ),
            _react2.default.createElement(
              'div',
              { className: 'trending-tags' },
              this.loopTags()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.loopItems = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'item' },
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement(
              'div',
              { className: 'price' },
              '$8900'
            ),
            'image'
          ),
          _react2.default.createElement(
            'div',
            { className: 'details' },
            _react2.default.createElement('i', { className: 'far fa-star' }),
            _react2.default.createElement(
              'h5',
              null,
              '2011 BMW M3'
            ),
            _react2.default.createElement(
              'h6',
              null,
              'Tampa'
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { name: 'min-price', className: 'min-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max-price', className: 'max-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group make' },
              _react2.default.createElement(
                'label',
                null,
                'Make'
              ),
              _react2.default.createElement(
                'select',
                { name: 'make', className: 'make' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'bmw'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group model' },
              _react2.default.createElement(
                'label',
                null,
                'Model'
              ),
              _react2.default.createElement(
                'select',
                { name: 'model', className: 'model' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'bmw'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn' },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reset-btn' },
                'Reset'
              )
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'list-view' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'div',
              { className: 'white-box' },
              _react2.default.createElement(
                'section',
                { className: 'change-view' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group view-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'select-view', className: 'select-view' },
                    _react2.default.createElement(
                      'option',
                      { value: 'gallery' },
                      'Gallery View'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'list' },
                      'List View'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'thumb' },
                      'Thumb View'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group sort-dropdown' },
                  _react2.default.createElement(
                    'select',
                    { name: 'sort-view', className: 'sort-view' },
                    _react2.default.createElement(
                      'option',
                      { value: 'newest' },
                      'Newest View'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'section',
                { className: 'all-items' },
                this.loopItems()
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(35);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.allImgsLoop = function () {
      return _this.state.allImgs.map(function (item, i) {
        return _react2.default.createElement('div', { key: i, onClick: _this.clickedThumb.bind(null, i), className: 'thumb-img', style: { "backgroundImage": 'url(\'' + item + '\')' } });
      });
    };

    _this.nextBtn = function () {
      if (_this.state.currentIndex != _this.state.allImgs.length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.prevBtn = function () {
      if (_this.state.currentIndex != 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedThumb = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      allImgs: '',
      currentImg: '',
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var allImgs = ['https://i.ytimg.com/vi/NTvI6Ni-dR8/maxresdefault.jpg', 'https://dsx.weather.com//util/image/w/00138f9a-aa2e-402b-92ff-d001008c624e.jpg?v=at&w=485&h=273&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0', 'https://s.blogcdn.com/slideshows/images/slides/400/662/5/S4006625/slug/l/01-2017-chevrolet-corvette-gs-fd-1-1.jpg', 'https://i.pinimg.com/originals/96/0b/bd/960bbd9cec48d31ac3e75bdb40ba5a0a.jpg', 'http://cdn.whoabella.com/wp-content/uploads/2015/12/coolgirlcars2.jpg', 'https://i.ytimg.com/vi/qvuvjEkeDAw/maxresdefault.jpg'];

      this.setState({
        allImgs: allImgs,
        currentImg: allImgs[this.state.currentIndex]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'slider' },
          _react2.default.createElement(
            'div',
            { className: 'main-image' },
            _react2.default.createElement(
              'div',
              { className: 'arrows left-arrow', onClick: this.prevBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'arrows right-arrow', onClick: this.nextBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
            ),
            _react2.default.createElement('div', { className: 'image-1', style: { "backgroundImage": 'url(\'' + this.state.allImgs[this.state.currentIndex] + '\')' } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'thumbnails' },
          this.allImgsLoop()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ })

},[276]);