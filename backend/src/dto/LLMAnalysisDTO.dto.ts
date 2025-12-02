export interface LLMAnalysisDTO {
  merchantId: string;
  domain: string;
  prompt: string;
  response: string;
  riskScore: number;
  riskReasons: string[];
  modelName: string;     // UPDATED
  tokensUsed: number;
};
