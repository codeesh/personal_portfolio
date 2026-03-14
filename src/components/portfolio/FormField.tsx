type InputFieldProps = {
  id: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
};

type TextareaFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  rows?: number;
};

const inputBaseClass =
  "w-full rounded-xl border border-[rgba(154,176,209,0.28)] bg-[rgba(5,9,17,0.7)] px-3.5 py-3 text-[var(--text)] outline-none ring-0 transition focus:border-[rgba(30,200,165,0.5)] focus:outline focus:outline-2 focus:outline-[var(--ring)]";

export function InputField({ id, label, type = "text", required = true }: InputFieldProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input className={inputBaseClass} id={id} name={id} type={type} required={required} />
    </>
  );
}

export function TextareaField({ id, label, required = true, rows = 5 }: TextareaFieldProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={`${inputBaseClass} min-h-[7.5rem] resize-y`}
        id={id}
        name={id}
        rows={rows}
        required={required}
      />
    </>
  );
}
