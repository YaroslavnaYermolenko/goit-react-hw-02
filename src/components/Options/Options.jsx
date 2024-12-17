import PropTypes from 'prop-types';
/*<!--{states.map((state) => (
        <button type="button" onClick={() => update(state)} key={state}>
          {state}
        </button>
      ))}-->*/
export default function Options({  update, reset, total }) {
  return (
    <>
      
       <button onClick={() => update("good")} >
                Good
            </button>
            <button onClick={() => update("neutral")}>
                Neutral
            </button>
            <button onClick={() => update("bad")} >
                Bad
            </button>

      {total > 0 && (
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      )}
    </>
  );
}
Options.propTypes = {
  states: PropTypes.array,
  update: PropTypes.func,
  reset: PropTypes.func,
  total: PropTypes.number,
};