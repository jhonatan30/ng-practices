export class ReqResUsersData {
    id: number = null;
    email: string = null;
    first_name: string = null;
    last_name: string = null;
    avatar: string = null;
}

export class ReqResUsers {
    page: number = null;
    per_page: number = null;
    total: number = null;
    total_pages: number = null;
    data: ReqResUsersData[] = [];
}
