import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CarouselEntry from './CarouselEntry';

const TheCarousel = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 350px;
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 0 !important
  };
`;

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: hidden;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      page, gallery, stayList,
    } = this.props;
    return (
      <CarouselContainer>
        <TheCarousel>
          {gallery.map((entry) => (
            <CarouselEntry
              stayList={stayList}
              page={page}
              key={entry.id}
              entry={entry}
            />
          ))}
        </TheCarousel>
      </CarouselContainer>
    );
  }
}

export default Carousel;

Carousel.propTypes = {
  page: PropTypes.number.isRequired,
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  stayList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
