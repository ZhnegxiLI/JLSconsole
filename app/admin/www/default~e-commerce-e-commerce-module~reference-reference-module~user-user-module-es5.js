(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~e-commerce-e-commerce-module~reference-reference-module~user-user-module"],{

/***/ "./node_modules/@agm/core/core.module.js":
/*!***********************************************!*\
  !*** ./node_modules/@agm/core/core.module.js ***!
  \***********************************************/
/*! exports provided: coreDirectives, AgmCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
/* harmony import */ var _directives_polyline_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/polyline-icon */ "./node_modules/@agm/core/directives/polyline-icon.js");
/* harmony import */ var _directives_transit_layer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/transit-layer */ "./node_modules/@agm/core/directives/transit-layer.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















/**
 * @internal
 */
function coreDirectives() {
    return [
        _directives_map__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _directives_marker__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _directives_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"], _directives_circle__WEBPACK_IMPORTED_MODULE_2__["AgmCircle"], _directives_rectangle__WEBPACK_IMPORTED_MODULE_3__["AgmRectangle"],
        _directives_polygon__WEBPACK_IMPORTED_MODULE_6__["AgmPolygon"], _directives_polyline__WEBPACK_IMPORTED_MODULE_7__["AgmPolyline"], _directives_polyline_point__WEBPACK_IMPORTED_MODULE_8__["AgmPolylinePoint"], _directives_kml_layer__WEBPACK_IMPORTED_MODULE_9__["AgmKmlLayer"],
        _directives_data_layer__WEBPACK_IMPORTED_MODULE_10__["AgmDataLayer"], _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_14__["AgmFitBounds"], _directives_polyline_icon__WEBPACK_IMPORTED_MODULE_15__["AgmPolylineIcon"], _directives_transit_layer__WEBPACK_IMPORTED_MODULE_16__["AgmTransitLayer"]
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
var AgmCoreModule = /** @class */ (function () {
    function AgmCoreModule() {
    }
    AgmCoreModule_1 = AgmCoreModule;
    /**
     * Please use this method when you register the module at the root level.
     */
    AgmCoreModule.forRoot = function (lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule_1,
            providers: _utils_browser_globals__WEBPACK_IMPORTED_MODULE_13__["BROWSER_GLOBALS_PROVIDERS"].concat([
                { provide: _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], useClass: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LazyMapsAPILoader"] },
                { provide: _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["LAZY_MAPS_API_CONFIG"], useValue: lazyMapsAPILoaderConfig }
            ]),
        };
    };
    var AgmCoreModule_1;
    AgmCoreModule = AgmCoreModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({ declarations: coreDirectives(), exports: coreDirectives() })
    ], AgmCoreModule);
    return AgmCoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives.js":
/*!**********************************************!*\
  !*** ./node_modules/@agm/core/directives.js ***!
  \**********************************************/
/*! exports provided: AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmTransitLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds, AgmPolylineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/map */ "./node_modules/@agm/core/directives/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives_map__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony import */ var _directives_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/circle */ "./node_modules/@agm/core/directives/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives_circle__WEBPACK_IMPORTED_MODULE_1__["AgmCircle"]; });

/* harmony import */ var _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/rectangle */ "./node_modules/@agm/core/directives/rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives_rectangle__WEBPACK_IMPORTED_MODULE_2__["AgmRectangle"]; });

/* harmony import */ var _directives_info_window__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/info-window */ "./node_modules/@agm/core/directives/info-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives_info_window__WEBPACK_IMPORTED_MODULE_3__["AgmInfoWindow"]; });

/* harmony import */ var _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/kml-layer */ "./node_modules/@agm/core/directives/kml-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives_kml_layer__WEBPACK_IMPORTED_MODULE_4__["AgmKmlLayer"]; });

/* harmony import */ var _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/data-layer */ "./node_modules/@agm/core/directives/data-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives_data_layer__WEBPACK_IMPORTED_MODULE_5__["AgmDataLayer"]; });

/* harmony import */ var _directives_transit_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/transit-layer */ "./node_modules/@agm/core/directives/transit-layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return _directives_transit_layer__WEBPACK_IMPORTED_MODULE_6__["AgmTransitLayer"]; });

/* harmony import */ var _directives_marker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/marker */ "./node_modules/@agm/core/directives/marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives_marker__WEBPACK_IMPORTED_MODULE_7__["AgmMarker"]; });

/* harmony import */ var _directives_polygon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/polygon */ "./node_modules/@agm/core/directives/polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives_polygon__WEBPACK_IMPORTED_MODULE_8__["AgmPolygon"]; });

/* harmony import */ var _directives_polyline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/polyline */ "./node_modules/@agm/core/directives/polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives_polyline__WEBPACK_IMPORTED_MODULE_9__["AgmPolyline"]; });

/* harmony import */ var _directives_polyline_point__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives_polyline_point__WEBPACK_IMPORTED_MODULE_10__["AgmPolylinePoint"]; });

/* harmony import */ var _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/fit-bounds */ "./node_modules/@agm/core/directives/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives_fit_bounds__WEBPACK_IMPORTED_MODULE_11__["AgmFitBounds"]; });

/* harmony import */ var _directives_polyline_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/polyline-icon */ "./node_modules/@agm/core/directives/polyline-icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return _directives_polyline_icon__WEBPACK_IMPORTED_MODULE_12__["AgmPolylineIcon"]; });














//# sourceMappingURL=directives.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/circle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/circle.js ***!
  \*****************************************************/
/*! exports provided: AgmCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgmCircle = /** @class */ (function () {
    function AgmCircle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    AgmCircle_1 = AgmCircle;
    /** @internal */
    AgmCircle.prototype.ngOnInit = function () {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmCircle.prototype.ngOnChanges = function (changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    };
    AgmCircle.prototype._updateCircleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmCircle_1._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmCircle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager.createEventObservable(eventName, _this).subscribe(function (value) {
                switch (eventName) {
                    case 'radius_changed':
                        _this._manager.getRadius(_this).then(function (radius) { return eventEmitter.emit(radius); });
                        break;
                    case 'center_changed':
                        _this._manager.getCenter(_this).then(function (center) {
                            return eventEmitter.emit({ lat: center.lat(), lng: center.lng() });
                        });
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    };
    /** @internal */
    AgmCircle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    };
    /**
     * Gets the LatLngBounds of this Circle.
     */
    AgmCircle.prototype.getBounds = function () { return this._manager.getBounds(this); };
    AgmCircle.prototype.getCenter = function () { return this._manager.getCenter(this); };
    var AgmCircle_1;
    AgmCircle._mapOptions = [
        'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
        'visible', 'zIndex', 'clickable'
    ];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "clickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('circleDraggable'),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmCircle.prototype, "fillColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "fillOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "radius", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmCircle.prototype, "strokeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "strokeOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmCircle.prototype, "strokePosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "strokeWeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmCircle.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmCircle.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "centerChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "circleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "circleDblClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "drag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "dragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "dragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "mouseDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "mouseMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "mouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "mouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "mouseUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "radiusChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmCircle.prototype, "rightClick", void 0);
    AgmCircle = AgmCircle_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-circle'
        }),
        __metadata("design:paramtypes", [_services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]])
    ], AgmCircle);
    return AgmCircle;
}());

//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/data-layer.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/data-layer.js ***!
  \*********************************************************/
/*! exports provided: AgmDataLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var layerId = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
var AgmDataLayer = /** @class */ (function () {
    function AgmDataLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    AgmDataLayer_1 = AgmDataLayer;
    AgmDataLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmDataLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmDataLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmDataLayer.prototype.toString = function () { return "AgmDataLayer-" + this._id.toString(); };
    /** @internal */
    AgmDataLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    /** @internal */
    AgmDataLayer.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        var dataOptions = {};
        AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) { return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this[k]; });
        this._manager.setDataOptions(this, dataOptions);
    };
    var AgmDataLayer_1;
    AgmDataLayer._dataOptionsAttributes = ['style'];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmDataLayer.prototype, "layerClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmDataLayer.prototype, "geoJson", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], AgmDataLayer.prototype, "style", void 0);
    AgmDataLayer = AgmDataLayer_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-data-layer'
        }),
        __metadata("design:paramtypes", [_services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]])
    ], AgmDataLayer);
    return AgmDataLayer;
}());

//# sourceMappingURL=data-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/fit-bounds.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/directives/fit-bounds.js ***!
  \*********************************************************/
/*! exports provided: AgmFitBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
var AgmFitBounds = /** @class */ (function () {
    function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    AgmFitBounds.prototype.ngOnChanges = function (changes) {
        this._updateBounds();
    };
    /**
     * @internal
     */
    AgmFitBounds.prototype.ngOnInit = function () {
        var _this = this;
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
            return x.latLng.lat === y.latLng.lat &&
                x.latLng.lng === y.latLng.lng;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(function (details) { return _this._updateBounds(details); });
    };
    AgmFitBounds.prototype._updateBounds = function (newFitBoundsDetails) {
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
        else {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    /**
     * @internal
     */
    AgmFitBounds.prototype.ngOnDestroy = function () {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmFitBounds.prototype, "agmFitBounds", void 0);
    AgmFitBounds = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[agmFitBounds]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"])()),
        __metadata("design:paramtypes", [_services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"],
            _services_fit_bounds__WEBPACK_IMPORTED_MODULE_1__["FitBoundsService"]])
    ], AgmFitBounds);
    return AgmFitBounds;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/info-window.js":
/*!**********************************************************!*\
  !*** ./node_modules/@agm/core/directives/info-window.js ***!
  \**********************************************************/
/*! exports provided: AgmInfoWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmInfoWindow = /** @class */ (function () {
    function AgmInfoWindow(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    AgmInfoWindow_1 = AgmInfoWindow;
    AgmInfoWindow.prototype.ngOnInit = function () {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    };
    /** @internal */
    AgmInfoWindow.prototype.ngOnChanges = function (changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    };
    AgmInfoWindow.prototype._registerEventListeners = function () {
        var _this = this;
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
            _this.isOpen = false;
            _this.infoWindowClose.emit();
        });
    };
    AgmInfoWindow.prototype._updateOpenState = function () {
        this.isOpen ? this.open() : this.close();
    };
    AgmInfoWindow.prototype._setInfoWindowOptions = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    };
    /**
     * Opens the info window.
     */
    AgmInfoWindow.prototype.open = function () { return this._infoWindowManager.open(this); };
    /**
     * Closes the info window.
     */
    AgmInfoWindow.prototype.close = function () {
        var _this = this;
        return this._infoWindowManager.close(this).then(function () { _this.infoWindowClose.emit(); });
    };
    /** @internal */
    AgmInfoWindow.prototype.id = function () { return this._id; };
    /** @internal */
    AgmInfoWindow.prototype.toString = function () { return 'AgmInfoWindow-' + this._id.toString(); };
    /** @internal */
    AgmInfoWindow.prototype.ngOnDestroy = function () { this._infoWindowManager.deleteInfoWindow(this); };
    var AgmInfoWindow_1;
    AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmInfoWindow.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmInfoWindow.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmInfoWindow.prototype, "disableAutoPan", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmInfoWindow.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmInfoWindow.prototype, "maxWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmInfoWindow.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmInfoWindow.prototype, "infoWindowClose", void 0);
    AgmInfoWindow = AgmInfoWindow_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'agm-info-window',
            template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AgmInfoWindow);
    return AgmInfoWindow;
}());

//# sourceMappingURL=info-window.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/kml-layer.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/kml-layer.js ***!
  \********************************************************/
/*! exports provided: AgmKmlLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var layerId = 0;
var AgmKmlLayer = /** @class */ (function () {
    function AgmKmlLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmKmlLayer_1 = AgmKmlLayer;
    AgmKmlLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    };
    AgmKmlLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmKmlLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmKmlLayer.prototype._addEventListeners = function () {
        var _this = this;
        var listeners = [
            { name: 'click', handler: function (ev) { return _this.layerClick.emit(ev); } },
            { name: 'defaultviewport_changed', handler: function () { return _this.defaultViewportChange.emit(); } },
            { name: 'status_changed', handler: function () { return _this.statusChange.emit(); } },
        ];
        listeners.forEach(function (obj) {
            var os = _this._manager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmKmlLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmKmlLayer.prototype.toString = function () { return "AgmKmlLayer-" + this._id.toString(); };
    /** @internal */
    AgmKmlLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    var AgmKmlLayer_1;
    AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmKmlLayer.prototype, "clickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmKmlLayer.prototype, "preserveViewport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmKmlLayer.prototype, "screenOverlays", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmKmlLayer.prototype, "url", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmKmlLayer.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmKmlLayer.prototype, "layerClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmKmlLayer.prototype, "statusChange", void 0);
    AgmKmlLayer = AgmKmlLayer_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-kml-layer'
        }),
        __metadata("design:paramtypes", [_services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]])
    ], AgmKmlLayer);
    return AgmKmlLayer;
}());

//# sourceMappingURL=kml-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/map.js":
/*!**************************************************!*\
  !*** ./node_modules/@agm/core/directives/map.js ***!
  \**************************************************/
