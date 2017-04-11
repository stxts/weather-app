export interface App {
	id?: number,
	name?: string,
	weather: Weather[],
	wind: Wind,
	sys: Sys
}

export interface Weather {
	main?: string,
}

export interface Wind {
	speed?: number,
	deg?: number
}

export interface Main {
	temp?: number,
	pressure?: number,
	humidity?: number,
	temp_min?: number,
	temp_max?: number
}

export interface Sys {
	country?: string
}