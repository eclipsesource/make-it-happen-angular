import { angularMaterialRenderers } from '@jsonforms/angular-material';
import { jsonformsReducer, JsonFormsState, JsonSchema, UISchemaElement } from '@jsonforms/core';
import { data as day1Data, schema as day1Schema } from '@jsonforms/examples/lib/day1';
import { data as day2Data, schema as day2Schema, uischema as day2UISchema } from '@jsonforms/examples/lib/day2';
import { data as day3Data, schema as day3Schema, uischema as day3UISchema } from '@jsonforms/examples/lib/day3';
import { data as day4Data, schema as day4Schema, uischema as day4UISchema } from '@jsonforms/examples/lib/day4';
import { data as day5Data, schema as day5Schema, uischema as day5UISchema } from '@jsonforms/examples/lib/day5';
import { data as day6Data, schema as day6Schema, uischema as day6UISchema } from '@jsonforms/examples/lib/day6';
import { combineReducers, Reducer } from 'redux';

interface ExampleDescription {
  id: string;
  data: any;
  schema: JsonSchema;
  uischema: UISchemaElement;
}
const examples: ExampleDescription[] = [
  { id: 'day1', data: day1Data, schema: day1Schema, uischema: undefined },
  { id: 'day2', data: day2Data, schema: day2Schema, uischema: day2UISchema },
  { id: 'day3', data: day3Data, schema: day3Schema, uischema: day3UISchema },
  { id: 'day4', data: day4Data, schema: day4Schema, uischema: day4UISchema },
  { id: 'day5', data: day5Data, schema: day5Schema, uischema: day5UISchema },
  { id: 'day6', data: day6Data, schema: day6Schema, uischema: day6UISchema },
  { id: 'initial', data: day2Data, schema: day2Schema, uischema: day2UISchema },
];

export const rootReducer: Reducer<JsonFormsState & ExampleState> =
  combineReducers({ jsonforms: jsonformsReducer(), examples: (state = []) => state });

export interface ExampleState {
  examples: ExampleDescription[];
}

export const initialState: JsonFormsState & ExampleState = {
  jsonforms: {
    renderers: angularMaterialRenderers
  },
  examples
};
