import { Component } from 'react'
import Mugiwaras from './Mugiwaras'
import gear5sound from '../assets/gear5sound.mp3'
import soundSanji from '../assets/soundSanji.mp3'
import soundZoro from '../assets/soundZoro.mp3'
import tw from "tailwind-styled-components"

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    gap-4
`

class Wanted extends Component {

  audioPlayer = null  

  state = {
    Mugiwaras: [
      {
        Name : 'Luffy',
        Function : 'Capitaine',
        Bounty : '3.000.000.000 Berrys',
        btnComment : false,
        Comment : "Faim, bagarre et grand rêve : la recette secrète du capitaine !",
        transformation: false,
        sleeping: true,
      },
      {
        Name : 'Zoro',
        Function: 'Sabreur',
        Bounty : '1.101.000.000 Berrys',
        btnComment : false,
        Comment : "Toujours perdu mais .. ouai non juste perdu",
        transformation: false,
        sleeping: true,
      },
      {
        Name : 'Sanji',
        Function : 'Cuisinier',
        Bounty : '1.032.000.000 Berrys',
        btnComment : false,
        Comment : "Donnez moi juste des demoiselles",
        transformation: false,
        sleeping: true,
      },
    ]
  }

  stopSound = () => {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.audioPlayer = null;
    }
  }

  goSleeping = (index) => {
    const updated = this.state.Mugiwaras.map((item, i) =>
      i === index ? { ...item, sleeping: true, transformation: false } : item
    );
    this.setState({ Mugiwaras: updated });
    this.stopSound();  
  };

  wakeUp = (index) => {
    const updated = this.state.Mugiwaras.map((item, i) =>
      i === index ? { ...item, sleeping: false, transformation: false } : item
    );
    this.setState({ Mugiwaras: updated });
  };

  activeTransformation = (index) => {
    const updated = this.state.Mugiwaras.map((item, i) =>
      i === index ? { ...item, transformation: true, sleeping: false } : item
    );
    this.setState({ Mugiwaras: updated });
    
    
    let soundToPlay = null;
    if (index === 0) soundToPlay = gear5sound;
    else if (index === 1) soundToPlay = soundZoro;
    else if (index === 2) soundToPlay = soundSanji;

    this.stopSound();  
    if (soundToPlay) {
      this.audioPlayer = new Audio(soundToPlay);
      this.audioPlayer.play();
    }
  };

  activebtnComment = (index) => {
    const updated = this.state.Mugiwaras.map((item, i) =>
      i === index ? { ...item, btnComment: true } : item
    );
    this.setState({ Mugiwaras: updated });
  };

  render() {
    return (
      <div>
        {this.state.Mugiwaras.map((perso, index) => {
          const { sleeping, transformation, btnComment, Comment } = perso;

          return (
            <Container key={index}>
              <Mugiwaras
                name={perso.Name}
                sleeping={sleeping}
                transformation={transformation}
                stateComment={btnComment}
                comment={Comment}
              />
              {sleeping && (
                <button onClick={() => this.wakeUp(index)}>Réveille toi !</button>
              )}
              {!sleeping && !transformation && (
                <button onClick={() => this.activeTransformation(index)}>
                  Transforme toi !
                </button>
              )}
              {transformation && (
                <button onClick={() => this.goSleeping(index)}>
                  Rendors toi c'est bon...
                </button>
              )}
              <button onClick={() => this.activebtnComment(index)}>Un commentaire ?</button>
            </Container>
          );
        })}
      </div>
    );
  }
}

export default Wanted;
