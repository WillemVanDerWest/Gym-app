import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './Components/navbar.js'
import Content from './Components/content.js'
import Footer from './Components/footer.js'

function App() {
  return (
    <div className='size'>
    <Navbar/>
    <Content/>
    <Footer/>








    <div>
      <h1><a href="https://www.figma.com/design/40dp9f4tmcFoCxAx8F3bul/Gym-app?node-id=0-1&t=Inhfw06c5nh7IJcI-0">Project idea and scope</a></h1>
      <h2>The app will be a basic app that basicly for now only logs information. The information will be gym information for now and later change to be any kind of workout information</h2>
      <ul>
        <li>Must use a form</li>
        <li>option to add extra excersizes</li>
        <li>The day will be logged automaticly</li>
        <li>User must say what the excersizes are</li>
      </ul>
      <h2>How will it work?</h2>
      <ul>
        <li>button "add daily log"</li>
        <li>new page that shows form</li>
          <ul>
            <li>Input 01: muscle group selection</li>
            <li>Input 02: weights used</li>
            <li>Input 03: amount of sets</li>
            <li>Input 04: amount of reps</li>
            <li>Input 05: users current weight</li>
          </ul>
        <li>after form, then display all information and ask if this is correct</li>
        <ul>
          <li>Correct then add to storage of the day</li>
          <li>incorrect, ask for delete or edit</li>
          <ul>
            <li>delete: remove that log and start the form over</li>
            <li>edit: then fill in all the form with the old information</li>
          </ul>
        </ul>
      </ul>

      <h2>Home look</h2>
        <ul>
          <li>Show 2 buttons</li>
          <ul>
            <li>01: add daily workout</li>
            <li>02: view all workout history</li>
          </ul>
          <li>Navbar:   logo  home  about   </li>
        </ul>
        <h3>Do research on</h3>
        <ul>
          <li>Storing data with React</li>
          <li>forms in React</li>
          <li>working with multiple pages</li>
        </ul>
    </div>
    </div>
  );
}

export default App;
