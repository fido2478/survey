// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      {/* ...input is jsx format, equals onBlur={input.onBlur} */}
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
      {/* if clicked in the field but not typed */}
        {touched && error}
      </div>
    </div>
  );
};
