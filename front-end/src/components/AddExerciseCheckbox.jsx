import React, { Component } from 'react';

import './styles/Checkbox.sass';

class AddExerciseCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: this.props.clicked,
      checkbox: this.props.checkbox,
      largehexagon: 'large-hexagon',
      smallhexagon: this.props.smallHexagon,
      check: this.props.check
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.item.exerciseId !== prevProps.item.exerciseId) {
      this.setState({
        clicked: false,
        checkbox: 'checkbox',
        smallhexagon: 'small-hexagon',
        check: 'check'
      });
    }
  }

  checkHandler = () => {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true,
        checkbox: 'checkbox-checked',
        smallhexagon: 'small-hexagon-checked',
        check: 'check-checked'
      });
      const exercise = { id: this.props.item.exerciseId, checked: false };
      this.props.addExercise(exercise);
      this.props.Update();
    } else {
      this.setState({
        clicked: false,
        checkbox: 'checkbox',
        smallhexagon: 'small-hexagon',
        check: 'check'
      });
      this.props.removeExercise(this.props.item.exerciseId);
      this.props.Update();
    }
  };

  render() {
    return (
      <div className='checkedGroup'>
        <svg
          onClick={this.checkHandler}
          className={this.state.checkbox}
          width='100%'
          height='100%'
          viewBox='0 0 780 681'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          xmlSpace='preserve'
          xmlnsserif='http://www.serif.com/'
          styles='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;'
        >
          <g transform='matrix(1,0,0,1,-3.50613,-0.660289)'>
            <g transform='matrix(0.874332,0,0,0.758116,0,0)'>
              <g transform='matrix(1.14373,0,0,1.31906,-51.8587,-123.292)'>
                <g
                  id={this.state.largehexagon}
                  transform='matrix(2.08621,0,0,2.08621,-516.266,-464.991)'
                >
                  <path
                    d='M546.261,584.445L369.332,584.445L280.867,431.22L369.332,277.995L546.261,277.995L634.725,431.22L546.261,584.445Z'
                    styles='fill:white;'
                  />
                  <path
                    d='M548.337,268.227L550.323,268.872L552.13,269.916L553.682,271.313L554.909,273.002L643.373,426.227L644.223,428.134L644.657,430.176L644.657,432.263L644.223,434.306L643.373,436.213L554.909,589.438L553.682,591.127L552.13,592.524L550.323,593.567L548.337,594.213L546.261,594.431L369.332,594.431L367.256,594.213L365.27,593.567L363.462,592.524L361.911,591.127L360.684,589.438L272.219,436.213L271.37,434.306L270.936,432.263L270.936,430.176L271.37,428.134L272.219,426.227L360.684,273.002L361.911,271.313L363.462,269.916L365.27,268.872L367.256,268.227L369.332,268.009L546.261,268.009L548.337,268.227ZM369.332,277.995L280.867,431.22L369.332,584.445L546.261,584.445L634.725,431.22L546.261,277.995L369.332,277.995Z'
                    styles='fill:rgb(255,16,16);'
                  />
                </g>
                <g
                  id={this.state.smallhexagon}
                  transform='matrix(1.6787,0,0,1.6787,-329.712,-289.267)'
                >
                  <path
                    d='M546.261,584.445L369.332,584.445L280.867,431.22L369.332,277.995L546.261,277.995L634.725,431.22L546.261,584.445Z'
                    styles='fill:white;'
                  />
                  <path
                    d='M548.841,265.856L551.308,266.657L553.555,267.955L555.483,269.691L557.008,271.79L645.473,425.014L646.528,427.385L647.068,429.922L647.068,432.517L646.528,435.055L645.473,437.425L557.008,590.65L555.483,592.749L553.555,594.485L551.308,595.782L548.841,596.584L546.261,596.855L369.332,596.855L366.752,596.584L364.284,595.782L362.037,594.485L360.109,592.749L358.584,590.65L270.12,437.425L269.064,435.055L268.525,432.517L268.525,429.922L269.064,427.385L270.12,425.014L358.584,271.79L360.109,269.691L362.037,267.955L364.284,266.657L366.752,265.856L369.332,265.584L546.261,265.584L548.841,265.856ZM369.332,277.995L280.867,431.22L369.332,584.445L546.261,584.445L634.725,431.22L546.261,277.995L369.332,277.995Z'
                    styles='fill:rgb(255,16,16);'
                  />
                </g>
                <g
                  id={this.state.check}
                  transform='matrix(9.22058,0,0,9.22058,-2269.73,-3302.35)'
                >
                  <path
                    d='M290.086,423.816C288.572,421.082 287.408,419.072 286.594,417.786L285.3,415.76L284.324,414.27C282.192,410.95 279.97,408.208 277.659,406.043C278.977,404.952 280.206,404.407 281.345,404.407C282.745,404.407 283.99,404.92 285.081,405.945C286.171,406.971 287.547,408.924 289.207,411.805C291.095,405.668 293.495,399.85 296.409,394.348C298.02,391.354 299.457,389.34 300.718,388.306C301.979,387.272 303.652,386.756 305.735,386.756C306.842,386.756 308.209,386.927 309.837,387.268C305.654,390.638 302.309,394.641 299.802,399.28C297.296,403.919 294.057,412.098 290.086,423.816Z'
                    styles='fill-rule:nonzero;'
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <p className='check-text'> {this.props.name}</p>
      </div>
    );
  }
}

export default AddExerciseCheckbox;
