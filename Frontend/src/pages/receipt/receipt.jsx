
import React, { useRef } from 'react';
import { useFormData } from '../../FormDataContext/FormDataContext';
import Navbar from '../../Components/navbar/Navbar1';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './receipt.css';
function Receipt() {
    const { formData, updateFormData } = useFormData();
    const { state, district, crop, quantity, date } = formData;
    console.log(formData);
    const downloadPDF = () => {
        const capture = document.querySelector('.page');
        const options = {
            ignoreElements: element => element.classList.contains('exclude')
        };
        html2canvas(capture,options).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4', true);
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
                <h1 className="heading1">APMC-Appointment</h1>
                <div class="page">
                    <div class="heading">Appointment</div>
                    
                    <div class='content'>
                        <div class="sub-heading">Name</div>
                        <div class="data">{}</div>
                    </div>

                    <div class='content'>
                        <div class="sub-heading">District</div>
                        <div class="data">{}</div>
                    </div>

                    <div class='content'>
                        <div class="sub-heading">Crop</div>
                        <div class="data">{crop}</div>
                    </div>

                    <div class='content'>
                        <div class="sub-heading">Date</div>
                        <div class="data">{date}</div>
                    </div>

                    <div class='content'>
                        <div class="sub-heading">Quantity</div>
                        <div class="data">{quantity}</div>
                    </div>
                    <Button onClick={downloadPDF} class='bootoon' variant='contained'>Download </Button>
                </div>
            </div>
        </>
    );
};


export default Receipt;
