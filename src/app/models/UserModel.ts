export class UserModel {
    constructor(
        public id: number,
        public email: string,
        public firstName: string,
        public lastName: string,
        public rut: string,
        public userType: string,
        public isEnabled: boolean,
        public phone: string,
        public address: string,
        public username: string,
        public password: string
    ) {
        if (userType !== "Alumno" && userType !== "Docente") {
            throw new Error("Invalid userType value. Must be 'Alumno' or 'Docente'.");
        }
    }

    static crearUsuario(event: {
        id: number,
        email: string,
        firstName: string,
        lastName: string,
        rut: string,
        userType: string,
        isEnabled: boolean,
        phone: string,
        address: string,
        username: string,
        password: string,
    }) {
        return new UserModel(
            event.id,
            event.email,
            event.firstName,
            event.lastName,
            event.rut,
            event.userType,
            event.isEnabled,
            event.phone,
            event.address,
            event.username,
            event.password
        );
    }
}
