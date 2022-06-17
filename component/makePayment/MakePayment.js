import React, { Component,useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import { updatemakePaymentform, ResetvatLoginForm, savevatloginform, clrstore,getMakePayment
 } from '../../redux/makePayment/makePaymentAction';
import { Table,Container, CardBody, CardHeader, Card, Form, FormGroup, Label, Input, Button, Col, Row,Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

import { toast } from 'react-toastify';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const MakePayment = () => {

  const rajswasirsak = useSelector((state) => state.makePayment.rajswsirsak);
  const taxpayerInfoD01Data = useSelector((state) => state.taxPayerInfoForD01.incomeTaxPayerInfoForD01);
  console.log("makepayement component rajswsirsak:",rajswasirsak);

//   const selectrajswasirsak = rajswasirsak.map(val => ({
//     label: val.ACCOUNT_DESC_NEPALI, value: val.ACCOUNT_CODE
// }));


const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getMakePayment());
},[])
// alert("being called after");
  // modal close
 
  // nepali word conversation start here

  const converter = eng => eng.split('').map(x => +x ? '०१२३४५६७८९'[+x] : x).join('');
  //eng => eng.split('').map(x => +x ? '०१२३४५६७८९'[+x] : x).join('')
  const translate_num_to_nep = (e) => {
    let number_parts;
    let decimal_tens;
    let decimal_words;
    let teens = [
      "सुन्य",
      "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस",
      "एघार", "बाह्र", "तेह्र", "चौध", "पन्ध्र", "सोह्र", "सत्र", "अठाह्र", "उन्नाइस", "बीस",
      "एकाइस", "बाइस", "तेइस", "चौबीस", "पचीस", "छब्बीस", "सत्ताइस", "अठ्ठाइस", "उनन्तीस", "तीस",
      "एकतीस", "बतीस", "तेतीस", "चौतीस", "पैतीस", "छतीस", "सरतीस", "अरतीस", "उननचालीस", "चालीस",
      "एकचालीस", "बयालिस", "तीरचालीस", "चौवालिस", "पैंतालिस", "छयालिस", "सरचालीस", "अरचालीस", "उननचास", "पचास",
      "एकाउन्न", "बाउन्न", "त्रिपन्न", "चौवन्न", "पच्पन्न", "छपन्न", "सन्ताउन्न", "अन्ठाउँन्न", "उनान्न्साठी ", "साठी",
      "एकसाठी", "बासाठी", "तीरसाठी", "चौंसाठी", "पैसाठी", "छैसठी", "सत्सठ्ठी", "अर्सठ्ठी", "उनन्सत्तरी", "सतरी",
      "एकहत्तर", "बहत्तर", "त्रिहत्तर", "चौहत्तर", "पचहत्तर", "छहत्तर", "सत्हत्तर", "अठ्हत्तर", "उनास्सी", "अस्सी",
      "एकासी", "बयासी", "त्रीयासी", "चौरासी", "पचासी", "छयासी", "सतासी", "अठासी", "उनान्नब्बे", "नब्बे",
      "एकान्नब्बे", "बयान्नब्बे", "त्रियान्नब्बे", "चौरान्नब्बे", "पंचान्नब्बे", "छयान्नब्बे", "सन्तान्‍नब्बे", "अन्ठान्नब्बे", "उनान्सय"];

    let units = ["सुन्य", "एक", "दुई", "तीन", "चार", "पाँच", "छ", "सात", "आठ", "नौ", "दस"];

    if (isNaN(e) || "" == e) return "N/A"
    var t = "",
      r = 0
    if (-1 != e.indexOf(".") && (number_parts = e.split("."), e = number_parts[0], r = number_parts[1], decimal_tens = "" + r.substring(0, 2), 1 == decimal_tens.length && (decimal_tens = "" + decimal_tens + "0"), decimal_words = "" + teens[parseInt(decimal_tens)] + " पैसा"), e.length > 13) return void alert("Number greater than kharab not supported")
    var n = Math.floor(e % 100);
    if (("" + e).length > 2) var a = ("" + e).substring(("" + e).length - 3, ("" + e).length - 2)
    var i = Math.floor(e % 1e5);
    i = "" + i;
    i = i.substring(0, i.length - 3);
    var o = Math.floor(e % 1e7);
    o = "" + o;
    o = o.substring(0, o.length - 5);
    var s = Math.floor(e % 1e9);
    s = "" + s;
    s = s.substring(0, s.length - 7);
    var l = Math.floor(e % 1e11);
    l = "" + l;
    l = l.substring(0, l.length - 9);
    var u = Math.floor(e % 1e13);
    return u = "" + u, u = u.substring(0, u.length - 11), u > 0 && (t += teens[u] + " खरब"), l > 0 && (t += " " + teens[l] + " अरब"), s > 0 && (t += " " + teens[s] + " करोड"), o > 0 && (t += " " + teens[o] + " लाख"), i > 0 && (t += " " + teens[i] + " हजार"), a > 0 && (t += " " + units[a] + " सय"), n > 0 && (t += " " + teens[n]), "" != t.trim() && (t += " रुपैंया"), r > 0 && (t += ("" != t.trim() ? ", " : "") + decimal_words), t + " मात्र।";
  };
  // nepali word conversation ends here






  return (
    <div>
      <FormGroup row>
        <Row>
          <Col className="col-md-6">
            <h4>भौचर विवरण</h4>
            <Row>
              <Col className="6">आर्थिक बर्ष</Col>
              <Col className="6">{
              // converter()
              }</Col>
            </Row>
            <Row>
              <Col className="6">कारोबार सँकेत </Col>
              <Col className="6">{
              // converter()
              }</Col>
            </Row>
            <Row>
              <Col className="6">मिती  </Col>
              <Col className="6">{
              // converter()
              }</Col>
            </Row>
            <Row>
              <Col className="6">कार्यालय </Col>
              <Col className="6">{} </Col>
            </Row>
          </Col>
          <Col className="col-md-6">
            <h4>राजस्व जम्मा गर्नेको विवरण </h4>
            <Row>
              <Col className="6">पान न.</Col>
              <Col className="6">{
              converter(
                taxpayerInfoD01Data.PANNO.toString()
                )
                }</Col>
            </Row>
            <Row>
              <Col className="6">नाम</Col>
              <Col className="6">{
               taxpayerInfoD01Data.TAXPAYER
              }  </Col>
            </Row>
            <Row>
              <Col className="6">ठेगाना</Col>
              <Col className="6">{
                taxpayerInfoD01Data.ADDRESS
              }</Col>
            </Row>
            <Row>
              <Col className="6">फोन न.</Col>
              <Col className="6">{
              converter(
                taxpayerInfoD01Data.CONTACTNO
                )
                }</Col>
            </Row>
          </Col>
        </Row>
        <label className="title-fieldset">Payment </label>
        <Col sm={12} className="bdr">
          <Row className="mt-3">
            <label className="col-md-1">बैंक </label>
            <Col sm={2}>
              {/* <select value={this.state.BankId} onChange={this.handleChangeB} className={perdError ? ' showError' : ''} disabled={this.state.disvchr ? 'disabled' : ""}>

              {

                this.state.banks.map((company, i) => {
                  return <option key={i} value={company.BANKCODE}>{company.BANKNAMENEPALI}</option>
                })
              }
            </select> */}
            </Col>
            {/* <label className="col-md-2">खाताको किसिम</label> */}
            {/* <Col sm={2}><Input type="text" className="form-control" name="ACCTTYPE" onChange={this.handleChange} value={this.state.sACCTTYPE} placeholder=" "></Input></Col> */}
          </Row>

          <Row className="mt-3">
            <label className="col-md-1">राजस्व शीर्षक </label>
            <Col sm={2}> 
            {/* <select value={this.state.Vat} onChange={this.handleChangeV} className="form-control" disabled={this.state.disvchr ? 'disabled' : ""}>
              <option value="">-- select --</option>
              {
                this.state.vats.map((company, i) => {
                  return <option key={i} value={company.ACCOUNT_CODE}>{company.ACCOUNT_CODE} - {company.ACCOUNT_DESC_NEPALI}</option>
                })
              }
              
            </select> */}
            <select className='form-control'>
              {rajswasirsak?.map((sirsak,i)=>
              {
                return( 
                sirsak.ACCOUNT_CODE==="11111"?
                  <option key={i} value={sirsak.ACCOUNT_CODE}>{sirsak.ACCOUNT_CODE}- { sirsak.ACCOUNT_DESC_NEPALI}</option>:null
              )}

              )}
            </select>
            </Col>
            <label className="col-md-1">वापत: </label>
            <Col sm={2}>
              {/* <Input type="text" className="form-control" disabled={
                this.state.disld ? 'disabled' : ""} name="Purpose" onChange={this.handleChange} value={this.state.Purpose} placeholder=" "></Input>
              <Label className="style1"> {perdError &&
                <div className="style1" style={{ color: "red" }}>{perdError}</div>
              }</Label> */}
              <Input type='text' value="D01WEBSITE" disabled="disabled" className='form-control'></Input>
            </Col>
            <label className="col-md-1">रकम</label>
            <Col sm={1}>
              {/* <Col sm={12}><Input type="text" className="form-control" disabled={this.state.disld ? 'disabled' : ""} name="Amount" onChange={this.handleChange} value={converter(Amount.toString())} placeholder=" "></Input></Col>

              <Label className="style1"> {mnthError &&
                <div className="style1" style={{ color: "red" }}>{mnthError}</div>
              }</Label> */}
            </Col>
            <label className="col-md-2 text-center">आर्थिक वर्ष</label>
            <Col sm={2}>
              {/* <Input type="text" className="form-control" disabled={this.state.disld ? 'disabled' : ""} title="Fiscal Year" name="FiscalYear" onChange={this.handleChange} value={converter(FiscalYear.toString())} placeholder=" "></Input> */}
              </Col>


          </Row>
          <Row className=" mb-3">
            {/* <label className="col-md-1">कैफियत </label>
               <Col sm={2}><Input type="text" className="form-control" disabled={this.state.disld ? 'disabled': ""} name="Remarks" onChange={this.handleChange} value={this.state.Remarks} placeholder=" "></Input></Col> */}
            <label className="col-md-1">भौचर नं </label>
            {
            // this.state.voucher ?
              <Col sm={2}>
                {/* <Input type="text" className="form-control" disabled={this.state.disld ? 'disabled' : ""} name="Remarks" onChange={this.handleChange} value={converter(voucher.toString())} placeholder=" "></Input> */}
                </Col>
              // : null
            }
            <Col>
              {/* <Button onClick={this.onClkgnrtvoucher} className="W122" disabled={this.state.disvchr ? 'disabled' : ""}>Generate voucher</Button> */}
              {/* <Button className="no-printme float-right mr-3" className="float-right" onClick={this.pay} style={{ marginRight: "15px" }}>
                Pay
              </Button> */}
            </Col>
          </Row>

        </Col>
        <Col md={12}>
          <Table bordered hover>
            <tr>
              <th>सि. नं</th>
              <th>शीर्षक विवरण </th>
              <th>वापत</th>
              <th>रकम</th>
            </tr>
            <tr>
              <td></td>
              <td><select className='form-control'>
              {rajswasirsak?.map((sirsak,i)=>
              {
                return( 
                sirsak.ACCOUNT_CODE==="11111"?
                  <option key={i} value={sirsak.ACCOUNT_CODE}>{sirsak.ACCOUNT_CODE}- { sirsak.ACCOUNT_DESC_NEPALI}</option>:null
              )}

              )}
              </select>
              </td>
              <td>D01WEBSITE</td>
            </tr>
            <tr>
              <td colSpan="3">जम्मा</td>
              <td></td>
            </tr>
          </Table>
        </Col>
        <Col className="col-md-6">

          <Row>
            <Col className="6">रकम भुक्तानी भएको , जम्मा रकम </Col>
            <Col className="6">{
            // converter(Amount.toString())
            }</Col>
          </Row>
          <Row>
            <Col className="6">मिति </Col>
            <Col className="6">{
            // converter(requestnepdate.toString())
            }  </Col>
          </Row>
          <Row>
            <Col className="6">बैंक </Col>
            <Col className="6">{
            // this.state.banknep
            }</Col>
          </Row>
          <Row>
            <Col className="6">रकम अक्षरमा </Col>
            <Col className="6">{
            // translate_num_to_nep(this.state.Amount.toString())
            }</Col>
            {/* <Col className="6">
              <button className="W122" disabled={this.state.disprnt ? 'disabled' : ""}
                onClick={() => window.print()}>
                PRINT
              </button>
            </Col> */}
          </Row>

        </Col>
        <Col>
        {
        // this.state.showLoader ? <Loaderr /> : null


        }</Col>

        <Modal open="" onClose="" classNames="width1007">

          <Col className="irdPanel">
            <Col style={{ borderBottom: '2px solid #000', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
              <h3 className="text-center" style={{ fontWeight: 'bold', paddingTop: '25px' }}>राजस्व व्यवस्थापन सुचना प्रणालीमा कर दाखिला भएको निस्सा </h3>
              <Row>
                <Col className="col-md-1 offset-md-1 mb-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Emblem_of_Nepal_%282020%29.svg/2444px-Emblem_of_Nepal_%282020%29.svg.png"></img>
                </Col>
                <Col className="col-md-8"></Col>
                <Col className="col-md-2"></Col>
              </Row>
            </Col>
            <Col>
              {/* <Container>
                <FormGroup row className="WhiteBG mt-3">
                  <Col className="col-md-12">

                    <Row>
                      <Col className="col-md-6">
                        <h5 style={{ fontWeight: 'bold' }}>भौचर विवरण</h5>
                        <Row>
                          <Col className="col-md-3">आर्थिक बर्ष</Col>
                          <Col className="col-md-9">{converter(FiscalYear.toString())}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-3">कारोबार सँकेत </Col>
                          <Col className="col-md-9">{converter(requestcode.toString())}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-3">मिती  </Col>
                          <Col className="col-md-9">{converter(requestnepdate.toString())}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-3">कार्यालय </Col>
                          <Col className="col-md-9">{this.state.rcagencynepname}  </Col>
                        </Row>
                      </Col>
                      <Col className="col-md-6">
                        <h5 style={{ fontWeight: 'bold' }}>भुक्तानीकर्ताको विवरण</h5>
                        <Row>
                          <Col className="col-md-2">पान न.</Col>
                          <Col className="col-md-10">{converter(span.toString())}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-2">नाम</Col>
                          <Col className="col-md-10">{this.state.sname}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-2">ठेगाना</Col>
                          <Col className="col-md-10">{this.state.saddress}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-2">फोन न.</Col>
                          <Col className="col-md-10">{converter(sphone.toString())}</Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <table className="mt-3 tblP" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                          <tr>
                            <td>सि. न.</td>
                            <td>भौचर न.</td>
                            <td>शीर्षक विवरण</td>
                            <td>वापत</td>
                            <td>रकम</td>
                            <td>आय बर्ष </td>
                            <td>श्रोतमा करकट्टि </td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>१</td>
                            <td>{converter(voucher.toString())}</td>
                            <td>{this.state.vatnep}</td>
                            <td>{this.state.Purpose}</td>
                            <td>{converter(Amount.toString())}</td>
                            <td>{converter(FiscalYear.toString())}</td>
                            <td>होइन </td>
                          </tr>

                        </tbody>
                      </table>

                    </Row>
                    <Row className="mt-3">
                      <Col className="col-md-6">
                        <Row>
                         
                          <Col className="col-md-6"> भुक्तानी , जम्मा रकम:</Col>
                          <Col className="col-md-6">{converter(Amount.toString())}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-3">मिति:</Col>
                          <Col className="col-md-9">{converter(requestnepdate.toString())}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-3">बैंक: </Col>
                          <Col className="col-md-9">{this.state.banknep}</Col>
                        </Row>
                        <Row>
                          <Col className="col-md-3">रकम अक्षरमा</Col>
                          <Col className="col-md-9">{this.translate_num_to_nep(this.state.Amount.toString())} </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>


                </FormGroup>
              </Container> */}


            </Col>
          </Col>
          <Col>

            <Button className="no-printme float-right " 
            // disabled={this.state.disprnt ? 'disabled' : ""}
              onClick={() => window.print()}>
              PRINT
            </Button>
            <Button className="no-printme float-right mr-3 float-right" 
            // onClick={this.pay} 
            style={{ marginRight: "15px" }}>
              Pay
            </Button>
            <Button variant="secondary" className="float-right">
              Cancel
            </Button>
          </Col>
        </Modal>

        {/* <Modal open={this.state.openModal6} onClose={this.onCloseModal7} classNames="width1007">
          <Label style={{ marginBottom: "15px" }}><b>राजस्व व्यवस्थापन सूचना प्रणालीमा कर दाखिला भएको निस्सा </b></Label>
          <Col>


          </Col>
          <Col>

            <Button variant="secondary" className="float-right">
              Cancel
            </Button>
          </Col>
        </Modal> */}
      </FormGroup>
    </div>
  )
}

export default MakePayment
