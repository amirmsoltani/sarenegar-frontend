import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

export class StoreUtils {

  // @eslint-disable-next-line
  static normalAction (action: AsyncThunk<any, any, any>, builder: ActionReducerMapBuilder<object>, name?: string) {
    builder.addCase(action.fulfilled, (state, action) => {
      if (name) return { ...state, [name]: { status: 'success', data: action.payload } };
      else return { status: 'success', data: action.payload };
    });
    builder.addCase(action.pending, (state) => {
      if (name) return { ...state, [name]: { status: 'loading' } };
      else return { status: 'loading' };
    });
    builder.addCase(action.rejected, (state, action) => {
      if (name) return { ...state, [name]: { status: 'error', error: action.payload } };
      else return { status: 'error', error: action.payload };
    });
  }
}
