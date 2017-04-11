declare var decimal: any

export interface App {
	public id?: number,
	public name?: string,
	public weather: Weather[],
	public wind: Wind
}

export interface Weather {
	public main?: string,
}

export interface Wind {
	public speed?: decimal,
	public deg?: decimal
}

export interface Main {
	public temp?: decimal,
	public pressure?: number,
	public humidity?: number,
	public temp_min?: decimal,
	public temp_max?: decimal

}