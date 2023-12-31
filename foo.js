"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Foo = void 0;
var Foo = /** @class */ (function () {
    function Foo(name) {
        this.name = name;
        this.name = name;
    }
    Foo.prototype.fire = function () {
        console.log("BANG!");
    };
    Foo.prototype.fireWeapon = function (weapon) {
        console.log("Fire the ".concat(weapon));
    };
    Foo.prototype.fireWeaponToString = function (weapon) {
        return Foo.Weapons[weapon];
    };
    return Foo;
}());
exports.Foo = Foo;
(function (Foo) {
    var Weapons;
    (function (Weapons) {
        Weapons[Weapons["Cannon"] = 0] = "Cannon";
        Weapons[Weapons["Torpedos"] = 1] = "Torpedos";
        Weapons[Weapons["MachineGun"] = 2] = "MachineGun";
        Weapons[Weapons["DeathRay"] = 3] = "DeathRay";
        Weapons[Weapons["NailGun"] = 4] = "NailGun";
    })(Weapons = Foo.Weapons || (Foo.Weapons = {}));
    ;
})(Foo || (exports.Foo = Foo = {}));
var myFirstFoo = new Foo('Lenny');
console.log("I am Foo and my name is ".concat(myFirstFoo.name));
myFirstFoo.fire();
myFirstFoo.fireWeapon(Foo.Weapons.Cannon);
var theWeapon;
theWeapon = myFirstFoo.fireWeaponToString(Foo.Weapons.MachineGun);
console.log("The weapon fired from toString is ".concat(theWeapon));
