type StructureState = 'M'|'C'

interface ElementStructure {
    tag: string,
    name: string,
    state: StructureState,
    format: string
}

interface CompositeStructure {
    tag: string,
    name: string,
    state: StructureState,
    elements: ElementStructure[]
}

interface SegmentData {
    tag: string,
    data: Array<string|string[]>
}

type SegmentList = SegmentDats[]
