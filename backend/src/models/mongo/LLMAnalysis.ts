import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface ILLMAnalysis extends Document {
  objectId: ObjectId;
  merchantId: string;
  domain: string;
  prompt: string;
  response: string;
  riskScore: number;
  riskReasons: string[];
  modelName: string;  // UPDATED
  tokensUsed: number;
  createdAt: Date;
}

const LLMAnalysisSchema = new Schema<ILLMAnalysis>(
  {
    merchantId: { type: String, required: true, index: true },
    domain: { type: String, required: true, index: true },

    prompt: { type: String, required: true },
    response: { type: String, required: true },

    riskScore: { type: Number, min: 0, max: 100 },
    riskReasons: { type: [String], default: [] },

    modelName: { type: String, default: "gpt-4o-mini" }, // UPDATED
    tokensUsed: { type: Number },

    createdAt: { type: Date, default: Date.now, index: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

LLMAnalysisSchema.index({ merchantId: 1, domain: 1, createdAt: -1 });

export const LLMAnalysis = mongoose.model<ILLMAnalysis>(
  "LLMAnalysis",
  LLMAnalysisSchema
);
