export const validateAuthForm = (values: FormikErrorType): FormikErrorType => {
    const errors: FormikErrorType = {}

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 7 characters'
    } else if (!/^[^\u0400-\u04FF]*$/.test(values.password)) {
        errors.password = 'password must not contain Cyrillic letters'
    }
    if (!values.login) {
        errors.login = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login))
        errors.login = 'Invalid email address'

    return errors
}
export type FormikErrorType = {
    login?: string
    password?: string
}
