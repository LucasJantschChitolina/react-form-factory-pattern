import "./styles.css"

interface ConfigTypes {
	type: "text" | "number" | "password" | "date" | "dropdown",
	label: string,
	onChange: any,
	errorMessage: string,
	value: any,
	options: any,
	errorFlag: any,
	conditional: any
}

const InputForm = ({ config }) => {
	const getElement = ({
		type,
		label,
		errorFlag,
		errorMessage,
		options,
		onChange,
		value,
		conditional
	}: ConfigTypes) => {

		switch (type) {
			case "text":
				return (
					<div>
						<label>{label}</label>
						<input type="text" onChange={onChange} value={value} />
						{errorFlag && <span>{errorMessage}</span>}
					</div>
				)

			case "number":
				return (
					<div>
						<label>{label}</label>
						<input type="number" onChange={onChange} value={value} />
						{errorFlag && <span>{errorMessage}</span>}
					</div>
				)
			case "password":
				return (
					<div>
						<label>{label}</label>
						<input type="password" onChange={onChange} value={value} />
						{errorFlag && <span>{errorMessage}</span>}
					</div>
				);

			case "date":
				return (
					<div>
						<label>{label}</label>
						<input type="date"  onChange={onChange} value={value} />
						{errorFlag && <span>{errorMessage}</span>}
					</div>
				);

			case "dropdown":
				return (
					<div>
						<label>{label}</label>
						<select onChange={onChange} value={value}>
							{options.map(option => {
								return <option value={option}>{option}</option>;
							})}
						</select>
						{errorFlag && <span>{errorMessage}</span>}
					</div>
				);
		}
	}
	return (
		<div>
			{config.map(element => {
				return getElement(element)
			})}
		</div>
	)
}

export default InputForm;