/*! exports provided: AgmMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony import */ var _services_managers_transit_layer_manager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/managers/transit-layer-manager */ "./node_modules/@agm/core/services/managers/transit-layer-manager.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMap = /** @class */ (function () {
    function AgmMap(_elem, _mapsWrapper, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * The enabled/disabled state of the Zoom control.
         */
        this.zoomControl = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * The initial enabled/disabled state of the Street View Pegman control.
         * This control is part of the default UI, and should be set to false when displaying a map type
         * on which the Street View road overlay should not appear (e.g. a non-Earth map type).
         */
        this.streetViewControl = true;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmMap_1 = AgmMap;
    /** @internal */
    AgmMap.prototype.ngOnInit = function () {
        // todo: this should be solved with a new component and a viewChild decorator
        var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    };
    AgmMap.prototype._initMapInstance = function (el) {
        var _this = this;
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(function () { return _this._mapsWrapper.getNativeMap(); })
            .then(function (map) { return _this.mapReady.emit(map); });
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleIdleEvent();
    };
    /** @internal */
    AgmMap.prototype.ngOnDestroy = function () {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    };
    /* @internal */
    AgmMap.prototype.ngOnChanges = function (changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    };
    AgmMap.prototype._updateMapOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    };
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    AgmMap.prototype.triggerResize = function (recenter) {
        var _this = this;
        if (recenter === void 0) { recenter = true; }
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise(function (resolve) {
            setTimeout(function () {
                return _this._mapsWrapper.triggerMapEvent('resize').then(function () {
                    if (recenter) {
                        _this.fitBounds != null ? _this._fitBounds() : _this._setCenter();
                    }
                    resolve();
                });
            });
        });
    };
    AgmMap.prototype._updatePosition = function (changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    };
    AgmMap.prototype._setCenter = function () {
        var newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    };
    AgmMap.prototype._fitBounds = function () {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds);
        }
    };
    AgmMap.prototype._subscribeToFitBoundsUpdates = function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            _this._fitBoundsSubscription = _this._fitBoundsService.getBounds$().subscribe(function (b) {
                _this._zone.run(function () { return _this._updateBounds(b); });
            });
        });
    };
    AgmMap.prototype._updateBounds = function (bounds) {
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            var newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds);
            return;
        }
        this._mapsWrapper.fitBounds(bounds);
    };
    AgmMap.prototype._isLatLngBoundsLiteral = function (bounds) {
        return bounds != null && bounds.extend === undefined;
    };
    AgmMap.prototype._handleMapCenterChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
            _this._mapsWrapper.getCenter().then(function (center) {
                _this.latitude = center.lat();
                _this.longitude = center.lng();
                _this.centerChange.emit({ lat: _this.latitude, lng: _this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleBoundsChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
            _this._mapsWrapper.getBounds().then(function (bounds) { _this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapTypeIdChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
            _this._mapsWrapper.getMapTypeId().then(function (mapTypeId) { _this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapZoomChange = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
            _this._mapsWrapper.getZoom().then(function (z) {
                _this.zoom = z;
                _this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleIdleEvent = function () {
        var _this = this;
        var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () { _this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    };
    AgmMap.prototype._handleMapMouseEvents = function () {
        var _this = this;
        var events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(function (e) {
            var s = _this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = {
                    coords: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng()
                    },
                    placeId: event.placeId
                };
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (value.placeId && !_this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(value);
            });
            _this._observableSubscriptions.push(s);
        });
    };
    var AgmMap_1;
    /**
     * Map option attributes that can change over time
     */
    AgmMap._mapOptionsAttributes = [
        'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
        'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
        'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
        'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
        'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
        'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'
    ];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "zoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "minZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "maxZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "controlSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('mapDraggable'),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "disableDoubleClickZoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "disableDefaultUI", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "scrollwheel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMap.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMap.prototype, "draggableCursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMap.prototype, "draggingCursor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "keyboardShortcuts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "zoomControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "zoomControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AgmMap.prototype, "styles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "usePanning", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "streetViewControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "streetViewControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "fitBounds", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "scaleControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "scaleControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "mapTypeControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "mapTypeControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "panControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "panControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "rotateControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "rotateControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "fullscreenControl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "fullscreenControlOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMap.prototype, "mapTypeId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "clickableIcons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMap.prototype, "showDefaultInfoWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMap.prototype, "gestureHandling", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMap.prototype, "tilt", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMap.prototype, "restriction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "mapClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "mapRightClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "mapDblClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "centerChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "boundsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "mapTypeIdChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "idle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "zoomChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMap.prototype, "mapReady", void 0);
    AgmMap = AgmMap_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'agm-map',
            providers: [
                _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_5__["MarkerManager"], _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_4__["InfoWindowManager"], _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_2__["CircleManager"], _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_3__["RectangleManager"],
                _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_7__["PolylineManager"], _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_6__["PolygonManager"], _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_8__["KmlLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"], _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_9__["DataLayerManager"],
                _services_managers_transit_layer_manager__WEBPACK_IMPORTED_MODULE_10__["TransitLayerManager"], _services_fit_bounds__WEBPACK_IMPORTED_MODULE_11__["FitBoundsService"]
            ],
            host: {
                // todo: deprecated - we will remove it with the next version
                '[class.sebm-google-map-container]': 'true'
            },
            styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "],
            template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"], _services_fit_bounds__WEBPACK_IMPORTED_MODULE_11__["FitBoundsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AgmMap);
    return AgmMap;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/marker.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/directives/marker.js ***!
  \*****************************************************/
/*! exports provided: AgmMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony import */ var _info_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-window */ "./node_modules/@agm/core/directives/info-window.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmMarker = /** @class */ (function () {
    function AgmMarker(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         *
         * @memberof AgmMarker
         */
        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** @internal */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    AgmMarker_1 = AgmMarker;
    /* @internal */
    AgmMarker.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(function () { return _this.handleInfoWindowUpdate(); });
    };
    AgmMarker.prototype.handleInfoWindowUpdate = function () {
        var _this = this;
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(function (marker) {
            marker.hostMarker = _this;
        });
    };
    /** @internal */
    AgmMarker.prototype.ngOnChanges = function (changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    };
    /** @internal */
    AgmMarker.prototype.getFitBoundsDetails$ = function () {
        return this._fitBoundsDetails$.asObservable();
    };
    AgmMarker.prototype._updateFitBoundsDetails = function () {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    };
    AgmMarker.prototype._addEventListeners = function () {
        var _this = this;
        var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
            if (_this.openInfoWindow) {
                _this.infoWindow.forEach(function (infoWindow) { return infoWindow.open(); });
            }
            _this.markerClick.emit(_this);
        });
        this._observableSubscriptions.push(cs);
        var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
            _this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        var ds = this._markerManager.createEventObservable('dragstart', this)
            .subscribe(function (e) {
            _this.dragStart.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        var d = this._markerManager.createEventObservable('drag', this)
            .subscribe(function (e) {
            _this.drag.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(d);
        var de = this._markerManager.createEventObservable('dragend', this)
            .subscribe(function (e) {
            _this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(de);
        var mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(function (e) {
            _this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        var mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(function (e) {
            _this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
        var anChng = this._markerManager.createEventObservable('animation_changed', this)
            .subscribe(function () {
            _this.animationChange.emit(_this.animation);
        });
        this._observableSubscriptions.push(anChng);
    };
    /** @internal */
    AgmMarker.prototype.id = function () { return this._id; };
    /** @internal */
    AgmMarker.prototype.toString = function () { return 'AgmMarker-' + this._id.toString(); };
    /** @internal */
    AgmMarker.prototype.ngOnDestroy = function () {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    var AgmMarker_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarker.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarker.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMarker.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AgmMarker.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('markerDraggable'),
        __metadata("design:type", Boolean)
    ], AgmMarker.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMarker.prototype, "iconUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMarker.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmMarker.prototype, "openInfoWindow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarker.prototype, "opacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmMarker.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('markerClickable'),
        __metadata("design:type", Boolean)
    ], AgmMarker.prototype, "clickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmMarker.prototype, "animation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AgmMarker.prototype, "animationChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "markerClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "markerRightClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "dragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "drag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "dragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "mouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmMarker.prototype, "mouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_info_window__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgmMarker.prototype, "infoWindow", void 0);
    AgmMarker = AgmMarker_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-marker',
            providers: [
                { provide: _services_fit_bounds__WEBPACK_IMPORTED_MODULE_2__["FitBoundsAccessor"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return AgmMarker_1; }) }
            ],
            inputs: [
                'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
                'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'
            ],
            outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
        }),
        __metadata("design:paramtypes", [_services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"]])
    ], AgmMarker);
    return AgmMarker;
}());

//# sourceMappingURL=marker.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polygon.js":
/*!******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polygon.js ***!
  \******************************************************/
/*! exports provided: AgmPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
var AgmPolygon = /** @class */ (function () {
    function AgmPolygon(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */
        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    AgmPolygon_1 = AgmPolygon;
    /** @internal */
    AgmPolygon.prototype.ngAfterContentInit = function () {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    };
    AgmPolygon.prototype.ngOnChanges = function (changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    };
    AgmPolygon.prototype._init = function () {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolygon.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.polyClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.polyDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.polyDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.polyDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.polyDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.polyMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.polyMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.polyMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.polyMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.polyMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.polyRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polygonManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
        this._polygonManager.createPathEventObservable(this)
            .then(function (paths$) {
            var os = paths$.subscribe(function (pathEvent) { return _this.polyPathsChange.emit(pathEvent); });
            _this._subscriptions.push(os);
        });
    };
    AgmPolygon.prototype._updatePolygonOptions = function (changes) {
        return Object.keys(changes)
            .filter(function (k) { return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    };
    /** @internal */
    AgmPolygon.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolygon.prototype.ngOnDestroy = function () {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AgmPolygon.prototype.getPath = function () {
        return this._polygonManager.getPath(this);
    };
    AgmPolygon.prototype.getPaths = function () {
        return this._polygonManager.getPaths(this);
    };
    var AgmPolygon_1;
    AgmPolygon._polygonOptionsAttributes = [
        'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
        'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
        'editable', 'visible'
    ];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolygon.prototype, "clickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('polyDraggable'),
        __metadata("design:type", Boolean)
    ], AgmPolygon.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolygon.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolygon.prototype, "fillColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolygon.prototype, "fillOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolygon.prototype, "geodesic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AgmPolygon.prototype, "paths", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolygon.prototype, "strokeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolygon.prototype, "strokeOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolygon.prototype, "strokeWeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolygon.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolygon.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyDblClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyDragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyMouseDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyMouseMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyMouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyMouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyMouseUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolygon.prototype, "polyRightClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AgmPolygon.prototype, "polyPathsChange", void 0);
    AgmPolygon = AgmPolygon_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-polygon'
        }),
        __metadata("design:paramtypes", [_services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]])
    ], AgmPolygon);
    return AgmPolygon;
}());

//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-icon.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-icon.js ***!
  \************************************************************/
/*! exports provided: AgmPolylineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return AgmPolylineIcon; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */
var AgmPolylineIcon = /** @class */ (function () {
    function AgmPolylineIcon() {
    }
    AgmPolylineIcon.prototype.ngOnInit = function () {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolylineIcon.prototype, "fixedRotation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "offset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "repeat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "anchorX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "anchorY", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "fillColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "fillOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "rotation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "scale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolylineIcon.prototype, "strokeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylineIcon.prototype, "strokeWeight", void 0);
    AgmPolylineIcon = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: 'agm-polyline agm-icon-sequence' })
    ], AgmPolylineIcon);
    return AgmPolylineIcon;
}());

//# sourceMappingURL=polyline-icon.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline-point.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline-point.js ***!
  \*************************************************************/
/*! exports provided: AgmPolylinePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
var AgmPolylinePoint = /** @class */ (function () {
    function AgmPolylinePoint() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AgmPolylinePoint.prototype.ngOnChanges = function (changes) {
        if (changes['latitude'] || changes['longitude']) {
            var position = {
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
            };
            this.positionChanged.emit(position);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylinePoint.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolylinePoint.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolylinePoint.prototype, "positionChanged", void 0);
    AgmPolylinePoint = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: 'agm-polyline-point' }),
        __metadata("design:paramtypes", [])
    ], AgmPolylinePoint);
    return AgmPolylinePoint;
}());

//# sourceMappingURL=polyline-point.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/polyline.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/directives/polyline.js ***!
  \*******************************************************/
/*! exports provided: AgmPolyline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony import */ var _polyline_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyline-point */ "./node_modules/@agm/core/directives/polyline-point.js");
/* harmony import */ var _polyline_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyline-icon */ "./node_modules/@agm/core/directives/polyline-icon.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
var AgmPolyline = /** @class */ (function () {
    function AgmPolyline(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */
        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    AgmPolyline_1 = AgmPolyline;
    /** @internal */
    AgmPolyline.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.points.length) {
            this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () { _this._polylineManager.updatePolylinePoints(_this); });
                _this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        var pointSub = this.points.changes.subscribe(function () { return _this._polylineManager.updatePolylinePoints(_this); });
        this._subscriptions.push(pointSub);
        this._polylineManager.updatePolylinePoints(this);
        var iconSub = this.iconSequences.changes.subscribe(function () { return _this._polylineManager.updateIconSequences(_this); });
        this._subscriptions.push(iconSub);
    };
    AgmPolyline.prototype.ngOnChanges = function (changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) { return options[k] = changes[k].currentValue; });
        this._polylineManager.setPolylineOptions(this, options);
    };
    AgmPolyline.prototype.getPath = function () {
        return this._polylineManager.getPath(this);
    };
    AgmPolyline.prototype._init = function () {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    };
    AgmPolyline.prototype._addEventListeners = function () {
        var _this = this;
        var handlers = [
            { name: 'click', handler: function (ev) { return _this.lineClick.emit(ev); } },
            { name: 'dblclick', handler: function (ev) { return _this.lineDblClick.emit(ev); } },
            { name: 'drag', handler: function (ev) { return _this.lineDrag.emit(ev); } },
            { name: 'dragend', handler: function (ev) { return _this.lineDragEnd.emit(ev); } },
            { name: 'dragstart', handler: function (ev) { return _this.lineDragStart.emit(ev); } },
            { name: 'mousedown', handler: function (ev) { return _this.lineMouseDown.emit(ev); } },
            { name: 'mousemove', handler: function (ev) { return _this.lineMouseMove.emit(ev); } },
            { name: 'mouseout', handler: function (ev) { return _this.lineMouseOut.emit(ev); } },
            { name: 'mouseover', handler: function (ev) { return _this.lineMouseOver.emit(ev); } },
            { name: 'mouseup', handler: function (ev) { return _this.lineMouseUp.emit(ev); } },
            { name: 'rightclick', handler: function (ev) { return _this.lineRightClick.emit(ev); } },
        ];
        handlers.forEach(function (obj) {
            var os = _this._polylineManager.createEventObservable(obj.name, _this).subscribe(obj.handler);
            _this._subscriptions.push(os);
        });
        this._polylineManager.createPathEventObservable(this).then(function (ob$) {
            var os = ob$.subscribe(function (pathEvent) { return _this.polyPathChange.emit(pathEvent); });
            _this._subscriptions.push(os);
        });
    };
    /** @internal */
    AgmPolyline.prototype._getPoints = function () {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    };
    AgmPolyline.prototype._getIcons = function () {
        if (this.iconSequences) {
            return this.iconSequences.toArray();
        }
        return [];
    };
    /** @internal */
    AgmPolyline.prototype.id = function () { return this._id; };
    /** @internal */
    AgmPolyline.prototype.ngOnDestroy = function () {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    var AgmPolyline_1;
    AgmPolyline._polylineOptionsAttributes = [
        'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
        'zIndex'
    ];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolyline.prototype, "clickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('polylineDraggable'),
        __metadata("design:type", Boolean)
    ], AgmPolyline.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolyline.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolyline.prototype, "geodesic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmPolyline.prototype, "strokeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolyline.prototype, "strokeOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolyline.prototype, "strokeWeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmPolyline.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmPolyline.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineDblClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineDrag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineDragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineDragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineMouseDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineMouseMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineMouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineMouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineMouseUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmPolyline.prototype, "lineRightClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AgmPolyline.prototype, "polyPathChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_polyline_point__WEBPACK_IMPORTED_MODULE_2__["AgmPolylinePoint"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgmPolyline.prototype, "points", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_polyline_icon__WEBPACK_IMPORTED_MODULE_3__["AgmPolylineIcon"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], AgmPolyline.prototype, "iconSequences", void 0);
    AgmPolyline = AgmPolyline_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-polyline'
        }),
        __metadata("design:paramtypes", [_services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]])
    ], AgmPolyline);
    return AgmPolyline;
}());

