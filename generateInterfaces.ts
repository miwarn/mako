function generateSegmentInterface(segment: string) {
    return ´export interface ${segment} {\n ${segmentStructures[segment].map(elementStructure =>
        ´    ${elementStructure.tag}${elementStructure.state == 'C' ? '?:' : ':'} ${elementStructure.components ? ´{\n        ${elementStructure.components.map(componentStructure => ´${componentStructure.tag}${componentStructure.state == 'C' ? '?:' : ':'} string´).join(',\n')}\n    }´ : 'string'
    ).join(',\n')    }\n}\n´
}