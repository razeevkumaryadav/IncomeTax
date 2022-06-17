import { React, useState } from 'react';
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
// import { Button } from 'primereact/button';
import { useSelector, useDispatch } from 'react-redux';
import { saveD01SelfLiability, getD01SelfLiability,deleteSelfLiability  } from '../../redux/incomeTax/incomeTaxAction';
// import { ToastContainer, toast } from 'react-toastify';
import {Input,Table, Button, Modal, ModalBody, ModalHeader, ModalFooter,FormGroup,Label,Col } from 'reactstrap';
import MakePayment from "../../component/makePayment/MakePayment"
// import { Table,Container, CardBody, CardHeader, Card, Form, FormGroup, Label, Input, Button, Col, Row,Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import swal from 'sweetalert';




const D01EselfVoucher = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.taxPayerInfoForD01);
    const taxpayerInfoD01Data = useSelector((state) => state.taxPayerInfoForD01.incomeTaxPayerInfoForD01);

    // const fiscalYear = useSelector(())
    const fiscalyears = data.fiscalYears.map((fs,index) => {
        if(data.liability.length===0)
        {
            return <option value={fs.FiscalYear} >{fs.FiscalYear}</option> 
        }
        else if(fYear===fs.FiscalYear)
        {
            return <option value={!fs.FiscalYear}>{!fs.FiscalYear}</option> 
        }
        
       
    });

    console.log("component fY",fiscalyears);
   
   
    const[modal, setModal]=useState(false);
    const [fYear, selectedFYear] = useState("");
    const onFYearChange = (e) => {
        selectedFYear(e.target.value)
    }
    console.log('edata banks', data.banks);
    const getBanks = data.banks.map(bnk => ({
        label: bnk.bankNameNepali, value: bnk.bankCode
    }));
    console.log("bank front", getBanks);
    const [bank, setBank] = useState("");
    const onBankChange = (e) => {
        setBank(e.value)
    }
    console.log("fontt year", fiscalyears);

    const [expenseAmt, setExpenseAmt] = useState("");
    const [transactionAmt, setTransactionAmt] = useState("");

    var liabilityparam = {
        "Pan": taxpayerInfoD01Data.PANNO,
        "FiscalYear": fYear,
        "TransactionAmt": transactionAmt,
        "ExpenseAmt": expenseAmt
    };

    var saveparam = {

    }
    console.log("component liability", data.liability);
    // const liabilities = data.liability.map(value=>({
    //     pan:value.pan,
    //     fiscalYear:value.fiscalYear,
    //     incomeAmount:value.incomeAmount,
    //     expenseAmount:value.expenseAmount,
    //     taxLiabilityBeforConc:value.taxLiabilityBeforConc,
    //     taxLiability:value.taxLiability,
    //     charge117:value.charge117,
    //     interest119:value.interest119,
    //     totalPayableTax:value.totalPayableTax
    //    }));
    // alert(expenseAmt);
    // alert(transactionAmt);
    const expenseAmtHandleBlur = (event) => {
        const { name, value } = event.target;


        // toast.warning("तपाईंले उल्लेख गरेको कारोबार रकम र कट्टी हुने रकम ठीक भएमा Ok बटन थिच्नुहोस् । अन्यथा Cancel बटन थिच्नुहोस् ।",
        // {
        //     position: toast.POSITION.BOTTOM_CENTER,
        //     closeButton: true,
        //     // allowHtml: true,
        //     onShown: function (toast) {
        //         $("#confirmationButtonYes").click(function(){
        //           console.log('clicked yes');
        //         });
        //       }
        // });

        swal({
            // title: "Are you sure?",
            text: "तपाईंले उल्लेख गरेको कारोबार रकम र कट्टी हुने रकम ठीक भएमा Ok बटन थिच्नुहोस् । अन्यथा Cancel बटन थिच्नुहोस् ।",
            // icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((result) => {
            if (result) {
            //   swal("Poof! Your imaginary file has been deleted!", {
            //     icon: "success",
            //   });
                swal({
                    text:"अर्को आय बर्षको आय विवरण पेश गर्न चाहेमा पुन: आय बर्ष छनोट गरी कारोबर रकम र कट्टी हुने रकम उल्लेख गर्नुहोस् ।",
                    // icon:"info",
                    // buttons:true,
                }).then(result)
                {
                    dispatch(getD01SelfLiability(liabilityparam));

                }
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        // dispatch(getTaxPayerInfoForD01(liabilityparam));
        // dispatch(getD01SelfLiability(liabilityparam));
        console.log("i am here lparam:", liabilityparam);
        // console.log(liabilities);
    }
    //   if(expenseAmt > 0){
    // const liabilities = data.liability.map(value => ({
    //     pan: value.pan,
    //     fiscalYear: value.fiscalYear,
    //     incomeAmount: value.incomeAmount,
    //     expenseAmount: value.expenseAmount,
    //     taxLiabilityBeforConc: value.taxLiabilityBeforConc,
    //     taxLiability: value.taxLiability,
    //     charge117: value.charge117,
    //     interest119: value.interest119,
    //     totalPayableTax: value.totalPayableTax,
    //     taxCatId: value.taxCatId,
    //     concessionAmount: value.concessionAmount,
    //     concession: value.concession,
    //     disCatId: value.disCatId,
    //     int119ConcessionAmount: value.int119ConcessionAmount,
    //     int119Concession: value.int119ConcessionAmount,
    //     int119BeforeConcession: value.int119BeforeConcession,
    //     int119DisCatId: value.int119DisCatId,

    // }));
    const liability = data.liability.map((liability,index) =>{
        return <tr key={index}>
             <td>{liability.fiscalYear}</td>
             <td>{liability.incomeAmount}</td>
             <td>{liability.expenseAmount}</td>
             <td>{liability.incomeAmount - liability.expenseAmount} </td>
             <td>{liability.taxLiability}</td>
             <td>{liability.charge117}</td>
             <td>{liability.interest119}</td>
             <td>{liability.totalPayableTax}</td>
             <td><Button color="danger" className='active' onClick={()=>deleteLiability(liability.fiscalYear)}>Delete</Button></td>
             {/* <td>{}</td> */}
        </tr>
    })

    const deleteLiability =(fiscalyear)=> {
            dispatch(deleteSelfLiability(fiscalyear));
    }
    // }

    const onClickButton4 = e => {
        e.preventDefault()
            
      }
    const onCloseModal4 = () => {
        // this.setState({ openModal4: false })
        setModal(false);
      }
    const onSub = () => { 
        setModal(true);
        // dispatch(saveD01SelfLiability()); 
    }


    const CalculateData = (rowData) => {
        return (rowData.incomeAmount - rowData.expenseAmount);
    }
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
                                    <InputText placeholder="" value={taxpayerInfoD01Data.PANNO} />
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        ब्यवसायको नाम:
                                    </span>
                                    <InputText placeholder="" value={taxpayerInfoD01Data.TAXPAYER} />
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
                                    <InputText placeholder="" value={taxpayerInfoD01Data.CONTACTNO} />
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
                                    <InputText placeholder="" value={data.date} />
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        कर कार्यालय :
                                    </span>
                                    <InputText placeholder="" value={taxpayerInfoD01Data.OFFNAMENEP} />
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        इमेल ठेगाना
                                    </span>
                                    <InputText placeholder="" value={taxpayerInfoD01Data.EMAIL} />
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
                    {/* <div className='flex flex-wrap'>
                        <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-2">आर्थिक बर्ष :<span style={{ color: 'red' }}>*</span></label>
                        <Dropdown value={fYear} options={fiscalyears} onChange={onFYearChange} placeholder="Select Fiscal Year" className='col-2' />
                        <Input value={fYear} onChange={onFYearChange} type="select" className='col-2'>
                            {fiscalyears}
                        </Input>
                        
                        <label htmlFor="email" className=" w-half md:flex-order-2, col-2">१ कृपया आर्थिक बर्ष छान्नुहोस् ।</label>
                    </div> */}
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>  आर्थिक बर्ष <span style={{ color: 'red' }}>*</span></Label>
                        <Col sm="2">
                        <Input value={fYear} onChange={onFYearChange} type="select" >
                            {fiscalyears}
                        </Input>
                        </Col>
                        <Label for="exampleSelect" sm={8}>  १ कृपया आर्थिक बर्ष छान्नुहोस् ।</Label>
                    </FormGroup>


                    <div className='flex flex-wrap'>
                        <label htmlFor="TransactionAmt" className="align-items-right md:flex-order-0, col-2">कारोबार रकम : <span style={{ color: 'red' }}>*</span></label>
                        <InputText id="TransactionAmt" name="TransactionAmt" onChange={(e) => setTransactionAmt(e.target.value)} type="text" className="w-half  mb-3 md:flex-order-1, col-2" />
                        <label htmlFor="TransactionAmt" className=" w-half md:flex-order-2, col-2">२ कृपया कारोबार रकम उल्लेख गर्नुहोस् ।</label>
                    </div>
                    <div className='flex flex-wrap'>
                        <label htmlFor="ExpenseAmt" className="align-items-right md:flex-order-0, col-2">कट्टी हुने रकम : <span style={{ color: 'red' }}>*</span></label>
                        <InputText id="ExpenseAmt" name="ExpenseAmt" onChange={(e) => setExpenseAmt(e.target.value)} type="text" className="w-half  mb-3 md:flex-order-1, col-2" onBlur={expenseAmtHandleBlur} />
                        <label htmlFor="ExpenseAmt" className=" w-half md:flex-order-2, col-3">३ कृपया कट्टी हुने रकम उल्लेख गर्नुहोस् र Tab Key थिच्नुहोस्।</label>
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
                        {expenseAmt > 0 &&
                            // <DataTable value={liabilities} responsiveLayout="scroll" showGridlines     >
                            //     <Column field="fiscalYear" header="आर्थिक बर्ष" sortable></Column>
                            //     <Column field="incomeAmount" header="कारोबार रकम" sortable></Column>
                            //     <Column field="expenseAmount" header="कट्टी हुने रकम" sortable ></Column>
                            //     <Column field="Income Amount" header="आय रकम" body={CalculateData} sortable ></Column>
                            //     <Column field="taxLiability" header="लाग्ने कर रकम" sortable></Column>
                            //     <Column field="charge117" header="दफा ११७ बमोजिमको शुल्क" sortable></Column>
                            //     <Column field="interest119" header="दफा ११९ बमोजिमको ब्याज" sortable></Column>
                            //     <Column field="totalPayableTax" header="जम्मा तिर्नु पर्ने रकम" sortable></Column>
                            //     <Column header="ACTION"><Button>Remove</Button></Column>
                            // </DataTable>
                            <Table  bordered>
                                <tr>
                                    <th>आर्थिक बर्ष</th>
                                    <th>कारोबार रकम</th>
                                    <th>कट्टी हुने रकम</th>
                                    <th>आय रकम</th>
                                    <th>लाग्ने कर रकम</th>
                                    <th>दफा ११७ बमोजिमको शुल्क</th>
                                    <th>दफा ११९ बमोजिमको ब्याज</th>
                                    <th>जम्मा तिर्नु पर्ने रकम</th>
                                    <th></th>
                                </tr>
                                 {liability}

                            </Table>
                        }
                    </div>
                </Card>
                <Card className='mt-2'>
                    <div className='flex flex-wrap'>
                        <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-1">बैंक:<span style={{ color: 'red' }}>*</span></label>
                        <Dropdown value={bank} options={getBanks} onChange={onBankChange} placeholder="Select bank" className='col-2' />
                        <label htmlFor="email" className=" w-half md:flex-order-2, col-2">४ कृपया बैंक छान्नुहोस् ।</label>
                    </div>
                </Card>
                <Card className='mt-2 p-2'>
                    <div className='flex flex-wrap'>
                        <label htmlFor="ADDRESS" className="align-items-right md:flex-order-0, col-10">तपाईंले घोषणा गरेको कारोबार रकम र कट्टी हुने रकम ठीक भए नभएको पुन चेकजाच गर्नुहोस् । यदि ठीक भएमा Submit बटन थिच्नुहोस् । बेठीक भएमा Delete गरी पुन विवरण भर्नु होस् ।<span style={{ color: 'red' }}>*</span></label>
                        <Button onClick={onSub}>Submit</Button>

                    </div>
                </Card>
            </Card>
            <ToastContainer />
            {/* modal start here */}
            <Modal isOpen={modal} toggle={onCloseModal4} size="lg" >
                <ModalHeader>
                    Modal title
                </ModalHeader>
                <ModalBody>
                  
                    <MakePayment/>
                </ModalBody>
            </Modal>
            {/* modal ends here */}
        </div>
    )
}
export default D01EselfVoucher;