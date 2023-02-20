function createCouponSchema(name, value) {
    switch (name) {
        case "title":
            if (value === "")
                return "Title  is required";
            else
                return false
        case "code":
            if (value === "")
                return "Code  is required";
            else
                return false
        case "expire_date":
            if (value === "")
                return "Expire Date  is required";
            else
                return false
        case "start_date":
            if (value === "")
                return "Start Date  is required";
            else
                return false
        case "discount_percent":
            if (value === "")
                return "Discount Percent  is required";
            else
                return false
        case "max_amount":
            if (value === "")
                return "Maximum Amount  is required";
            else
                return false
        default:
            break;
    }
}

export default createCouponSchema;