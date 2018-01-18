import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        'id': 1,
        'name': 'Send email to Adrian',
        'description': 'Confirm if you have passed the subject',
        'done': false,
        'comments': [
          {
            'message': 'Need Translation'
          },
          {
            'message': 'EMail must be reviewed'
          }
        ],
        'recurrence': 'Weekly',
        'recurrence_interval': 2
      },
      {
        'id': 2,
        'name': 'Buy gloves',
        'description': 'I need them for the ski trip',
        'done': true,
        'recurrence': 'Never',
        'comments': [
          {
            'message': 'Need more information of prefered glove type'
          }
        ]
      }
    ];
    return {tasks};
  }
}
