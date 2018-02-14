import { createSelector } from 'reselect';

const cards = state => state.cards.cards
const filter = state => state.cards.filter
const tech = state => state.cards.tech

export const cardsTech = createSelector(
  [cards, tech],
  (cards, tech) => cards.filter(cards => cards.cardTechnology.includes(tech))
);

export const cardsFilter = createSelector(
  [cardsTech, filter],
  (cards, filter) => cards.filter(cards => cards.cardDescription.toLowerCase().includes(filter))
);

export const cardsSelected = createSelector(
  cardsFilter,
  cards => cards
);
