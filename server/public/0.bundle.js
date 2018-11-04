(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./client/components/Header.jsx":
/*!**************************************!*\
  !*** ./client/components/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Map_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map/Search */ "./client/components/Map/Search.jsx");
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_localise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/localise */ "./client/actions/localise.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.toggleVisibility = _this.toggleVisibility.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.changeLanguage = _this.changeLanguage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Header, [{
    key: "toggleVisibility",
    value: function toggleVisibility() {
      var w = window;
      var width = w.innerWidth;
      var menu = document.getElementsByClassName('dropdown-content')[0];

      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else if (width >= 768) {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(language) {
      i18next__WEBPACK_IMPORTED_MODULE_3__["default"].changeLanguage(language);
      this.props.setLanguage(language);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          i18n = _this$props.i18n;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        className: "navbar",
        role: "navigation"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "logo header  header-left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/images/Logo.PNG",
        alt: "Photo Locations"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
        exact: true,
        path: "/",
        component: _Map_Search__WEBPACK_IMPORTED_MODULE_2__["default"],
        defaultText: t('languages.de')
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dropdown header"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "dropbtn",
        onClick: this.toggleVisibility
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-bars",
        "aria-hidden": "true"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dropdown-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
        to: "/",
        onClick: this.toggleVisibility
      }, t('header.home')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
        to: "/about",
        onClick: this.toggleVisibility
      }, t('header.about')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
        to: "/contact",
        onClick: this.toggleVisibility
      }, t('header.contact')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "language",
        onClick: function onClick() {
          return _this2.changeLanguage('de');
        }
      }, "DE"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "language",
        onClick: function onClick() {
          return _this2.changeLanguage('en');
        }
      }, "EN")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

function mapDispatchToProps(dispatch) {
  return {
    setLanguage: function setLanguage(language) {
      return dispatch(Object(_actions_localise__WEBPACK_IMPORTED_MODULE_5__["setLanguage"])(language));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["withNamespaces"])('strings')(Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(Header)));

/***/ }),

