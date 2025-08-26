Feature: Login

  Scenario Outline: Login with multiple users
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see "<expectedTitle>"

  Examples: 
    | username          | password      | expectedTitle                                                   |
    | standard_user     | secret_sauce  | Products                                                        |
    | locked_out_user   | secret_sauce  | Epic sadface: Sorry, this user has been locked out.             |
