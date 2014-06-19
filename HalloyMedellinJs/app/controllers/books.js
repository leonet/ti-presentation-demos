$.books.open();
 
// Encase the title attribute in square brackets
function transformFunction(model) {
    // Need to convert the model to a JSON object
    var transform = model.toJSON();
    transform.title = "[" + transform.title + "]";
    // Example of creating a custom attribute, reference in the view using {custom}
    transform.custom = transform.title + " by " + transform.author;
    return transform;
}

// Show only book models by Mark Twain
function filterFunction(collection) {
    return collection.where({author: "Mark Twain"});
}
 
function refreshTable() {
    // Trigger the binding function identified by the dataFunction attribute
    updateUI();
}

// Trigger the synchronization
var library = Alloy.Collections.book;
library.fetch();
 
// Free model-view data binding resources when this view-controller closes
$.books.addEventListener("close", function() {
    $.destroy();
});