## Pre-conditions
User account
    <p> email: user@phptravels.com
    <p> password: demouser
    <p> web: https://www.phptravels.net/

## Feature: Booking a room in hotel

### Scenario: Booking a room - a new user
        Given the user has choosen to book a room at Saffron Boutique Hotel
        And the user enters all the required personal info
        And the booking details are displayed
        When the user complete the booking process
        Then the user is redirected to the booking invoice details page
        And the option to download the invoice as PDF is available

> **Notes**:
>
> It would be useful give the option or remember to login if the user has an account.


### Scenario: See booking room details
        Given the user logs in the Travel page
        When the user goes to My Bookings section
        And the user goes to the invoice details for the booking
        Then the full payment option is availble
        And the booking information is displayed

> Notes:
>
> Edit option is not available, so if the user wishes to book more days, for example, he must cancel the reservation 
> and request a new one.

### Scenario: Booking cancelation
        Given the user has a reservation for Friday at Vista Bonita Hotel
        And today is Wednesday
        When the user request the cancelation from the invoice page
        Then a warning message is displayed
        And the user confirms the cancelation
        Then the user remains on the invoice page
        But the booking status is pending

> Notes:
>
> Canceletion option from the dashboard panel would save time fo the user
> What about booking cancelation policies, such as refounds, monetary penalty, cancelation time windows?