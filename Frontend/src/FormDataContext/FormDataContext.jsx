import { createContext, useContext, useState } from "react";
import React from "react";

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        state: '',
        district: '',
        crop: '',
        quantity: '',
        date: '',
    });

    const updateFormData = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            ...data,
        }));
    };

    return (
        <FormDataContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormDataContext.Provider>
    );
};