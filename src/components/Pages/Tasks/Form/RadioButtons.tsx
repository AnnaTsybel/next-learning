
export default function RadioButtons(props:any) {
  return (
    <div>
      {props.categories.map((el:string) => {
        return (
          <div key={el}>
            <label htmlFor={el}>{el}</label>
            <input
              id={el}
              type="radio"
              name="categories"
              value={el}
              onChange={(event) => {props.setValues(event.target.value)}}
              checked={el===props.value}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
