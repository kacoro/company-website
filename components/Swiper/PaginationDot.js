import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 12,
    width: 12,
  
    margin: 5,
  },
  active: {
    height: 14,
    width: 14,
    margin: 4,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
};

class PaginationDot extends React.Component {
  handleClick = event => {
    this.props.onClick(event, this.props.index);
  };

  render() {
    const { active } = this.props;

    let styleDot;

    if (active) {
      styleDot = Object.assign({}, styles.dot, styles.active);
    } else {
      styleDot = styles.dot;
    }

    return (
      <button type="button" style={styles.root} onClick={this.handleClick}>
        <div style={styleDot} />
        <style jsx>{`
         button{
            outline:none
        }
        `}
           
        </style>
      </button>
    );
  }
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationDot;