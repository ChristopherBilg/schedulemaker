# ScheduleMaker ReadME
[Click here for the link to the app (v1)](http://schedule-maker.s3-website.us-east-2.amazonaws.com/)
# This repo will be archived and view-only. Future development will take place in the new dedicated repos for each functionality.

[Click here for the Updated Project Proposal](https://github.com/3296f19temple/schedulemaker/blob/master/Proposal.md)

## Project Documentation Overview

The project board is located [here](https://trello.com/b/wwvFk4F7/schedule-maker).

Below is a list of the software used in this project and a rough outline of where they are being used.
- AWS services for hosting and back-end
   * DynamoDB for holding class data
   * S3 for web hosting
   * Lambda for back-end code execution
   * API gateway for creating application API
- Bootstrap (v4.3.1) for front-end UI
- Node.JS (v10.16.3): JavaScript framework as the backend and database for the web application
- Mocha (v6.2.2) for unit testing
- AWS-CLI (v1.16.272) for interacting with the AWS cloud services through Python (2/3)
- Localstack (v0.10.4) for mocking AWS services locally
- Docker (v19.03) to run Localstack

## Development Environment Overview
The development environment consists of a Linux envrionment with a Docker container running Localstack to mimic AWS services locally and the above-mentioned software frameworks installed. The AWS CLI is used to both interact with Localstack and our production AWS envrionment in the cloud.

## Vision Statement
For Temple University students who need assistance planning course schedules. ScheduleMaker is a minimal web application that displays multiple scheduling options based on course selections, unlike Temple's current registration system. Our product will produce all possible schedules based on the courses requested, removing the need for students to figure out all their schedule options manually.

## Feature List
Scheduling by the following criteria:
- Start and ending times for courses
- Which preferred days of the week (MTWRF) you would like your courses to be on
- Which campus or campuses you should search for courses on
- Professor preference
- Export a list of CRN's to copy and paste into the Temple University registration web interface
- Import course-list
- Course prioritization (IE If you have the option for two different courses and only need to take one)
- Mobile UI layout vs. Desktop UI layout (mobile-friendly approach to UI)

## Personas (1 for each team member)
1. Patrick is a computer science student at Temple's main campus. He loves to find the most efficient use of his time and would like to customize his course schedule as much as possible. Patrick's criteria is the follow: no courses before 10 am, no courses after 5 pm, and if possible only having to be on campus 3 days per week.

2. Megan is a business major at Temple Japan. She is not very 'technologically' savvy and is visiting the Schedule Maker web application for the first time. She also did not plan this well so she only has 1 hour to find a schedule for herself before the deadline approaches. Megan likes simple user-interfaces and shies away from any complex technology.

3. Amanda works at Buffalo Wild Wings on the weekends and her manager is persistent in her ability to keep her schedule as open as possible. Amanda lives on campus at Temple's main campus. She does not care how many days she has to work, as long as she is off campus by 4 PM everyday. This is a mandatory requirement for her schedule.

4. Ryan is a Temple University senior and is commuting from Trenton, NJ. His commute time is about an hour so his main scheduling criteria relies on minimizing the amount of individual days that he has to spend commuting. Ryan would prefer to spend 3 longer days on Temple's main campus over 5 shorter days, because of the hour commute time each way. His only schedule conflict lies minimizing this criteria.

5. Sam is a 20 year old Temple University sophomore is interested in changing majors and wants to confirm that their new major requirements will fit into a schedule. They live halfway between Temple's main campus and Temple's Ambler campus. If possible, they would like to prioritize the Ambler campus, while still leaving open the option to go into the city for courses that aren't available at the Ambler campus.

## Insights, Feedback and Team Member Expections
There were many great ideas and suggestions on the direction that the group should take this project. Many of the preconceived ideas were kept; however, some of them were modified. One of which is the format that we will be gathering the course data through web scraping and url tampering. All of the team members are eager to start working on the project and are invested time-wise. The end-goal expectation that we all have for this project is to, at the very least, have a minimally working web application in the end. This will be able to take in simple course data, and process the course data into a schedule that will be sent to the user through the web app.
