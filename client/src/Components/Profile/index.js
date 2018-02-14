import React from 'react'
import  styled  from 'styled-components';
import PropTypes from 'prop-types';
import { COLOR } from '../../common/colors'

export const Container = styled.div`
    display: block;
    background-color: #3D3D3D;
    color: ${COLOR.primaryColorStrong};
    text-align: center;
    padding: 15px 15px 15px 15px;
`

export const Text = styled.p`
    margin: 5px;
    font-family: Roboto-Light;
    font-size: ${props => props.size ? props.size : '1.8em'};
`



const Profile = ({...props, name, dni, age}) => {
  return (
    <Container>
      <Text>{name}</Text>
      <Text size={'1.3em'}>DNI {dni}</Text>
      <Text size={'1.3em'}>{age} YEARS OLD</Text>
    </Container>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number
};

export default Profile
