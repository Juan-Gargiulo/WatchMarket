import React from 'react'
import { connect } from 'react-redux'
import RC2 from 'react-chartjs2';

import { BackButton } from '../../Components/backButton'

import { COLOR } from '../../common/colors'
import {
  Container,
  DescriptionContainer,
  Description,
  HeaderContainer,
  HeaderTitle,
  Graph,
} from './style'

import { compose, lifecycle, withProps, pure } from 'recompose'
import withLoading from '../Hocs/LoadingHoc'

import { getCardDetail } from '../../core/cards/cardsActions'


const CardDetail = ({
    ...props,
    card,
    getCardDetail,
    history : { goBack },
    match : { params : id }

}) => {


    const chartData = {

      datasets: [
        {
          label: card.cardTitle + 'Development',
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],

          borderWidth: 0,
          data: card.cardGraph.data,
        }
      ]
    };

    return <Container backFn={goBack}>
        <HeaderContainer img={card.cardPost.postImageUrl}>
            <BackButton top={"10px"} {...props}/>
            <HeaderTitle>{card.cardTitle}</HeaderTitle>
        </HeaderContainer>
        <DescriptionContainer>
        <Description>{card.cardPost.postDescription}</Description>
        <Graph>
          <RC2 data={chartData}  type='doughnut' />
        </Graph>
        </DescriptionContainer>
    </Container>
}

export default compose(
    connect(
        state => ({
            loading: state.cards.fetching,
            card: state.cards.cards[0]
        }),
        dispatch => ({
            getCardDetail: id => dispatch(getCardDetail(id))
        })
    ),
    withProps({
        spinnerColor: COLOR.primaryColor,
        spinnerthickness: 15,
        spinnerSize: 100
    }),
    lifecycle({
        componentWillMount() {
            const id = parseInt(this.props.match.params.id, 10)
            console.log(id)
            this.props.getCardDetail(id);
        },
    }),
    withLoading,
    pure
)(CardDetail);
