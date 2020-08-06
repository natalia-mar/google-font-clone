import React from 'react';
import '../styles/Card.css';
import { ReactComponent as Plus } from '../assets/plus.svg';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CssInfo from './CssInfo';

const Card = (props) => {
  let classes = `show-text ${props.fontInfo.fontClass}`;
  const {
    addBtn,
    handleClickApply,
    handleClickReset,
    plusClicked,
    cssInfo,
    minusClicked,
  } = props;

  return (
    <div className='card-container'>
      <div className='wrapper'>
        <div className='info-container'>
          <p className='font-name'>{props.fontInfo.fontName}</p>
          <p className='font-author'>{props.fontInfo.fontAuthor}</p>
        </div>
        {cssInfo ? (
          <IndeterminateCheckBoxIcon onClick={minusClicked} />
        ) : (
          <Plus className='plus' onClick={plusClicked} />
        )}
      </div>
      {cssInfo ? (
        <CssInfo
          link={props.fontInfo.fontLink}
          fontFam={props.fontInfo.fontName}
        />
      ) : (
        <>
          <textarea
            className={classes}
            type='text'
            onChange={props.textChangeHandlers}
            value={addBtn ? undefined : props.text}
          ></textarea>
          {addBtn && (
            <div className='btn-style'>
              <button onClick={handleClickApply} style={btnStyle}>
                Apply to all
              </button>
              <button onClick={handleClickReset} style={btnStyle}>
                Reset
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Card;
const btnStyle = {
  marginTop: 2,
  border: 'none',
  background: 'none',
  outline: 'none',
  color: 'tomato',
  fontSize: 20,
  fontFamily: 'Open sans',
  fontWeight: 'bolder',
  textShadow: '2px 2px 1px #e1e1e1',
  cursor: 'pointer',
};
