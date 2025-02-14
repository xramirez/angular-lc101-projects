"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidatesComponent = void 0;
const core_1 = require("@angular/core");
let CandidatesComponent = class CandidatesComponent {
    constructor() {
        this.missionName = "LaunchCode Moonshot";
        this.candidates = [
            { name: 'Rusty Rutabaga', data: { age: 5, mass: '0.75 kg', sidekick: 'Blake' }, image: 'assets/images/Blake.png' },
            { name: 'Tessa Tortoise', data: { age: 126, mass: '113 kg', sidekick: 'Sally' }, image: 'assets/images/Sally.png' },
            { name: 'Bernie Beagle', data: { age: 4, mass: '15 kg', sidekick: 'Paul' }, image: 'assets/images/Paul.png' },
            { name: 'Jackalope', data: { age: 45, mass: '33 kg', sidekick: 'Chris' }, image: 'assets/images/Chris.png' },
            { name: 'Champ', data: { age: 9, mass: '36 kg', sidekick: 'Carly' }, image: 'assets/images/Carly.png' }
        ];
        this.crew = [];
    }
    ngOnInit() {
    }
    // Code the addToCrew function here:
    addToCrew(newMember) {
        if (!this.crew.includes(newMember)) {
            this.crew.push(newMember);
            console.log(this.crew);
        }
    }
    // BONUS: Code the changeMissionName function here:
    changeMissionName(newName) {
        this.missionName = newName;
    }
};
CandidatesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'candidates',
        templateUrl: './candidates.component.html',
        styleUrls: ['./candidates.component.css']
    })
], CandidatesComponent);
exports.CandidatesComponent = CandidatesComponent;
