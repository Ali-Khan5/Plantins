import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import BigSlider from "./BigSlider";
import { Link } from 'react-router-dom';
class Gallery extends React.Component {
  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    const responsive = {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 1
      }
    };
    const responsiveMini = {
      0: {
        items: 2
      },
      600: {
        items: 2
      },
      1024: {
        items: 4
      }
    };
    return (
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <AliceCarousel
            duration={400}
            autoPlay={true}
            startIndex={1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            // onSlideChange={this.onSlideChange}
            // onSlideChanged={this.onSlideChanged}
            buttonsDisabled={true}
            dotsDisabled={true}
          >
            <div
              className="MainSliderHeight MainSliderStyle"
            
            >
            <Link to="/detail/Antman" style={{color:'rgb(248, 248, 248)',textDecoration:'none'}}> 
              <BigSlider
                imgSrc="https://occhimagazine.com/occhi/wp-content/uploads/2018/07/AMTWPoster-1024x576.jpg"
                Title={"Ant-Man"}
                Story={
                  "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison."
                }
                ReleaseDate={'2016'}
                Genre={'Action | Comedy | Hero'}
              />
              </Link>
            </div>
            <div
              className="MainSliderHeight MainSliderStyle"
            >
            <Link to="/detail/infinityWar" style={{color:'rgb(248, 248, 248)',textDecoration:'none'}}> 
              <BigSlider imgSrc="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/04/avengers_infinity_war_hero_image.jpg" 
              ReleaseDate={'2018'}
              Story={'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.'}
              Genre={'Action | Comedy | Hero'}
              Title={'Infinity War'}
              />
              </Link>
            </div>
            <div
              className="MainSliderHeight MainSliderStyle"
          
            >
              <Link to="/detail/MissonImpossibleFallout" style={{color:'rgb(248, 248, 248)',textDecoration:'none'}}> 
              <BigSlider
              Title={'Mission impossible :Fallout'}
              imgSrc="https://www.thebeaverton.com/wp-content/uploads/2018/07/mission-impossible-fallout.jpg"
              Story={'Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.'}
              ReleaseDate={'2018'}
              Genre={'Action'}
              />
              </Link>
            </div>
            <div
              className="MainSliderHeight MainSliderStyle"
          
            >
              <Link to="/detail/ReadyPlayerOne" style={{color:'rgb(248, 248, 248)',textDecoration:'none'}}> 
              <BigSlider 
              Title={'Ready Player One'}
              ReleaseDate={'2018'}
              Genre={'Action | Adventure | Fanatasy '}
              imgSrc={'https://www.metrolibrary.org/sites/default/files/ready-player-one-new-poster-1-1021x580.jpg'}
              Story={'When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all OASIS users to find his Easter Egg, which will give the finder his fortune'}
              />
            </Link>
            </div>
            <div
              className="MainSliderHeight MainSliderStyle"
        
            >
              <Link to="/detail/BohemainRhapsody" style={{color:'rgb(248, 248, 248)',textDecoration:'none'}}> 
           <BigSlider 
           Title={'Bohemian Rhapsody'}
           ReleaseDate={'2018'}
           imgSrc={'https://s4827.pcdn.co/wp-content/uploads/2019/01/bohemian-rhapsody-banner.jpg'}
           Genre={'Music | Bio-pic'}
           Story={'The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).'}
           />
           </Link>
            </div>
          
          </AliceCarousel>
        </div>
        <div className="col-md-10 offset-md-1">
          <AliceCarousel
            duration={400}
            autoPlay={true}
            startIndex={1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            responsive={responsiveMini}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            // onSlideChange={this.onSlideChange}
            // onSlideChanged={this.onSlideChanged} 
            buttonsDisabled={true}
          >
            <div
              className="yours-custom-class"
              style={{
              
                backgroundColor: "black",
               margin:'5px'
              }}
            >
             <img src="https://occhimagazine.com/occhi/wp-content/uploads/2018/07/AMTWPoster-1024x576.jpg" className="img-fluid w-100" />
            </div>
            <div
              className="d-block"
              style={{
            
                backgroundColor: "black",
                margin:'5px'
              }}
            >
             <img src="https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2018/04/avengers_infinity_war_hero_image.jpg" className="img-fluid w-100" />
            </div>
            <div
              className="yours-custom-class"
              style={{
                
                backgroundColor: "black",
                margin:'5px'
              }}
            >
            <img src="https://www.thebeaverton.com/wp-content/uploads/2018/07/mission-impossible-fallout.jpg" className="img-fluid w-100" />
            </div>
            <div
              className="yours-custom-class"
              style={{
              
                backgroundColor: "black",
                margin:'5px'
              }}
            >
            <img src="https://www.metrolibrary.org/sites/default/files/ready-player-one-new-poster-1-1021x580.jpg" className="img-fluid w-100" />
            </div>
            <div
              className="yours-custom-class"
              style={{
               
                backgroundColor: "black",
                margin:'5px'
              }}
            >
             <img src="https://s4827.pcdn.co/wp-content/uploads/2019/01/bohemian-rhapsody-banner.jpg" className="img-fluid w-100" />
            </div>
           
          </AliceCarousel>
        </div>
      </div>
    );
  }
}

export default Gallery;