//# sourceMappingURL=polyline.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/rectangle.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/directives/rectangle.js ***!
  \********************************************************/
/*! exports provided: AgmRectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgmRectangle = /** @class */ (function () {
    function AgmRectangle(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    AgmRectangle_1 = AgmRectangle;
    /** @internal */
    AgmRectangle.prototype.ngOnInit = function () {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    };
    /** @internal */
    AgmRectangle.prototype.ngOnChanges = function (changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    };
    AgmRectangle.prototype._updateRectangleOptionsChanges = function (changes) {
        var options = {};
        var optionKeys = Object.keys(changes).filter(function (k) { return AgmRectangle_1._mapOptions.indexOf(k) !== -1; });
        optionKeys.forEach(function (k) {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    AgmRectangle.prototype._registerEventListeners = function () {
        var _this = this;
        var events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach(function (eventEmitter, eventName) {
            _this._eventSubscriptions.push(_this._manager
                .createEventObservable(eventName, _this)
                .subscribe(function (value) {
                switch (eventName) {
                    case 'bounds_changed':
                        _this._manager.getBounds(_this).then(function (bounds) {
                            return eventEmitter.emit({
                                north: bounds.getNorthEast().lat(),
                                east: bounds.getNorthEast().lng(),
                                south: bounds.getSouthWest().lat(),
                                west: bounds.getSouthWest().lng()
                            });
                        });
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() }
                        });
                }
            }));
        });
    };
    /** @internal */
    AgmRectangle.prototype.ngOnDestroy = function () {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    };
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    AgmRectangle.prototype.getBounds = function () {
        return this._manager.getBounds(this);
    };
    var AgmRectangle_1;
    AgmRectangle._mapOptions = [
        'fillColor',
        'fillOpacity',
        'strokeColor',
        'strokeOpacity',
        'strokePosition',
        'strokeWeight',
        'visible',
        'zIndex',
        'clickable'
    ];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "north", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "east", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "south", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "west", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmRectangle.prototype, "clickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('rectangleDraggable'),
        __metadata("design:type", Boolean)
    ], AgmRectangle.prototype, "draggable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmRectangle.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmRectangle.prototype, "fillColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "fillOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmRectangle.prototype, "strokeColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "strokeOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AgmRectangle.prototype, "strokePosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "strokeWeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmRectangle.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], AgmRectangle.prototype, "zIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "boundsChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "rectangleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "rectangleDblClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "drag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "dragEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "dragStart", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "mouseDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "mouseMove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "mouseOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "mouseOver", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "mouseUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgmRectangle.prototype, "rightClick", void 0);
    AgmRectangle = AgmRectangle_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-rectangle'
        }),
        __metadata("design:paramtypes", [_services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"]])
    ], AgmRectangle);
    return AgmRectangle;
}());

//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "./node_modules/@agm/core/directives/transit-layer.js":
/*!************************************************************!*\
  !*** ./node_modules/@agm/core/directives/transit-layer.js ***!
  \************************************************************/
/*! exports provided: AgmTransitLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return AgmTransitLayer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_managers_transit_layer_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/managers/transit-layer-manager */ "./node_modules/@agm/core/services/managers/transit-layer-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var layerId = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
var AgmTransitLayer = /** @class */ (function () {
    function AgmTransitLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show transit layer
         */
        this.visible = true;
    }
    AgmTransitLayer_1 = AgmTransitLayer;
    AgmTransitLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addTransitLayer(this, { visible: this.visible });
        this._addedToManager = true;
    };
    AgmTransitLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updateTransitLayerOptions(changes);
    };
    AgmTransitLayer.prototype._updateTransitLayerOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmTransitLayer_1._transitLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    /** @internal */
    AgmTransitLayer.prototype.id = function () { return this._id; };
    /** @internal */
    AgmTransitLayer.prototype.toString = function () { return "AgmTransitLayer-" + this._id.toString(); };
    /** @internal */
    AgmTransitLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteTransitLayer(this);
    };
    var AgmTransitLayer_1;
    AgmTransitLayer._transitLayerOptions = ['visible'];
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AgmTransitLayer.prototype, "visible", void 0);
    AgmTransitLayer = AgmTransitLayer_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'agm-transit-layer'
        }),
        __metadata("design:paramtypes", [_services_managers_transit_layer_manager__WEBPACK_IMPORTED_MODULE_1__["TransitLayerManager"]])
    ], AgmTransitLayer);
    return AgmTransitLayer;
}());

//# sourceMappingURL=transit-layer.js.map

/***/ }),

/***/ "./node_modules/@agm/core/index.js":
/*!*****************************************!*\
  !*** ./node_modules/@agm/core/index.js ***!
  \*****************************************/
/*! exports provided: AgmCoreModule, AgmMap, AgmCircle, AgmRectangle, AgmInfoWindow, AgmKmlLayer, AgmDataLayer, AgmTransitLayer, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylinePoint, AgmFitBounds, AgmPolylineIcon, GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor, TransitLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "./node_modules/@agm/core/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmCircle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmRectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmInfoWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmKmlLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmDataLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmTransitLayer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmMarker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolyline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylinePoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmFitBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return _directives__WEBPACK_IMPORTED_MODULE_0__["AgmPolylineIcon"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./node_modules/@agm/core/services.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["RectangleManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["InfoWindowManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MarkerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolygonManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["PolylineManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["KmlLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["DataLayerManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["LazyMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["NoOpMapsAPILoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["FitBoundsAccessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitLayerManager", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TransitLayerManager"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core.module */ "./node_modules/@agm/core/core.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]; });

// main modules


// core module
// we explicitly export the module here to prevent this Ionic 2 bug:
// http://stevemichelotti.com/integrate-angular-2-google-maps-into-ionic-2/

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services.js":
/*!********************************************!*\
  !*** ./node_modules/@agm/core/services.js ***!
  \********************************************/
/*! exports provided: GoogleMapsAPIWrapper, CircleManager, RectangleManager, InfoWindowManager, MarkerManager, PolygonManager, PolylineManager, KmlLayerManager, DataLayerManager, GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader, MapsAPILoader, NoOpMapsAPILoader, FitBoundsAccessor, TransitLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return _services_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_0__["GoogleMapsAPIWrapper"]; });

/* harmony import */ var _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/managers/circle-manager */ "./node_modules/@agm/core/services/managers/circle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return _services_managers_circle_manager__WEBPACK_IMPORTED_MODULE_1__["CircleManager"]; });

/* harmony import */ var _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/managers/rectangle-manager */ "./node_modules/@agm/core/services/managers/rectangle-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return _services_managers_rectangle_manager__WEBPACK_IMPORTED_MODULE_2__["RectangleManager"]; });

/* harmony import */ var _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/managers/info-window-manager */ "./node_modules/@agm/core/services/managers/info-window-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return _services_managers_info_window_manager__WEBPACK_IMPORTED_MODULE_3__["InfoWindowManager"]; });

/* harmony import */ var _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/managers/marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return _services_managers_marker_manager__WEBPACK_IMPORTED_MODULE_4__["MarkerManager"]; });

/* harmony import */ var _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/managers/polygon-manager */ "./node_modules/@agm/core/services/managers/polygon-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return _services_managers_polygon_manager__WEBPACK_IMPORTED_MODULE_5__["PolygonManager"]; });

/* harmony import */ var _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/managers/polyline-manager */ "./node_modules/@agm/core/services/managers/polyline-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return _services_managers_polyline_manager__WEBPACK_IMPORTED_MODULE_6__["PolylineManager"]; });

/* harmony import */ var _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/managers/kml-layer-manager */ "./node_modules/@agm/core/services/managers/kml-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return _services_managers_kml_layer_manager__WEBPACK_IMPORTED_MODULE_7__["KmlLayerManager"]; });

/* harmony import */ var _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/managers/data-layer-manager */ "./node_modules/@agm/core/services/managers/data-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return _services_managers_data_layer_manager__WEBPACK_IMPORTED_MODULE_8__["DataLayerManager"]; });

/* harmony import */ var _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/maps-api-loader/lazy-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["GoogleMapsScriptProtocol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LAZY_MAPS_API_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return _services_maps_api_loader_lazy_maps_api_loader__WEBPACK_IMPORTED_MODULE_9__["LazyMapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return _services_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_10__["MapsAPILoader"]; });

/* harmony import */ var _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/maps-api-loader/noop-maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return _services_maps_api_loader_noop_maps_api_loader__WEBPACK_IMPORTED_MODULE_11__["NoOpMapsAPILoader"]; });

/* harmony import */ var _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/fit-bounds */ "./node_modules/@agm/core/services/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return _services_fit_bounds__WEBPACK_IMPORTED_MODULE_12__["FitBoundsAccessor"]; });

/* harmony import */ var _services_managers_transit_layer_manager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/managers/transit-layer-manager */ "./node_modules/@agm/core/services/managers/transit-layer-manager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitLayerManager", function() { return _services_managers_transit_layer_manager__WEBPACK_IMPORTED_MODULE_13__["TransitLayerManager"]; });















//# sourceMappingURL=services.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/fit-bounds.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agm/core/services/fit-bounds.js ***!
  \*******************************************************/
/*! exports provided: FitBoundsAccessor, FitBoundsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsService", function() { return FitBoundsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
var FitBoundsAccessor = /** @class */ (function () {
    function FitBoundsAccessor() {
    }
    return FitBoundsAccessor;
}());

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
var FitBoundsService = /** @class */ (function () {
    function FitBoundsService(loader) {
        var _this = this;
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function () { return _this._includeInBounds$; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (time) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, time); }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (includeInBounds) { return _this._generateBounds(includeInBounds); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    FitBoundsService.prototype._generateBounds = function (includeInBounds) {
        var bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(function (b) { return bounds.extend(b); });
        return bounds;
    };
    FitBoundsService.prototype.addToBounds = function (latLng) {
        var id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        var map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.removeFromBounds = function (latLng) {
        var map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    };
    FitBoundsService.prototype.changeFitBoundsChangeSampleTime = function (timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    };
    FitBoundsService.prototype.getBounds$ = function () {
        return this.bounds$;
    };
    FitBoundsService.prototype._createIdentifier = function (latLng) {
        return latLng.lat + "+" + latLng.lng;
    };
    FitBoundsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"]])
    ], FitBoundsService);
    return FitBoundsService;
}());

//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/google-maps-api-wrapper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/google-maps-api-wrapper.js ***!
  \********************************************************************/
