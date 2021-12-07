"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoresComponent = void 0;
const core_1 = require("@angular/core");
let ChoresComponent = class ChoresComponent {
    constructor() {
        this.chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
        this.finishedChores = [];
        this.targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
    }
    ngOnInit() {
    }
};
ChoresComponent = __decorate([
    (0, core_1.Component)({
        selector: 'chores',
        templateUrl: './chores.component.html',
        styleUrls: ['./chores.component.css']
    })
], ChoresComponent);
exports.ChoresComponent = ChoresComponent;
