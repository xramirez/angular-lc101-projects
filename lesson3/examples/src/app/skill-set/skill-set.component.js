"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillSetComponent = void 0;
const core_1 = require("@angular/core");
let SkillSetComponent = class SkillSetComponent {
    constructor() {
        this.listHeading = 'Some Coding Skills I Know';
        this.skills = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
        this.alternateColor = 'black';
        this.bulletType = 'A';
        this.changeColor = true;
    }
    ngOnInit() { }
};
SkillSetComponent = __decorate([
    (0, core_1.Component)({
        selector: 'skill-set',
        templateUrl: './skill-set.component.html',
        styleUrls: ['./skill-set.component.css']
    })
], SkillSetComponent);
exports.SkillSetComponent = SkillSetComponent;
