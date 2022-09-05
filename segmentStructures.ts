export interface ElementStructure {
	tag: string,
	state: string,
	repeat: string,
	format: string
}

export interface CompositeStructure {
	tag: string,
	state: string,
	repeat: string,
	components: ElememtStructure[]
}

export type SegmentStructure = Array<ElementStructure|CompositeStructure>

function getSegmentStructure(segmentTag): SegmentStructure | undefined {
    return segmentStructures[segmentTag]
}


export interface StructureDefinitions {
    [index: string]: SegmentStructure
}

const segmentStructures: StructureDefinitions = {
    UNH: [
        {tag: 'D0062', state: 'M', repeat: 1, format: 'an..14'},
        {tag: 'S009', state: 'M', repeat: 1, components: [
            {tag: 'D0065': state: 'M', repeat: 1, format: 'an..6'},
            {tag: 'D0052', state: 'M', repeat: 1, format: 'an..3'},
            {tag: 'D0054', state: 'M', repeat: 1, format: 'an..3'},
            {tag: 'D0051', state: 'M', repeat: 1, format: 'an..2'},
            {tag: 'D0057', state: 'C', repeat: 1, format: 'an..6'}
        ]},
        {tag: 'D0068': state: 'C' repeat: 1, format: 'an..35'},
        {tag: 'S010', state: 'C', repeat: 1, components: [
            {tag: 'D0070', state: 'M', repeat: 1, format: 'n..2'},
            {tag: 'D0073', state: 'C', repeat: 1, format: 'a1'}
        ]}
    ],
    BGM: [
        {tag: 'C002', state: 'C', repeat: 1, components: [
            {tag: 'D1001', state: 'C', repeat: 1, format: 'an..3'}
        ]},
        {tag: 'C106', state: 'C', repeat: 1, components: [
            {tag: 'D1004', state: 'C', repeat: 1, format: 'an..35'}
        ]},
        {tag: 'D1225', state: 'C', repeat: 1, format: 'an..3'}
    ],
    DTM: [
        {tag: 'C507', state: 'M', repeat: 1, components: [
            {tag: 'D2005', state: 'M', repeat: 1, format: 'an..3'},
            {tag: 'D2380', state: 'C', repeat: 1,format: 'an..35'},
            {tag: 'D2379', state: 'C', repeat: 1,format: 'an..3'}
        ]}               
    ],
    RFF: [
        {tag: 'C506', state: 'M', repeat: 1, components: [
            {tag: 'D1153', state: 'M', repeat: 1, format: 'an..3'},
            {tag: 'D1154', state: 'C', repeat: 1,format: 'an..70'}
        ]}
    ],
    NAD: [
        {tag: 'D3035', state: 'M', repeat: 1, format: 'an..3'},
        {tag: 'C082', state: 'C', repeat: 1, components: [
            {tag: 'D3039', state: 'M', repeat: 1, format: 'an..35'},
            {tag: 'D1131', state: 'C', repeat: 1, format: 'an..17'},
            {tag: 'D3055', state: 'C', repeat: 1, format: 'an..35'}
        ]}
    ],
    CTA: [
        {tag: 'D3139', state: 'C', repeat: 1, format: 'an..3'},
        {tag: 'C056', state: 'C', repeat: 1, components: [
            {tag: 'D3413', state: 'C', repeat: 1, format: 'an..17'},
            {tag: 'D3412', state: 'C', repeat: 1, format: 'an..35'}
        ]}
    ],
    COM: [
        {tag: 'C076', state: 'M', repeat: 1, components: [
            {tag: 'D3148', state: 'M', repeat: 1, format: 'an..512'},
            {tag: 'D3155', state: 'M', repeat: 1, format: 'an..3'}
        ]}
    ],
    UNS: [
        {tag: 'D0081', state: 'M', repeat: 1, format: 'a1'}
    ],
    LOC: [
        {tag: 'D3227', state: 'M', repeat: 1, format: 'an..3'},
        {tag: 'C517', state: 'C', repeat: 1, components: [
            {tag: 'D3225', state: 'C', repeat: 1, format: 'an..35'}
        ]},
        {tag: 'C519', state: 'C', repeat: 1, components: [
            {tag: 'D3223', state: 'C', repeat: 1, format: 'an..25'}
        ]}
    ],
    CCI: [
        {tag: 'D7059', state: 'C', repeat: 1, format: 'an..3'},
        {tag: 'C502', state: 'C', repeat: 1, components: [
            {tag: 'D6313', state: 'C', repeat: 1, format: 'an..3'}
        ]},
        {tag: 'C240', state: 'C', repeat: 1, components: [
            {tag: 'D7037', state: 'M', repeat: 1, format: 'an..17'}
        ]}
    ],
    LIN: [
        {tag: 'D1082', state: 'C', repeat: 1, format: 'an..6'}
    ],
    PIA: [
        {tag: 'D4347', state: 'M', repeat: 1, format: 'an..3'},
        {tag: 'C212', state: 'M', repeat: 1, components: [
            {tag: 'D7140', state: 'C', repeat: 1, format: 'an..35'},
            {tag: 'D7143', state: 'C', repeat: 1, format: 'an..3'}
        ]}
    ],
    QTY: [
        {tag: 'C186', state: 'M', repeat: 1, components: [
            {tag: 'D6063', state: 'M', repeat: 1, format: 'an..3'},
            {tag: 'D6060', state: 'M', repeat: 1, format: 'n..35'},
            {tag: 'D6411', state: 'C', repeat: 1, format: 'an..8'}
        ]}
    ],
    STS: [
        {tag: 'C601', state: 'C', repeat: 1, components: [
            {tag: 'D9015', state: 'M', repeat: 1, format: 'an..35'}
        ]},
        {tag: 'C555', state: 'C', repeat: 1, components: [
            {tag: 'D4405', state: 'M', repeat: 1, format: 'an..3'}
        ]},
        {tag: 'C556', state: 'C', repeat: 1, components: [
            {tag: 'D9013', state: 'M', repeat: 1, format: 'an..3'}
        ]}
    ],
    UNT: [
        {tag: 'D0074', state: 'M', repeat: 1, format: 'n..6'},
        {tag: 'D0062', state: 'M', repeat: 1, format: 'an..14'}
    ]
}






