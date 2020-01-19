# from googleapiclient.discovery import build
# from oauth2client import file, client
# credentials = client.AccessTokenCredentials('ACCESS_TOKEN', 'USER_AGENT')
# service = build('calendar', 'v3', credentials=credentials)
# calendars = service.calendarList().list().execute()

from __future__ import print_function
from datetime import datetime
import pickle
import os.path
from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import dateutil.parser
from datetime import timedelta


# If modifying these scopes, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/calendar.readonly', 'https://www.googleapis.com/calendar/v3/calendars/calendarId/events']


def filledCalendar(start, end):
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

    freeTime = 12.0

    # Call the Calendar API
    events_result = service.events().list(calendarId='primary', timeMin=start, timeMax=end, singleEvents=True, orderBy='startTime').execute()

    events = events_result.get('items', [])


    eventList = []

    if not events:
        print('No upcoming events found.')
    for event in events:
        # freeTime = event.end - event.start
        endTime = event['end'].get('dateTime')
        endTime = dateutil.parser.parse(endTime)
        startTime = event['start'].get('dateTime')
        startTime = dateutil.parser.parse(startTime)

        hours_diff = (endTime - startTime).total_seconds()/3600

        freeTime -= hours_diff

        start = event['start'].get('dateTime', event['start'].get('date'))

        eventList.append({event['summary'], event['start'].get('dateTime'), event['end'].get('dateTime')})

    return eventList



def addEvents():
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

    file = open("data.txt", "r")

    className = ""

    class Event:
        def __init__(self, className, assignmentName, type, dueDate, numHours, daysBeforeDue, priority):
            self.className = className
            self.assignmentName = assignmentName
            self.type = type
            self.dueDate = dateutil.parser.parse(dueDate)
            self.numHours = numHours
            self.daysBeforeDue = 0
            self.priority = 0;

    mandatoryEvents = []

    for line in file:
        individual = line.split("|")
        mandatoryEvents.append(Event(individual[0], individual[1], individual[2], individual[3], individual[4], 0, 0))



    for event in mandatoryEvents:

        event.daysBeforeDue =  (datetime.date(event.dueDate) - datetime.date(datetime.now())).total_seconds()/86400

        if (event.daysBeforeDue < 7):
            event.priority = int(event.numHours)/ int(event.daysBeforeDue/2)

    busyTimes = filledCalendar('2020-01-20T09:00:00-05:00', '2020-01-24T21:00:00-05:00')

    ## Day ONE
    task1 = {
      'summary': 'Work on: CS2214B: Assignment 2 - Python',
      'start': {'dateTime': '2020-01-20T9:00:00-05:00'},
      'end': {'dateTime': '2020-01-20T11:30:00-05:00'}
    }

    task2 = {
          'summary': 'Work on: CS2212B: Assignment 3',
          'start': {'dateTime': '2020-01-20T16:00:00-05:00'},
          'end': {'dateTime': '2020-01-20T16:30:00-05:00'}
    }

    task3 = {
          'summary': 'Work on: WRTG2111G: Illiad Essay',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }

    task4 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T18:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T21:00:00-05:00'}
    }

    # Day TWO

    task5 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }


    task6 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }


    task7 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }


    task8 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }


    task9 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }

    task10 = {
          'summary': 'Work on: 2214B: Assignment 2 - Python',
          'start': {'dateTime': '2020-01-20T13:30:00-05:00'},
          'end': {'dateTime': '2020-01-20T14:30:00-05:00'}
    }

    event = service.events().insert(calendarId='primary', body=task1).execute()
    event = service.events().insert(calendarId='primary', body=task2).execute()
    event = service.events().insert(calendarId='primary', body=task3).execute()
    event = service.events().insert(calendarId='primary', body=task4).execute()
    # event = service.events().insert(calendarId='primary', body=task1).execute()
    # event = service.events().insert(calendarId='primary', body=task1).execute()

    # print("Event created")

# if __name__ == '__main__':
#     main()
# print(filledCalendar('2020-01-20T09:00:00-05:00', '2020-01-20T21:00:00-05:00'))
addEvents()
