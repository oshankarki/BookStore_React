function createAuthorSchema(name, value) {
    switch (name) {
        case "name":
            if (value === "") return "Name is required";
            else return false;
        case "address[country]":
            if (value === "") return "Country is required";
            else return false;
        case "address[city]":
            if (value === "") return "City is required";
            else return false;
        case "address[state]":
            if (value === "") return "State is required";
            else return false;
        default:
            break;
    }
}

export default createAuthorSchema;