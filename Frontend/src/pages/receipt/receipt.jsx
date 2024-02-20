import React from 'react';
import { useFormData } from '../../FormDataContext/FormDataContext';
import Navbar from '../../Components/navbar/Navbar1';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './receipt.css';
function Receipt() {
    const { formData } = useFormData();
    const { state, district, crop, quantity, date } = formData;
    console.log(formData);
    const downloadPDF = () => {
        const capture = document.querySelector('.pdf-template');
        html2canvas(capture, {
            ignoreElements: (element) => element.classList.contains("button")
        }).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4',true);
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('receipt.pdf');
        })
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className="pdf-template">
                    <h1 className="heading">APMC-Appointment</h1>
                    <div className="content">
                        <label className="label">Name : </label>
                        <p>{ }</p>
                        <label className="label">Email : </label>
                        <p>{ }</p>
                        <label className="label">Adhar Number : </label>
                        <p>{ }</p>
                        <label className="label">District : </label>
                        <p>{district}</p>
                        <label className="label">Crop : </label>
                        <p>{crop}</p>
                        <label className="label">Quantity : </label>
                        <p>{quantity}</p>
                        <label className="label">Date : </label>
                        <p>{date}</p>
                    </div>
                    <Button onClick={downloadPDF} className='button' variant='contained'>Download </Button>
                </div>
            </div>
        </>
    );
};

export default Receipt;
