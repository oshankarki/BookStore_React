import validator from "utils/validator";
import createCategorySchema from "utils/createCategorySchema";
import Input from "common/Input";
import Button from "common/Button";
import { useState } from "react";

import { postCategory } from 'api/request.api';
import { useNavigate } from "react-router-dom";

function Create() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: ""
    });

    const [errors, setErrors] = useState({});

    const validate = validator(createCategorySchema);

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
                const res = await postCategory(data);//call axios from register
                console.log(res);
                navigate("/admin/category");
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
                                <h1>Create Category</h1>
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