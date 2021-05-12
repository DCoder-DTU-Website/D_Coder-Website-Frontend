import React from 'react';
import MinNavbar from "components/hero/MinNavbar";
import Form from "./FormContainer"


function GoogleForm(){
    return(
        <>
        <MinNavbar/>
        <div style = {{display:"flex", justifyContent:"center", marginTop:"5%", marginBottom:"5%"}}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe6pKUGOt9aKhwh6UXX-Bi5uHo_AjNIOGHnihWQa3LVTT2dug/viewform?embedded=true" width={640} height={943} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
        {/* <Form src = "https://docs.google.com/forms/d/e/1FAIpQLSe6pKUGOt9aKhwh6UXX-Bi5uHo_AjNIOGHnihWQa3LVTT2dug/viewform?embedded=true" /> */}
</div>
        </>
    );
}

export default GoogleForm;