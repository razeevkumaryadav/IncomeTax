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
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useSelector, useDispatch } from 'react-redux';





const D01EselfVoucher = () => {

    
    const taxpayerInfoD01Data = useSelector((state) => state.taxPayerInfoForD01.incomeTaxPayerInfoForD01);
    const citySelectItems = [
        { label: 'New York', value: 'NY' },
        { label: 'Rome', value: 'RM' },
        { label: 'London', value: 'LDN' },
        { label: 'Istanbul', value: 'IST' },
        { label: 'Paris', value: 'PRS' }
    ];

    return (
        <div>
            <Card header="Eself Voucher D01" className='mt-2'>
                <Card header="ESelfAssessment D01" className='p-2'>
                <div className='p-field p-formgrid p-grid p-mb-0 '>

                    <div className="grid p-fluid">
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    {/* <i className="pi pi-user"></i> */}
                                    स्थायी लेखा नम्बर:
                                </span>
                                <InputText placeholder=""  value={taxpayerInfoD01Data.PANNO}/>
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    ब्यवसायको नाम:
                                </span>
                                <InputText placeholder="" value={taxpayerInfoD01Data.TAXPAYER}/>
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    Payer Address:
                                </span>
                                <InputText placeholder="" value={taxpayerInfoD01Data.ADDRESS} />
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div className="p-inputgroup">
                                <span className="p-inputgroup-addon">
                                    मोबाइल नम्बर:
                                </span>
                                <InputText placeholder=""  value={taxpayerInfoD01Data.CONTACTNO}/>
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
                                <InputText placeholder="" value={taxpayerInfoD01Data.EMAIL}/>
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
                </Card>
               <Card header="Filter" className='mt-2 p-2'>
                <div className='flex flex-wrap'>
                    <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-2">आर्थिक बर्ष :<span style={{ color: 'red' }}>*</span></label>
                    <Dropdown value="" options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City" className='col-2' />
                    <label htmlFor="email" className=" w-half md:flex-order-2, col-2">१ कृपया आर्थिक बर्ष छान्नुहोस् ।</label>
                </div>


                <div className='flex flex-wrap'>
                    <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-2">कारोबार रकम : <span style={{ color: 'red' }}>*</span></label>
                    <InputText id="ADDRESS" type="text" className="w-half  mb-3 md:flex-order-1, col-2" />
                    <label htmlFor="email" className=" w-half md:flex-order-2, col-2">२ कृपया कारोबार रकम उल्लेख गर्नुहोस् ।</label>
                </div>
                <div className='flex flex-wrap'>
                    <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-2">कट्टी हुने रकम : <span style={{ color: 'red' }}>*</span></label>
                    <InputText id="ADDRESS" type="text" className="w-half  mb-3 md:flex-order-1, col-2" />
                    <label htmlFor="email" className=" w-half md:flex-order-2, col-3">३ कृपया कट्टी हुने रकम उल्लेख गर्नुहोस् र Tab Key थिच्नुहोस्।</label>
                </div>
                </Card>
                <Card header="Payment" className='mt-2 p-2'>
                    {/* <table>
                        <tr>
                            <th>आर्थिक बर्ष</th>
                            <th>कारोबार रकम </th>
                            <th>कट्टी हुने रकम</th>
                            <th>आय रकम</th>
                            <th>लाग्ने कर रकम</th>
                            <th>दफा ११७ बमोजिमको शुल्क</th>
                            <th>दफा ११९ बमोजिमको ब्याज </th>
                            <th>जम्मा तिर्नु पर्ने रकम </th>
                        </tr>
                    </table> */}
                    <div className="card" style={{ border: "1px solid" }} >

                        <DataTable value="" responsiveLayout="scroll" showGridlines     >
                            <Column field="code" header="आर्थिक बर्ष" sortable></Column>
                            <Column field="name" header="कारोबार रकम" sortable></Column>
                            <Column field="category" header="आय रकम" sortable></Column>
                            <Column field="quantity" header="लाग्ने कर रकम" sortable></Column>
                            <Column field="quantity" header="दफा ११७ बमोजिमको शुल्क" sortable></Column>
                            <Column field="quantity" header="दफा ११९ बमोजिमको ब्याज" sortable></Column>
                            <Column field="price" header="जम्मा तिर्नु पर्ने रकम" sortable></Column>
                        </DataTable>
                    </div>
                </Card>
                <Card className='mt-2'>
                <div className='flex flex-wrap'>
                    <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-1">आर्थिक बर्ष :<span style={{ color: 'red' }}>*</span></label>
                    <Dropdown value="" options={citySelectItems} onChange={(e) => setCity(e.value)} placeholder="Select a City" className='col-2' />
                    <label htmlFor="email" className=" w-half md:flex-order-2, col-2">४ कृपया बैंक छान्नुहोस् ।</label>
                </div>
                </Card>
                <Card className='mt-2 p-2'>
                <div className='flex flex-wrap'>
                    <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-10">तपाईंले घोषणा गरेको कारोबार रकम र कट्टी हुने रकम ठीक भए नभएको पुन चेकजाच गर्नुहोस् । यदि ठीक भएमा Submit बटन थिच्नुहोस् । बेठीक भएमा Delete गरी पुन विवरण भर्नु होस् ।<span style={{ color: 'red' }}>*</span></label>
                    <Button>Submit</Button>
                    
                </div>
                </Card>
            </Card>
        </div>
    )
}
export default D01EselfVoucher;