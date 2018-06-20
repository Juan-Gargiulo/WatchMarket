import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { COLOR } from '../../../common/colors'
import { NavLink } from 'react-router-dom'

import { productTypes } from '../../../core/constants'

export const stylesDefautl = {
  container: {padding: '25px 20px 10px 25px'},
  span: {fontSize: '1.1em', color: COLOR.primaryColorStrong},
  labelStyle: {color: 'white' },
  iconStyle: {fill: 'white'},
  style: {marginTop: '15px'}
};

const RadioGroup = ({
  ...props, radioSelected,
  styles=stylesDefautl,
  title = 'PRODUCTOS'
}) => (
  <div style={styles.container}>
    <NavLink to={'/'}><span style={styles.span}>{title}</span></NavLink>
    <RadioButtonGroup name="shipSpeed" defaultSelected={productTypes.MALLAS} onChange={radioSelected}>
      <RadioButton
        value={productTypes.MALLAS}
        label="Mallas"
        {...styles}
      />
      <RadioButton
        value={productTypes.PILAS}
        label="Pilas"
        {...styles}
      />
    </RadioButtonGroup>
  </div>
)

export default RadioGroup
