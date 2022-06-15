"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "----");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
//# sourceMappingURL=args-optional.js.map