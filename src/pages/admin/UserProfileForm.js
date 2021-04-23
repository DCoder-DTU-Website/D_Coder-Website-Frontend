import React from "react";
import "./UserProfileForm.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const UserProfileForm = (props) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(26, 32, 44)",
        color: "white",
        height: "100%",
        paddingTop: "10px",
        overflow: "hidden",
      }}
      className="container"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.2fr",
          gap: "20px",
          width: "100%",
        }}
        className="mob_view"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "rgb(26, 32, 44)",
          }}
          className="details"
        >
          <div>
            <h2>Personal Details</h2>
            <hr style={{ marginBottom: "20px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                backgroundColor: "rgb(26, 32, 44)",
              }}
            >
              <h4>
                Name : {props.firstName}&nbsp;{props.lastName}
              </h4>
              <h4>Contact : {props.contact}</h4>
              <div className="desc">
                <textarea
                  value={props.description}
                  rows="4"
                  cols="50"
                  label="Description"
                  disabled
                  style={{
                    backgroundColor: "rgb(26, 32, 44)",
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <h2>Educational Details</h2>
            <hr style={{ marginBottom: "20px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
                backgroundColor: "rgb(26, 32, 44)",
              }}
              className="educational"
            >
              <h4>
                Branch : {props.branch}&nbsp;{props.year}&nbsp;year
              </h4>
              {props.leetcode !== "" && <h4>Leetcode : {props.leetcode}</h4>}
              {props.codeforces !== "" && (
                <h4>Codeforces : {props.codeforces}</h4>
              )}
              {props.codechef !== "" && <h4>Codechef : {props.codechef}</h4>}
              <h4>Working With : {props.workingWith}</h4>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "90vh",
            borderLeft: "2px solid white",
          }}
          className="profile"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "8px",
            }}
          >
            <img
              alt="profile"
              width="150px"
              style={{
                backgroundColor: "rgb(26, 32, 44)",
                borderRadius: "50%",
              }}
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span>@{props.username}</span>
            <span>{props.email}</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href={props.linkedin}>
                <LinkedInIcon />
              </a>
              <a href={props.github}>
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForm;
