import React from 'react';
import { InputText } from 'primereact/inputtext';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { CascadeSelect } from 'primereact/cascadeselect';
import { Chips } from 'primereact/chips';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { MultiSelect } from 'primereact/multiselect';
import { TreeSelect } from 'primereact/treeselect';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';


 


const D01EselfVoucher = () => {

    const citySelectItems = [
        {label: 'New York', value: 'NY'},
        {label: 'Rome', value: 'RM'},
        {label: 'London', value: 'LDN'},
        {label: 'Istanbul', value: 'IST'},
        {label: 'Paris', value: 'PRS'}
    ];

    return (
        <div>
            <Card header="Eself Voucher D01" className='mt-2 text-center'>
                <div className='p-field p-formgrid p-grid p-mb-0 '>
                    
                <div className="grid p-fluid">
                    <div className="col-12 md:col-3">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                {/* <i className="pi pi-user"></i> */}
                                स्थायी लेखा नम्बर:
                            </span>
                            <InputText placeholder="" />
                        </div>
                    </div>
                    <div className="col-12 md:col-3">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                            ब्यवसायको नाम:
                            </span>
                            <InputText placeholder="" />
                        </div>
                    </div>
                    <div className="col-12 md:col-3">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                Payer Address:
                            </span>
                            <InputText placeholder="" />
                        </div>
                    </div>
                    <div className="col-12 md:col-3">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                            मोबाइल नम्बर:
                            </span>
                            <InputText placeholder="" />
                        </div>
                    </div>
                </div>
                </div>
                <div className='p-field p-formgrid p-grid p-mb-0 '>
                    
                    <div className="grid p-fluid">
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    {/* <i className="pi pi-user"></i> */}
                                    मिति :
                                </span>
                                <InputText placeholder="" />
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                कर कार्यालय :
                                </span>
                                <InputText placeholder="" />
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                इमेल ठेगाना
                                </span>
                                <InputText placeholder="" />
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                Request Code:
                                </span>
                                <InputText placeholder="" />
                            </div>
                        </div>
                    </div>
                 </div>

                 Filter
                <br/>
                <Dropdown value="" options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
 
            
            </Card>
        </div>
    )
}
export default D01EselfVoucher;