"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieListComponent = void 0;
const core_1 = require("@angular/core");
let MovieListComponent = class MovieListComponent {
    constructor() {
        this.movies = ['The Manchurian Candidate', 'Oceans 8', 'School of Rock', 'Star Wars: Rogue One'];
    }
    ngOnInit() {
    }
};
MovieListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'movie-list',
        templateUrl: './movie-list.component.html',
        styleUrls: ['./movie-list.component.css']
    })
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
