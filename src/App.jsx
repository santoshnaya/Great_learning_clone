import Career from "./components/Career"
import Certificate from "./components/Certificate"
import CourseList from "./components/CourseList"
import Courses from "./components/Courses"
import Explore from "./components/Explore"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MoreCources from "./components/MoreCources"
import Webinar from "./components/Webinar"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <CourseList />
      <MoreCources />
      <Certificate />
      <Feature />
      <Webinar />
      <Explore />
      <Career />
      <Footer />
    </>
  )
}
export default App