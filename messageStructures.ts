export function getMessageStructure(messagaType: string) {
    return this[messageType]
}

const MSCONS = [
    {tag: 'UNH', state: 'M', repeat: 1},
    {tag: 'BGM', state: 'M', repeat: 1},
    {tag: 'DTM', state: 'M', repeat: 9},
    {tag: 'SG1', state: 'C', repeat: 9, segments: [
        {tag: 'RFF', state: 'M', repeat: 1},
        {tag: 'DTM', state: 'C', repeat: 9}
    ]},
    {tag: 'SG2', state: 'C', repeat: 99, segments: [
        {tag: 'NAD', state: 'M', repeat: 1},
        {tag: 'SG4', state: 'C', repeat: 9, segments: [
            {tag: 'CTA', state: 'M', repeat: 1},
            {tag: 'COM', state: 'C', repeat: 9}
        ]}
    ]},
    {tag: 'UNS', state: 'M', repeat: 1};
    {tag: 'SG5', state: 'M', repeat: 99999, segments: [
        {tag: 'NAD', state: 'M', repeat: 1},
        {tag: 'SG6', state: 'M', repeat: 99999, segments: [
            {tag: 'LOC', state: 'M', repeat: 1},
            {tag: 'DTM', state: 'M', repeat: 9},
            {tag: 'SG7', state: 'C', repeat: 99: segments: [
                {tag: 'RFF', state: 'M', repeat: 1}
            ]},
            {tag: 'SG8', state: 'C', repeat: 99: segments: [
                {tag: 'CCI', state: 'M', repeat: 1}
            ]},
            {tag: 'SG9', state: 'C', repeat: 99999: segments: [
                {tag: 'LIN', state: 'M', repeat: 1},
                {tag: 'PIA', state: 'C', repeat: 9},
                {tag: 'SG10', state: 'M', repeat: 9999, segments: [
                    {tag: 'QTY', state: 'M', repeat: 1},
                    {tag: 'DTM', state: 'C', repeat: 9},
                    {tag: 'STS', state: 'C', repeat: 9}
                ]}
            ]}
        ]}
    ]}
]