import React, { PropTypes } from 'react';

const propTypes = {
  logged: PropTypes.bool.isRequired,
  restrictedData: PropTypes.string.isRequired,
};

const RestrictedView = (props) => (
  <div>
    <h2>
      Restricted content [ for logged users only ]
    </h2>
    <p>To restrict this page firebase authentication was used.</p>
    {
      props.logged ?
        'Restricted content VISIBLE' :
        'Restricted content INVISIBLE'
    }
    {
      props.restrictedData ?
        <div className="restricted-content">
          {props.restrictedData}
        </div> :
        null
    }
  </div>
);

RestrictedView.propTypes = propTypes;

export default RestrictedView;
