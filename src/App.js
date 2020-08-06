import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    fontInfo: [
      {
        id: 1,
        fontName: 'Roboto',
        fontAuthor: 'Christian Robertson',
        fontClass: 'roboto',
        fontLink: 'Roboto',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 2,
        fontName: 'Odibee Sans',
        fontAuthor: 'James Barnard',
        fontClass: 'odibeeSans',
        fontLink: 'Odibe+Sans',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 3,
        fontName: 'Open Sans',
        fontAuthor: 'Steve Matteson',
        fontClass: 'openSans',
        fontLink: 'Open+Sans',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 4,
        fontName: 'Sriracha',
        fontAuthor: 'Cadson Demak',
        fontClass: 'sriracha',
        fontLink: 'Sriracha',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 5,
        fontName: 'Recursive',
        fontAuthor: 'Stephen Nixon',
        fontClass: 'recursive',
        fontLink: 'Recursive',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 6,
        fontName: 'Mulish',
        fontAuthor: 'Vernon Adams, Cyreal, Jacques Le Bailly',
        fontClass: 'mulish',
        fontLink: 'Mulish',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 7,
        fontName: 'Montserrat',
        fontAuthor: 'Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral',
        fontClass: 'montserrat',
        fontLink: 'Montserrat',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 8,
        fontName: 'Lato',
        fontAuthor: 'Łukasz Dziedzic',
        fontClass: 'lato',
        fontLink: 'Lato',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 9,
        fontName: 'Oswald',
        fontAuthor: 'Vernon Adams, Kalapi Gajjar, Cyreal',
        fontClass: 'oswald',
        fontLink: 'Oswald',
        addBtn: false,
        cssInfo: false,
      },
      {
        id: 10,
        fontName: 'Red Rose',
        fontAuthor: 'Jaikishan Patel',
        fontClass: 'redRose',
        fontLink: 'Red+Rose',
        addBtn: false,
        cssInfo: false,
      },
    ],
    text: 'Almost before we knew it, we had left the ground.',
    cardId: '',
    searchTerm: '',
    filteredFontInfo: [],
  };

  componentDidMount = () => {
    this.setState({
      filteredFontInfo: [...this.state.fontInfo],
    });
  };

  handleSearch = (e) => {
    let allFontsArr = [...this.state.fontInfo];
    let filtered = allFontsArr.filter((font) => {
      return font.fontName
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase());
    });
    if (e.target.value !== '') {
      this.setState({
        searchTerm: e.target.value,
        filteredFontInfo: filtered,
      });
    } else {
      this.setState({
        filteredFontInfo: allFontsArr,
        searchTerm: '',
      });
    }
  };

  handleTextChange = (e, index) => {
    let fontInfoCopy = [...this.state.fontInfo];
    fontInfoCopy.map((font) => (font.addBtn = false));
    fontInfoCopy[index].addBtn = true;
    this.setState({
      textAreaInput: e.target.value,
      fontInfo: fontInfoCopy,
    });
  };

  clickHandlerBtn = () => {
    let inp = this.state.textAreaInput;
    this.setState({
      text: inp,
    });
  };

  clickResetHandler = () => {
    let fontInfoCopy = [...this.state.fontInfo];
    fontInfoCopy.map((font) => (font.addBtn = false));
    this.setState({
      text: 'Almost before we knew it, we had left the ground.',
      textAreaInput: '',
    });
  };

  handleCssDisplay = (e, index) => {
    let fontInfoCopy = [...this.state.fontInfo];
    fontInfoCopy.map((font) => (font.cssInfo = false));
    fontInfoCopy[index].cssInfo = true;
    this.setState({
      fontInfo: fontInfoCopy,
    });
  };

  handleResetCssInfo = (e, index) => {
    let fontInfoCopy = [...this.state.fontInfo];
    fontInfoCopy[index].cssInfo = false;
    this.setState({
      fontInfo: fontInfoCopy,
    });
  };

  render() {
    return (
      <div className='container'>
        <NavBar
          valueProp={this.state.searchTerm}
          handleSearch={(e) => this.handleSearch(e)}
        />
        {this.state.filteredFontInfo.map((font, index) => {
          return (
            <Card
              key={index}
              fontInfo={font}
              id={font.id}
              text={this.state.text}
              cssCard={this.toggleHandler}
              textChangeHandlers={(e) => this.handleTextChange(e, index)}
              handleClickApply={() => this.clickHandlerBtn()}
              handleClickReset={this.clickResetHandler}
              addBtn={font.addBtn}
              plusClicked={(e) => {
                this.handleCssDisplay(e, index);
              }}
              minusClicked={(e) => this.handleResetCssInfo(e, index)}
              cssInfo={font.cssInfo}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
