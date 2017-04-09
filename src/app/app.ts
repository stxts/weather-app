export interface App {
	id?: number,
 	name?: string,
	weather: Weather[],
	wind: Wind
}

export interface Weather {
	main?: string,
}

export interface Wind {
	speed?: decimal,
	deg?: decimal
}

export interface Main {
	temp?: decimal,
	pressure?: number,
	humidity?: number,
	temp_min?: decimal,
	temp_max?: decimal

}