# Flloport
As a small startup development company, we're always looking for ways to deliver better software and stick to the timelines we give. What I've found really tough is to find where issues pop up and solve them for future problems. This is not about calling people out for mistakes or incorrect estimates, it's just to improve the team and the company over time.

As a project manager, I want sheets and reports to show insights about this project. I want to know:

- Is this project on track to complete in the given timeline?
- Are there any issues popping up that need to be solved to improve future projects?
- Is there someone in the team that keeps repeating the same process and we need to come up with a new way to solve the problem?
- Is testing and quality assurance actually being done correctly? Do these features ever come back later because something wasn't tested?


As a developer, I want to know what I'm working on now, what's coming up and I want to be given the freedom to come up with the best solution possible. I want to know:

- Did I estimate the stories correctly?
- Am I on track to finish my sprint in time?
- Am I able to adapt during a sprint if I see a problem with the current system?

As a client, I want to know whether or not the timeline and budget is going to be kept. I'd expect quality to always be high, this wouldn't be a negotiation in my mind - instead the timeline or budget should suffer. I say this from experience, refactoring and changing old code is near impossible when it hasn't been written well from the start. I want to know:

- Is the deadline going to be hit?
  - If not, I'd like to know as soon as possible so that I can manage expectations of my customers.
- Will the project be kept in budget?
  - If not, I'd like to make a call as early as possible to either pivot or put more money into it. I don't want the project to reach the deadline and only then realise it's not ready and we need more money to keep it going.


## The flow
Cool so now that you know what I'm thinking as each person in the business (yes I know there are more and hopefully this will grow to cater for all of them), it's time for me to show what I'm thinking we need:

```
+--------------------+                +------------------+              +--------------------------+
|                    |                |                  |              |                          |
|  Add new entry in  +--------------> |  Based on input  +------------> |  Track card movement,    |
|  Google Sheet      |                |  add new Trello  |              |  issues, etc, in Trello  |
|                    |                |  Card            |              |  and report in Sheets.   |
+--------------------+                |                  |              |                          |
                                      +------------------+              +--------------------------+
```

I want to use API integrations with Trello and Google Sheets to deliver the reports and also allow developers to work in the format and flow that they love.

## The System
I really like working with `node.js` and that's what I'm sticking to in this project. I'm using `nestjs` for the backend code... because it's effing cool. You should donate if you have the chance!