export type DumpFull = DumpSummary & DumpDetail

export interface DumpSummary {
  id: string
  functionName: string
  startTime: Date
}

export interface DumpDetail {
  value: DumpValue
}

export type DumpValue = BooleanValue | StringValue | IntValue | FloatValue

export interface BooleanValue {
  booleanValue: boolean
}

export interface StringValue {
  stringValue: string
}

export interface IntValue {
  numberValue: string
  numberType: IntType
  numberDisplayType: DisplayType
}

export enum IntType {
  int,
  int8,
  int16,
  int32,
  int64,
  uint,
  uint8,
  uint16,
  uint32,
  uint64,
}

export enum DisplayType {
  dec,
  hex,
  oct,
  bin,
  char
}

export interface FloatValue {
    numberValue: string
    numberType: FloatType
}

export enum FloatType {
    float32,
    float64,
}
