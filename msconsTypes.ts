import type { 
    UNH, BGM, DTM, UNS, UNT, RFF, NAD, CTA,
    COM, LOC, CCI, LIN, PIA, QTY, STS
} from './segments.ts'

export interface MSCONS {
    UNH: UNH,
    BGM: BGM,
    DTM: DTM[],
    SG1: SG1[],
    SG2: SG2[],
    UNS: UNS,
    SG5: SG5[],
    UNT: UNT
}

export interface SG1 {
    RFF: RFF,
    DTM: DTM[]
}

export interface SG2 {
    NAD: NAD,
    SG4: SG4[]
}

export interface SG4 {
    CTA: CTA,
    COM: COM[]
}

export interface SG5 {
    NAD: NAD,
    SG6: SG6[]
}

export interface SG6 {
    LOC: LOC,
    DTM: DTM[],
    SG7: SG7[],
    SG8: SG8[],
    SG9: SG9[]
}

export interface SG7 {
    RFF: RFF
}

export interface SG8 {
    CCI: CCI
}

export interface SG9{
    LIN: LIN,
    PIA: PIA[],
    SG10: SG10[]
}

export interface SG10 {
    QTY: QTY,
    DTM: DTM[],
    STS: STS[]
}
