import React from 'react'
import luffygif from '../assets/luffyvslucci.gif'
import luffySleeping from '../assets/luffysleeping.gif'
import luffyAwake from '../assets/luffyAwake.gif'
import zoroTransformation from '../assets/zoroTransformation.gif'
import zoroSleeping from '../assets/zoroSleeping.gif'
import zoroAwake from '../assets/zoroAwake.gif'
import sanjiTransformation from '../assets/sanjiTransformation.gif'
import sanjiSleeping from '../assets/sanjiSleeping.gif'
import sanjiAwake from '../assets/sanjiAwake.gif'
import '../App.css'
import tw from "tailwind-styled-components"

const Title = tw.h1`
  mb-4 
  text-4xl 
  font-extrabold 
  leading-none 
  tracking-tight
  text-gray-900 
  md:text-5xl 
  lg:text-6xl
  dark:text-white
  `
  const Texte = tw.p`
      text-xl
      text-blue-600
      dark:text-sky-400
      bg-black
  `
  const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    gap-4
    `

const Mugiwaras = (props) => {

  let imgSrc = null;
  let activeComment = props.stateComment;
  {console.log(props.stateComment)}

  const comment = activeComment == false ? null : (<p>{props.comment}</p>)

  if (props.name === 'Luffy') {
    if (props.sleeping) imgSrc = luffySleeping;
    else if (props.transformation) imgSrc = luffygif;
    else imgSrc = luffyAwake;
  } else if (props.name === 'Zoro') {
    if (props.sleeping) imgSrc = zoroSleeping;
    else if (props.transformation) imgSrc = zoroTransformation;
    else imgSrc = zoroAwake;
  } else if (props.name === 'Sanji') {
    if (props.sleeping) imgSrc = sanjiSleeping;
    else if (props.transformation) imgSrc = sanjiTransformation;
    else imgSrc = sanjiAwake;
  }

  return (
    <Container>
      
      <Title>{props.name}</Title>
      <img width="500px" height="500px" src={imgSrc} alt={props.name} />
      <Texte>{comment}</Texte>

    </Container>
      
  );
};


export default Mugiwaras;
