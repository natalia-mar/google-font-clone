import React from 'react';
import '../styles/CssInfo.css';

const CssInfo = (props) => {
  return (
    <div className='css-container'>
      <section className='info'>
        <label className='font-family'>
          {' '}
          To embed a font, copy the code into the &lt;head&gt; of your html{' '}
        </label>
        <form>
          &lt;style&gt;
          <br />
          @import url(&quot;https://fonts.googleapis.com/css2?family=
          {props.link}&amp;display=swap&quot;);
          <br />
          &lt;style&gt;
        </form>{' '}
      </section>

      <section className='info'>
        <label className='font-link'> CSS rules to specify families</label>
        <form>font-family: '{props.fontFam}'</form>
      </section>
    </div>
  );
};

export default CssInfo;
