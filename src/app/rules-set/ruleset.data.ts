export const ruleSet = [
  {
    category: 'API Standard',
    score: 60,
    subCategory: [
      {
        name: 'Standard sub 1',
        issues: [
          {
            summary: 'Response that should contain a body has no schema defined',
            description: 'You have not defined any schemas for responses that should contain a body.',
            remedy: 'Define schemas for all responses that should have a body.Alternatively, if you do not want to include a body, you can change the HTTP status code in the response to one that should not have a body.',
            severity: 'low',
            impact: 5
          },
          {
            summary: 'String parameter \'petId\' has no pattern defined',
            description: 'Some string parameters in your API do not define any pattern for the accepted strings. This means that they do not limit the values that get passed to the API.',
            remedy: 'Set a well-defined regular expression in the pattern field of string parameters. This ensures that only strings matching the set pattern get passed to your API.',
            severity: 'low',
            impact: 5
          }
        ]
      },
      {
        name: 'Standard sub 2',
        issues: [
          {
            summary: 'Numeric parameter \'limit\' of type \'integer\' has no maximum defined',
            description: 'Some numeric parameters in your API do not have the maximum value specified.',
            remedy: 'Set both the minimum and maximum values for numeric parameters to limit the accepted values to the range that works for your application.',
            severity: 'low',
            impact: 5
          }
        ]
      }
    ]
  },
  {
    category: 'Ease of Use',
    score: 65,
    subCategory: [
      {
        name: 'Ease of Use Sub 1',
        issues: [
          {
            summary: 'Description field missing',
            description: 'Description field is missing at Path object',
            remedy: 'Add description field to the Path object (/new) at line 35',
            severity: 'low',
            impact: 5
          }
        ]
      },
      {
        name: 'Ease of Use Sub 2',
        issues: [
          {
            summary: 'Error code description',
            description: 'It is a good practice to add description for each error codes',
            remedy: 'Add description to the error codes for the Path object (/new) at line 35',
            severity: 'medium',
            impact: 10
          }
        ]
      }
    ]
  },
  {
    category: 'Security',
    score: 50,
    subCategory: [
      {
        name: 'Security sub category 1',
        issues: [
          {
            description: 'The global security field of the API has not been defined. This field specifies' +
              ' if your API requires the API consumer to authenticate to use the API.',
            remedy: 'First, define the securityDefinitions or securitySchemes field on the global' +
              ' level, and list the authentication methods that you plan to use.',
            severity: 'high',
            impact: 25
          },
          {
            description: 'Some text to be displayed',
            remedy: 'Some text to be displayed',
            severity: 'low',
            impact: 10
          }
        ]
      },
      {
        name: 'Security sub category 2',
        issues: [
          {
            description: 'The global security field of the API has not been defined. This field specifies' +
              ' if your API requires the API consumer to authenticate to use the API.',
            remedy: 'First, define the securityDefinitions or securitySchemes field on the global' +
              ' level, and list the authentication methods that you plan to use.',
            severity: 'high',
            impact: 25
          }
        ]
      }
    ]
  },
  {
    category: 'Performance',
    score: 60,
    subCategory: [
      {
        name: 'Performance Sub 1',
        issues: [
          {
            summary: 'Response time validation',
            description: 'To be added',
            remedy: 'To be added',
            severity: 'high',
            impact: 25
          }
        ]
      },
      {
        name: 'Performance sub category 2',
        issues: [
          {
            summary: 'Server availability',
            description: 'To be added',
            remedy: 'To be added',
            severity: 'high',
            impact: 25
          }
        ]
      }
    ]
  }
];
