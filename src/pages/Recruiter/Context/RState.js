import React, { useState } from "react";
import RContext from "./RContext";

const RState = (props) => {
  const him = "Vaibhav Gupta";
  const [openNav, setOpenNav] = useState(false);
  const recruiter = {
    name: "Vaibhav Gupta",
    gMeet: "https://meet.google.com",
  };
  const applicants = [
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
    {
      name: "Naman Malhotra",
      rollNo: "2K20/EE/294",
      contact: 8795461248,
      email:"thisisme@gmail.com",
      dob: "04.05.2002",
      image:
        "https://res.cloudinary.com/dcoderdtu/image/upload/v1620130572/Naman_Malhotra_-_Naman_Malhotra_eygjun.jpg",
      branch: "Computer Engineering",
      techStack: ["C++", "React", "Redux"],
      codingLanguage: ["C++", "Python", "JAVA"],
      interviewer: "Vibhor Jain",
    },
  ];
  return (
    <RContext.Provider
      value={{ him, openNav, setOpenNav, recruiter, applicants }}
    >
      {props.children}
    </RContext.Provider>
  );
};

export default RState;
