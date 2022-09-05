export function checkElementStructure(elementStructure: any): ElementStructure|CompositeStructure {
	// check structure properties
	if (typeof elementStructure !== 'object') return false
	if (typeof elementStructure.tag !== 'string') return false
	if (elementStructure.state !== 'M' && elementStructure.state !== 'C') return false
	if (typeof elementStructure.repeat !== 'number') return false
		// check composite structure
	if (Array.isArray(elementStructure.components)) {
		// composite structure check all components
		for (let c = 0; c < elementStructure.components.length; c++) {
			const componentStructure = elementStructure.components[c]
			// check structure properties of component
			if (typeof elementStructure !== 'object') return false
			if (typeof elementStructure.tag !== 'string') return false
			if (elementStructure.state !== 'M' && elementStructure.state !== 'C') return false
			if (typeof elementStructure.repeat !== 'number') return false
			if (typeof componentStructure.format !== 'string') return false
		}
        return elementStructure as CompositeStructure
	} else {
		// check simple structure for format
		if (typeof componentStructure.format !== 'string') return false
        return elementStructure as ElementStructure
    }
}

