webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/example-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_path__ = __webpack_require__("../../../../path-framework-weberm16/app/path-framework/path.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gui_model_guimodel__ = __webpack_require__("../../../../../src/app/gui-model/guimodel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui_model_form_handlers__ = __webpack_require__("../../../../../src/app/gui-model/form/handlers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gui_model_form_handlers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__gui_model_form_handlers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gui_model_generated_forms__ = __webpack_require__("../../../../../src/app/gui-model/generated/forms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gui_model_generated_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__gui_model_generated_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path_framework_weberm16_app_path_framework_service_translation_service__ = __webpack_require__("../../../../path-framework-weberm16/app/path-framework/service/translation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__example_translation_service__ = __webpack_require__("../../../../../src/app/example-translation-service.ts");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* angular/path imports */


/* model imports */





var ExampleAppComponent = (function (_super) {
    __extends(ExampleAppComponent, _super);
    function ExampleAppComponent(pathService, translationService) {
        var _this = _super.call(this, pathService, translationService) || this;
        _this._appConfig = new __WEBPACK_IMPORTED_MODULE_2__gui_model_guimodel__["a" /* GuiModel */]();
        return _this;
    }
    ExampleAppComponent.prototype.getFrontendVersion = function () {
        return "0.2.15";
    };
    ExampleAppComponent.prototype.getStartPage = function () {
        return "mainmenu";
    };
    ExampleAppComponent.prototype.getOwnUserForm = function () {
        return "UserForm";
    };
    ExampleAppComponent.prototype.getGuiModel = function () {
        if (this._appConfig != null) {
            return this._appConfig.guiModel;
        }
        return null;
    };
    ExampleAppComponent.prototype.getBackendUrl = function () {
        return "https://path-example-weberm16.herokuapp.com/services";
    };
    ExampleAppComponent.prototype.getBeans = function () {
        return __WEBPACK_IMPORTED_MODULE_4__gui_model_generated_forms__;
    };
    ExampleAppComponent.prototype.getHandlers = function () {
        return __WEBPACK_IMPORTED_MODULE_3__gui_model_form_handlers__;
    };
    return ExampleAppComponent;
}(__WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_path__["PathAppComponent"]));
ExampleAppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'path-application',
        template: __webpack_require__("../../../../path-framework-weberm16/app/path-framework/path-app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_path__["PathService"], { provide: __WEBPACK_IMPORTED_MODULE_5_path_framework_weberm16_app_path_framework_service_translation_service__["a" /* TranslationService */], useClass: __WEBPACK_IMPORTED_MODULE_6__example_translation_service__["a" /* ExampleTranslationService */] }]
    }),
    __metadata("design:paramtypes", [typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_path__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_path__).PathService) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_path_framework_weberm16_app_path_framework_service_translation_service__["a" /* TranslationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_path_framework_weberm16_app_path_framework_service_translation_service__["a" /* TranslationService */]) === "function" && _b || Object])
], ExampleAppComponent);

var _a, _b;
//# sourceMappingURL=example-app.component.js.map

/***/ }),

/***/ "../../../../../src/app/example-app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleAppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__example_app_component__ = __webpack_require__("../../../../../src/app/example-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_framework_weberm16_app_app_module__ = __webpack_require__("../../../../path-framework-weberm16/app/app.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExampleAppModule = (function () {
    function ExampleAppModule() {
    }
    return ExampleAppModule;
}());
ExampleAppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2_path_framework_weberm16_app_app_module__["a" /* AppModule */].forRoot()],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__example_app_component__["a" /* ExampleAppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__example_app_component__["a" /* ExampleAppComponent */]],
    })
], ExampleAppModule);

//# sourceMappingURL=example-app.module.js.map

/***/ }),

