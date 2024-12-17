

export default function Options({ states, update, reset, total }) {
  return (
    <>
      {states.map((state) => (
        <button type="button" onClick={() => update(state)} key={state}>
          {state}
        </button>
      ))}

      {total > 0 && (
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      )}
    </>
  );
}
