import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { COLOR } from '../../../common/colors'

export const stylesDefautl = {
  container: {padding: '25px 20px 10px 25px'},
  span: {fontSize: '1.1em', color: COLOR.primaryColorStrong},
  labelStyle: {color: COLOR.primaryColorStrong },
  iconStyle: {fill: COLOR.primaryColor},
  style: {marginTop: '15px'}
};

const RadioGroup = ({
  ...props, radioSelected,
  styles=stylesDefautl,
  title = 'Filter By'
}) => (
  <div style={styles.container}>
    <span style={styles.span}>{title}</span>
    <RadioButtonGroup name="shipSpeed" defaultSelected="Frontend" onChange={radioSelected}>
      <RadioButton
        value="Frontend"
        label="Frontend"
        {...styles}
      />
      <RadioButton
        value="Backend"
        label="Backend"
        {...styles}
      />
    </RadioButtonGroup>
  </div>
)

export default RadioGroup
