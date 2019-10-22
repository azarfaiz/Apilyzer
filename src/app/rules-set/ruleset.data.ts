export const ruleSet = [
  {
    category: 'API Standard',
    score: 70,
    issues: [
      {
        summary: 'Parameter Standard',
        description: 'To be added',
        remedy: 'To be added'
      },
      {
        summary: 'Schema Validation',
        description: 'To be added',
        remedy: 'To be added'
      },
      {
        summary: 'Server information missing',
        description: 'Server information is missing at the path level',
        remedy: 'Add server information to the path object (/path) at line 24'
      }
    ]
  },
  {
    category: 'Ease of Use',
    score: 65,
    issues: [
      {
        summary: 'Description field missing',
        description: 'Description field is missing at Path object',
        remedy: 'Add description field to the Path object (/new) at line 35'
      },
      {
        summary: 'Description field missing',
        description: 'Description field is missing at Server object',
        remedy: 'Add description field to the Server object at line 15'
      },
      {
        summary: 'Contact field missing',
        description: 'Contact field is missing at Info object',
        remedy: 'Add contact field to the Info object at line 5'
      },
      {
        summary: 'License field missing',
        description: 'License field is missing at Info object',
        remedy: 'Add license field to the Info object at line 5'
      },
      {
        summary: 'Error code description',
        description: 'It is a good practice to describe the error codes',
        remedy: 'Add description to the error codes for the Path object (/new) at line 35'
      }
    ]
  },
  {
    category: 'Security',
    score: 50,
    issues: [
      {
        summary: 'Protocol validation at API level',
        description: 'To be added',
        remedy: 'To be added'
      },
      {
        summary: 'Auth information hardcoded',
        description: 'It is not a secure practice to hardcode auth information in the schema file',
        remedy: 'Remove the hardcoded auth information at line 48'
      }
    ]
  },
  {
    category: 'Performance',
    score: 60,
    issues: [
      {
        summary: 'Response time validation',
        description: 'To be added',
        remedy: 'To be added'
      },
      {
        summary: 'Server availability',
        description: 'To be added',
        remedy: 'To be added'
      }
    ]
  }
];
