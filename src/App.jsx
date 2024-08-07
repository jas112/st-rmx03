import { useState, useEffect, useRef } from 'react'
import './App.css'
import sectionsData from './data_resources/sections.js';
import scrollTransforms from './data_resources/scrollTransforms.js';
import NavBar from './components/navBar/NavBar';
import BackgroundFrame from './components/parallax_frames/BackgroundFrame.jsx';
import HDRParallaxFrames from './components/parallax_frames/HDRParallaxFrames.jsx';
import SectionElement from './components/main_content/SectionElement.jsx';
import SpacerElement from './components/main_content/SpacerElement.jsx';
import TerminusSection from './components/main_content/TerminusSection.jsx';
import FTR_Element from './components/main_content/FTR_Element.jsx';
import sectionHoverSoundRef from '/src/assets/audio/286926-TheLibrarybyMTC-UI-Computer-250.wav'
import navMenuClickSoundRef from '/src/assets/audio/space_signal-213481.mp3'
import navPntClickSoundRef from '/src/assets/audio/52460-SCIENCE_FICTION_DOOR_WHOOSH_OPEN_SHORT_01.wav'
import btnHoverSoundRef from '/src/assets/audio/51574-SCIENCE_FICTION_MULTIMEDIA_TECHNOLOGY_COMPUTER_BLIP_01.wav'
import btnClickSoundRef from '/src/assets/audio/space_signal-213481.mp3'

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');
  const [sfxActive, setSfxActive] = useState(false);
  const [musicActive, setMusicActive] = useState(false);
  const [parallaxRemix, setParallaxRemix] = useState(true);

  const [currentPageLocation, setCurrentPageLocation] = useState('start');

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    webDevelopment: useRef(null),
    emailDevelopment: useRef(null),
    graphicDesign: useRef(null),
    visualDesign: useRef(null),
    terminus: useRef(null)
  };

  console.log(`sectionRefs Object`);
  console.log(JSON.stringify(Object.keys(sectionRefs)));
  console.log(`sectionRefs Object - about`);
  console.log(JSON.stringify(sectionsData[Object.keys(sectionRefs)[0]]));

  const getSectionUpperBound = (sectionValue) => {
    return sectionRefs[sectionValue].current.offsetTop - 400;
  }

  const getSectionLowerBound = (sectionValue) => {
    return sectionRefs[sectionValue].current.offsetTop + sectionRefs[sectionValue].current.offsetHeight + 400;
  }

  return (
    <>

    </>
  )
}

export default App
