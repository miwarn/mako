interface UNH {
    D0062: string,
    S009: {
        D0065: string,
        D0052: string,
        D0054: string,
        D0051: string,
        D0057?: string
    },
    D0068:string,
    S019?:{
        D0070: string,
        D0073?: string
    }
}

interface UNT {
    D0074: string,
    D0062: string
}

interface BGM {
    C002?: {
        D1001?: string
    },
    C106?: {
        D1004?: string
    },
    D1225?: string
}

interface DTM {
    C507: {
        D2005: string,
        D2380: string,
        D2379: string
    }
}

interface MSCONS {
    UNH: UNH,
    UNT: UNT,
    BGM: BGM,
    DTM: DTM[],
    SG1: {
        
    }[]
}