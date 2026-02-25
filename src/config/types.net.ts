import type { SsrFPolicy } from "../infra/net/ssrf.js";

export type NetSsrFPolicyConfig = Pick<SsrFPolicy, "allowRfc2544BenchmarkRange">;

export type NetConfig = {
  /** SSRF policy applied to general media/URL fetches (channel inbound media, web_fetch, etc.). */
  ssrfPolicy?: NetSsrFPolicyConfig;
};
