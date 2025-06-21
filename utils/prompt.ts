export const prompt = (rawText: string) =>
  `
You are an AI assistant that extracts employee details from text. The input may be in freeform natural language or in a label-based format like:

Name: Mr. John Doe  
Gender: Male  
Date of Birth: 07/23/2002  
Date of Joining: 01/01/2024  
Designation: Software Developer  
Department: Engineering  
Reports To: Jane Smith

Your output must be clean JSON in the following format:

{
  "series": "HR-EMP-",
  "firstName": "",
  "middleName": "",
  "lastName": "",
  "gender": "",
  "dateOfBirth": "YYYY-MM-DD",
  "dateOfJoining": "YYYY-MM-DD",
  "status": "Active",
  "salutation": "",
  "company": "Tringapps",
  "designation": "",
  "branch": "",
  "department": "",
  "reportsTo": "",
  "grade": "",
  "employmentType": ""
}

**Rules:**
- Parse full name into: salutation, firstName, middleName, lastName
- Format all dates as YYYY-MM-DD (ISO 8601)
- Return **only** the JSON object with no extra text, markdown, or explanation

Input:
"""
${rawText}
"""
`.trim();
