import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import { toast } from "react-toastify";

const Donate = (props) => {


    const publicKey= process.env.REACT_APP_PAYSTACK
    const   [amount , setAmount]= useState("")
    const [name, setName] = useState("")
    const [email,setEmail]=  useState("")
    const [phone, setPhone] = useState("")
    const [address,setAddress]= useState("")
    const [message,setMessage]=useState("")
    const componentProps = {
        amount: amount * 100 ,
        name,
        phone,
        email,
    address,
    message,
    publicKey,
    text: "Donate Now",
        onSuccess: () =>
        toast.success("Thank you for your donation!!"),
        onClose: () => toast.error("Help donate"),
      }
    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="wpo-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="wpo-donate-header">
                            <h2>Help us Empower Girls !</h2>
                        </div>
                        <form onSubmit={SubmitHandler} action="#">
                            <div className="wpo-donations-amount" style={{border: "0px solid #084b53"}}>
                                <h2>Your Donation</h2>
                                <input style={{border: "1px solid #084b53"}} type="text" className="form-control" name="text" id="amount" placeholder="Enter Donation Amount"
                                        onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="wpo-donations-details" style={{padding: "30px", marginbottom: "40px", padding :"0px" }} style={{border: "0px solid #084b53"}}>
                                <h2>Details</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group" style={{}}>
                                        <input type="text" className="form-control" name="name" id="name" placeholder="First Name"
                                                onChange={(e) => setName(e.target.value)} style={{border: "1px solid #084b53"}}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="name" id="phone" placeholder="Phone"
                                                onChange={(e) => setPhone(e.target.value)} style={{border: "1px solid #084b53"}}/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"
                                                onChange={(e) => setEmail(e.target.value)} style={{border: "1px solid #084b53"}} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                        <input type="text" className="form-control" name="Adress" id="Address" placeholder="Adress"
                                                onChange={(e) => setAddress(e.target.value)} style={{border: "1px solid #084b53"}} />
                                    </div>
                                    <div className="col-lg-12 col-12 form-group">
                                        <textarea className="form-control" name="note" id="note" placeholder="Message"
                                                onChange={(e) => setMessage(e.target.value)} style={{border: "1px solid #084b53"}}></textarea>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="submit-area">
                            <PaystackButton className="theme-btn submit-btn" {...componentProps} />
                                {/* <button type="submit" className="theme-btn submit-btn">Donate Now</button> */}
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;