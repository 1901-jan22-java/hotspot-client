export class User {

    constructor(
        ln: string, fn: string, pw: string, email: string, pref: string
    ) {
        this.ln = ln;
        this.fn = fn;
        this.password = pw;
        this.email = email;
        this.pref = pref;
    }

    id: number;
    fn: string;
    ln: string;
    email: string;
    password: string;
    pref: string;
}
