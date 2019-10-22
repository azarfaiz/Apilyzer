export const ruleSet = [
  {
    category: 'API Standard',
    score: 60,
    issues: [
      {
        summary: 'Response that should contain a body has no schema defined',
        description: 'You have not defined any schemas for responses that should contain a body.',
        remedy: 'Define schemas for all responses that should have a body.Alternatively, if you do not want to include a body, you can change the HTTP status code in the response to one that should not have a body.'
      },
      {
        summary: 'String parameter \'petId\' has no pattern defined',
        description: 'Some string parameters in your API do not define any pattern for the accepted strings. This means that they do not limit the values that get passed to the API.',
        remedy: 'Set a well-defined regular expression in the pattern field of string parameters. This ensures that only strings matching the set pattern get passed to your API.'
      },
      {
        summary: 'Numeric parameter \'limit\' of type \'integer\' has no maximum defined',
        description: 'Some numeric parameters in your API do not have the maximum value specified.',
        remedy: 'Set both the minimum and maximum values for numeric parameters to limit the accepted values to the range that works for your application.'
      },
      {
        summary: 'Server information missing',
        description: 'Server information is missing at Path object',
        remedy: 'Add server information to the Path object (/path) at line 24'
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
        description: 'It is a good practice to add description for each error codes',
        remedy: 'Add description to the error codes for the Path object (/new) at line 35'
      }
    ]
  },
  {
    category: 'Security',
    score: 50,
    issues: [
      {
        summary: 'The security section is undefined',
        description: 'The global security field of the API has not been defined. This field specifies if your API requires the API consumer to authenticate to use the API.',
        remedy: 'First, define the securityDefinitions or securitySchemes field on the global level, and list the authentication methods that you plan to use.'
      },
      {
        summary: 'Hardcoded Auth information',
        description: 'It isn\'t a good practice to hardcode auth information in the schema file',
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
