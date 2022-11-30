export function InputForm(props: any) {
  return (
    <div className="flex flex-col gap-1 justify-start mt-1">
      <label className="text-neutral-500">{props.label}</label>
      <input
        className="border border-neutral-300 rounded-md px-3 py-3 outline-none"
        {...props.register(props.name)}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.errors && <span className="text-error-500 text-sm">{props.errors.message}</span>}
    </div>
  );
}

export function RadioInput(props: any) {
  return (
    <input
      {...props.register(props.name)}
      type="radio"
      name={props.name}
      value={props.value}
    />
  );
}

export function Button(props: any) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={props.className}
    >
      {props.title}
    </button>
  );
}

export function InputFormMarker(props: any) {
  return (
    <div className="form-input username">
      <label>{props.label}</label>
      <div className="input">
        <div className="marker">
          <p>{props.marker}</p>
        </div>
        <input
          {...props.register(props.name)}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
      {props.errors && <span className="error">{props.errors.message}</span>}
    </div>
  );
}
