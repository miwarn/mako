interface ElementStructure {
    T: string,
    S: 'M'|'C',
    R: number,
    F: string
}

interface CompositeStructure: {
    T: string,
    S: 'M'|'C',
    R: number,
    C: ElementStructure[]
}

type SegmentStructure = Array<ElementStructure|CompositeStructure>


const segmentStructures = {
    UNH: [
        {T: 'D0062', S: 'M', R: 1, F: 'an..14'},
        {T: 'S009', S: 'M', R: 1, C: [
            {T: 'D0062'}
        ]}
    ]
}

interface MSCONSMessage {
    UNH: {
        D0062: string,
        S009: {
            
        }
    }
    
}
