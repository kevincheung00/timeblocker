from __future__ import print_function
from datetime import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import dateutil.parser
from retrieveData import events

# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar']

def main():
    """Shows basic usage of the Google Calendar API.
    Prints the start and name of the next 10 events on the user's calendar.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('calendar', 'v3', credentials=creds)

    hoursLeft = 10

    dueDate = dateutil.parser.parse('2020-01-23T11:59:00-05:00')

    dueDate = datetime.date(dueDate)

    print(dueDate)
    print(datetime.date(datetime.now()))
    daysBeforeDue =  (dueDate - datetime.date(datetime.now())).total_seconds()/86400
    print(daysBeforeDue)


    freestuff = retrieveData()

    currentTask = {
      'summary': 'Work on: 2214B: Assignment 2 - Python',
      'start': {'dateTime': ''},
      'end': {'dateTime': ''}
    }
    # event = service.events().insert(calendarId='primary', body=event).execute()
    # print 'Event created: %s' % (event.get('htmlLink'))
    print("Event created")


if __name__ == '__main__':
    main()
