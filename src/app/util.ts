import { combineReducers, createStore } from 'redux';
declare var JSONFormsMaterial: any;
declare var JSONFormsCore: any;

export const prepareStore = (data = undefined, schema = undefined, uischema = undefined) => {
    return createStore(
        combineReducers({
          jsonforms: JSONFormsCore.jsonformsReducer()
        }),
        {
          jsonforms: {
            core: {
              data: data,
              schema: schema,
              uischema: uischema
            },
            renderers: JSONFormsMaterial.materialRenderers,
            fields: JSONFormsMaterial.materialFields
          }
        }
      );
};
export const getData = (store) => {
    return JSONFormsCore.getData(store.getState());
};
