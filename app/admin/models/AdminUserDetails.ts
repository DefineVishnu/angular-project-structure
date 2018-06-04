export class AdminUserDetails {
    constructor(
        public userId:number,
        public firstame: string,
        public lastName: string,
        public userName: string,
        public role: string,
        public token:string
    ) { }
}