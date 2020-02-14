const initState = {
  img: '',
  default_img: 'https://images.dog.ceo/breeds/beagle/n02088364_16493.jpg'
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_IMG':
      return {
        ...state,
        img: action.data
      };
    case 'DEFAULT':
      // console.log('Reducer state is:', state);
      return {
        ...state,
        img: state.default_img
      };

    default:
      return state;
  }
}

export default Reducer
