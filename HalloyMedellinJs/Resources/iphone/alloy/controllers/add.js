function Controller() {
    function saveBook() {
        var books = Alloy.Collections.book;
        var b = Alloy.createModel("book", {
            title: $.titleTextField.value,
            author: $.authorTextField.value
        });
        books.add(b);
        b.save();
        books.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "add";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.add = Ti.UI.createWindow({
        backgroundColor: "#FFFFFF",
        title: "Tab 1",
        layout: "vertical",
        id: "add"
    });
    $.__views.add && $.addTopLevelView($.__views.add);
    $.__views.titleLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Title",
        id: "titleLabel"
    });
    $.__views.add.add($.__views.titleLabel);
    $.__views.titleTextField = Ti.UI.createTextField({
        width: "90%",
        height: "60",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "titleTextField",
        hintText: "A title"
    });
    $.__views.add.add($.__views.titleTextField);
    $.__views.authorLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Author",
        id: "authorLabel"
    });
    $.__views.add.add($.__views.authorLabel);
    $.__views.authorTextField = Ti.UI.createTextField({
        width: "90%",
        height: "60",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "authorTextField",
        hintText: "An author"
    });
    $.__views.add.add($.__views.authorTextField);
    $.__views.saveButton = Ti.UI.createButton({
        id: "saveButton",
        title: "Save"
    });
    $.__views.add.add($.__views.saveButton);
    saveBook ? $.__views.saveButton.addEventListener("click", saveBook) : __defers["$.__views.saveButton!click!saveBook"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.saveButton!click!saveBook"] && $.__views.saveButton.addEventListener("click", saveBook);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;