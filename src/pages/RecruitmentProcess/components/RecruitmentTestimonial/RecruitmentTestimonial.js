import React from 'react'
import RecruitmentCarousel from './RecruitmentCarousel'
import RecruitmentTC from "./RecruitmentTC"
function RecruitmentTestimonial() {
   const size = window.innerWidth;
   const show = size<=450?2:3;
   
    return (
      <div
        style={{
          maxWidth: 1400,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >

        <RecruitmentCarousel show={show}>
          {/* <div style={{ width: "600px", height: "400px" }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" />
          </div> */}
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
          <RecruitmentTC />
        </RecruitmentCarousel>
      </div>
    );
}

export default RecruitmentTestimonial
