import css from "./Options.module.css";
export default function Options({ states, update, reset, total }) {
  return (
    <div className={css.options}>
      {states.map((state) => (
        <button
          type="button"
          onClick={() => update(state)}
          key={state}
          className={css.btn}
        >
          {state}
        </button>
      ))}

      {total > 0 && (
        <button type="button" onClick={() => reset()} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
}
