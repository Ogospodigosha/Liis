export const searchHotelValidate = (values: FormikErrorType): FormikErrorType => {
    const errors: FormikErrorType = {}

    if (!values.location) {
        errors.location = 'Required'
    } else if (!values.checkIn) {
        errors.checkIn = 'Password must be more than 7 characters'
    }
    if (!values.duration) {
        errors.duration = 'enter a positive number greater than zero'
    } else if (!/(?<![-\d])\d+/g.test(values.duration))
        errors.duration = 'enter a positive number greater than zero'

    return errors
}
export type FormikErrorType = {
    location?: string
    checkIn?: string
    duration?:string
}
