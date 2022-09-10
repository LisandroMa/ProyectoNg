export class Result {
    ndb_no: string;
    long_desc: string;
    fat_factor: number;

    constructor(ndb: string, lngd: string, ftfctr: number) {
        this.ndb_no = ndb;
        this.long_desc = lngd;
        this.fat_factor = ftfctr;
    }
}
