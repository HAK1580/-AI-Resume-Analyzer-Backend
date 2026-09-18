const { Type } = require('@google/genai');

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    ATS_score: { type: Type.NUMBER },
    cv_compatibility: { type: Type.STRING },
    missing_keywords: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    },
    areas_for_improvement: {
      type: Type.ARRAY,
      items: { type: Type.STRING }
    }
  },
  required: ['ATS_score', 'cv_compatibility', 'missing_keywords', 'areas_for_improvement']
};

module.exports = responseSchema;