/*! exports provided: GoogleMapsAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader/maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
var GoogleMapsAPIWrapper = /** @class */ (function () {
    function GoogleMapsAPIWrapper(_loader, _zone) {
        var _this = this;
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise(function (resolve) { _this._mapResolver = resolve; });
    }
    GoogleMapsAPIWrapper.prototype.createMap = function (el, mapOptions) {
        var _this = this;
        return this._zone.runOutsideAngular(function () {
            return _this._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);
                _this._mapResolver(map);
                return;
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.setMapOptions = function (options) {
        this._map.then(function (m) { m.setOptions(options); });
    };
    /**
     * Creates a google map marker with the map context
     */
    GoogleMapsAPIWrapper.prototype.createMarker = function (options, addToMap) {
        if (options === void 0) { options = {}; }
        if (addToMap === void 0) { addToMap = true; }
        return this._map.then(function (map) {
            if (addToMap) {
                options.map = map;
            }
            return new google.maps.Marker(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createInfoWindow = function (options) {
        return this._map.then(function () { return new google.maps.InfoWindow(options); });
    };
    /**
     * Creates a google.map.Circle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createCircle = function (options) {
        return this._map.then(function (map) {
            if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
            }
            options.map = map;
            return new google.maps.Circle(options);
        });
    };
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    GoogleMapsAPIWrapper.prototype.createRectangle = function (options) {
        return this._map.then(function (map) {
            options.map = map;
            return new google.maps.Rectangle(options);
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolyline = function (options) {
        return this.getNativeMap().then(function (map) {
            var line = new google.maps.Polyline(options);
            line.setMap(map);
            return line;
        });
    };
    GoogleMapsAPIWrapper.prototype.createPolygon = function (options) {
        return this.getNativeMap().then(function (map) {
            var polygon = new google.maps.Polygon(options);
            polygon.setMap(map);
            return polygon;
        });
    };
    /**
     * Creates a new google.map.Data layer for the current map
     */
    GoogleMapsAPIWrapper.prototype.createDataLayer = function (options) {
        return this._map.then(function (m) {
            var data = new google.maps.Data(options);
            data.setMap(m);
            return data;
        });
    };
    /**
     * Creates a Google Map transit layer instance add it to map
     * @param {TransitLayerOptions} options - TransitLayerOptions options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */
    GoogleMapsAPIWrapper.prototype.createTransitLayer = function (options) {
        return this._map.then(function (map) {
            var transitLayer = new google.maps.TransitLayer();
            transitLayer.setMap(options.visible ? map : null);
            return transitLayer;
        });
    };
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    GoogleMapsAPIWrapper.prototype.containsLocation = function (latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    };
    GoogleMapsAPIWrapper.prototype.subscribeToMapEvent = function (eventName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._map.then(function (m) {
                m.addListener(eventName, function (arg) { _this._zone.run(function () { return observer.next(arg); }); });
            });
        });
    };
    GoogleMapsAPIWrapper.prototype.clearInstanceListeners = function () {
        this._map.then(function (map) {
            google.maps.event.clearInstanceListeners(map);
        });
    };
    GoogleMapsAPIWrapper.prototype.setCenter = function (latLng) {
        return this._map.then(function (map) { return map.setCenter(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.getZoom = function () { return this._map.then(function (map) { return map.getZoom(); }); };
    GoogleMapsAPIWrapper.prototype.getBounds = function () {
        return this._map.then(function (map) { return map.getBounds(); });
    };
    GoogleMapsAPIWrapper.prototype.getMapTypeId = function () {
        return this._map.then(function (map) { return map.getMapTypeId(); });
    };
    GoogleMapsAPIWrapper.prototype.setZoom = function (zoom) {
        return this._map.then(function (map) { return map.setZoom(zoom); });
    };
    GoogleMapsAPIWrapper.prototype.getCenter = function () {
        return this._map.then(function (map) { return map.getCenter(); });
    };
    GoogleMapsAPIWrapper.prototype.panTo = function (latLng) {
        return this._map.then(function (map) { return map.panTo(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panBy = function (x, y) {
        return this._map.then(function (map) { return map.panBy(x, y); });
    };
    GoogleMapsAPIWrapper.prototype.fitBounds = function (latLng) {
        return this._map.then(function (map) { return map.fitBounds(latLng); });
    };
    GoogleMapsAPIWrapper.prototype.panToBounds = function (latLng) {
        return this._map.then(function (map) { return map.panToBounds(latLng); });
    };
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    GoogleMapsAPIWrapper.prototype.getNativeMap = function () { return this._map; };
    /**
     * Triggers the given event name on the map instance.
     */
    GoogleMapsAPIWrapper.prototype.triggerMapEvent = function (eventName) {
        return this._map.then(function (m) { return google.maps.event.trigger(m, eventName); });
    };
    GoogleMapsAPIWrapper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_maps_api_loader_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], GoogleMapsAPIWrapper);
    return GoogleMapsAPIWrapper;
}());

//# sourceMappingURL=google-maps-api-wrapper.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/circle-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/circle-manager.js ***!
  \********************************************************************/
/*! exports provided: CircleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CircleManager = /** @class */ (function () {
    function CircleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    CircleManager.prototype.addCircle = function (circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex
        }));
    };
    /**
     * Removes the given circle from the map.
     */
    CircleManager.prototype.removeCircle = function (circle) {
        var _this = this;
        return this._circles.get(circle).then(function (c) {
            c.setMap(null);
            _this._circles.delete(circle);
        });
    };
    CircleManager.prototype.setOptions = function (circle, options) {
        return this._circles.get(circle).then(function (c) {
            if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
            }
            c.setOptions(options);
        });
    };
    CircleManager.prototype.getBounds = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getBounds(); });
    };
    CircleManager.prototype.getCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getCenter(); });
    };
    CircleManager.prototype.getRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.getRadius(); });
    };
    CircleManager.prototype.setCenter = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    };
    CircleManager.prototype.setEditable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setEditable(circle.editable); });
    };
    CircleManager.prototype.setDraggable = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setDraggable(circle.draggable); });
    };
    CircleManager.prototype.setVisible = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setVisible(circle.visible); });
    };
    CircleManager.prototype.setRadius = function (circle) {
        return this._circles.get(circle).then(function (c) { return c.setRadius(circle.radius); });
    };
    CircleManager.prototype.createEventObservable = function (eventName, circle) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var listener = null;
            _this._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    CircleManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CircleManager);
    return CircleManager;
}());

//# sourceMappingURL=circle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/data-layer-manager.js":
/*!************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/data-layer-manager.js ***!
  \************************************************************************/
/*! exports provided: DataLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Manages all Data Layers for a Google Map instance.
 */
var DataLayerManager = /** @class */ (function () {
    function DataLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    DataLayerManager.prototype.addDataLayer = function (layer) {
        var _this = this;
        var newLayer = this._wrapper.createDataLayer({
            style: layer.style
        })
            .then(function (d) {
            if (layer.geoJson) {
                _this.getDataFeatures(d, layer.geoJson).then(function (features) { return d.features = features; });
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    };
    DataLayerManager.prototype.deleteDataLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    DataLayerManager.prototype.updateGeoJson = function (layer, geoJson) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            _this.getDataFeatures(l, geoJson).then(function (features) { return l.features = features; });
        });
    };
    DataLayerManager.prototype.setDataOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    };
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    DataLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    DataLayerManager.prototype.getDataFeatures = function (d, geoJson) {
        return new Promise(function (resolve, reject) {
            if (typeof geoJson === 'object') {
                try {
                    var features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject("Impossible to extract features from geoJson: wrong argument type");
            }
        });
    };
    DataLayerManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DataLayerManager);
    return DataLayerManager;
}());

//# sourceMappingURL=data-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/info-window-manager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/info-window-manager.js ***!
  \*************************************************************************/
/*! exports provided: InfoWindowManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _marker_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marker-manager */ "./node_modules/@agm/core/services/managers/marker-manager.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InfoWindowManager = /** @class */ (function () {
    function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    InfoWindowManager.prototype.deleteInfoWindow = function (infoWindow) {
        var _this = this;
        var iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then(function (i) {
            return _this._zone.run(function () {
                i.close();
                _this._infoWindows.delete(infoWindow);
            });
        });
    };
    InfoWindowManager.prototype.setPosition = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude
        }); });
    };
    InfoWindowManager.prototype.setZIndex = function (infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then(function (i) { return i.setZIndex(infoWindow.zIndex); });
    };
    InfoWindowManager.prototype.open = function (infoWindow) {
        var _this = this;
        return this._infoWindows.get(infoWindow).then(function (w) {
            if (infoWindow.hostMarker != null) {
                return _this._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                    return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map, marker); });
                });
            }
            return _this._mapsWrapper.getNativeMap().then(function (map) { return w.open(map); });
        });
    };
    InfoWindowManager.prototype.close = function (infoWindow) {
        return this._infoWindows.get(infoWindow).then(function (w) { return w.close(); });
    };
    InfoWindowManager.prototype.setOptions = function (infoWindow, options) {
        return this._infoWindows.get(infoWindow).then(function (i) { return i.setOptions(options); });
    };
    InfoWindowManager.prototype.addInfoWindow = function (infoWindow) {
        var options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    };
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    InfoWindowManager.prototype.createEventObservable = function (eventName, infoWindow) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            _this._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    InfoWindowManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _marker_manager__WEBPACK_IMPORTED_MODULE_3__["MarkerManager"]])
    ], InfoWindowManager);
    return InfoWindowManager;
}());

//# sourceMappingURL=info-window-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/kml-layer-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/kml-layer-manager.js ***!
  \***********************************************************************/
/*! exports provided: KmlLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Manages all KML Layers for a Google Map instance.
 */
var KmlLayerManager = /** @class */ (function () {
    function KmlLayerManager(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    KmlLayerManager.prototype.addKmlLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (m) {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
            });
        });
        this._layers.set(layer, newLayer);
    };
    KmlLayerManager.prototype.setOptions = function (layer, options) {
        this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    KmlLayerManager.prototype.deleteKmlLayer = function (layer) {
        var _this = this;
        this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    KmlLayerManager.prototype.createEventObservable = function (eventName, layer) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    KmlLayerManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], KmlLayerManager);
    return KmlLayerManager;
}());

//# sourceMappingURL=kml-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/marker-manager.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/marker-manager.js ***!
  \********************************************************************/
/*! exports provided: MarkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MarkerManager = /** @class */ (function () {
    function MarkerManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    MarkerManager.prototype.convertAnimation = function (uiAnim) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (uiAnim === null) {
                    return [2 /*return*/, null];
                }
                else {
                    return [2 /*return*/, this._mapsWrapper.getNativeMap().then(function () { return google.maps.Animation[uiAnim]; })];
                }
                return [2 /*return*/];
            });
        });
    };
    MarkerManager.prototype.deleteMarker = function (marker) {
        var _this = this;
        var m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then(function (m) {
            return _this._zone.run(function () {
                m.setMap(null);
                _this._markers.delete(marker);
            });
        });
    };
    MarkerManager.prototype.updateMarkerPosition = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setPosition({ lat: marker.latitude, lng: marker.longitude }); });
    };
    MarkerManager.prototype.updateTitle = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setTitle(marker.title); });
    };
    MarkerManager.prototype.updateLabel = function (marker) {
        return this._markers.get(marker).then(function (m) { m.setLabel(marker.label); });
    };
    MarkerManager.prototype.updateDraggable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setDraggable(marker.draggable); });
    };
    MarkerManager.prototype.updateIcon = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setIcon(marker.iconUrl); });
    };
    MarkerManager.prototype.updateOpacity = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setOpacity(marker.opacity); });
    };
    MarkerManager.prototype.updateVisible = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setVisible(marker.visible); });
    };
    MarkerManager.prototype.updateZIndex = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setZIndex(marker.zIndex); });
    };
    MarkerManager.prototype.updateClickable = function (marker) {
        return this._markers.get(marker).then(function (m) { return m.setClickable(marker.clickable); });
    };
    MarkerManager.prototype.updateAnimation = function (marker) {
        return __awaiter(this, void 0, void 0, function () {
            var m, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this._markers.get(marker)];
                    case 1:
                        m = _c.sent();
                        _b = (_a = m).setAnimation;
                        return [4 /*yield*/, this.convertAnimation(marker.animation)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkerManager.prototype.addMarker = function (marker) {
        var _this = this;
        var markerPromise = new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this._mapsWrapper).createMarker;
                        _c = {
                            position: { lat: marker.latitude, lng: marker.longitude },
                            label: marker.label,
                            draggable: marker.draggable,
                            icon: marker.iconUrl,
                            opacity: marker.opacity,
                            visible: marker.visible,
                            zIndex: marker.zIndex,
                            title: marker.title,
                            clickable: marker.clickable
                        };
                        return [4 /*yield*/, this.convertAnimation(marker.animation)];
                    case 1: return [2 /*return*/, _b.apply(_a, [(_c.animation = _d.sent(),
                                _c)]).then(resolve)];
                }
            });
        }); });
        this._markers.set(marker, markerPromise);
    };
    MarkerManager.prototype.getNativeMarker = function (marker) {
        return this._markers.get(marker);
    };
    MarkerManager.prototype.createEventObservable = function (eventName, marker) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    MarkerManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MarkerManager);
    return MarkerManager;
}());

//# sourceMappingURL=marker-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polygon-manager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polygon-manager.js ***!
  \*********************************************************************/
/*! exports provided: PolygonManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _utils_mvcarray_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/mvcarray-utils */ "./node_modules/@agm/core/utils/mvcarray-utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var PolygonManager = /** @class */ (function () {
    function PolygonManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    PolygonManager.prototype.addPolygon = function (path) {
        var polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    };
    PolygonManager.prototype.updatePolygon = function (polygon) {
        var _this = this;
        var m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPaths(polygon.paths); }); });
    };
    PolygonManager.prototype.setPolygonOptions = function (path, options) {
        return this._polygons.get(path).then(function (l) { l.setOptions(options); });
    };
    PolygonManager.prototype.deletePolygon = function (paths) {
        var _this = this;
        var m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polygons.delete(paths);
            });
        });
    };
    PolygonManager.prototype.getPath = function (polygon) {
        return this._polygons.get(polygon)
            .then(function (polygon) { return polygon.getPath().getArray(); });
    };
    PolygonManager.prototype.getPaths = function (polygon) {
        return this._polygons.get(polygon)
            .then(function (polygon) { return polygon.getPaths().getArray().map(function (p) { return p.getArray(); }); });
    };
    PolygonManager.prototype.createEventObservable = function (eventName, path) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolygonManager.prototype.createPathEventObservable = function (agmPolygon) {
        return __awaiter(this, void 0, void 0, function () {
            var polygon, paths, pathsChanges$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._polygons.get(agmPolygon)];
                    case 1:
                        polygon = _a.sent();
                        paths = polygon.getPaths();
                        pathsChanges$ = Object(_utils_mvcarray_utils__WEBPACK_IMPORTED_MODULE_4__["createMVCEventObservable"])(paths);
                        return [2 /*return*/, pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ newArr: paths.getArray() }), // in order to subscribe to them all
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (parentMVEvent) { return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, // rest parameter
                            parentMVEvent.newArr.map(function (chMVC, index) {
                                return Object(_utils_mvcarray_utils__WEBPACK_IMPORTED_MODULE_4__["createMVCEventObservable"])(chMVC)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (chMVCEvent) { return ({ parentMVEvent: parentMVEvent, chMVCEvent: chMVCEvent, pathIndex: index }); }));
                            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ parentMVEvent: parentMVEvent, chMVCEvent: null, pathIndex: null })); }), // start the merged ob with an event signinifing change to parent
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1), // skip the manually added event
                            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
                                var parentMVEvent = _a.parentMVEvent, chMVCEvent = _a.chMVCEvent, pathIndex = _a.pathIndex;
                                var retVal;
                                if (!chMVCEvent) {
                                    retVal = {
                                        newArr: parentMVEvent.newArr.map(function (subArr) { return subArr.getArray().map(function (latLng) { return latLng.toJSON(); }); }),
                                        eventName: parentMVEvent.evName,
                                        index: parentMVEvent.index,
                                    };
                                    if (parentMVEvent.previous) {
                                        retVal.previous = parentMVEvent.previous.getArray();
                                    }
                                }
                                else {
                                    retVal = {
                                        newArr: parentMVEvent.newArr.map(function (subArr) { return subArr.getArray().map(function (latLng) { return latLng.toJSON(); }); }),
                                        pathIndex: pathIndex,
                                        eventName: chMVCEvent.evName,
                                        index: chMVCEvent.index
                                    };
                                    if (chMVCEvent.previous) {
                                        retVal.previous = chMVCEvent.previous;
                                    }
                                }
                                return retVal;
                            }))];
                }
            });
        });
    };
    PolygonManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PolygonManager);
    return PolygonManager;
}());

