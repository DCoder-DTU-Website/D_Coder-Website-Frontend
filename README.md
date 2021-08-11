# Documentation

## Homepage

Route - /

### Components

import Hero from "components/hero/HomePageSplashScreen"
import GalPrev from "components/cards/GalPreview"
import AboutUs from "components/features/AboutUs"
import WhyDCoder from "components/features/WhyDCoder"
import Footer from "components/footers/Footer"
import Testimonials from "components/testimonials/HomePageReviews"
import ContactUs from "components/forms/HomePageContact"

1. **HomePageSplashScreen**
   Basic Splash Screen for homepage with navbar. Can be reused using component SplashScreenWithHeading (props: title = "xxx")

2. **AboutUs**
   Path - components/features/AboutUs
   Basic reskin of the existing feature element for D_Coder homepage.

3. **WhyDCoder**
   Path - components/features/WhyDCoder
   Basic reskin of the existing feature element for D_Coder homepage.

4. **GalPrev**
   Image gallery preview component. Includes slider controls and hover on slider.

5. **Testimonials**
   Reskin of Testimonial component for D_Coder homepage.

6. **ContactUs**
   Reskin of Contact us component for D_Coder homepage. Accepts form and can submit to DB/ mail to account.
7. **Footer**
   Reskin of footer component for use across all D_Coder pages.

## Events

Route - /events

### Components

1. **App**
   Path - src/pages/events
   The parent component of the Events page.
   It defines the layout of the page and encapsulates all the other components.
   It fetches data of the events from the creates the complete page using other components.

2. **EvtCard**
   Path - src/pages/events/components
   Props - count, title, description, image and schedule
   This component renders events as a card.

3. **WinnerCard**
   Path - src/pages/events/component
   Props - event, name, image, position and social media links
   This component renders the layout for the winners.

4. **Winner**
   Path - src/pages/events/components
   Props - winners
   This component accepts the array of WinnerCard as a prop
   and arranges them in a grid with the confetti animation.

5. **WinnerConfetti**
   Path - src/pages/events/components
   Props - none
   This component uses the useWindowSize hook to calculate
   the screen size and accordingly creates the confetti effect
   using the react-confetti library.

### Hooks

1. **useWindowSize**
   Path - src/pages/events/hooks
   This hook calculates the width and height of the window where it is being used.

## Council

Route - /council

### Components

1. **App**
   Path - src/pages/council/App
   This component is the Parent Component of Council Page
   and in contains Council Component
   Council Component Path - src/components/council/Council.js
2. **Council**
   Path - src/components/council/councils.js
   Components in Council.js

**3 - 10 Point for council.js**

3. **council.css (import)**
   Path - src/components/council/council.css
   Set -ve margin and background color of the council page
4. **export default function**
   Contains Heading -> Team
   and Sub-Heading
   Object tabs - Contains image url, name, post of the heads
5. **TabControl**
   section switch tab for sreen width > 640 px
6. **TabControls**
   section switch tab for screen width <= 640 px
7. **CardContainer**
   Card defining the image,name, position of a person
8. **getCoHeads**
   Contains details of all Co-Heads
9. **getDesigner**
   Contains details of all Designers
10. **getDevelopers**
    getDesigner -
    Contains details of all Developers

## Gallery

Route - /gallery

### Components

1.  **App.js**
    Parent File of Gallery that includes -
    a. **Hero** - Header
    b. **PhotoIndex** - Main Content of Gallery discussed in Pt. 2
    c. **Footer** - Footer
2.  **photoindex.js**
    Path - src/components/PhotoGallery/photoindex.js
    ### Require Modules Importes -
    a. **react-photo-gallery (npm install react-photo-gallery) **  
     Module Used to arrange all the photos imported from the photos file in the by default manner as per the module.
    b. **./photos (src/components/PhotoGallery/photos.js)**
    File contains the information of all the images is an array photos; Fields in the array - src(image url),w(width of the image to be set as constant or manually),h(height of the image to be set as constant or manually), title (brief description of the images)
    c. **react-images (npm install react-images)**
    Import Modal and ModalGateway from the react-images used to open the 3D Carousel by clicking an image
    d. **./Gallery/coverFlow (src/components/Gallery/coverFlow.js)**
    Import Carousel from the coverFlow file that is the 3D Carousel
3.  **photos.js**
    Path - src/components/PhotoGallery/photos.js
    File contains the information of all the images is an array photos; Fields in the array - src(image url),w(width of the image to be set as constant or manually),h(height of the image to be set as constant or manually), title (brief description of the images)
