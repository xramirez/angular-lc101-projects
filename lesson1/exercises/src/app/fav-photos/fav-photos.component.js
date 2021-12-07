"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavPhotosComponent = void 0;
const core_1 = require("@angular/core");
let FavPhotosComponent = class FavPhotosComponent {
    constructor() {
        this.photosTitle = 'Put Some of them on there photos on here right here:';
        this.image1 = 'assets/imgs/pointing-spidey.gif';
        this.image2 = 'assets/imgs/mob-psycho-shy.gif';
        this.image3 = 'https://c.tenor.com/Yl_rvunWEGkAAAAC/sontoyolo-face-palm.gif';
    }
    ngOnInit() {
    }
};
FavPhotosComponent = __decorate([
    (0, core_1.Component)({
        selector: 'fav-photos',
        templateUrl: './fav-photos.component.html',
        styleUrls: ['./fav-photos.component.css']
    })
], FavPhotosComponent);
exports.FavPhotosComponent = FavPhotosComponent;
