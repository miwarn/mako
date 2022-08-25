type StructureState = 'M'|'C'

interface ElementStructure {
    tag: string,
    name: string,
    state: StructureState,
    rep: number,
    format: string
}

interface CompositeStructure {
    tag: string,
    name: string,
    state: StructureState,
    rep: number,
    elements: ElementStructure[]
}

type SegmentData = Array<string|string[]>

type SegmentList = SegmentDats[]

function getSegmentList(edi: string, delimiters: string)


