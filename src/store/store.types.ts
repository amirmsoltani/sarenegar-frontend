export interface INormalState<D> {
  data?: D;
  error?: unknown;
  status: 'idle' | 'success' | 'loading' | 'error';
}
