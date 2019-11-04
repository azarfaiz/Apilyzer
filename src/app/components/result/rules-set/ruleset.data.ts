import {CategoryModel} from '../../../model/category.model';

export class RulesetData {
  ruleSet: CategoryModel[] = [
    {
      category: 'API Standard',
      score: 70,
      subCategory: [
        {
          name: 'Parameters',
          issues: [
            {
              summary: 'Numeric parameter \'limit\' of type \'integer\' has no maximum defined',
              description: 'Some numeric parameters in your API do not have the maximum value specified.',
              remedy: 'Set both the minimum and maximum values for numeric parameters to limit the accepted values to the range that works for your application.',
              severity: 'low',
              impact: 5
            }
            ,
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
          name: 'Response Definition',
          issues: [
            {
              summary: 'Response that should contain a body has no schema defined',
              description: 'You have not defined any schemas for responses that should contain a body.',
              remedy: 'Define schemas for all responses that should have a body.Alternatively, if you do not want to include a body, you can change the HTTP status code in the response to one that should not have a body.',
              severity: 'high',
              impact: 20
            }
          ]
        }
      ]
    },
    {
      category: 'Ease of Use',
      score: 80,
      subCategory: [
        {
          name: 'Missing fields',
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
          name: 'Error code definition',
          issues: [
            {
              summary: 'Error code description is missing at few resource level',
              description: 'It is a good practice to add description for each error codes',
              remedy: 'Add description to the error codes for the Path object (/new) at line 35',
              severity: 'medium',
              impact: 15
            }
          ]
        }
      ]
    },
    {
      category: 'Security',
      score: 45,
      subCategory: [
        {
          name: 'Missing security definitions',
          issues: [
            {
              summary: 'The security section is undefined',
              description: 'The global security field of the API has not been defined. This field specifies' +
                ' if your API requires the API consumer to authenticate to use the API.',
              remedy: 'First, define the securityDefinitions or securitySchemes field on the global' +
                ' level, and list the authentication methods that you plan to use.',
              severity: 'high',
              impact: 30
            }
          ]
        },
        {
          name: 'Security schemes',
          issues: [
            {
              summary: 'API accepts HTTP requests in the clear',
              description: 'The API accepts HTTP communications in the clear. HTTP traffic is not encrypted and can thus be easily intercepted.',
              remedy: 'Remove http from the schemes list, and only include https',
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
          name: 'Response Time',
          issues: [
            {
              summary: 'Response time validation',
              description: 'To be added',
              remedy: 'To be added',
              severity: 'high',
              impact: 20
            }
          ]
        },
        {
          name: 'Availability',
          issues: [
            {
              summary: 'Server availability',
              description: 'To be added',
              remedy: 'To be added',
              severity: 'high',
              impact: 20
            }
          ]
        }
      ]
    }
  ];
}



