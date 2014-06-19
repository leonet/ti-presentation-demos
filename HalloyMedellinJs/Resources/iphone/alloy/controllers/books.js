function Controller() {
    function updateUI(e) {
        if (e && e.fromAdapter) return;
        updateUI.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = transformFunction(__alloyId3);
            var __alloyId5 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["title"] ? __alloyId3.__transform["title"] : __alloyId3.get("title")
            });
            rows.push(__alloyId5);
        }
        $.__views.__alloyId2.setData(rows);
    }
    function transformFunction(model) {
        var transform = model.toJSON();
        transform.title = "[" + transform.title + "]";
        transform.custom = transform.title + " by " + transform.author;
        return transform;
    }
    function refreshTable() {
        updateUI();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "books";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("book");
    $.__views.books = Ti.UI.createWindow({
        id: "books"
    });
    $.__views.books && $.addTopLevelView($.__views.books);
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.books.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["book"] || book;
    __alloyId6.on("fetch destroy change add remove reset", updateUI);
    refreshTable ? $.__views.__alloyId2.addEventListener("dragEnd", refreshTable) : __defers["$.__views.__alloyId2!dragEnd!refreshTable"] = true;
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", updateUI);
    };
    _.extend($, $.__views);
    $.books.open();
    var library = Alloy.Collections.book;
    library.fetch();
    $.books.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.__alloyId2!dragEnd!refreshTable"] && $.__views.__alloyId2.addEventListener("dragEnd", refreshTable);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;