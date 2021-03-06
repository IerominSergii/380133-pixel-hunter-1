const goNextQuestion = (state) => {
  return Object.freeze(
      Object.assign({}, state, {currentQuestion: state.currentQuestion + 1})
  );
};

export default goNextQuestion;
