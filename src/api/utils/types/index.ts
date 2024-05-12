export type CommonRequestHeadersList = 'Accept' | 'Content-Length' | 'User-Agent' | 'Content-Encoding' | 'Authorization';

export type HeaderValue = string | string[] | number | boolean | null;

export interface RawHeaders {
  [key: string]: HeaderValue;
}

export type ContentType = HeaderValue | 'text/html' | 'text/plain' | 'multipart/form-data' | 'application/json' | 'application/x-www-form-urlencoded' | 'application/octet-stream';

export type RawRequestHeaders = Partial<RawHeaders & {
  [Key in CommonRequestHeadersList]: HeaderValue;
} & {
  'Content-Type': ContentType
}>;

export interface IGetOptions extends Omit<RequestInit, 'headers'>{
  params: Record<string, string>
  headers: HeadersInit
}
