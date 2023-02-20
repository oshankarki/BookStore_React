import validator from "utils/validator";
import createAuthorSchema from "utils/createAuthorSchema";
import Input from "common/Input";
import Button from "common/Button";
import { useState } from "react";

import { postAuthor } from 'api/request.api';
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        address:{
          city:"",
          country:"",
          state:""
        }
    });

    const [errors, setErrors] = useState({});

    const validate = validator(createAuthorSchema);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("address.")) {
          setData({
            ...data,
            address: {
              ...data.address,
              [name.substring(8)]: value
            }
          });
        } else {
          setData({ ...data, [name]: value });
        }

        validate(name, value, { errors, setErrors });
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
                const res = await postAuthor(data);//call axios from register
                console.log(res);
                navigate("/admin/author");
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
                <div
                    className="row vh-100 justify-content-center align-items-center"
                    style={{ backgroundColor: "darkgray" }}
                >
                    <div className="col-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Create author</h1>
                            </div>

                            <div className="col-12 border rounded-2 p-5 bg-white">
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        label="Name"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={data.name}
                                        error={errors?.name}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="Country"
                                        type="text"
                                        name="address.country"
                                        id="country"
                                        value={data.address.country}
                                        error={errors?.address?.country}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="City"
                                        type="text"
                                        name="address.city"
                                        id="city"
                                        value={data.address.city}
                                        error={errors?.address?.city}
                                        handler={handleChange}
                                    />
                                    <Input
                                        label="State"
                                        type="text"
                                        name="address.state"
                                        id="state"
                                        value={data.address.state}
                                        error={errors?.address?.state}
                                        handler={handleChange}
                                    />
                                    <Button type="submit" label="Create" color="primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;