/***/ "../../../../../src/app/example-translation-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleTranslationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_service_translation_service__ = __webpack_require__("../../../../path-framework-weberm16/app/path-framework/service/translation.service.ts");
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ExampleTranslationService = (function (_super) {
    __extends(ExampleTranslationService, _super);
    function ExampleTranslationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleTranslationService.prototype.getTranslation = function (key) {
        var myTranslations = this.createTranslationMap(this.getExampleTranslations());
        // prefer custom translations
        if (myTranslations.get(key) == null) {
            return _super.prototype.getTranslation.call(this, key);
        }
        return myTranslations.get(key);
    };
    ExampleTranslationService.prototype.getExampleTranslations = function () {
        var languageCode = this.getUserLanguage();
        // put additional application translations here
        if (languageCode == "de") {
            return {
                "AddTask": "Task hinzufügen",
                "Birthday": "Geburtstag",
                "City": "Ort",
                "Contacts": "Freunde",
                "Company": "Firma",
                "CompanyName": "Firma Name",
                "Companies": "Firmen",
                "Comments": "Kommentar",
                "EditCompany": "Firma bearbeiten",
                "EditPerson": "Person bearbeiten",
                "EditTask": "Aufgabe bearbeiten",
                "ElementTest": "Element-Test",
                "EndDate": "Enddatum",
                "FamilyName": "Nachname",
                "FirstName": "Vorname",
                "Hobbies": "Hobbys",
                "Hobby": "Hobby",
                "HobbyName": "Hobby Name",
                "InlineForm": "Inline Form",
                "NewCompany": "Neue Firma",
                "NewHobby": "Neues Hobby",
                "NewPerson": "Neue Person",
                "NewProject": "Neues Projekt",
                "NewTask": "Neue Aufgabe",
                "Person": "Person",
                "Project": "Projekt",
                "Projects": "Projekte",
                "ProjectName": "Projekt Name",
                "Recipes": "Rezepte",
                "StartDate": "Startdatum",
                "Tasks": "Aufgaben",
                "Task": "Aufgabe",
                "TaskName": "Aufgabe Name",
                "User": "Benutzer",
                "www.google.com": "www.google.com"
            };
        }
        else {
            return {
                "AddTask": "Add Task",
                "Birthday": "Birthday",
                "City": "City",
                "Contacts": "Contacts",
                "Company": "Company",
                "CompanyName": "Company Name",
                "Companies": "Companies",
                "Comments": "Comments",
                "EditCompany": "Edit Company",
                "EditPerson": "Edit Person",
                "EditTask": "Edit Task",
                "ElementTest": "Element Test",
                "EndDate": "End date",
                "FamilyName": "Family name",
                "FirstName": "First name",
                "Hobbies": "Hobbies",
                "Hobby": "Hobby",
                "HobbyName": "Hobby Name",
                "InlineForm": "Inline Form",
                "NewCompany": "New Company",
                "NewHobby": "New Hobby",
                "NewPerson": "New Person",
                "NewProject": "New Project",
                "NewTask": "New Task",
                "Person": "Person",
                "Project": "Project",
                "Projects": "Projects",
                "ProjectName": "Project Name",
                "StartDate": "Start date",
                "Tasks": "Tasks",
                "Task": "Task",
                "TaskName": "Task Name",
                "User": "User",
                "www.google.com": "www.google.com"
            };
        }
    };
    return ExampleTranslationService;
}(__WEBPACK_IMPORTED_MODULE_1_path_framework_weberm16_app_path_framework_service_translation_service__["a" /* TranslationService */]));
ExampleTranslationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ExampleTranslationService);

//# sourceMappingURL=example-translation-service.js.map

/***/ }),

/***/ "../../../../../src/app/gui-model/form/handlers.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=handlers.js.map

/***/ }),

/***/ "../../../../../src/app/gui-model/generated/forms.ts":
/***/ (function(module, exports) {

// TODO in future versions these classes will be generated from gui model
//# sourceMappingURL=forms.js.map

/***/ }),

