import React from "react";
import './index.css';
const Login = ()=>{
    return (
        <>
        <div>
            <h2>Login/Sign Up</h2>
            <div class="MuiPaper-root mt-3 p-3 loginBox MuiPaper-elevation1 MuiPaper-rounded">
            <div>
            <div class="d-flex justify-content-start align-items-center">
            <img src="/smartphone.svg" alt="smartphone" title="smartphone" height="30px" width="" />
            <div class="px-3 loginHeading">Login/Sign Up Using Phone</div>
            </div>
            <form>
            <div class="mt-4 d-flex justify-content-start align-items-center">
            <div class="mt-2"><h4>+91</h4></div><div class="px-3">
            <div style={{display: "flex"}}>
            <div style={{display: "flex",alignItems: "center"}}>
            <input aria-label="Please enter verification code. Digit 1" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />

            </div>
            <div style={{display: "flex",alignItems: "center"}}>
            <input aria-label="Digit 2" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />

            </div>
            <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 3" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 4" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 5" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 6" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 7" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 8" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div><div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 9" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 10" autocomplete="off" class="" type="tel" maxlength="1" value="" style="width: 30px; text-align: center; border-top: none; border-right: none; border-bottom: 1px solid rgb(160, 160, 163); border-left: none; border-image: initial; margin: 3px; font-weight: 600; font-size: 24px; outline: none;" />
           </div>
           </div>
           </div>
           <div class="px-2">
           <button disabled="" class="otpButtonDisabled">Request OTP</button>
           </div>
           </div>
           </form>
           <div class="py-3"><p class="reqPara py-1">Enter your phone number to request an OTP</p><hr/></div>
           <div class=""><p class="otpPrint">Enter the 4 digit OTP received on your phone.</p></div>
           <form>
           <div class="d-flex justify-content-start align-items-center">
           <div style={{display: "flex"}}>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Please enter verification code. Digit 1" autocomplete="off" class="  " type="tel" maxlength="1" disabled="" value="" style={{width: "25px", textAlign: "center", margin: "3px", outline: "none"}} />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 2" autocomplete="off" class=" " type="tel" maxlength="1" disabled="" value="" style={{width: "25px", textAlign: "center", margin: "3px", outline: "none"}} />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 3" autocomplete="off" class=" " type="tel" maxlength="1" disabled="" value="" style={{width: "25px", textAlign: "center", margin: "3px", outline: "none"}} />
           </div>
           <div style={{display: "flex",alignItems: "center"}}>
           <input aria-label="Digit 4" autocomplete="off" class=" " type="tel" maxlength="1" disabled="" value="" style={{width: "25px", textAlign: "center", margin: "3px", outline: "none"}} />
           </div>
           </div>
           <div></div>
           </div>
           <div>
           <button disabled="" type="submit" class="verifyOtpButtonDisabled">Verify OTP</button>
           </div>
           </form>
           
           </div>
           </div>
        </div>

        </>
    );
}

export default Login;