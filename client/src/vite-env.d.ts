/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MCP_SERVER_REQUEST_TIMEOUT: string;
  readonly VITE_MCP_REQUEST_TIMEOUT_RESET_ON_PROGRESS: string;
  readonly VITE_MCP_REQUEST_MAX_TOTAL_TIMEOUT: string;
  readonly VITE_MCP_PROXY_FULL_ADDRESS: string;
  readonly VITE_MCP_DEFAULT_TRANSPORT_TYPE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