//# sourceMappingURL=polygon-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/polyline-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/polyline-manager.js ***!
  \**********************************************************************/
/*! exports provided: PolylineManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
/* harmony import */ var _utils_mvcarray_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/mvcarray-utils */ "./node_modules/@agm/core/utils/mvcarray-utils.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PolylineManager = /** @class */ (function () {
    function PolylineManager(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    PolylineManager_1 = PolylineManager;
    PolylineManager._convertPoints = function (line) {
        var path = line._getPoints().map(function (point) {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    };
    PolylineManager._convertPath = function (path) {
        var symbolPath = google.maps.SymbolPath[path];
        if (typeof symbolPath === 'number') {
            return symbolPath;
        }
        else {
            return path;
        }
    };
    PolylineManager._convertIcons = function (line) {
        var icons = line._getIcons().map(function (agmIcon) { return ({
            fixedRotation: agmIcon.fixedRotation,
            offset: agmIcon.offset,
            repeat: agmIcon.repeat,
            icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager_1._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight,
            }
        }); });
        // prune undefineds;
        icons.forEach(function (icon) {
            Object.entries(icon).forEach(function (_a) {
                var key = _a[0], val = _a[1];
                if (typeof val === 'undefined') {
                    delete icon[key];
                }
            });
            if (typeof icon.icon.anchor.x === 'undefined' ||
                typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
            }
        });
        return icons;
    };
    PolylineManager.prototype.addPolyline = function (line) {
        var _this = this;
        var polylinePromise = this._mapsWrapper.getNativeMap()
            .then(function () { return [PolylineManager_1._convertPoints(line),
            PolylineManager_1._convertIcons(line)]; })
            .then(function (_a) {
            var path = _a[0], icons = _a[1];
            return _this._mapsWrapper.createPolyline({
                clickable: line.clickable,
                draggable: line.draggable,
                editable: line.editable,
                geodesic: line.geodesic,
                strokeColor: line.strokeColor,
                strokeOpacity: line.strokeOpacity,
                strokeWeight: line.strokeWeight,
                visible: line.visible,
                zIndex: line.zIndex,
                path: path,
                icons: icons,
            });
        });
        this._polylines.set(line, polylinePromise);
    };
    PolylineManager.prototype.updatePolylinePoints = function (line) {
        var _this = this;
        var path = PolylineManager_1._convertPoints(line);
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) { return _this._zone.run(function () { l.setPath(path); }); });
    };
    PolylineManager.prototype.updateIconSequences = function (line) {
        return __awaiter(this, void 0, void 0, function () {
            var map, icons, m;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._mapsWrapper.getNativeMap()];
                    case 1:
                        map = _a.sent();
                        icons = PolylineManager_1._convertIcons(line);
                        m = this._polylines.get(line);
                        if (m == null) {
                            return [2 /*return*/];
                        }
                        return [2 /*return*/, m.then(function (l) { return _this._zone.run(function () { return l.setOptions({ icons: icons }); }); })];
                }
            });
        });
    };
    PolylineManager.prototype.setPolylineOptions = function (line, options) {
        return this._polylines.get(line).then(function (l) { l.setOptions(options); });
    };
    PolylineManager.prototype.deletePolyline = function (line) {
        var _this = this;
        var m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then(function (l) {
            return _this._zone.run(function () {
                l.setMap(null);
                _this._polylines.delete(line);
            });
        });
    };
    PolylineManager.prototype.getMVCPath = function (agmPolyline) {
        return __awaiter(this, void 0, void 0, function () {
            var polyline;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._polylines.get(agmPolyline)];
                    case 1:
                        polyline = _a.sent();
                        return [2 /*return*/, polyline.getPath()];
                }
            });
        });
    };
    PolylineManager.prototype.getPath = function (agmPolyline) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMVCPath(agmPolyline)];
                    case 1: return [2 /*return*/, (_a.sent()).getArray()];
                }
            });
        });
    };
    PolylineManager.prototype.createEventObservable = function (eventName, line) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
        });
    };
    PolylineManager.prototype.createPathEventObservable = function (line) {
        return __awaiter(this, void 0, void 0, function () {
            var mvcPath;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMVCPath(line)];
                    case 1:
                        mvcPath = _a.sent();
                        return [2 /*return*/, Object(_utils_mvcarray_utils__WEBPACK_IMPORTED_MODULE_3__["createMVCEventObservable"])(mvcPath)];
                }
            });
        });
    };
    var PolylineManager_1;
    PolylineManager = PolylineManager_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], PolylineManager);
    return PolylineManager;
}());

//# sourceMappingURL=polyline-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/rectangle-manager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/rectangle-manager.js ***!
  \***********************************************************************/
/*! exports provided: RectangleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RectangleManager = /** @class */ (function () {
    function RectangleManager(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    RectangleManager.prototype.addRectangle = function (rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex
        }));
    };
    /**
     * Removes the given rectangle from the map.
     */
    RectangleManager.prototype.removeRectangle = function (rectangle) {
        var _this = this;
        return this._rectangles.get(rectangle).then(function (r) {
            r.setMap(null);
            _this._rectangles.delete(rectangle);
        });
    };
    RectangleManager.prototype.setOptions = function (rectangle, options) {
        return this._rectangles.get(rectangle).then(function (r) { return r.setOptions(options); });
    };
    RectangleManager.prototype.getBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) { return r.getBounds(); });
    };
    RectangleManager.prototype.setBounds = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
            });
        });
    };
    RectangleManager.prototype.setEditable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setEditable(rectangle.editable);
        });
    };
    RectangleManager.prototype.setDraggable = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setDraggable(rectangle.draggable);
        });
    };
    RectangleManager.prototype.setVisible = function (rectangle) {
        return this._rectangles.get(rectangle).then(function (r) {
            return r.setVisible(rectangle.visible);
        });
    };
    RectangleManager.prototype.createEventObservable = function (eventName, rectangle) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var listener = null;
            _this._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) { return _this._zone.run(function () { return observer.next(e); }); });
            });
            return function () {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    };
    RectangleManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], RectangleManager);
    return RectangleManager;
}());

//# sourceMappingURL=rectangle-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/managers/transit-layer-manager.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@agm/core/services/managers/transit-layer-manager.js ***!
  \***************************************************************************/
/*! exports provided: TransitLayerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitLayerManager", function() { return TransitLayerManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google-maps-api-wrapper */ "./node_modules/@agm/core/services/google-maps-api-wrapper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class manages a Transit Layer for a Google Map instance.
 */
var TransitLayerManager = /** @class */ (function () {
    function TransitLayerManager(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map and local layer manager
     * @param {AgmTransitLayer} layer - a transitLayer object
     * @param {TransitLayerOptions} options - TransitLayerOptions options
     * @returns void
     */
    TransitLayerManager.prototype.addTransitLayer = function (layer, options) {
        var newLayer = this._wrapper.createTransitLayer(options);
        this._layers.set(layer, newLayer);
    };
    /**
     * Sets layer options
     * @param {AgmTransitLayer} transitLayer object
     * @param {options} TransitLayerOptions
     * @returns Promise<void>
     */
    TransitLayerManager.prototype.setOptions = function (layer, options) {
        return this.toggleTransitLayerVisibility(layer, options);
    };
    /**
     * Deletes a transit layer
     * @param {AgmTransitLayer} layer - the transit layer to delete
     * @returns  Promise<void>
     */
    TransitLayerManager.prototype.deleteTransitLayer = function (layer) {
        var _this = this;
        return this._layers.get(layer).then(function (currentLayer) {
            currentLayer.setMap(null);
            _this._layers.delete(layer);
        });
    };
    /**
     * Hide/Show a Google Map transit layer
     * @param {AgmTransitLayer} transitLayer object
     * @param {options} TransitLayerOptions
     * @returns Promise<void>
     */
    TransitLayerManager.prototype.toggleTransitLayerVisibility = function (layer, options) {
        var _this = this;
        return this._layers.get(layer).then(function (currentLayer) {
            if (!options.visible) {
                currentLayer.setMap(null);
                return Promise.resolve();
            }
            else {
                return _this._wrapper.getNativeMap().then(function (map) {
                    currentLayer.setMap(map);
                });
            }
        });
    };
    TransitLayerManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_google_maps_api_wrapper__WEBPACK_IMPORTED_MODULE_1__["GoogleMapsAPIWrapper"]])
    ], TransitLayerManager);
    return TransitLayerManager;
}());

//# sourceMappingURL=transit-layer-manager.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/lazy-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: GoogleMapsScriptProtocol, LAZY_MAPS_API_CONFIG, LazyMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/browser-globals */ "./node_modules/@agm/core/utils/browser-globals.js");
/* harmony import */ var _maps_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maps-api-loader */ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
var LazyMapsAPILoader = /** @class */ (function (_super) {
    __extends(LazyMapsAPILoader, _super);
    function LazyMapsAPILoader(config, w, d) {
        if (config === void 0) { config = null; }
        var _this = _super.call(this) || this;
        _this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        _this.callbackName = "agmLazyMapsAPILoader";
        _this._config = config || {};
        _this._windowRef = w;
        _this._documentRef = d;
        return _this;
    }
    LazyMapsAPILoader.prototype.load = function () {
        var window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        var script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    };
    LazyMapsAPILoader.prototype._assignScriptLoadingPromise = function (scriptElem) {
        var _this = this;
        this._scriptLoadingPromise = new Promise(function (resolve, reject) {
            _this._windowRef.getNativeWindow()[_this.callbackName] = function () {
                resolve();
            };
            scriptElem.onerror = function (error) {
                reject(error);
            };
        });
    };
    LazyMapsAPILoader.prototype._getScriptSrc = function (callbackName) {
        var protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        var protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        var queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language
        };
        var params = Object.keys(queryParams)
            .filter(function (k) { return queryParams[k] != null; })
            .filter(function (k) {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map(function (k) {
            // join arrays as comma seperated strings
            var i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map(function (entry) {
            return entry.key + "=" + entry.value;
        })
            .join('&');
        return protocol + "//" + hostAndPath + "?" + params;
    };
    LazyMapsAPILoader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(LAZY_MAPS_API_CONFIG)),
        __metadata("design:paramtypes", [Object, _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["WindowRef"], _utils_browser_globals__WEBPACK_IMPORTED_MODULE_1__["DocumentRef"]])
    ], LazyMapsAPILoader);
    return LazyMapsAPILoader;
}(_maps_api_loader__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]));

//# sourceMappingURL=lazy-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/maps-api-loader.js ***!
  \****************************************************************************/
/*! exports provided: MapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapsAPILoader = /** @class */ (function () {
    function MapsAPILoader() {
    }
    MapsAPILoader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MapsAPILoader);
    return MapsAPILoader;
}());

//# sourceMappingURL=maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@agm/core/services/maps-api-loader/noop-maps-api-loader.js ***!
  \*********************************************************************************/
/*! exports provided: NoOpMapsAPILoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
var NoOpMapsAPILoader = /** @class */ (function () {
    function NoOpMapsAPILoader() {
    }
    NoOpMapsAPILoader.prototype.load = function () {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    };
    return NoOpMapsAPILoader;
}());

//# sourceMappingURL=noop-maps-api-loader.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/browser-globals.js":
/*!*********************************************************!*\
  !*** ./node_modules/@agm/core/utils/browser-globals.js ***!
  \*********************************************************/
/*! exports provided: WindowRef, DocumentRef, BROWSER_GLOBALS_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRef", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_GLOBALS_PROVIDERS", function() { return BROWSER_GLOBALS_PROVIDERS; });
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    WindowRef.prototype.getNativeWindow = function () { return window; };
    return WindowRef;
}());

var DocumentRef = /** @class */ (function () {
    function DocumentRef() {
    }
    DocumentRef.prototype.getNativeDocument = function () { return document; };
    return DocumentRef;
}());

var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
//# sourceMappingURL=browser-globals.js.map

/***/ }),

/***/ "./node_modules/@agm/core/utils/mvcarray-utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@agm/core/utils/mvcarray-utils.js ***!
  \********************************************************/
