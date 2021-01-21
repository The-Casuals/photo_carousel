import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  right: -20px;
  top: 15px;
  width: 95%;
  height: 56px;
`;

const HeaderText = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, Helvetica Neue, sans-serif !important;
  font-weight: 600;
  font-size: 22px;
  color: #222222;
  line-height: 26px;
  display: flex;
  padding: 20px;
  position: relative;
  float: left;
  width: 200px;
  height: auto:
  right: 20px;
`;

const PageIndicator = styled.div`
  font-family: Circular, -apple-system, system-ui, Roboto, Helvetica Neue, sans-serif !important;
  font-size: 18px;
  position: relative;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: auto;
  float: right;
  up: -20px;
  left: -20px;
  `;

const PageScrollButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  border-color: rgba( 255, 255, 255, 0.9);
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-bottom-style: solid;
  border-right-color: gba(0, 0, 0, 0.08);
  border-right-style: solid;
  border-radius: 50%;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
  cursor: pointer;
  padding: 10px;
  margin 10px;
  display: inline-flex;
  float: right;
  line-height: normal;
  height: 32px;
  width; 25px;
`;

class Banner extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.direction(e.target.value);
  }

  render() {
    return (
      <Wrapper>
        <HeaderText> More places to stay </HeaderText>
        <PageScrollButton value="right" onClick={this.handleClick}> R </PageScrollButton>
        <PageScrollButton value="left"onClick={this.handleClick}> L </PageScrollButton>
        <PageIndicator> {this.props.page}/{this.props.maxPage} </PageIndicator>
      </Wrapper>

    );
  }
}


export default Banner;
