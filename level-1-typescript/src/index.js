"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
var isOpen = false;
var myName = "Calaway";
var myAge = 36.6;
var list = [0, 1, 2];
var tuple = ["Calaway", 32, false];
var Job;
(function (Job) {
    Job[Job["WebDev"] = 0] = "WebDev";
    Job[Job["WebDesigner"] = 1] = "WebDesigner";
    Job[Job["PM"] = 2] = "PM";
})(Job || (Job = {}));
var job = Job.WebDev;
var phone = "Pixel";
var sayWord = function (word) {
    if (word === void 0) { word = "Hello"; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
sayWord("foo", "bar", "baz");
sayWord("3");
var newName = "Scott";
newName = "Wes";
var newNameTwo = newName;
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin("10");
var dog;
dog = null;
dog = "Lucie";
dog = undefined;
var myCat = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("My cat's name is " + name + " and he is " + age + " years old");
    return { name: name, age: age };
};
myCat({ name: "Bugsy", age: 11 });
myCat({ name: "Bugsy" });
console.log("Permission.Execute: ", interfaces_1.Permission.Execute);
var createPermission = function (PermissionType) { };
createPermission(interfaces_1.Permission.Read);
console.log("Permission2.Execute: ", interfaces_1.Permission2.Execute);
var createPermission2 = function (PermissionType) { };
createPermission2(interfaces_1.Permission2.Read);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log("gooooal");
        return "goal!";
    };
    return Team;
}());
var redWings = new Team("Red Wings");
redWings.score();
redWings.teamName;