/*! exports provided: createMVCEventObservable, MvcArrayMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMVCEventObservable", function() { return createMVCEventObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MvcArrayMock", function() { return MvcArrayMock; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

function createMVCEventObservable(array) {
    var eventNames = ['insert_at', 'remove_at', 'set_at'];
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEventPattern"])(function (handler) { return eventNames.map(function (evName) { return array.addListener(evName, function (index, previous) { return handler.apply(array, [{ 'newArr': array.getArray(), evName: evName, index: index, previous: previous }]); }); }); }, function (handler, evListeners) { return evListeners.forEach(function (evListener) { return evListener.remove(); }); });
}
var MvcArrayMock = /** @class */ (function () {
    function MvcArrayMock() {
        this.vals = [];
        this.listeners = {
            'remove_at': [],
            'insert_at': [],
            'set_at': [],
        };
    }
    MvcArrayMock.prototype.clear = function () {
        for (var i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    };
    MvcArrayMock.prototype.getArray = function () {
        return this.vals.slice();
    };
    MvcArrayMock.prototype.getAt = function (i) {
        return this.vals[i];
    };
    MvcArrayMock.prototype.getLength = function () {
        return this.vals.length;
    };
    MvcArrayMock.prototype.insertAt = function (i, elem) {
        this.vals.splice(i, 0, elem);
        this.listeners.insert_at.map(function (listener) { return listener(i); });
    };
    MvcArrayMock.prototype.pop = function () {
        var _this = this;
        var deleted = this.vals.pop();
        this.listeners.remove_at.map(function (listener) { return listener(_this.vals.length, deleted); });
        return deleted;
    };
    MvcArrayMock.prototype.push = function (elem) {
        var _this = this;
        this.vals.push(elem);
        this.listeners.insert_at.map(function (listener) { return listener(_this.vals.length - 1); });
        return this.vals.length;
    };
    MvcArrayMock.prototype.removeAt = function (i) {
        var deleted = this.vals.splice(i, 1)[0];
        this.listeners.remove_at.map(function (listener) { return listener(i, deleted); });
        return deleted;
    };
    MvcArrayMock.prototype.setAt = function (i, elem) {
        var deleted = this.vals[i];
        this.vals[i] = elem;
        this.listeners.set_at.map(function (listener) { return listener(i, deleted); });
    };
    MvcArrayMock.prototype.forEach = function (callback) {
        this.vals.forEach(callback);
    };
    MvcArrayMock.prototype.addListener = function (eventName, handler) {
        var listenerArr = this.listeners[eventName];
        listenerArr.push(handler);
        return {
            remove: function () {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
            }
        };
    };
    return MvcArrayMock;
}());

//# sourceMappingURL=mvcarray-utils.js.map

/***/ }),

/***/ "./node_modules/ngx-loading/fesm5/ngx-loading.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-loading/fesm5/ngx-loading.js ***!
  \*******************************************************/
