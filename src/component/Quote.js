import React from 'react';

const Quote = ({quote}) => {

    return (
            <div className="quotes-container">
                <img src={quote.image} alt={quote.character} />
                <p>{quote.character}</p>
                <quote className="quote">"{quote.quote}"</quote>
            </div>
    );
};

export default Quote;