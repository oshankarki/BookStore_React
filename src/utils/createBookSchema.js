function createBookSchema(name, value) {
    switch (name) {
        case "title":
            if (value === "") {
                return "Title is required";
            } else {
                return false;
            }
        case "category":
            if (!value.title) {
                return "Category is required";
            } else {
                return false;
            }
        case "price":
            if (value === "") {
                return "Price is required";
            } else {
                return false;
            }
        default:
            break;
    }
}

export default createBookSchema;