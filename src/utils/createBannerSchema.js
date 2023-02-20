function createBannerSchema(name, value) {
    switch (name) {
        case "title":
            if (value === "")
                return "Title  is required";
            else
                return false
        case "expire_date":
            if (value === "")
                return "Expire Date is Required";
            else
                return false
        default:
            break;
    }
}

export default createBannerSchema;