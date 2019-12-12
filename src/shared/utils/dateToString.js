import { dateOptions } from "./../constant/dateOptions"

export const dateToString = date => new Date(date).toLocaleDateString("fr-CA", dateOptions)
