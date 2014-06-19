function saveBook(e) {
    var books = Alloy.Collections.book;
    
    var b = Alloy.createModel("book", {
        title: $.titleTextField.value, 
        author: $.authorTextField.value
    });
    
    // add new model to the global collection
    books.add(b);

    // save the model to persistent storage
    b.save();

    // reload the tasks
    books.fetch();
}