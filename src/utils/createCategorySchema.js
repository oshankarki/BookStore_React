function createCategorySchema(name, value) {
    switch (name) {
        case "title":
            if (value === "")
                return "Title  is required";
            else
                return false
        default:
            break;
    }
}

export default createCategorySchema;