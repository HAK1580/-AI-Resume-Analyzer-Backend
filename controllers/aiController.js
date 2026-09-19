
const { GoogleGenAI } = require("@google/genai");
const myresponseSchema = require("../models/responseSchema");
require("dotenv").config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_SECRET_KEY });

const analyze_resume = async (req, res) => {
  try {
    // 1. Check file upload validation
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a PDF file" });
    }
    
    const {jobDescription} = req.body.jobDescription || "General Web Development Role";
    const pdf64 = req.file.buffer.toString("base64");

    // 2. Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash", // Correct model name
      contents: [
        {
          inlineData: {
            data: pdf64,
            mimeType: "application/pdf"
          }
        },
        `Analyze this resume against the following Job Description: ${jobDescription}. Compare keywords, strengths, compatibility, and areas for improvement.`
      ],
      config: {
        responseMimeType: "application/json", // Required for JSON Schema enforcement
        responseSchema: myresponseSchema,
      }
    });

    // 3. Parse JSON string to Object & send back to frontend
    const result = JSON.parse(response.text);
    return res.status(200).json(result);

  } catch (err) {
    console.error("Gemini Controller Error:", err);
    return res.status(500).json({ message: "Failed to analyze resume" });
  }
};

module.exports = analyze_resume;