4.  **coverFlow.js**
    Path - src/components/Gallery/coverFlow.css
    File Conatiner the Code for the 3D Carousel appeard on clicked any image
    ### Components within coverFlow.js
    a. **slides**
    Data of the Images
    b. **slideReducer**
    Function that changes the image on clicking the next or previous button
    c. **Slide**
    Function that delivers the Slide Content
    d. **export default**
    Main function that is to be exported. Takes slideIndex as parameter and takes the value of slideIndex from the file photoIndex.js (src/components/PhotoGallery/photoindex.js) that takes the value of the index of the image that is clicked by the user. This function is resonsible for the arranging the slides and let traversing.
5.  **styles.js**
    Path - src/components/Gallery/Styles/styles.css
    File styled the 3D Carousel

## Lectures

Route - /lectures/dsa/arrays

### Components

1. **App**
   Path - src/pages/lectures
   The parent component of the Lectures page.
   It defines the layout of the page and encapsulates all the other components.
   It fetches data of the lectures from the backend and creates the complete page using other components.
   Sidenav component is used to route to a particular topic and subtopic and the component renders the videos
   accordingly.

2. **VideoContainer**
   Path - src/pages/lectures/components
   Props - history, location, match (from react-router)
   This component picks the topic and subtopic from the url params and filters out the videos
   received as a response object from the backend and renders the videos.

3. **YoutubeVideo**
   Path - src/pages/lectures/components
   Props - count, link, subtopic
   This component embeds the youtube video using the "iframe" tag.

4. **Sidenav**
   Path - src/pages/lectures/components/SideNav
   Props - navOpen
   This is the sidenav component which is used to filter the videos according to
   the topic and the subtopic. The navOpen prop is used to update the parent component
   regarding the state of the navbar.

## Alumni

Route - /alumni

### Components

1. **App**
   Path - src/pages/alumni/App
   This component is the Parent Component of Alumni Page
   and contains Alumni Component
   Council Component Path - src/components/alumni/Alumnis.js
2. **Alumnis Component**
   Path - src/components/alumni/Alumnis.js
   Components in Alumnis.js
3. **export default function**
   Contains Heading -> Team
   and Sub-Heading
   Object tabs - Contains image url, name, post of the heads

4. **alumni.css (import)**
   Path - src/components/alumni/alumni.css
5. **CardContainer**
   Card defining the image,name, position of a person

## Error Pages

### Admin Error

Route-/miscellaneous/AdminError

1. **Main Page**
   Path - src/pages/miscellaneous/AdminError/index.js
   This component is the Parent Component of Admin Error Page
   and contains Admin Error Component - src/pages/miscellaneous/AdminError/App.js
2. **Admin Error Component**
   Path - src/pages/miscellaneous/AdminError/App.js
   Components in AdminError

3. **AdminError css path (import)**
   Path - src/pages/miscellaneous/AdminError/App.css

### Error404

Route-/miscellaneous/Error404

1. **Main Page**
   Path - src/pages/miscellaneous/Error404/index.js
2. **Error404.css path (import)**
   Path - src/pages/miscellaneous/Error404/Error404.css

## Testimonial Page

Route-/testimonial

1. **Main Page**
   Path - src/pages/testimonial/App.js
   This component is the Parent Component of Testimonial Page
   and contains Testimonial Component
   Testimonial Component Path- src/pages/testimonial/Components/testimonial.js
2. **Testimonial Component**
   Path - src/pages/testimonial/Components/testimonial.js
   Components in Testimonial

3. **Testimonial css path (import)**
   Path - src/pages/testimonial/Components/testimonial.css

## Projects

Route - /projects

### Components

1. **App**
   Path - src/pages/projects/
2. **Project**
   Path - src/components/features/project.js
   This is project interface.
3. **Modal**
   Path - src/components/features/modal.js
   This is for the full screen modal that opens up on clicking upload project on main project page
4. **ProjectForm**
   Path - src/components/features/ProjectForm.js
   This is component inside the modal
5. **Textarea**
   Path - src/components/features/Textarea.js
   This is compoment used in ProjectForm for description
6. **Upload**
   Path - src/components/features/Upload/Upload.js
   This is component inside the ProjectForm

   For uploading used this [module](https://www.npmjs.com/package/react-images-uploading)

## Libraries

1. [aos](https://www.npmjs.com/package/aos)
2. [react-confetti](https://www.npmjs.com/package/react-confetti)
3. [react-scroll-trigger](https://www.npmjs.com/package/react-scroll-trigger)
4. [react-device-detect](https://www.npmjs.com/package/react-device-detect)
5. [react-icons](https://www.npmjs.com/package/react-icons)
6. [react-pro-sidebar](https://www.npmjs.com/package/react-pro-sidebar)
