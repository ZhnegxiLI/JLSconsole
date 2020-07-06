(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/main/apps/dashboards/project/project.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/apps/dashboards/project/project.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-project\" class=\"page-layout simple right-sidebar\" fxLayout=\"row\">\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\" fusePerfectScrollbar>\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header accent p-24 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                <span class=\"mat-display-1 my-0 my-sm-24 welcome-message\"\r\n                    [@animate]=\"{value:'*',params:{x:'50px'}}\">Welcome back\r\n                </span>\r\n\r\n            </div>\r\n\r\n   \r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content\">\r\n\r\n            <mat-tab-group dynamicHeight>\r\n\r\n                <mat-tab label=\"Home\">\r\n\r\n                    <div class=\"widget-group p-12\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                        [@animateStagger]=\"{value:'50'}\">\r\n\r\n                        <!-- WIDGET 1 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified font-size-16\"\r\n                                            [(ngModel)]=\"widgets.widget1.currentRange\" aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget1.ranges | keys\"\r\n                                                [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"light-blue-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget1.data.count[widgets.widget1.currentRange]}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget1.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget1.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">\r\n                                        {{widgets.widget1.data.extra.count[widgets.widget1.currentRange]}}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                    aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget1.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 1 -->\r\n\r\n                        <!-- WIDGET 2 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget2.title}}</div>\r\n\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"red-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget2.data.count}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget2.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget2.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">{{widgets.widget2.data.extra.count}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                    aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget2.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 2 -->\r\n\r\n                        <!-- WIDGET 3 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget3.title}}</div>\r\n\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"orange-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget3.data.count}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget3.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget3.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">{{widgets.widget3.data.extra.count}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                    aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget3.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 3 -->\r\n\r\n                        <!-- WIDGET 4 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget4.title}}</div>\r\n\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"blue-grey-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget4.data.count}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget4.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget4.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">{{widgets.widget4.data.extra.count}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                    aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget4.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 4 -->\r\n\r\n                        <!-- WIDGET 5 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" fxLayout=\"row\" fxFlex=\"100\"\r\n                            class=\"widget widget5\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n\r\n                                <div class=\"px-16 border-bottom\" fxLayout=\"row wrap\"\r\n                                    fxLayoutAlign=\"space-between center\">\r\n\r\n                                    <div fxFlex class=\"py-16 h3\">{{widgets.widget5.title}}</div>\r\n\r\n                                    <div fxFlex=\"0 1 auto\" class=\"py-16\" fxLayout=\"row\">\r\n                                        <button mat-button class=\"px-16\"\r\n                                            *ngFor=\"let range of widgets.widget5.ranges | keys\"\r\n                                            (click)=\"widget5.currentRange = range.key\"\r\n                                            [ngClass]=\"{'accent' : widget5.currentRange == range.key}\">\r\n                                            {{range.value}}\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n\r\n                                    <div class=\"h-420 my-16\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                        <ngx-charts-bar-vertical-stacked *fuseIfOnDom [scheme]=\"widget5.scheme\"\r\n                                            [results]=\"this.widgets.widget5.mainChart[this.widget5.currentRange]\"\r\n                                            [gradient]=\"widget5.gradient\" [xAxis]=\"widget5.xAxis\"\r\n                                            [yAxis]=\"widget5.yAxis\" [legend]=\"widget5.legend\"\r\n                                            [showXAxisLabel]=\"widget5.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget5.showYAxisLabel\" [xAxisLabel]=\"widget5.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget5.yAxisLabel\" (select)=\"widget5.onSelect($event)\">\r\n                                        </ngx-charts-bar-vertical-stacked>\r\n                                    </div>\r\n\r\n                                    <div class=\"my-16\" fxFlex=\"100\" fxLayout=\"row wrap\" fxFlex.gt-sm=\"50\">\r\n\r\n                                        <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"center\"\r\n                                            *ngFor=\"let widget of widgets.widget5.supporting | keys\" class=\"mb-24\">\r\n\r\n                                            <div class=\"px-24\">\r\n                                                <div class=\"h4 secondary-text\">{{widget.value.label}}</div>\r\n                                                <div class=\"mat-display-1 m-0\">\r\n                                                    {{widget.value.count[widget5.currentRange]}}\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"h-64\">\r\n                                                <ngx-charts-area-chart *fuseIfOnDom\r\n                                                    [results]=\"widget.value.chart[widget5.currentRange]\"\r\n                                                    [scheme]=\"widget5.supporting.scheme\"\r\n                                                    [gradient]=\"widget5.supporting.gradient\"\r\n                                                    [xAxis]=\"widget5.supporting.xAxis\"\r\n                                                    [yAxis]=\"widget5.supporting.yAxis\"\r\n                                                    [legend]=\"widget5.supporting.legend\"\r\n                                                    [showXAxisLabel]=\"widget5.supporting.showXAxisLabel\"\r\n                                                    [showYAxisLabel]=\"widget5.supporting.showYAxisLabel\"\r\n                                                    [xAxisLabel]=\"widget5.supporting.xAxisLabel\"\r\n                                                    [yAxisLabel]=\"widget5.supporting.yAxisLabel\"\r\n                                                    [curve]=\"widget5.supporting.curve\">\r\n                                                </ngx-charts-area-chart>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 5 -->\r\n\r\n                        <!-- WIDGET 6 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n\r\n                                <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\r\n                                    fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget6.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified\" [(ngModel)]=\"widget6.currentRange\"\r\n                                            aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget6.ranges | keys\"\r\n                                                [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart *fuseIfOnDom [scheme]=\"widget6.scheme\"\r\n                                        [results]=\"widgets.widget6.mainChart[widget6.currentRange]\"\r\n                                        [legend]=\"widget6.showLegend\" [explodeSlices]=\"widget6.explodeSlices\"\r\n                                        [labels]=\"widget6.labels\" [doughnut]=\"widget6.doughnut\"\r\n                                        [gradient]=\"widget6.gradient\" (select)=\"widget6.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                                <div class=\"py-8 mh-16 border-top\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n\r\n                                    <div class=\"py-8 border-right\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                                        fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                        <span class=\"mat-display-1 mb-0\">\r\n                                            {{widgets.widget6.footerLeft.count[widget6.currentRange]}}\r\n                                        </span>\r\n                                        <span class=\"h4\">{{widgets.widget6.footerLeft.title}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"py-8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\"\r\n                                        fxFlex.gt-sm=\"50\">\r\n                                        <span class=\"mat-display-1 mb-0\">\r\n                                            {{widgets.widget6.footerRight.count[widget6.currentRange]}}\r\n                                        </span>\r\n                                        <span class=\"h4\">{{widgets.widget6.footerRight.title}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 6 -->\r\n\r\n                        <!-- WIDGET 7 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n\r\n                                <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\r\n                                    fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget7.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified\" [(ngModel)]=\"widget7.currentRange\"\r\n                                            aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget7.ranges | keys\"\r\n                                                [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n                                    *ngFor=\"let event of widgets.widget7.schedule[widget7.currentRange]\">\r\n                                    <div>\r\n                                        <div class=\"h3\">{{event.title}}</div>\r\n                                        <div>\r\n                                            <span class=\"secondary-text\">{{event.time}}</span>\r\n                                            <span *ngIf=\"event.location\">, {{event.location}}</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <button mat-icon-button aria-label=\"More information\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 7 -->\r\n\r\n                    </div>\r\n                    <!-- / WIDGET GROUP -->\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Budget Summary\">\r\n\r\n                    <!-- WIDGET GROUP -->\r\n                    <div class=\"widget-group\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                        [@animateStagger]=\"{value:'50'}\">\r\n\r\n                        <!-- WIDGET 8 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"h3 px-16 py-24\">\r\n                                    Internal/external order count\r\n                                </div>\r\n\r\n                                <mat-divider></mat-divider>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart *fuseIfOnDom [scheme]=\"widget8.scheme\"\r\n                                        [results]=\"internalExternalPerformanceCount\" [legend]=\"widget8.legend\"\r\n                                        [explodeSlices]=\"widget8.explodeSlices\" [labels]=\"widget8.labels\"\r\n                                        [doughnut]=\"widget8.doughnut\" [gradient]=\"widget8.gradient\"\r\n                                        (select)=\"widget8.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 8 -->\r\n\r\n\r\n                        <!-- WIDGET 8 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"h3 px-16 py-24\">\r\n                                    Internal/external order sum(€)\r\n                                </div>\r\n\r\n                                <mat-divider></mat-divider>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart *fuseIfOnDom [scheme]=\"widget8.scheme\"\r\n                                        [results]=\"internalExternalPerformanceSum\" [legend]=\"widget8.legend\"\r\n                                        [explodeSlices]=\"widget8.explodeSlices\" [labels]=\"widget8.labels\"\r\n                                        [doughnut]=\"widget8.doughnut\" [gradient]=\"widget8.gradient\"\r\n                                        (select)=\"widget8.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 8 -->\r\n\r\n                        <!-- WIDGET 8 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"h3 px-16 py-24\">\r\n                                    Count by status\r\n                                </div>\r\n\r\n                                <mat-divider></mat-divider>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart *fuseIfOnDom [scheme]=\"widget8.scheme\"\r\n                                        [results]=\"performanceByStatus\" [legend]=\"widget8.legend\"\r\n                                        [explodeSlices]=\"widget8.explodeSlices\" [labels]=\"widget8.labels\"\r\n                                        [doughnut]=\"widget8.doughnut\" [gradient]=\"widget8.gradient\"\r\n                                        (select)=\"widget8.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 8 -->\r\n\r\n                        <!-- WIDGET 9 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                            fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n                                <div class=\"px-16 py-12 border-bottom\" fxLayout=\"row\"\r\n                                    fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget9.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select [(ngModel)]=\"widget9.currentRange\" aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget9.ranges | keys\"\r\n                                                [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayout.gt-xs=\"row\"\r\n                                    fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.weeklySpent.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.weeklySpent.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.weeklySpent.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\" [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\" [yAxis]=\"widget9.yAxis\" [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\" [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\" [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayout.gt-xs=\"row\"\r\n                                    fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.totalSpent.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.totalSpent.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.totalSpent.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\" [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\" [yAxis]=\"widget9.yAxis\" [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\" [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\" [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayout.gt-xs=\"row\"\r\n                                    fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.remaining.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.remaining.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.remaining.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\" [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\" [yAxis]=\"widget9.yAxis\" [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\" [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\" [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24 border-top\">\r\n                                    <div class=\"h4 secondary-text\">{{widgets.widget9.totalBudget.title}}</div>\r\n                                    <div class=\"pt-8 mat-display-1 m-0 font-weight-300\">\r\n                                        <span class=\"secondary-text\">$</span>\r\n                                        <span>{{widgets.widget9.totalBudget.count}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 9 -->\r\n\r\n                        <!-- WIDGET 10 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                            fxFlex=\"100\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n\r\n                                <div class=\"simple-table-container\" ms-responsive-table>\r\n                                    <div class=\" table-title\">\r\n                                        {{widgets.widget10.title}}\r\n                                    </div>\r\n\r\n                                    <table class=\"simple\">\r\n\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th *ngFor=\"let column of widgets.widget10.table.columns\">\r\n                                                    {{column.title}}\r\n                                                </th>\r\n                                            </tr>\r\n                                        </thead>\r\n\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let row of widgets.widget10.table.rows\">\r\n                                                <td *ngFor=\"let cell of row\">\r\n                                                    <span class=\"p-4\" [ngClass]=\"cell.classes\">\r\n                                                        {{cell.value}}\r\n                                                    </span>\r\n                                                    <mat-icon *ngIf=\"cell.icon\" class=\"s-16\">{{cell.icon}}\r\n                                                    </mat-icon>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 10 -->\r\n\r\n                    </div>\r\n                    <!-- / WIDGET GROUP -->\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Team Members\">\r\n\r\n                    <!-- WIDGET GROUP -->\r\n                    <div class=\"widget-group\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                        [@animateStagger]=\"{value:'50'}\">\r\n\r\n                        <!-- WIDGET 11 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                            fxFlex=\"100\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front\">\r\n\r\n                                <div class=\"p-24 mb-8 border-bottom\" fxLayout=\"row\"\r\n                                    fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h2\">Team member</div>\r\n                                    <div class=\"text-boxed accent m-0\">\r\n                                        {{teamMemberPerformance.length}}\r\n                                        members\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <mat-table #table [dataSource]=\"teamMemberPerformance\">\r\n\r\n                                    <!-- Name Column -->\r\n                                    <ng-container matColumnDef=\"Username\">\r\n                                        <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\">\r\n                                            <p class=\"text-truncate font-weight-600\">{{contact.Username}}</p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n\r\n                                    <!-- Office Column -->\r\n                                    <ng-container matColumnDef=\"CreatedOn\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>CreatedOn\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                            <p class=\"office text-truncate\">\r\n                                                {{contact.CreatedOn }}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n\r\n\r\n                                    <!-- Phone Column -->\r\n                                    <ng-container matColumnDef=\"MonthPerformance\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>Month Performance\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                            <p class=\"phone text-truncate\">\r\n                                                {{contact.MonthPerformance}}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Phone Column -->\r\n                                    <ng-container matColumnDef=\"YearPerformance\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>Year Performance\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                            <p class=\"phone text-truncate\">\r\n                                                {{contact.YearPerformance}}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <mat-header-row *matHeaderRowDef=\"teamMemberPerformanceColumns\"></mat-header-row>\r\n                                    <mat-row *matRowDef=\"let contact; columns: teamMemberPerformanceColumns;\">\r\n                                    </mat-row>\r\n                                </mat-table>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 11 -->\r\n\r\n                    </div>\r\n                    <!-- / WIDGET GROUP -->\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"project-dashboard-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content\">\r\n\r\n            <!-- WIDGET GROUP -->\r\n            <div class=\"widget-group\" fxLayout=\"column\" fxFlex=\"100\" [@animateStagger]=\"{value:'50'}\">\r\n\r\n                <!-- NOW WIDGET -->\r\n                <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"pb-0\">\r\n\r\n                    <!-- Front -->\r\n                    <div class=\"fuse-widget-front\">\r\n\r\n                        <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                            <div class=\"h3\">{{dateNow | date: 'EEEE, HH:mm:ss'}}</div>\r\n\r\n                            <div>\r\n                                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n\r\n                                <mat-menu #moreMenu=\"matMenu\">\r\n                                    <button mat-menu-item aria-label=\"Flip widget\">\r\n                                        Details\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pb-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                            <div class=\"h1 secondary-text\">\r\n                                <span>{{dateNow | date: 'MMMM'}}</span>\r\n                            </div>\r\n\r\n                            <div class=\"font-size-72 line-height-88 secondary-text font-weight-400\">\r\n                                {{dateNow | date: 'd'}}\r\n                            </div>\r\n\r\n                            <div class=\"h1 secondary-text\">\r\n                                <span>{{dateNow | date: 'y'}}</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <!-- / Front -->\r\n\r\n                </fuse-widget>\r\n                <!-- / NOW WIDGET -->\r\n\r\n\r\n            </div>\r\n            <!-- / WIDGET GROUP -->\r\n\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-project > .sidebar {\n  width: 280px;\n  min-width: 280px;\n  max-width: 280px;\n}\n#dashboard-project > .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px;\n}\n#dashboard-project > .center > .header .selected-project {\n  background: rgba(0, 0, 0, 0.12);\n  color: #FFFFFF;\n  padding: 8px 16px;\n  height: 40px;\n  line-height: 24px;\n  font-size: 16px;\n  border-radius: 8px 0 0 0;\n}\n#dashboard-project > .center > .header .project-selector {\n  margin-left: 1px;\n  background: rgba(0, 0, 0, 0.12);\n  border-radius: 0 8px 0 0;\n}\n#dashboard-project > .center > .header .project-selector mat-icon {\n  color: #FFFFFF;\n}\n#dashboard-project > .center > .content {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n#dashboard-project > .center > .content mat-tab-group {\n  height: 100%;\n}\n#dashboard-project > .center > .content mat-tab-group .mat-tab-body-wrapper {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n#dashboard-project > .center > .content .mat-tab-label-container {\n  padding: 0 24px;\n}\n#dashboard-project .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hcHBzL2Rhc2hib2FyZHMvcHJvamVjdC9GOlxcamxzaW1wb3J0XFxKTFNDb25zb2xlXFxKTFNjb25zb2xlL3NyY1xcYXBwXFxtYWluXFxhcHBzXFxkYXNoYm9hcmRzXFxwcm9qZWN0XFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluL2FwcHMvZGFzaGJvYXJkcy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RSO0FETVE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0paO0FETVk7RUFDSSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0poQjtBRE9ZO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0FDTGhCO0FET2dCO0VBQ0ksY0FBQTtBQ0xwQjtBRFVRO0VBQ0ksbUJBQUE7VUFBQSxPQUFBO0FDUlo7QURVWTtFQUNJLFlBQUE7QUNSaEI7QURVZ0I7RUFDSSxtQkFBQTtVQUFBLFlBQUE7QUNScEI7QURZWTtFQUNJLGVBQUE7QUNWaEI7QURtQlk7RUFDSSxhQUFBO0FDakJoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vYXBwcy9kYXNoYm9hcmRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkYXNoYm9hcmQtcHJvamVjdCB7XHJcblxyXG4gICAgPiAuc2lkZWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIH1cclxuXHJcbiAgICA+IC5jZW50ZXIge1xyXG5cclxuICAgICAgICA+IC5oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTYwcHg7XHJcblxyXG4gICAgICAgICAgICAuc2VsZWN0ZWQtcHJvamVjdCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvamVjdC1zZWxlY3RvciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDAgMDtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgbWF0LXRhYi1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLm1hdC10YWItYm9keS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndpZGdldCB7XHJcblxyXG4gICAgICAgICYud2lkZ2V0NSB7XHJcblxyXG4gICAgICAgICAgICAuZ3JpZGxpbmUtcGF0aC5ncmlkbGluZS1wYXRoLWhvcml6b250YWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiNkYXNoYm9hcmQtcHJvamVjdCA+IC5zaWRlYmFyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtYXgtd2lkdGg6IDI4MHB4O1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5oZWFkZXIge1xuICBoZWlnaHQ6IDE2MHB4O1xuICBtaW4taGVpZ2h0OiAxNjBweDtcbiAgbWF4LWhlaWdodDogMTYwcHg7XG59XG4jZGFzaGJvYXJkLXByb2plY3QgPiAuY2VudGVyID4gLmhlYWRlciAuc2VsZWN0ZWQtcHJvamVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDA7XG59XG4jZGFzaGJvYXJkLXByb2plY3QgPiAuY2VudGVyID4gLmhlYWRlciAucHJvamVjdC1zZWxlY3RvciB7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDAgOHB4IDAgMDtcbn1cbiNkYXNoYm9hcmQtcHJvamVjdCA+IC5jZW50ZXIgPiAuaGVhZGVyIC5wcm9qZWN0LXNlbGVjdG9yIG1hdC1pY29uIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4jZGFzaGJvYXJkLXByb2plY3QgPiAuY2VudGVyID4gLmNvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0ID4gLmNlbnRlciA+IC5jb250ZW50IG1hdC10YWItZ3JvdXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jZGFzaGJvYXJkLXByb2plY3QgPiAuY2VudGVyID4gLmNvbnRlbnQgbWF0LXRhYi1ncm91cCAubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG4jZGFzaGJvYXJkLXByb2plY3QgPiAuY2VudGVyID4gLmNvbnRlbnQgLm1hdC10YWItbGFiZWwtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAyNHB4O1xufVxuI2Rhc2hib2FyZC1wcm9qZWN0IC53aWRnZXQud2lkZ2V0NSAuZ3JpZGxpbmUtcGF0aC5ncmlkbGluZS1wYXRoLWhvcml6b250YWwge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectDashboardComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardComponent", function() { return ProjectDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.service */ "./src/app/main/apps/dashboards/project/project.service.ts");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");








var ProjectDashboardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {ProjectDashboardService} _projectDashboardService
     */
    function ProjectDashboardComponent(_fuseSidebarService, _projectDashboardService) {
        var _this = this;
        this._fuseSidebarService = _fuseSidebarService;
        this._projectDashboardService = _projectDashboardService;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.widget8 = {};
        this.widget9 = {};
        this.widget11 = {};
        this.dateNow = Date.now();
        this.teamMemberPerformance = [];
        this.internalExternalPerformanceCount = [];
        this.internalExternalPerformanceSum = [];
        this.performanceByStatus = [];
        /**
         * Widget 5
         */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: function (ev) {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: d3_shape__WEBPACK_IMPORTED_MODULE_4__["curveBasis"]
            }
        };
        /**
         * Widget 6
         */
        this.widget6 = {
            currentRange: 'TW',
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 7
         */
        this.widget7 = {
            currentRange: 'T'
        };
        /**
         * Widget 8
         */
        this.widget8 = {
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: false,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 9
         */
        this.widget9 = {
            currentRange: 'TW',
            xAxis: false,
            yAxis: false,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_4__["curveBasis"]
        };
        setInterval(function () {
            _this.dateNow = Date.now();
        }, 1000);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = this._projectDashboardService.projects;
        this.selectedProject = this.projects[0];
        this.widgets = this._projectDashboardService.widgets;
        this.teamMemberPerformance = this._projectDashboardService.teamSalesPerformance;
        if (this._projectDashboardService.teamSalesPerformance != null && this._projectDashboardService.teamSalesPerformance.length > 0) {
            this._projectDashboardService.teamSalesPerformance.map(function (user) {
                user.YearPerformance = 0;
                user.MonthPerformance = 0;
                var currentMonth = new Date().getMonth() + 1;
                var currentYear = new Date().getFullYear();
                if (user.Performance != null && user.Performance.length > 0) {
                    user.Performance.map(function (performance) {
                        // Month performance
                        if (performance.Year == currentYear && performance.Month == currentMonth) {
                            user.MonthPerformance = performance.Sum;
                        }
                        // Year Performance
                        user.YearPerformance = user.YearPerformance + performance.Sum;
                    });
                }
            });
        }
        this.teamMemberPerformanceColumns = ['Username', 'CreatedOn', 'MonthPerformance', 'YearPerformance'];
        ;
        if (this._projectDashboardService.internalExternalPerformance != null && this._projectDashboardService.internalExternalPerformance.length > 0) {
            this.internalExternalPerformanceCount = [];
            this._projectDashboardService.internalExternalPerformance.map(function (p) {
                _this.internalExternalPerformanceCount.push({
                    name: p.Label,
                    value: p.OrderCount != null ? p.OrderCount : 0
                });
            });
            this.internalExternalPerformanceSum = [];
            this._projectDashboardService.internalExternalPerformance.map(function (p) {
                _this.internalExternalPerformanceSum.push({
                    name: p.Label,
                    value: p.OrderSum != null ? p.OrderSum : 0
                });
            });
        }
        if (this._projectDashboardService.performanceByStatus != null && this._projectDashboardService.performanceByStatus.length > 0) {
            this._projectDashboardService.performanceByStatus.map(function (p) {
                _this.performanceByStatus.push({
                    name: p.Label,
                    value: p.OrderCount != null ? p.OrderCount : 0
                });
            });
        }
        /**
         * Widget 11
         */
        this.widget11.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        this.widget11.dataSource = new FilesDataSource(this.widget11);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    ProjectDashboardComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    ProjectDashboardComponent.ctorParameters = function () { return [
        { type: _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_7__["FuseSidebarService"] },
        { type: app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectDashboardService"] }
    ]; };
    ProjectDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'project-dashboard',
            template: __webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/apps/dashboards/project/project.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"],
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/main/apps/dashboards/project/project.component.scss")]
        })
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FilesDataSource, _super);
    /**
     * Constructor
     *
     * @param _widget11
     */
    function FilesDataSource(_widget11) {
        var _this = _super.call(this) || this;
        _this._widget11 = _widget11;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    FilesDataSource.prototype.connect = function () {
        return this._widget11.onContactsChanged;
    };
    /**
     * Disconnect
     */
    FilesDataSource.prototype.disconnect = function () {
    };
    FilesDataSource.ctorParameters = function () { return [
        null
    ]; };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.module.ts ***!
  \****************************************************************/
/*! exports provided: ProjectDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardModule", function() { return ProjectDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.component */ "./src/app/main/apps/dashboards/project/project.component.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.service */ "./src/app/main/apps/dashboards/project/project.service.ts");

















var routes = [
    {
        path: '**',
        component: app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDashboardComponent"],
        resolve: {
            data: app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_16__["ProjectDashboardService"]
        }
    }
];
var ProjectDashboardModule = /** @class */ (function () {
    function ProjectDashboardModule() {
    }
    ProjectDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectDashboardComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_12__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_13__["FuseSidebarModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_14__["FuseWidgetModule"]
            ],
            providers: [
                app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_16__["ProjectDashboardService"]
            ]
        })
    ], ProjectDashboardModule);
    return ProjectDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardService", function() { return ProjectDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ProjectDashboardService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProjectDashboardService, _super);
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ProjectDashboardService(_httpClient, _matSnackBar, _router) {
        var _this = _super.call(this, _httpClient, _matSnackBar, _router) || this;
        _this._httpClient = _httpClient;
        _this._matSnackBar = _matSnackBar;
        _this._router = _router;
        _this.apiUrlGetSalesPerformanceByYearMonth = _this.host + "admin/Analytics/GetSalesPerformanceByYearMonth";
        _this.apiUrlGetInternalExternalSalesPerformance = _this.host + "admin/Analytics/GetInternalExternalSalesPerformance";
        _this.apiUrlGetTeamMemberSalesPerformance = _this.host + "admin/Analytics/GetTeamMemberSalesPerformance";
        _this.apiUrlGetSalesPerformanceByStatus = _this.host + "admin/Analytics/GetSalesPerformanceByStatus";
        _this.apiUrlGetRecentOrderInfo = _this.host + "admin/Analytics/GetRecentOrderInfo";
        return _this;
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProjectDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProjects(),
                _this.getWidgets(),
                _this.GetTeamMemberSalesPerformance(),
                _this.GetInternalExternalSalesPerformance(),
                _this.GetSalesPerformanceByStatus(),
                _this.GetSalesPerformanceByYearMonth(),
                _this.GetRecentOrderInfo()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    ProjectDashboardService.prototype.GetTeamMemberSalesPerformance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get(_this.apiUrlGetTeamMemberSalesPerformance)
                .subscribe(function (response) {
                _this.teamSalesPerformance = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.prototype.GetRecentOrderInfo = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.getUrl.call(_this, _this.apiUrlGetRecentOrderInfo, { Lang: localStorage.getItem('Lang') })
                .subscribe(function (response) {
                _this.recentOrdeInfo = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.prototype.GetSalesPerformanceByYearMonth = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.getUrl.call(_this, _this.apiUrlGetSalesPerformanceByYearMonth, null)
                .subscribe(function (response) {
                _this.salesPerformancePerYearAndMonth = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.prototype.GetInternalExternalSalesPerformance = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.getUrl.call(_this, _this.apiUrlGetInternalExternalSalesPerformance, { Lang: localStorage.getItem('Lang') })
                .subscribe(function (response) {
                _this.internalExternalPerformance = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.prototype.GetSalesPerformanceByStatus = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.getUrl.call(_this, _this.apiUrlGetSalesPerformanceByStatus, { Lang: localStorage.getItem('Lang') })
                .subscribe(function (response) {
                _this.performanceByStatus = response;
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get projects
     *
     * @returns {Promise<any>}
     */
    ProjectDashboardService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/project-dashboard-projects')
                .subscribe(function (response) {
                _this.projects = response;
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    ProjectDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/project-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProjectDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectDashboardService);
    return ProjectDashboardService;
}(app_app_service__WEBPACK_IMPORTED_MODULE_4__["appServiceBase"]));



/***/ })

}]);
//# sourceMappingURL=dashboards-project-project-module-es5.js.map