/*! exports provided: NgxLoadingService, NgxLoadingComponent, NgxLoadingModule, NgxLoadingConfig, ngxLoadingAnimationTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingService", function() { return NgxLoadingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingComponent", function() { return NgxLoadingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingModule", function() { return NgxLoadingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxLoadingConfig", function() { return NgxLoadingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngxLoadingAnimationTypes", function() { return ngxLoadingAnimationTypes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingConfig = /** @class */ (function () {
    function NgxLoadingConfig(config) {
        if (config === void 0) { config = {}; }
        this.backdropBorderRadius = config.backdropBorderRadius;
        this.backdropBackgroundColour = config.backdropBackgroundColour;
        this.fullScreenBackdrop = config.fullScreenBackdrop;
        this.animationType = config.animationType;
        this.primaryColour = config.primaryColour;
        this.secondaryColour = config.secondaryColour;
        this.tertiaryColour = config.tertiaryColour;
    }
    return NgxLoadingConfig;
}());
/** @type {?} */
var ngxLoadingAnimationTypes = {
    chasingDots: 'chasing-dots',
    circle: 'sk-circle',
    circleSwish: 'circleSwish',
    cubeGrid: 'sk-cube-grid',
    doubleBounce: 'double-bounce',
    none: 'none',
    pulse: 'pulse',
    rectangleBounce: 'rectangle-bounce',
    rotatingPlane: 'rotating-plane',
    threeBounce: 'three-bounce',
    wanderingCubes: 'wandering-cubes'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingService = /** @class */ (function () {
    function NgxLoadingService(config) {
        this.config = config;
        this.loadingConfig = this.config || new NgxLoadingConfig();
    }
    NgxLoadingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxLoadingService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['loadingConfig',] }] }
    ]; };
    /** @nocollapse */ NgxLoadingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgxLoadingService_Factory() { return new NgxLoadingService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])("loadingConfig", 8)); }, token: NgxLoadingService, providedIn: "root" });
    return NgxLoadingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingComponent = /** @class */ (function () {
    function NgxLoadingComponent(LoadingService, changeDetectorRef) {
        this.LoadingService = LoadingService;
        this.changeDetectorRef = changeDetectorRef;
        this.config = new NgxLoadingConfig();
        this.defaultConfig = {
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        };
        this.ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
    }
    /**
     * @return {?}
     */
    NgxLoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setupConfig();
    };
    /**
     * @return {?}
     */
    NgxLoadingComponent.prototype.setupConfig = /**
     * @return {?}
     */
    function () {
        for (var option in this.defaultConfig) {
            if (typeof this.config[option] === 'boolean') {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
            else {
                if (this.config[option] != null) {
                    continue;
                }
                this.config[option] = this.LoadingService.loadingConfig[option] != null ? this.LoadingService.loadingConfig[option] : this.defaultConfig[option];
            }
        }
    };
    /**
     * @param {?} show
     * @return {?}
     */
    NgxLoadingComponent.prototype.setShow = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        this.show = show;
        this.changeDetectorRef.markForCheck();
    };
    NgxLoadingComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngx-loading',
                    template: "\n    <div *ngIf=\"show\">\n      <div class=\"backdrop\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': config?.backdropBorderRadius, 'background-color': config?.backdropBackgroundColour}\"></div>\n\n      <div [ngSwitch]=\"config?.animationType\">\n        <div class=\"spinner-circle\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circle\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"\n          [ngStyle]=\"{'border-top-color': config?.secondaryColour, 'border-right-color': config?.secondaryColour, 'border-bottom-color': config?.secondaryColour, 'border-left-color': config?.primaryColour}\">\n        </div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.cubeGrid\" class=\"sk-cube-grid\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"sk-cube sk-cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube6\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube7\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube8\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"sk-cube sk-cube9\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-sk-rotateplane\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rotatingPlane\" [ngStyle]=\"{'background-color': config?.primaryColour}\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div class=\"spinner-rectangle-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.rectangleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"rect1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect2\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect3\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect4\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"rect5\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-wandering-cubes\" *ngSwitchCase=\"ngxLoadingAnimationTypes.wanderingCubes\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"cube1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"cube2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-double-bounce\" *ngSwitchCase=\"ngxLoadingAnimationTypes.doubleBounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"double-bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"double-bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-pulse\" *ngSwitchCase=\"ngxLoadingAnimationTypes.pulse\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n\n        <div class=\"spinner-chasing-dots\" *ngSwitchCase=\"ngxLoadingAnimationTypes.chasingDots\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"dot1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"dot2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n        </div>\n\n        <div class=\"spinner-circle-swish\" *ngSwitchCase=\"ngxLoadingAnimationTypes.circleSwish\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\" [ngStyle]=\"{'color': config?.primaryColour}\"></div>\n\n        <div *ngSwitchCase=\"ngxLoadingAnimationTypes.none\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\"></div>\n\n        <div *ngSwitchDefault class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : config?.fullScreenBackdrop == true}\">\n          <div class=\"bounce1\" [ngStyle]=\"{'background-color': config?.primaryColour}\"></div>\n          <div class=\"bounce2\" [ngStyle]=\"{'background-color': config?.secondaryColour}\"></div>\n          <div class=\"bounce3\" [ngStyle]=\"{'background-color': config?.tertiaryColour}\"></div>\n        </div>\n        \n        <ng-container *ngIf=\"template\">\n            <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n        </ng-container>\n      </div>\n    </div>\n  ",
                    styles: [
                        "\n      .backdrop {\n        z-index: 1999;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n\n      /* Spinner Circle styles */\n      .spinner-circle,\n      .spinner-circle:after {\n          border-radius: 50%;\n          width: 10em;\n          height: 10em;\n      }\n\n      .spinner-circle {\n          font-size: 6px;\n          border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n          border-left: 1.1em solid #ffffff;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load8 1.1s infinite linear;\n          animation: load8 1.1s infinite linear;\n      }\n      @-webkit-keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n      @keyframes load8 {\n          0% {\n              -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n          }\n          100% {\n              -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n          }\n      }\n\n      /* Circle Swish styles */\n      .spinner-circle-swish {\n          font-size: 60px;\n          overflow: hidden;\n          width: 1em;\n          height: 1em;\n          z-index: 2000;\n          border-radius: 50%;\n          margin: auto;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-transform: translateZ(0);\n          -ms-transform: translateZ(0);\n          transform: translateZ(0);\n          -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n          animation: load6 1.7s infinite ease, round 1.7s infinite ease;\n        }\n        @-webkit-keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @keyframes load6 {\n          0% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          5%,\n          95% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n          10%,\n          59% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n          }\n          20% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n          }\n          38% {\n            box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n          }\n          100% {\n            box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;\n          }\n        }\n        @-webkit-keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n        @keyframes round {\n          0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n          }\n          100% {\n            -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n          }\n        }\n\n      /* Cube Grid styles */\n      .sk-cube-grid {\n          width: 40px;\n          height: 40px;\n\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .sk-cube-grid .sk-cube {\n          width: 33%;\n          height: 33%;\n          background-color: #333;\n          float: left;\n          -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n          animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n      }\n\n      .sk-cube-grid .sk-cube1 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube2 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube3 {\n          -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n      }\n\n      .sk-cube-grid .sk-cube4 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube5 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      .sk-cube-grid .sk-cube6 {\n          -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n      }\n\n      .sk-cube-grid .sk-cube7 {\n          -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n      }\n\n      .sk-cube-grid .sk-cube8 {\n          -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n      }\n\n      .sk-cube-grid .sk-cube9 {\n          -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n      }\n\n      @-webkit-keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      @keyframes sk-cubeGridScaleDelay {\n          0%, 70%, 100% {\n              -webkit-transform: scale3D(1, 1, 1);\n              transform: scale3D(1, 1, 1);\n          } 35% {\n              -webkit-transform: scale3D(0, 0, 1);\n              transform: scale3D(0, 0, 1);\n          }\n      }\n\n      /* Double Bounce styles */\n      .spinner-double-bounce {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .double-bounce1, .double-bounce2 {\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n          background-color: #333;\n          opacity: 0.6;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n      }\n\n      .double-bounce2 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n      }\n\n      /* Pulse styles */\n      .spinner-pulse {\n          width: 40px;\n          height: 40px;\n          background-color: #333;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          border-radius: 100%;\n          -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;\n          animation: sk-scaleout 1.0s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-scaleout {\n          0% { -webkit-transform: scale(0) }\n          100% {\n            -webkit-transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      @keyframes sk-scaleout {\n          0% {\n            -webkit-transform: scale(0);\n            transform: scale(0);\n          } 100% {\n            -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n            opacity: 0;\n          }\n      }\n\n      /* Three Bounce styles */\n      .spinner-three-bounce {\n          width: 70px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          height: 20px;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-three-bounce > div {\n          width: 18px;\n          height: 18px;\n          background-color: #ffffff;\n\n          border-radius: 100%;\n          display: inline-block;\n          -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n          animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n      }\n\n      .spinner-three-bounce .bounce1 {\n          -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n      }\n\n      .spinner-three-bounce .bounce2 {\n          -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n      }\n\n      @-webkit-keyframes sk-bouncedelay {\n          0%, 80%, 100% { -webkit-transform: scale(0) }\n          40% { -webkit-transform: scale(1.0) }\n      }\n\n      @keyframes sk-bouncedelay {\n          0%, 80%, 100% {\n              -webkit-transform: scale(0);\n              transform: scale(0);\n          } 40% {\n              -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n          }\n      }\n\n      /* Rotate Plane styles */\n      .spinner-sk-rotateplane {\n          width: 40px;\n          height: 40px;\n          background-color: #ffffff;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n          animation: sk-rotateplane 1.2s infinite ease-in-out;\n      }\n\n      @-webkit-keyframes sk-rotateplane {\n          0% { -webkit-transform: perspective(120px) }\n          50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n          100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n      }\n\n      @keyframes sk-rotateplane {\n          0% {\n              transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n          } 50% {\n              transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n              -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n          } 100% {\n              transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n              -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n          }\n      }\n\n      /* Rectangle Bounce styles*/\n      .spinner-rectangle-bounce {\n          width: 50px;\n          height: 40px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .spinner-rectangle-bounce > div {\n          background-color: #ffffff;\n          height: 100%;\n          width: 6px;\n          display: inline-block;\n          -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n          animation: sk-stretchdelay 1.2s infinite ease-in-out;\n      }\n\n      .spinner-rectangle-bounce .rect2 {\n          -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n      }\n\n      .spinner-rectangle-bounce .rect3 {\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n      }\n\n      .spinner-rectangle-bounce .rect4 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      .spinner-rectangle-bounce .rect5 {\n          -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n      }\n\n      @-webkit-keyframes sk-stretchdelay {\n          0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n          20% { -webkit-transform: scaleY(1.0) }\n      }\n\n      @keyframes sk-stretchdelay {\n          0%, 40%, 100% {\n              transform: scaleY(0.4);\n              -webkit-transform: scaleY(0.4);\n          }  20% {\n              transform: scaleY(1.0);\n              -webkit-transform: scaleY(1.0);\n          }\n      }\n\n      /* Wandering Cubes styles */\n      .spinner-wandering-cubes {\n          width: 60px;\n          height: 58px;\n          font-size: 10px;\n          text-align: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n      }\n\n      .cube1, .cube2 {\n          background-color: #ffffff;\n          width: 15px;\n          height: 15px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n          animation: sk-cubemove 1.8s infinite ease-in-out;\n      }\n\n      .cube2 {\n          -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n      }\n\n      @-webkit-keyframes sk-cubemove {\n          25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n          50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n          75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n          100% { -webkit-transform: rotate(-360deg) }\n      }\n\n      @keyframes sk-cubemove {\n          25% {\n              transform: translateX(42px) rotate(-90deg) scale(0.5);\n              -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n          } 50% {\n              transform: translateX(42px) translateY(42px) rotate(-179deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n          } 50.1% {\n              transform: translateX(42px) translateY(42px) rotate(-180deg);\n              -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n          } 75% {\n              transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n              -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n          } 100% {\n              transform: rotate(-360deg);\n              -webkit-transform: rotate(-360deg);\n          }\n      }\n\n      /* Circle styles */\n      .sk-circle {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n        }\n        .sk-circle .sk-child {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n        }\n        .sk-circle .sk-child:before {\n          content: '';\n          display: block;\n          margin: 0 auto;\n          width: 15%;\n          height: 15%;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n                  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n        }\n        .sk-circle .sk-circle2 {\n          -webkit-transform: rotate(30deg);\n              -ms-transform: rotate(30deg);\n                  transform: rotate(30deg); }\n        .sk-circle .sk-circle3 {\n          -webkit-transform: rotate(60deg);\n              -ms-transform: rotate(60deg);\n                  transform: rotate(60deg); }\n        .sk-circle .sk-circle4 {\n          -webkit-transform: rotate(90deg);\n              -ms-transform: rotate(90deg);\n                  transform: rotate(90deg); }\n        .sk-circle .sk-circle5 {\n          -webkit-transform: rotate(120deg);\n              -ms-transform: rotate(120deg);\n                  transform: rotate(120deg); }\n        .sk-circle .sk-circle6 {\n          -webkit-transform: rotate(150deg);\n              -ms-transform: rotate(150deg);\n                  transform: rotate(150deg); }\n        .sk-circle .sk-circle7 {\n          -webkit-transform: rotate(180deg);\n              -ms-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        .sk-circle .sk-circle8 {\n          -webkit-transform: rotate(210deg);\n              -ms-transform: rotate(210deg);\n                  transform: rotate(210deg); }\n        .sk-circle .sk-circle9 {\n          -webkit-transform: rotate(240deg);\n              -ms-transform: rotate(240deg);\n                  transform: rotate(240deg); }\n        .sk-circle .sk-circle10 {\n          -webkit-transform: rotate(270deg);\n              -ms-transform: rotate(270deg);\n                  transform: rotate(270deg); }\n        .sk-circle .sk-circle11 {\n          -webkit-transform: rotate(300deg);\n              -ms-transform: rotate(300deg);\n                  transform: rotate(300deg); }\n        .sk-circle .sk-circle12 {\n          -webkit-transform: rotate(330deg);\n              -ms-transform: rotate(330deg);\n                  transform: rotate(330deg); }\n        .sk-circle .sk-circle2:before {\n          -webkit-animation-delay: -1.1s;\n                  animation-delay: -1.1s; }\n        .sk-circle .sk-circle3:before {\n          -webkit-animation-delay: -1s;\n                  animation-delay: -1s; }\n        .sk-circle .sk-circle4:before {\n          -webkit-animation-delay: -0.9s;\n                  animation-delay: -0.9s; }\n        .sk-circle .sk-circle5:before {\n          -webkit-animation-delay: -0.8s;\n                  animation-delay: -0.8s; }\n        .sk-circle .sk-circle6:before {\n          -webkit-animation-delay: -0.7s;\n                  animation-delay: -0.7s; }\n        .sk-circle .sk-circle7:before {\n          -webkit-animation-delay: -0.6s;\n                  animation-delay: -0.6s; }\n        .sk-circle .sk-circle8:before {\n          -webkit-animation-delay: -0.5s;\n                  animation-delay: -0.5s; }\n        .sk-circle .sk-circle9:before {\n          -webkit-animation-delay: -0.4s;\n                  animation-delay: -0.4s; }\n        .sk-circle .sk-circle10:before {\n          -webkit-animation-delay: -0.3s;\n                  animation-delay: -0.3s; }\n        .sk-circle .sk-circle11:before {\n          -webkit-animation-delay: -0.2s;\n                  animation-delay: -0.2s; }\n        .sk-circle .sk-circle12:before {\n          -webkit-animation-delay: -0.1s;\n                  animation-delay: -0.1s; }\n\n        @-webkit-keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        @keyframes sk-circleBounceDelay {\n          0%, 80%, 100% {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n          } 40% {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n          }\n        }\n\n        /* Chasing Dots styles */\n        .spinner-chasing-dots {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          margin: auto;\n          z-index: 2000;\n          text-align: center;\n          -webkit-animation: sk-rotate 2.0s infinite linear;\n          animation: sk-rotate 2.0s infinite linear;\n        }\n\n        .dot1, .dot2 {\n          width: 60%;\n          height: 60%;\n          display: inline-block;\n          position: absolute;\n          top: 0;\n          background-color: #333;\n          border-radius: 100%;\n          -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n          animation: sk-bounce 2.0s infinite ease-in-out;\n        }\n\n        .dot2 {\n          top: auto;\n          bottom: 0;\n          -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n        }\n\n        @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n        @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n        @-webkit-keyframes sk-bounce {\n          0%, 100% { -webkit-transform: scale(0.0) }\n          50% { -webkit-transform: scale(1.0) }\n        }\n\n        @keyframes sk-bounce {\n          0%, 100% {\n            transform: scale(0.0);\n            -webkit-transform: scale(0.0);\n          } 50% {\n            transform: scale(1.0);\n            -webkit-transform: scale(1.0);\n          }\n        }\n\n      .full-screen {\n          position: fixed;\n          position: -ms-page;\n      }\n    "
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxLoadingComponent.ctorParameters = function () { return [
        { type: NgxLoadingService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    NgxLoadingComponent.propDecorators = {
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NgxLoadingComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxLoadingModule = /** @class */ (function () {
    function NgxLoadingModule() {
    }
    /**
     * @param {?} loadingConfig
     * @return {?}
     */
    NgxLoadingModule.forRoot = /**
     * @param {?} loadingConfig
     * @return {?}
     */
    function (loadingConfig) {
        return {
            ngModule: NgxLoadingModule,
            providers: [{ provide: 'loadingConfig', useValue: loadingConfig }]
        };
    };
    NgxLoadingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [NgxLoadingComponent],
                    exports: [NgxLoadingComponent]
                },] },
    ];
    return NgxLoadingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvYWRpbmcuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy1jb25maWcudHMiLCJuZzovL25neC1sb2FkaW5nL2xpYi9uZ3gtbG9hZGluZy5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbG9hZGluZy9saWIvbmd4LWxvYWRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU5neExvYWRpbmdDb25maWcge1xyXG4gICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBmdWxsU2NyZWVuQmFja2Ryb3A/OiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uVHlwZT86IHN0cmluZztcclxuICAgIHByaW1hcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBzZWNvbmRhcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICB0ZXJ0aWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hMb2FkaW5nQ29uZmlnIGltcGxlbWVudHMgSU5neExvYWRpbmdDb25maWcge1xyXG4gICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICBiYWNrZHJvcEJhY2tncm91bmRDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBmdWxsU2NyZWVuQmFja2Ryb3A/OiBib29sZWFuO1xyXG4gICAgYW5pbWF0aW9uVHlwZT86IHN0cmluZztcclxuICAgIHByaW1hcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICBzZWNvbmRhcnlDb2xvdXI/OiBzdHJpbmc7XHJcbiAgICB0ZXJ0aWFyeUNvbG91cj86IHN0cmluZztcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcEJvcmRlclJhZGl1cyA9IGNvbmZpZy5iYWNrZHJvcEJvcmRlclJhZGl1cztcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQmFja2dyb3VuZENvbG91ciA9IGNvbmZpZy5iYWNrZHJvcEJhY2tncm91bmRDb2xvdXI7XHJcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuQmFja2Ryb3AgPSBjb25maWcuZnVsbFNjcmVlbkJhY2tkcm9wO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVHlwZSA9IGNvbmZpZy5hbmltYXRpb25UeXBlO1xyXG4gICAgICAgIHRoaXMucHJpbWFyeUNvbG91ciA9IGNvbmZpZy5wcmltYXJ5Q29sb3VyO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5Q29sb3VyID0gY29uZmlnLnNlY29uZGFyeUNvbG91cjtcclxuICAgICAgICB0aGlzLnRlcnRpYXJ5Q29sb3VyID0gY29uZmlnLnRlcnRpYXJ5Q29sb3VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0ge1xyXG4gICAgY2hhc2luZ0RvdHM6ICdjaGFzaW5nLWRvdHMnLFxyXG4gICAgY2lyY2xlOiAnc2stY2lyY2xlJyxcclxuICAgIGNpcmNsZVN3aXNoOiAnY2lyY2xlU3dpc2gnLFxyXG4gICAgY3ViZUdyaWQ6ICdzay1jdWJlLWdyaWQnLFxyXG4gICAgZG91YmxlQm91bmNlOiAnZG91YmxlLWJvdW5jZScsXHJcbiAgICBub25lOiAnbm9uZScsXHJcbiAgICBwdWxzZTogJ3B1bHNlJyxcclxuICAgIHJlY3RhbmdsZUJvdW5jZTogJ3JlY3RhbmdsZS1ib3VuY2UnLFxyXG4gICAgcm90YXRpbmdQbGFuZTogJ3JvdGF0aW5nLXBsYW5lJyxcclxuICAgIHRocmVlQm91bmNlOiAndGhyZWUtYm91bmNlJyxcclxuICAgIHdhbmRlcmluZ0N1YmVzOiAnd2FuZGVyaW5nLWN1YmVzJ1xyXG59O1xyXG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnLCBOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi9uZ3gtbG9hZGluZy1jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBsb2FkaW5nQ29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnbG9hZGluZ0NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZykge1xyXG4gICAgdGhpcy5sb2FkaW5nQ29uZmlnID0gdGhpcy5jb25maWcgfHwgbmV3IE5neExvYWRpbmdDb25maWcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLCBJTmd4TG9hZGluZ0NvbmZpZywgTmd4TG9hZGluZ0NvbmZpZyB9IGZyb20gJy4vbmd4LWxvYWRpbmctY29uZmlnJztcclxuaW1wb3J0IHsgTmd4TG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL25neC1sb2FkaW5nLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25neC1sb2FkaW5nJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICpuZ0lmPVwic2hvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCIgW25nU3R5bGVdPVwieydib3JkZXItcmFkaXVzJzogY29uZmlnPy5iYWNrZHJvcEJvcmRlclJhZGl1cywgJ2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LmJhY2tkcm9wQmFja2dyb3VuZENvbG91cn1cIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImNvbmZpZz8uYW5pbWF0aW9uVHlwZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWNpcmNsZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMuY2lyY2xlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JvcmRlci10b3AtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91ciwgJ2JvcmRlci1yaWdodC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLWJvdHRvbS1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyLCAnYm9yZGVyLWxlZnQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jdWJlR3JpZFwiIGNsYXNzPVwic2stY3ViZS1ncmlkXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmUzXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTRcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlNVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU2XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNrLWN1YmUgc2stY3ViZTdcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2stY3ViZSBzay1jdWJlOFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzay1jdWJlIHNrLWN1YmU5XCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1zay1yb3RhdGVwbGFuZVwiICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMucm90YXRpbmdQbGFuZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLXJlY3RhbmdsZS1ib3VuY2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnJlY3RhbmdsZUJvdW5jZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0MlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0M1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NFwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWN0NVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItd2FuZGVyaW5nLWN1YmVzXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy53YW5kZXJpbmdDdWJlc1wiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdWJlMlwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8uc2Vjb25kYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1kb3VibGUtYm91bmNlXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5kb3VibGVCb3VuY2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTFcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnByaW1hcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZG91YmxlLWJvdW5jZTJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItcHVsc2VcIiAqbmdTd2l0Y2hDYXNlPVwibmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnB1bHNlXCIgW25nQ2xhc3NdPVwieydmdWxsLXNjcmVlbicgOiBjb25maWc/LmZ1bGxTY3JlZW5CYWNrZHJvcCA9PSB0cnVlfVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2hhc2luZy1kb3RzXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaGFzaW5nRG90c1wiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3QxXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRvdDJcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb25maWc/LnNlY29uZGFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItY2lyY2xlLXN3aXNoXCIgKm5nU3dpdGNoQ2FzZT1cIm5neExvYWRpbmdBbmltYXRpb25UeXBlcy5jaXJjbGVTd2lzaFwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY29uZmlnPy5wcmltYXJ5Q29sb3VyfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCJuZ3hMb2FkaW5nQW5pbWF0aW9uVHlwZXMubm9uZVwiIFtuZ0NsYXNzXT1cInsnZnVsbC1zY3JlZW4nIDogY29uZmlnPy5mdWxsU2NyZWVuQmFja2Ryb3AgPT0gdHJ1ZX1cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwic3Bpbm5lci10aHJlZS1ib3VuY2VcIiBbbmdDbGFzc109XCJ7J2Z1bGwtc2NyZWVuJyA6IGNvbmZpZz8uZnVsbFNjcmVlbkJhY2tkcm9wID09IHRydWV9XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlMVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8ucHJpbWFyeUNvbG91cn1cIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3VuY2UyXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29uZmlnPy5zZWNvbmRhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlM1wiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbmZpZz8udGVydGlhcnlDb2xvdXJ9XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtcclxuICAgICAgICBgXHJcbiAgICAgIC5iYWNrZHJvcCB7XHJcbiAgICAgICAgei1pbmRleDogMTk5OTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyogU3Bpbm5lciBDaXJjbGUgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZSxcclxuICAgICAgLnNwaW5uZXItY2lyY2xlOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1jaXJjbGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2cHg7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAxLjFlbSBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgIH1cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBDaXJjbGUgU3dpc2ggc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWNpcmNsZS1zd2lzaCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZDYgMS43cyBpbmZpbml0ZSBlYXNlLCByb3VuZCAxLjdzIGluZmluaXRlIGVhc2U7XHJcbiAgICAgICAgICBhbmltYXRpb246IGxvYWQ2IDEuN3MgaW5maW5pdGUgZWFzZSwgcm91bmQgMS43cyBpbmZpbml0ZSBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZDYge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNSUsXHJcbiAgICAgICAgICA5NSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAlLFxyXG4gICAgICAgICAgNTklIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4wODdlbSAtMC44MjVlbSAwIC0wLjQyZW0sIC0wLjE3M2VtIC0wLjgxMmVtIDAgLTAuNDRlbSwgLTAuMjU2ZW0gLTAuNzg5ZW0gMCAtMC40NmVtLCAtMC4yOTdlbSAtMC43NzVlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMjAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAtMC4zMzhlbSAtMC43NThlbSAwIC0wLjQyZW0sIC0wLjU1NWVtIC0wLjYxN2VtIDAgLTAuNDRlbSwgLTAuNjcxZW0gLTAuNDg4ZW0gMCAtMC40NmVtLCAtMC43NDllbSAtMC4zNGVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAzOCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjM3N2VtIC0wLjc0ZW0gMCAtMC40MmVtLCAtMC42NDVlbSAtMC41MjJlbSAwIC0wLjQ0ZW0sIC0wLjc3NWVtIC0wLjI5N2VtIDAgLTAuNDZlbSwgLTAuODJlbSAtMC4wOWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAtMC44M2VtIDAgLTAuNGVtLCAwIC0wLjgzZW0gMCAtMC40MmVtLCAwIC0wLjgzZW0gMCAtMC40NGVtLCAwIC0wLjgzZW0gMCAtMC40NmVtLCAwIC0wLjgzZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQGtleWZyYW1lcyBsb2FkNiB7XHJcbiAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA1JSxcclxuICAgICAgICAgIDk1JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgMCAtMC44M2VtIDAgLTAuNDJlbSwgMCAtMC44M2VtIDAgLTAuNDRlbSwgMCAtMC44M2VtIDAgLTAuNDZlbSwgMCAtMC44M2VtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAxMCUsXHJcbiAgICAgICAgICA1OSUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjA4N2VtIC0wLjgyNWVtIDAgLTAuNDJlbSwgLTAuMTczZW0gLTAuODEyZW0gMCAtMC40NGVtLCAtMC4yNTZlbSAtMC43ODllbSAwIC0wLjQ2ZW0sIC0wLjI5N2VtIC0wLjc3NWVtIDAgLTAuNDc3ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAyMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIC0wLjMzOGVtIC0wLjc1OGVtIDAgLTAuNDJlbSwgLTAuNTU1ZW0gLTAuNjE3ZW0gMCAtMC40NGVtLCAtMC42NzFlbSAtMC40ODhlbSAwIC0wLjQ2ZW0sIC0wLjc0OWVtIC0wLjM0ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDM4JSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgLTAuODNlbSAwIC0wLjRlbSwgLTAuMzc3ZW0gLTAuNzRlbSAwIC0wLjQyZW0sIC0wLjY0NWVtIC0wLjUyMmVtIDAgLTAuNDRlbSwgLTAuNzc1ZW0gLTAuMjk3ZW0gMCAtMC40NmVtLCAtMC44MmVtIC0wLjA5ZW0gMCAtMC40NzdlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIC0wLjgzZW0gMCAtMC40ZW0sIDAgLTAuODNlbSAwIC0wLjQyZW0sIDAgLTAuODNlbSAwIC0wLjQ0ZW0sIDAgLTAuODNlbSAwIC0wLjQ2ZW0sIDAgLTAuODNlbSAwIC0wLjQ3N2VtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgcm91bmQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBrZXlmcmFtZXMgcm91bmQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLyogQ3ViZSBHcmlkIHN0eWxlcyAqL1xyXG4gICAgICAuc2stY3ViZS1ncmlkIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xyXG4gICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgIGhlaWdodDogMzMlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgIH0gMzUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA3MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcclxuICAgICAgICAgIH0gMzUlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIERvdWJsZSBCb3VuY2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLWRvdWJsZS1ib3VuY2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRvdWJsZS1ib3VuY2UyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAgICAgICAgIDAlLCAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUHVsc2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXB1bHNlIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXNjYWxlb3V0IDEuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1zY2FsZW91dCB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB9XHJcbiAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDEwMCUge1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBUaHJlZSBCb3VuY2Ugc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXRocmVlLWJvdW5jZSA+IGRpdiB7XHJcbiAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UxIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNwaW5uZXItdGhyZWUtYm91bmNlIC5ib3VuY2UyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gICAgICAgICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgfSA0MCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogUm90YXRlIFBsYW5lIHN0eWxlcyAqL1xyXG4gICAgICAuc3Bpbm5lci1zay1yb3RhdGVwbGFuZSB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICB6LWluZGV4OiAyMDAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XHJcbiAgICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgfVxyXG4gICAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgfVxyXG4gICAgICAgICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpICByb3RhdGVYKDE4MGRlZykgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAa2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcclxuICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylcclxuICAgICAgICAgIH0gNTAlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpXHJcbiAgICAgICAgICB9IDEwMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIFJlY3RhbmdsZSBCb3VuY2Ugc3R5bGVzKi9cclxuICAgICAgLnNwaW5uZXItcmVjdGFuZ2xlLWJvdW5jZSB7XHJcbiAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zcGlubmVyLXJlY3RhbmdsZS1ib3VuY2UgPiBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stc3RyZXRjaGRlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLXN0cmV0Y2hkZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MiB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0MyB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0NCB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3Bpbm5lci1yZWN0YW5nbGUtYm91bmNlIC5yZWN0NSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stc3RyZXRjaGRlbGF5IHtcclxuICAgICAgICAgIDAlLCA0MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCkgfVxyXG4gICAgICAgICAgMjAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1zdHJldGNoZGVsYXkge1xyXG4gICAgICAgICAgMCUsIDQwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XHJcbiAgICAgICAgICB9ICAyMCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEuMCk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxLjApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKiBXYW5kZXJpbmcgQ3ViZXMgc3R5bGVzICovXHJcbiAgICAgIC5zcGlubmVyLXdhbmRlcmluZy1jdWJlcyB7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jdWJlMSwgLmN1YmUyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgICAgIGFuaW1hdGlvbjogc2stY3ViZW1vdmUgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmN1YmUyIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlbW92ZSB7XHJcbiAgICAgICAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpIH1cclxuICAgICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpIHRyYW5zbGF0ZVkoNDJweCkgcm90YXRlKC0xODBkZWcpIH1cclxuICAgICAgICAgIDc1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KSB9XHJcbiAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKSB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgc2stY3ViZW1vdmUge1xyXG4gICAgICAgICAgMjUlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgfSA1MCUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTc5ZGVnKTtcclxuICAgICAgICAgIH0gNTAuMSUge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgICAgIH0gNzUlIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KSB0cmFuc2xhdGVZKDQycHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg0MnB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcclxuICAgICAgICAgIH0gMTAwJSB7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLyogQ2lyY2xlIHN0eWxlcyAqL1xyXG4gICAgICAuc2stY2lyY2xlIHtcclxuICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2hpbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUzIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTQge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU2IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTcge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGU5IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEwIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTEyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTI6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTM6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlODpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlOTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzOyB9XHJcbiAgICAgICAgLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zczsgfVxyXG4gICAgICAgIC5zay1jaXJjbGUgLnNrLWNpcmNsZTExOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XHJcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7IH1cclxuICAgICAgICAuc2stY2lyY2xlIC5zay1jaXJjbGUxMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzOyB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICB9IDQwJSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogQ2hhc2luZyBEb3RzIHN0eWxlcyAqL1xyXG4gICAgICAgIC5zcGlubmVyLWNoYXNpbmctZG90cyB7XHJcbiAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlIDIuMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1yb3RhdGUgMi4wcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG90MSwgLmRvdDIge1xyXG4gICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdDIge1xyXG4gICAgICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcbiAgICAgICAgQGtleWZyYW1lcyBzay1yb3RhdGUgeyAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIH19XHJcblxyXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gICAgICAgICAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgICAgICAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAgICAgICB9IDUwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgLmZ1bGwtc2NyZWVuIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHBvc2l0aW9uOiAtbXMtcGFnZTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBzaG93OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgY29uZmlnOiBJTmd4TG9hZGluZ0NvbmZpZyA9IG5ldyBOZ3hMb2FkaW5nQ29uZmlnKCk7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZzogSU5neExvYWRpbmdDb25maWcgPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVHlwZTogbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzLnRocmVlQm91bmNlLFxyXG4gICAgICAgIGJhY2tkcm9wQmFja2dyb3VuZENvbG91cjogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXHJcbiAgICAgICAgYmFja2Ryb3BCb3JkZXJSYWRpdXM6ICcwcHgnLFxyXG4gICAgICAgIGZ1bGxTY3JlZW5CYWNrZHJvcDogZmFsc2UsXHJcbiAgICAgICAgcHJpbWFyeUNvbG91cjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHNlY29uZGFyeUNvbG91cjogJyNmZmZmZmYnLFxyXG4gICAgICAgIHRlcnRpYXJ5Q29sb3VyOiAnI2ZmZmZmZidcclxuICAgIH07XHJcbiAgICBwdWJsaWMgbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzID0gbmd4TG9hZGluZ0FuaW1hdGlvblR5cGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgTG9hZGluZ1NlcnZpY2U6IE5neExvYWRpbmdTZXJ2aWNlLCBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR1cENvbmZpZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBDb25maWcoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBvcHRpb24gaW4gdGhpcy5kZWZhdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWdbb3B0aW9uXSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWdbb3B0aW9uXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWdbb3B0aW9uXSA9IHRoaXMuTG9hZGluZ1NlcnZpY2UubG9hZGluZ0NvbmZpZ1tvcHRpb25dICE9IG51bGwgPyB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSA6IHRoaXMuZGVmYXVsdENvbmZpZ1tvcHRpb25dO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnW29wdGlvbl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnW29wdGlvbl0gPSB0aGlzLkxvYWRpbmdTZXJ2aWNlLmxvYWRpbmdDb25maWdbb3B0aW9uXSAhPSBudWxsID8gdGhpcy5Mb2FkaW5nU2VydmljZS5sb2FkaW5nQ29uZmlnW29wdGlvbl0gOiB0aGlzLmRlZmF1bHRDb25maWdbb3B0aW9uXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U2hvdyhzaG93OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gc2hvdztcclxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOZ3hMb2FkaW5nQ29uZmlnIH0gZnJvbSAnLi4vcHVibGljX2FwaSc7XHJcbmltcG9ydCB7IE5neExvYWRpbmdDb21wb25lbnQgfSBmcm9tICcuL25neC1sb2FkaW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW05neExvYWRpbmdDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtOZ3hMb2FkaW5nQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4TG9hZGluZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QobG9hZGluZ0NvbmZpZzogSU5neExvYWRpbmdDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBOZ3hMb2FkaW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6ICdsb2FkaW5nQ29uZmlnJywgdXNlVmFsdWU6IGxvYWRpbmdDb25maWcgfV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQXFCSSwwQkFBWSxNQUE4QjtRQUE5Qix1QkFBQSxFQUFBLFdBQThCO1FBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDeEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztRQUNoRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztLQUMvQztJQUNMLHVCQUFDO0NBQUEsSUFBQTs7QUFFRCxJQUFhLHdCQUF3QixHQUFHO0lBQ3BDLFdBQVcsRUFBRSxjQUFjO0lBQzNCLE1BQU0sRUFBRSxXQUFXO0lBQ25CLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFFBQVEsRUFBRSxjQUFjO0lBQ3hCLFlBQVksRUFBRSxlQUFlO0lBQzdCLElBQUksRUFBRSxNQUFNO0lBQ1osS0FBSyxFQUFFLE9BQU87SUFDZCxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLGFBQWEsRUFBRSxnQkFBZ0I7SUFDL0IsV0FBVyxFQUFFLGNBQWM7SUFDM0IsY0FBYyxFQUFFLGlCQUFpQjtDQUNwQzs7Ozs7O0FDNUNEO0lBU0UsMkJBQXlELE1BQXlCO1FBQXpCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2hGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixFQUFFLENBQUM7S0FDNUQ7O2dCQVJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0RBSWMsUUFBUSxZQUFJLE1BQU0sU0FBQyxlQUFlOzs7NEJBVGpEO0NBWUM7Ozs7OztBQ1pEO0lBeXhCSSw2QkFBb0IsY0FBaUMsRUFBVSxpQkFBb0M7UUFBL0UsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQWIxRixXQUFNLEdBQXNCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVwRCxrQkFBYSxHQUFzQjtZQUN2QyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsV0FBVztZQUNuRCx3QkFBd0IsRUFBRSxvQkFBb0I7WUFDOUMsb0JBQW9CLEVBQUUsS0FBSztZQUMzQixrQkFBa0IsRUFBRSxLQUFLO1lBQ3pCLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGVBQWUsRUFBRSxTQUFTO1lBQzFCLGNBQWMsRUFBRSxTQUFTO1NBQzVCLENBQUM7UUFDSyw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztLQUU2Qzs7OztJQUV4RyxzQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFTyx5Q0FBVzs7O0lBQW5CO1FBQ0ksS0FBSyxJQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JDLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVMsRUFBRTtnQkFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDN0IsU0FBUztpQkFDWjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BKO2lCQUFNO2dCQUNILElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQzdCLFNBQVM7aUJBQ1o7Z0JBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwSjtTQUNKO0tBQ0o7Ozs7O0lBRU0scUNBQU87Ozs7SUFBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pDOztnQkFoekJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDBnS0ErRFg7b0JBQ0MsTUFBTSxFQUFFO3dCQUNKLDQzckJBZ3NCSDtxQkFDQTtpQkFDSjs7OztnQkF2d0JRLGlCQUFpQjtnQkFGakIsaUJBQWlCOzs7dUJBMndCckIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBd0NWLDBCQUFDO0NBQUE7Ozs7OztBQ3J6QkQ7SUFLQTtLQVlDOzs7OztJQU5RLHdCQUFPOzs7O0lBQWQsVUFBZSxhQUFnQztRQUM3QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxDQUFDO1NBQ25FLENBQUM7S0FDSDs7Z0JBWEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7SUFRRCx1QkFBQztDQUFBOzs7Ozs7Ozs7Ozs7OzsifQ==

/***/ })

}]);
//# sourceMappingURL=default~e-commerce-e-commerce-module~reference-reference-module~user-user-module-es5.js.map