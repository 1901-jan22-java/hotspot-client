export class User {

    constructor(
        fn: string, ln: string, pw: string, email: string, pref: string
    ) {
        this.fn = fn;
        this.ln = ln;
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
