function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId7 = [];
    $.__views.addTab = Alloy.createController("add", {
        id: "addTab"
    });
    $.__views.__alloyId8 = Ti.UI.createTab({
        window: $.__views.addTab.getViewEx({
            recurse: true
        }),
        title: "Tab 1",
        icon: "KS_nav_ui.png",
        id: "__alloyId8"
    });
    __alloyId7.push($.__views.__alloyId8);
    $.__views.addTab = Alloy.createController("books", {
        id: "addTab"
    });
    $.__views.__alloyId10 = Ti.UI.createTab({
        window: $.__views.addTab.getViewEx({
            recurse: true
        }),
        title: "Tab 2",
        icon: "KS_nav_views.png",
        id: "__alloyId10"
    });
    __alloyId7.push($.__views.__alloyId10);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId7,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;