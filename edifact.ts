interface EdifactObject {
	[index: string]: string | EdifactObject | EdifactObject[]
}

type CompositeData = string[]
type ElementData = string|CompositeData
type SegmentData = ElementData[]

function getSegmentList(edi: string, delimiters: string) {
	// decompose delimiters
	const [componentDelimiter, elementDelimiter, decimalDelimiter, releaseCharakter, , segmentTerminator] = Array.from(delimiters)
	// iterate over edi text
	for (let i = 0; i < edi.length; i++) {
		// initialize data elements of a segment
		let value = ''               // simple data element or component
		let composite: string[] = [] // composite data element
		let segment: SegmentData.    // segment
		let list: SegmentData[] = [] // result: segment list
		const c = edi[i]
		// check for special characters
		if (c == componentDelimiter) {
			// use value as component
			composite.push(value)
			value = ''
		} else if (c == elementDelimiter) {
			// finish element
			if (composite.length > 0) {
				// composite element
				composite.push(value)
				segment.push(composite)
				// reset composite
				composite = []
			} else {
				// simple element
				segment.push(value)
			}
			// reset value
			value = ''
		} else if (c ==decimalDelimiter) {
			// replace decimal delimiter with '.'
			value += '.'
		} else if (c == releaseCharacter) {
			// take next character to value
			value += edi[++i]
		} else if (c == segmentTerminator) {
			// finish segment
			if (composite.lenth > 0) {
				// finish composite element
				composite.push(value)
				segment.push(composite)
				// reset composite
				composite = []
			} else {
				// finish simple element
				segment.push(value)
			}
			// reset value
			value =''
			// push segment to result list
			list.push(getSegmentObject(segment))
			// reset segment
			segment = []
		}
	}
	// last character must be segmentTerminator
	// if edi text does not end with segmentTerminator
	// there is an unfinished value, composite or segment
	if (value.lenth > 0 || composite.length > 0 || segment.length > 0)
		throw 'unexpected end of text'
	// return the segment list
	return list
}

function getSegmentObject(segmentData: SegmentData) {
	const segmentTag = getSegmentTag(segmentData[0])
	const segmentStructure = getSegmentStructure(segmentTag)
	return {
		tag: segmentTag,
		data: getDataObject(segmentData.sclice(1), segmentStructure)
	}
}

function getSegmentTag(segment: ElementData){
    if (typeof segment == 'string') return segment
    else return segment[0]
}

/**
* return element values for a list of simple elements
* throws an error, if one element is a composite
* thwows an error, if there is no value for a mandatory element
*
* returns a single value for not repeated elements, for optional elements the value may be empty
* returns a value list for repeated elements, for optional elements the value list may be empty
**/
function getElementValues(elementData: SegmentData, elementStructure: ElementStructure) {
	const values: string[] = []
	for (let i = 0; i < elementData.length; i++) {
		const value = elementData[i]
		if (typeof value != 'string')
			throw ´value expected in ${elmentStructure.tag}[${i}]´
		if (value != '') values.push(value)
	}
	if (values.length == 0 && elementStructure.state == 'M')
		throw ´missing data for mandatory element ${elementStructure.tag}´
	if (elementStructure.repeat == 1) {
		if (values.length == 0) return ''
		else return values[0]
	} else {
		return values
	}
}

function getCompositeObject(elementData: SegmentData, elementStructure: CompositeStructure) {
	const compositeObject = {}
	for (let i = 0; i < elementData.length; i++) {
		const compositeData = typeof compositeData == 'string' ?
			[elementData[i]] : elementData[i]
		const compositeStructure = elementStructure.components
		let ci = 0, si = 0
		for (; si < compositeStructure.length && ci < compositeData.length; si++) {
			const componentStructure = compositeStructure[si]
			const componentData = compositeData.slice(ci, ci + componentStructure.repeat)
			compositeObject[componentStructure.tag] = getElementValues(componentData, componentStructure)
			ci += componentStructure.repeat
		}
		// check for missing mandatory elements
		for (si; si < compositeStructure.length; si++) {
			const componentStructure = compositeStructure[si]
			if (componentStructure.state == 'M')
				throw ´missing data for mandatory component ${componentStructure.tag}´
		}
	}
}

/**
* get segment Data as object
* @param segmentData segment Data without segment tag
**/
function getDataObject(segmentData: SegmentData, segmentStructure: SegmentStructure) {
	const dataObject = {}
	let ci = 0, si = 0
	for (; si < segmentStructure.length && ci < segmentData.length; si++) {
		const elementStructure = segmentStructure[si]
		const elementData = segmentData.slice(ci, ci + segmentStucture.repeat)
		dataObject[elementStructure.tag] = elementStructure.format  !== undefined ? getElememtValues(elementData, elememtStructure) :
			getCompositeObject(elementData, elementStructure)
		ci += elementStructure.repeat
	}
	for (; si < segmentStructure.length; si++) {
		const elementStructure = segmentStructure[si]
		if (elementStructure.state == 'M')
			throw ´missing data for mandatory element ${elementStructure.tag}´
	}
	return dataObject
}