/***/ "../../../../../src/app/gui-model/guimodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiModel; });
var GuiModel = (function () {
    function GuiModel() {
        this._guiModel = {
            "application": {
                "title": "Path Example Cordova",
                "formList": [
                    {
                        "id": "PersonForm",
                        "title": "Person",
                        "url": "/person",
                        "formFieldList": [
                            {
                                "id": "familyName",
                                "type": "text",
                                "name": "FamilyName",
                                "width": 1,
                                "required": true
                            },
                            {
                                "id": "firstName",
                                "type": "text",
                                "name": "FirstName",
                                "width": 1,
                                "required": true
                            },
                            {
                                "id": "company",
                                "type": "autocomplete",
                                "name": "Company",
                                "wordSearchEnabled": true,
                                "defaultKey": "companyKey",
                                "form": "CompanyForm",
                                "url": "/company",
                                "width": 2
                            },
                            {
                                "id": "evtBirth",
                                "type": "date",
                                "name": "Birthday",
                                "width": 2
                            },
                            {
                                "id": "evtMobile",
                                "type": "number",
                                "name": "MobileNumber",
                                "width": 2
                            },
                            {
                                "id": "comment",
                                "type": "text",
                                "name": "Comments",
                                "width": 2,
                                "height": 4,
                                "maxLength": 5000,
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "CompanyForm",
                        "title": "Company",
                        "url": "/company",
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "text",
                                "name": "CompanyName",
                                "width": 2,
                                "required": true
                            },
                            {
                                "id": "city",
                                "type": "text",
                                "name": "City",
                                "width": 2,
                                "required": true
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "InlineTestForm",
                        "title": "Company",
                        "url": "/company",
                        "borderStyle": "None",
                        "headerVisible": false,
                        "footerVisible": false,
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "text",
                                "name": "CompanyName",
                                "width": 2,
                                "required": true
                            },
                            {
                                "id": "city",
                                "type": "text",
                                "name": "City",
                                "width": 2,
                                "required": true
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "ProjectForm",
                        "title": "Project",
                        "url": "/project",
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "text",
                                "name": "ProjectName",
                                "width": 2,
                                "required": true
                            },
                            {
                                "id": "company",
                                "type": "autocomplete",
                                "name": "Company",
                                "wordSearchEnabled": true,
                                "defaultKey": "companyKey",
                                "form": "CompanyForm",
                                "url": "/company",
                                "width": 2,
                                "required": true
                            },
                            {
                                "id": "evtStart",
                                "type": "date",
                                "name": "StartDate",
                                "width": 1
                            },
                            {
                                "id": "evtEnd",
                                "type": "date",
                                "name": "EndDate",
                                "width": 1
                            },
                            {
                                "id": "comment",
                                "type": "text",
                                "name": "Comments",
                                "width": 2,
                                "height": 4,
                                "maxLength": 5000,
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "HobbyForm",
                        "title": "Hobby",
                        "url": "/hobby",
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "translation",
                                "name": "HobbyName",
                                "width": 2,
                                "required": true
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "TaskForm",
                        "title": "Task",
                        "url": "/task",
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "text",
                                "name": "TaskName",
                                "width": 2,
                                "required": true
                            },
                            {
                                "id": "project",
                                "type": "autocomplete",
                                "name": "Project",
                                "wordSearchEnabled": true,
                                "defaultKey": "projectKey",
                                "form": "ProjectForm",
                                "url": "/project",
                                "width": 2,
                                "required": true
                            },
                            {
                                "id": "evtStart",
                                "type": "date",
                                "name": "StartDate",
                                "width": 1
                            },
                            {
                                "id": "evtEnd",
                                "type": "date",
                                "name": "EndDate",
                                "width": 1
                            },
                            {
                                "id": "comment",
                                "type": "text",
                                "name": "Comments",
                                "width": 2,
                                "height": 4,
                                "maxLength": 5000,
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "AddTaskForm",
                        "title": "AddTask",
                        "url": "/person/:personKey/task",
                        "formFieldList": [
                            {
                                "id": "taskKey",
                                "type": "autocomplete",
                                "name": "Task",
                                "wordSearchEnabled": true,
                                "url": "/task",
                                "width": 2,
                                "form": "TaskForm",
                                "required": true,
                                "readonly": true,
                                "defaultKey": "taskKey"
                            },
                            {
                                "id": "personKey",
                                "type": "autocomplete",
                                "name": "Person",
                                "wordSearchEnabled": true,
                                "url": "/person",
                                "width": 2,
                                "required": true,
                                "readonly": true,
                                "defaultKey": "personKey"
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete"
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                    {
                        "id": "UserForm",
                        "title": "Person",
                        "formFieldList": [
                            {
                                "id": "name",
                                "type": "text",
                                "name": "User",
                                "width": 2,
                                "required": true,
                            },
                            {
                                "type": "cancelButton",
                                "name": "Cancel"
                            },
                            {
                                "type": "okButton",
                                "name": "Ok"
                            }
                        ]
                    },
                ],
                "pageList": [
                    {
                        "id": "mainmenu",
                        "name": "MainMenu",
                        "elementList": [
                            {
                                "type": "button",
                                "name": "Contacts",
                                "icon": "fa-user",
                                "color": "blue",
                                "page": "contactspage",
                            },
                            {
                                "type": "button",
                                "name": "Companies",
                                "icon": "fa-industry",
                                "color": "lime",
                                "page": "companiespage",
                            },
                            {
                                "type": "button",
                                "name": "Projects",
                                "icon": "fa-cubes",
                                "color": "yellow",
                                "page": "projectspage",
                            },
                            {
                                "type": "button",
                                "name": "Hobbies",
                                "icon": "fa-bicycle",
                                "color": "carrot",
                                "page": "hobbiespage",
                            },
                            {
                                "type": "button",
                                "name": "Tasks",
                                "icon": "fa-tasks",
                                "color": "wisteria",
                                "page": "taskspage",
                            },
                            {
                                "type": "button",
                                "name": "ElementTest",
                                "icon": "fa-globe",
                                "width": 2,
                                "color": "asbestos",
                                "page": "elementspage",
                            }
                        ]
                    },
                    {
                        "id": "contactspage",
                        "name": "Contacts",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewPerson",
                                "icon": "fa-user",
                                "color": "green",
                                "form": {
                                    "form": "PersonForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "PersonList",
                                "icon": "fa-user",
                                "color": "blue",
                                "search": true,
                                "url": "/person",
                                "page": "personpage",
                            },
                        ]
                    },
                    {
                        "id": "personpage",
                        "name": "Person",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "button",
                                "name": "EditPerson",
                                "icon": "fa-user",
                                "color": "green",
                                "form": {
                                    "form": "PersonForm"
                                }
                            },
                            {
                                "type": "button",
                                "name": "Hobbies",
                                "icon": "fa-bicycle",
                                "color": "carrot",
                                "page": "personhobbiespage",
                            },
                            {
                                "type": "button",
                                "name": "Tasks",
                                "icon": "fa-tasks",
                                "color": "wisteria",
                                "page": "persontaskspage",
                            }
                        ]
                    },
                    {
                        "id": "personhobbiespage",
                        "name": "Hobbies",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "list",
                                "name": "HobbyList",
                                "icon": "fa-bicycle",
                                "color": "carrot",
                                "search": true,
                                "url": "/person/:personKey/hobby"
                            },
                        ]
                    },
                    {
                        "id": "persontaskspage",
                        "name": "Tasks",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "button",
                                "name": "AddTask",
                                "icon": "fa-tasks",
                                "color": "green",
                                "form": {
                                    "form": "AddTaskForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "Tasks",
                                "icon": "fa-tasks",
                                "color": "wisteria",
                                "search": true,
                                "url": "/person/:personKey/task",
                                "form": {
                                    "form": "AddTaskForm"
                                }
                            },
                        ]
                    },
                    {
                        "id": "companiespage",
                        "name": "Companies",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewCompany",
                                "width": 2,
                                "icon": "fa-industry",
                                "color": "green",
                                "form": {
                                    "form": "CompanyForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "CompanyList",
                                "icon": "fa-industry",
                                "color": "lime",
                                "search": true,
                                "url": "/company",
                                "page": "companypage"
                            },
                        ]
                    },
                    {
                        "id": "companypage",
                        "name": "Company",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "button",
                                "name": "EditCompany",
                                "icon": "fa-industry",
                                "color": "green",
                                "form": {
                                    "form": "CompanyForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "PersonList",
                                "icon": "fa-user",
                                "color": "blue",
                                "search": true,
                                "url": "/company/:companyKey/person",
                                "form": {
                                    "form": "PersonForm"
                                }
                            },
                        ]
                    },
                    {
                        "id": "projectspage",
                        "name": "Projects",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewProject",
                                "icon": "fa-cubes",
                                "color": "green",
                                "form": {
                                    "form": "ProjectForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "ProjectList",
                                "icon": "fa-cubes",
                                "color": "yellow",
                                "search": true,
                                "url": "/project",
                                "form": {
                                    "form": "ProjectForm"
                                }
                            },
                        ]
                    },
                    {
                        "id": "hobbiespage",
                        "name": "Hobbies",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewHobby",
                                "icon": "fa-bicycle",
                                "color": "green",
                                "form": {
                                    "form": "HobbyForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "HobbyList",
                                "icon": "fa-bicycle",
                                "color": "carrot",
                                "search": true,
                                "url": "/hobby",
                                "form": {
                                    "form": "HobbyForm"
                                }
                            },
                        ]
                    },
                    {
                        "id": "taskspage",
                        "name": "Tasks",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "newButton",
                                "name": "NewTask",
                                "icon": "fa-tasks",
                                "color": "green",
                                "form": {
                                    "form": "TaskForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "TaskList",
                                "icon": "fa-tasks",
                                "color": "wisteria",
                                "search": true,
                                "url": "/task",
                                "page": "taskpage"
                            },
                        ]
                    },
                    {
                        "id": "taskpage",
                        "name": "Task",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "button",
                                "name": "EditTask",
                                "icon": "fa-tasks",
                                "color": "green",
                                "form": {
                                    "form": "TaskForm"
                                }
                            },
                            {
                                "type": "list",
                                "name": "PersonList",
                                "icon": "fa-user",
                                "color": "blue",
                                "search": true,
                                "url": "/task/:taskKey/person",
                                "form": {
                                    "form": "PersonForm"
                                }
                            },
                        ]
                    },
                    {
                        "id": "elementspage",
                        "name": "Elements",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "button",
                                "name": "InlineForm",
                                "width": 2,
                                "icon": "fa-forward",
                                "color": "blue",
                                "page": "inlineFormPage",
                            },
                            {
                                "type": "linkButton",
                                "name": "www.google.com",
                                "width": 2,
                                "icon": "fa-google",
                                "color": "amethyst",
                                "url": "http://www.google.com"
                            },
                            {
                                "type": "deleteButton",
                                "name": "Delete",
                                "icon": "fa-user",
                                "color": "red"
                            },
                            {
                                "type": "list",
                                "name": "LinkList",
                                "icon": "fa-link",
                                "color": "teal",
                                "search": false,
                                "url": "/company/link"
                            },
                        ]
                    },
                    {
                        "id": "inlineFormPage",
                        "name": "Elements",
                        "elementList": [
                            {
                                "type": "backbutton",
                            },
                            {
                                "type": "inlineForm",
                                "form": "InlineTestForm",
                                "url": "/company"
                            },
                            {
                                "type": "list",
                                "name": "LinkList",
                                "icon": "fa-link",
                                "color": "teal",
                                "search": false,
                                "url": "/company/link"
                            },
                            {
                                "type": "inlineForm",
                                "form": "CompanyForm",
                                "url": "/company"
                            },
                            {
                                "type": "list",
                                "name": "LinkList",
                                "icon": "fa-link",
                                "color": "teal",
                                "search": false,
                                "url": "/company/link"
                            },
                        ]
                    },
                ]
            }
        };
    }
    Object.defineProperty(GuiModel.prototype, "guiModel", {
        get: function () {
            return this._guiModel;
        },
        enumerable: true,
        configurable: true
    });
    return GuiModel;
}());

//# sourceMappingURL=guimodel.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_example_app_module__ = __webpack_require__("../../../../../src/app/example-app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_example_app_module__["a" /* ExampleAppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map