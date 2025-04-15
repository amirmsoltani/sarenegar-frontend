export interface INormalState<D, T = any> {
  data?: D;
  error?: unknown;
  requestData?: T;
  status: "idle" | "success" | "loading" | "error";
}