/***/ "./client/components/Map/Search.jsx":
/*!******************************************!*\
  !*** ./client/components/Map/Search.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/search */ "./client/actions/search.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    _this.state = {
      search: ''
    };
    _this.updateSearch = _this.updateSearch.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.keyPress = _this.keyPress.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Search, [{
    key: "updateSearch",
    value: function updateSearch(event) {
      this.setState({
        search: event.target.value.substr(0, 50)
      });
    }
  }, {
    key: "keyPress",
    value: function keyPress(event) {
      if (event.keyCode == 13) {
        var searchString = this.state.search;
        this.props.setSearchString(searchString);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "inline",
        type: "text",
        name: "search",
        id: "search",
        value: this.state.search,
        onChange: this.updateSearch,
        onKeyDown: this.keyPress
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function mapDispatchToProps(dispatch) {
  return {
    setSearchString: function setSearchString(searchString) {
      return dispatch(Object(_actions_search__WEBPACK_IMPORTED_MODULE_2__["setSearchString"])(searchString));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(Search));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL01hcC9TZWFyY2guanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwidG9nZ2xlVmlzaWJpbGl0eSIsImJpbmQiLCJjaGFuZ2VMYW5ndWFnZSIsInciLCJ3aW5kb3ciLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJtZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic3R5bGUiLCJkaXNwbGF5IiwibGFuZ3VhZ2UiLCJpMThuIiwic2V0TGFuZ3VhZ2UiLCJ0IiwiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIndpdGhOYW1lc3BhY2VzIiwiY29ubmVjdCIsInN0YXRlIiwic2VhcmNoIiwidXBkYXRlU2VhcmNoIiwia2V5UHJlc3MiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJzdHIiLCJrZXlDb2RlIiwic2VhcmNoU3RyaW5nIiwic2V0U2VhcmNoU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBR01BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsZ0ZBQU1BLEtBQU47QUFDQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsdURBQXhCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQix1REFBdEI7QUFIaUI7QUFJbEI7Ozs7dUNBRWtCO0FBQ2pCLFVBQU1FLENBQUMsR0FBR0MsTUFBVjtBQUNBLFVBQU1DLEtBQUssR0FBR0YsQ0FBQyxDQUFDRyxVQUFoQjtBQUNBLFVBQU1DLElBQUks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QUFPYixRQUFRLENBQUNjLHVFQUFlLENBQUNELFlBQUQsQ0FBaEIsQ0FBZjtBQUNEO0FBSEksR0FBUDtBQUtEOztBQUVjWCwwSEFBTyxDQUFDLElBQUQsRUFBT0gsa0JBQVAsQ0FBUCxDQUFrQ0gsTUFBbEMsQ0FBZixFIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9NYXAvU2VhcmNoJ1xyXG5pbXBvcnQgaTE4biBmcm9tICdpMThuZXh0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNldExhbmd1YWdlIH0gZnJvbSAnLi4vYWN0aW9ucy9sb2NhbGlzZSdcclxuaW1wb3J0IHsgd2l0aE5hbWVzcGFjZXMgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xyXG5cclxuXHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy50b2dnbGVWaXNpYmlsaXR5ID0gdGhpcy50b2dnbGVWaXNpYmlsaXR5LmJpbmQodGhpcylcclxuICAgIHRoaXMuY2hhbmdlTGFuZ3VhZ2UgPSB0aGlzLmNoYW5nZUxhbmd1YWdlLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZpc2liaWxpdHkoKSB7XHJcbiAgICBjb25zdCB3ID0gd2luZG93XHJcbiAgICBjb25zdCB3aWR0aCA9IHcuaW5uZXJXaWR0aFxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWNvbnRlbnQnKVswXVxyXG4gICAgaWYgKG1lbnUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH0gZWxzZSBpZiAod2lkdGggPj0gNzY4KSB7XHJcbiAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSkge1xyXG4gICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSlcclxuICAgIHRoaXMucHJvcHMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyB0LCBpMThuIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nbyBoZWFkZXIgIGhlYWRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL0xvZ28uUE5HXCIgYWx0PVwiUGhvdG8gTG9jYXRpb25zXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9Jy8nIGNvbXBvbmVudD17U2VhcmNofSBkZWZhdWx0VGV4dD17dCgnbGFuZ3VhZ2VzLmRlJyl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duIGhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJvcGJ0blwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlzaWJpbGl0eX0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgb25DbGljaz17dGhpcy50b2dnbGVWaXNpYmlsaXR5fT57dCgnaGVhZGVyLmhvbWUnKX08L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlVmlzaWJpbGl0eX0+e3QoJ2hlYWRlci5hYm91dCcpfTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvbnRhY3RcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZVZpc2liaWxpdHl9Pnt0KCdoZWFkZXIuY29udGFjdCcpfTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmNoYW5nZUxhbmd1YWdlKCdkZScpfT5ERTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsYW5ndWFnZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuY2hhbmdlTGFuZ3VhZ2UoJ2VuJyl9PkVOPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0TGFuZ3VhZ2U6IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aE5hbWVzcGFjZXMoJ3N0cmluZ3MnKShjb25uZWN0IChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcikpXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRTZWFyY2hTdHJpbmcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlYXJjaCdcclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgc2VhcmNoOiAnJ1xyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVTZWFyY2ggPSB0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmtleVByZXNzID0gdGhpcy5rZXlQcmVzcy5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWFyY2goZXZlbnQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNlYXJjaDogZXZlbnQudGFyZ2V0LnZhbHVlLnN1YnN0cigwLDUwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGtleVByZXNzKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5rZXlDb2RlID09IDEzKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFN0cmluZyA9IHRoaXMuc3RhdGUuc2VhcmNoXHJcbiAgICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoU3RyaW5nKHNlYXJjaFN0cmluZylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XHJcbiAgICAgICAgey8qIDxsYWJlbCBjbGFzc05hbWU9XCJpbmxpbmVcIiBodG1sRm9yPVwic2VhcmNoXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoIGlubGluZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L2xhYmVsPiAqL31cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5saW5lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgaWQ9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNlYXJjaH0gb25LZXlEb3duPXt0aGlzLmtleVByZXNzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXRTZWFyY2hTdHJpbmc6IChzZWFyY2hTdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFNlYXJjaFN0cmluZyhzZWFyY2hTdHJpbmcpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNlYXJjaCkiXSwic291cmNlUm9vdCI6IiJ9