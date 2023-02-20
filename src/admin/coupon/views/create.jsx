import validator from "utils/validator";
import Input from "common/Input";
import Button from "common/Button";
import { useState } from "react";

import { postCoupon } from 'api/request.api';
import { useNavigate } from "react-router-dom";
import createCouponSchema from "utils/createCouponSchema";
function Create() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        code:"",
        expire_date: "",
        start_date:"",
        discount_percent:"",
        max_amount: ""
    });

    const [errors, setErrors] = useState({});

    const validate = validator(createCouponSchema);

    const handleChange = (e) => {
            const { name, value } = e.target;
            validate(name, value, { errors, setErrors });
            setData({ ...data, [name]: value });
    }
   
    const isValid = () => {
        for (const [key, value] of Object.entries(data))
            validate(key, value, { errors, setErrors })

        if (Object.keys(errors).length === 0)
            return true
        else
            return false
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isValid()) {
            try{
                const res = await postCoupon(data);//call axios from register
                console.log(res);
                navigate("/admin/banner");
            }catch(err)
            {
                setErrors(err.response.data.error);
            }
        } else {
            console.log("Form validation failed");
        }
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row vh-100 justify-content-center align-items-center" style={{ "backgroundColor": "darkgray" }}>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Create Coupon</h1>
                            </div>

                            <div className="col-12 border rounded-2 p-5 bg-white">
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        label="Title"
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={data.title}
                                        error={errors?.title}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="Code"
                                        type="text"
                                        name="code"
                                        id="code"
                                        value={data.code}
                                        error={errors?.code}
                                        handler={handleChange}
                                    />
                                     <Input
                                        label="Start Date"
                                        type="date"
                                        name="start_date"
                                        id="start_date"
                                        value={data.start_date}
                                        error={errors?.start_date}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="Expire Date"
                                        type="date"
                                        name="expire_date"
                                        id="expire_date"
                                        value={data.expire_date}
                                        error={errors?.expire_date}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="Discount Percent"
                                        type="number"
                                        name="discount_percent"
                                        id="discount_percent"
                                        value={data.discount_percent}
                                        error={errors?.discount_percent}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="Maximum Amount"
                                        type="number"
                                        name="max_amount"
                                        id="max_amount"
                                        value={data.max_amount}
                                        error={errors?.max_amount}
                                        handler={handleChange}
                                    />
                                    <Button
                                        type="submit"
                                        label="Create"
                                        color="primary"
                                    />

                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;