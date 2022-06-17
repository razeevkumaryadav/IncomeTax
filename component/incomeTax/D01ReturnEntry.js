import { React, useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import useFormValidate from '../validation/useFormValidate';

import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../redux/annex/annexAction';
import { getTaxPayerInfoForD01,updateTaxPayerInforForD01Register } from '../../redux/incomeTax/incomeTaxAction';
import {ToastContainer,toast} from 'react-toastify';
import Link from 'next/link'


const D01ReturnEntry = () => {



    const dispatch = useDispatch();

   
    // recieve data from store
    const taxpayerInfoD01Data = useSelector((state) => state.taxPayerInfoForD01.incomeTaxPayerInfoForD01);
   
    // useEffect(()=>{
    //     // const taxpayerInfoD01Data = useSelector((state) => state.taxPayerInfoForD01.incomeTaxPayerInfoForD01);
    // },[])
  
    
    const errorMessage = useSelector((state)=>state.taxPayerInfoForD01.message);
    console.log("error here:",errorMessage); 
    
  
    const [taxPayerInfoForD01, settaxPayerInfoForD01] = useState('');
    const handleBlur = (event) => {
        const { name, value } = event.target;

        dispatch(getTaxPayerInfoForD01(value))
      }

    
    //  const[contctNo, setContcatNo]=useState('');
    //  const[email, setEmail]=useState('');
    //  handleChangeNo =(event)=>
    //  {

    //  }
    //  handleChangeEmail=()=>
    //  {

    //  }
    const onHandleChange = (event)=>
    {
        const KeyValue = {}
        KeyValue.field = event.target.name;
        KeyValue.value = event.target.value
        console.log(event.target.value.length)
        if(event.target.value.length ===10)
        {
             console.log(KeyValue);
            dispatch(updateTaxPayerInforForD01Register(KeyValue))
        }
    }

    const { handleChange, values, errors } = useFormValidate();






    return (
        <div>
            {/* <ul>{taxinfo}</ul> */}
            <div className="flex align-items-center justify-content-center">
                <div className='lg:w-3'>
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-9">
                        <ul>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item
                                <ul>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                    <li>sub item</li>
                                </ul>
                            </li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                            <li>list item</li>
                        </ul>
                    </div>
                </div>
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-9">

                    <div className='surface-card-title  shadow-2 p-2 mb-4 border-round' style={{ backgroundColor: '#f6fafe', FontFace: "arial", fontSize: "12px" }}>यदि तपाईं बैंक मार्फत कर तिर्न चाहनुहुन्छ भने, कृपया कर भुक्तानीका लागि बैंक जानु अघि फाराम डाउनलोड गर्नुहोस् र भर्नुहोस्।</div>
                    <div className='surface-card-title  shadow-2 p-2 mb-4 border-round
            ' style={{ backgroundColor: '#f6fafe', FontFace: "arial" }}>यदि तपाईं डिजिटल माध्यम (जस्तै Connect IPS) बाट कर तिर्न चाहनुहुन्छ भने, कृपया तल दिइएको खाली ठाउँमा सूचना प्रविष्ट गर्नुहोस्।</div>
                    <div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="PANNO" minmum="9" className="align-items-right md:flex-order-0, col-3">स्थायी लेखा नम्बर <span style={{ color: 'red' }}>*</span></label>
                            <InputText id="PANNO" name="PANNO" maxLength={9} type="text" className="w-half  mb-3 md:flex-order-1, col-4" tooltip="
                                यो अनिवार्य भर्नुहोस्।"  onBlur={handleBlur} />
                            {errors.PANNO && <h3>{errors.PANNO}</h3>}
                            <label htmlFor="email" className=" w-half md:flex-order-2, col-5">१.स्थायी लेखा नम्बर उल्लेख गर्नुहोस।</label>
                        </div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="offNameNep" className="align-items-right md:flex-order-0, col-3">ब्यवसायको नाम <span style={{ color: 'red' }}>*</span></label>
                            <InputText id="offNameNep" name=""type="text" className="w-half  mb-3 md:flex-order-1, col-4" value={taxpayerInfoD01Data.OFFNAMENEP} />
                        </div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-3">ठेगाना <span style={{ color: 'red' }}>*</span></label>
                            <InputText id="ADDRESS" type="text" className="w-half  mb-3 md:flex-order-1, col-4" value={taxpayerInfoD01Data.ADDRESS||""} />
                        </div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="mobileNo" className="align-items-right md:flex-order-0, col-3">मोबाइल नम्बर <span style={{ color: 'red' }}>*</span></label>
                            <InputText id="mobileNo" maxLength={10} name="CONTACTNO" type="text" onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }} className="w-half  mb-3 md:flex-order-1, col-4" onChange={onHandleChange} value={taxpayerInfoD01Data.CONTACTNO} />
                            {errors.mobileNo && <h3>{errors.mobileNo}</h3>}
                            <label htmlFor="email" className=" w-half md:flex-order-2, col-5">२.आफ्नो हालको मोबाइल नम्वर उल्लेख गर्नुहोस  ।</label>
                        </div>
                        <div className='flex flex-wrap'>
                            <label htmlFor="EMAIL" className="align-items-right md:flex-order-0, col-3">इमेल ठेगाना <span style={{ color: 'red' }}>*</span></label>
                            <InputText id="EMAIL" name="EMAIL" type="text" className="w-half  mb-3 md:flex-order-1, col-4" onChange={onHandleChange} value={taxPayerInfoForD01.EMAIL} />
                            {errors.EMAIL && <h3>{errors.EMAIL}</h3>}
                            <label htmlFor="EMAIL" className=" w-half md:flex-order-2, col-5">३.आफ्नो ईमेल ठेगाना उल्लेख गर्नुहोस ।</label>
                        </div>
                        {/* <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" className="w-full mb-3" /> */}

                        {/* <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
                        </div> */}
                        <div className='flex flex-wrap'>
                            <div className='col-3'></div>
                            <div className='col-9'>
                            <Link href="/incometax/d01eselfvoucher">
                                <Button label="register" icon="pi pi-check bg-green" className="md:flex-order-0" />
                            </Link>
                                <Button label="reset" icon="pi pi-times" className="ml-4  bg-red-500" />
                                <label htmlFor="email" className=" w-half md:flex-order-3, col-5">४.रजिष्टर वटन थिच्नुहोस।</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <ToastContainer />

        </div>

    )
}

export default D01ReturnEntry