import React, { useState } from 'react';
import {
  Carousel, CarouselItem, CarouselControl, CarouselIndicators,
} from 'reactstrap';

const ModalCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = props.carouselImages;
  for (let i = 0; i < items.length; ++i) {
    const value = items[i];
    if (value.substring(0, 8) === 'exterior') {
      items.splice(i, 1);
      items.unshift(value);
      break;
    }
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item}
    >
      <div className="modal-carousel-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/${props.dormName}/${item})` }}>
        <img src={`${process.env.PUBLIC_URL}/img/${props.dormName}/${item}`} alt={`${props.dormName} picture`} style={{ visibility: 'hidden' }} />
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="modal-carousel"
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default ModalCarousel;
