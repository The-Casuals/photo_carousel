import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');

const BackDrop = styled.div`
  font-family: Nunito Sans;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  align-items: center;
`;

const ModalContainer = styled.div`
background: rgb(255, 255, 255);
display: flex;
flex-wrap: nowrap;
flex-direction: column;
position: absolute;
z-index: 2;
top: 20%;
left: 30%;
width: 39.4%;
height: 63.6%;
max-width: 568px;
max-height: 456px;
box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px ;
border-radius: 12px;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  border-bottom-style: solid;
  border-bottom-width: thin;
  border-bottom-color: #ebebeb;
`;

const StayListContainer = styled.div`
  position: relative;
  display: inline-block
  width: 100%;
  height: 330px;
  overflowY: hidden;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 12px;
`;

const NewStayButton = styled.button`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  border-radius: 0px;
  outline: none;
  background: transparent;
  height: 100%;
  width 100%;
  border: none;
  display: block;
  text-align: center;
`;
const CreateStayContainer = styled.div`
  display: inline-block;
  width: 512px;
  height 64px;
  padding: 12px;
`;
const HeaderText = styled.div`
  position: relative;
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  width: 400px;
  height: 20px;
  padding: 20px;
  padding-left: 183px;
  box-sizing: border-box;
`;

const HideButton = styled.button`
  position: relative;
  background: ${(props) => (props.isHovered ? '#f7f7f7' : 'transparent')};
  display: inline-block;
  margin-top: 13px;
  margin-left: 15px;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  outline: none;
  border: none;
`;

const Xsymbol = styled.svg`
  padding: 0px;
  margin: 0px;
  display: block;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const PlusSymbol = styled.svg`
  display: block;
  height: 32px;
  width: 32px;
  fill: rgb(255, 255, 255);
`;

const PlusSymbolContainer = styled.div`
  display: flex;
  width: 64px;
  height 64px;
  align-items: center;
  justify-content: center;
  background: rgb(34, 34, 34);
  border-radius: 4px;

`;

const CreateNewListText = styled.div`
  position: absolute;
  top: 27px;
  left: 17%;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(34, 34, 34);
  margin-bottom: 4px;
  border-radius: 8px;
`;

class StayModal extends Component {
  constructor(props) {
    super(props);

    const { stayList } = this.props;
    this.state = {
      stayList: [],
      isHovered: false,

    };

    this.el = document.createElement('div');
    this.onHovered = this.onHovered.bind(this);
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  onHovered(state) {
    this.setState({
      isHovered: state,
    });
  }

  render() {
    const { handleHide } = this.props;
    return ReactDOM.createPortal(
      <>
        <BackDrop onClick={handleHide} />
        <ModalContainer>
          <Header>
            <HideButton
              onMouseEnter={() => this.onHovered(true)}
              onMouseLeave={() => this.onHovered(false)}
              onClick={handleHide}
            >
              <Xsymbol
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                path="m6 6 20 20"
              >
                <path d="m8 6 20 20" />
                <path d="m28 6-20 20" />
              </Xsymbol>
            </HideButton>
            <HeaderText>Save to a list</HeaderText>
          </Header>
          <StayListContainer>
            <CreateStayContainer>
              <NewStayButton>
                <PlusSymbolContainer>
                  <PlusSymbol>
                    <path d="M28,17H17V28H15V17H4V15H15V4h2V15H28Z" />
                  </PlusSymbol>
                </PlusSymbolContainer>
                <CreateNewListText>
                  Create a new list
                </CreateNewListText>
              </NewStayButton>
            </CreateStayContainer>
          </StayListContainer>
        </ModalContainer>
      </>,
      this.el,
    );
  }
}

export default StayModal;
