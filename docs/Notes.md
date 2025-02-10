
## Syncing Strategys

1. **Strategy 1**
  - broadcast signal on local network from sending device
  - receiving device(s) should get some kind of notification or
  <br>have some button that initiates listening for broadcast
  <br>signal
  - receive broadcast signal and have some kind of
  <br>authentication to determine that data is sending to
  <br>correct device/use
  - upon successful authentication, send data


## Features
### Tasks Lists

#### What is a Task list?

A list of tasks, which haves some kind of associative property binding them
<br>together, even if this property is just "because i said so"

I want to borrow a concept from **[Anytype]()** : Sets and Collections
- Set : groups and filters tasks based on a concrete property, eg date, is-done
<br>etc
- Collection - "because i said so". Its basically tasks grouped together
<br>arbitrarily. This grouping is user defined.

#### Types of "Associativity"

**Number**
<div style="display:flex">
  <div style="width:50%; border-right:1px solid #5f5f5fff">
    <ul>
      <li>is equal to <strong>{num}</strong></li>
      <li>less than/greater than <strong>{num}</strong></li>
      <li>less than/greater than or equal to <strong>{num}</strong></li>
    </ul>
  </div>

  <div style="margin-left:5px">
    <strong>Key</strong>
    <ul>
      <li><strong>num</strong> - natural number</li>
    </ul>
  </div>
</div>
<br>

**Dates**

<div style="display:flex">
  <div style="width:50%; border-right:1px solid #5f5f5fff"">
    <ul>
      <li>is on <strong>{unit}</strong> of <strong>{date}</strong></li>
      <li>is before/after <strong>{unit}</strong> of <strong>{date}</strong></li>
      <li>is on or before/after <strong>{unit}</strong> of <strong>{date}</strong></li>
    </ul>
  </div>

  <div style="margin-left:5px">
    <strong>Key</strong>
    <ul>
      <li><strong>unit</strong> - {day, week, month, year, etc}</li>
      <li><strong>date</strong> - normal date, today, tomorrow yesterday, etc</li>
    </ul>
  </div>
</div>

**Text**
- Ascending/descending (alphabetical/reverse)

**Tags**
- has all of
- has any of
- has none of

**Note** Properties can be stacked

**Note** Should probably have some centralized place from which these are
<br>defined

## Class List

### Front End
- task - will be sent via post request
  - title
  - due
  - schedule
  - description


- tasklist - also sent via post request
  - title
  - definition(condition)
