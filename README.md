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

Route - /gallery

### Components

1. **App**
   Path - src/pages/council/App
   This component is the Parent Component of Council Page
   and in contains Council Component
   Council Component Path - src/components/council/Council.js
2. **Council**
   Path - src/components/council/councils.js
   Components in Council.js

## 3 - 10 Point for council.js

3. **council.css (import)**
   Path - src/components/council.council.css
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

### Libraries

1. [aos](https://www.npmjs.com/package/aos)
2. [react-confetti](https://www.npmjs.com/package/react-confetti)
3. [react-scroll-trigger](https://www.npmjs.com/package/react-scroll-trigger)

## Homepage

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

