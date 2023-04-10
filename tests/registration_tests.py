import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
import time
import re

main_link = "http://127.0.0.1:3000"
registration_link = "http://127.0.0.1:3000/registration"
practice_details_link = "http://127.0.0.1:3000/registration/practice-details"
privacy_link = "https://brightsquid.com/pages/brightsquid-application-privacy-policy"
terms_link = "https://brightsquid.com/pages/brightsquid-application-terms-of-use"
final_link = "http://127.0.0.1:3000/final"

'''
    This class contains unit tests for the 'Welcome' Page
    - 3 Unit Tests
    - Currently have 3/3 Passing 
'''
class WelcomePageTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome() # use firefox or change to chrome

    # (REQ-001) test next button 
    def testWelcomeNextButton(self):
        self.driver.get(main_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "setup-btn").click()                 # clicks on "Next Steps" button 
        self.assertTrue(registration_link, self.driver.current_url)        # check if you're in the registration page 
    
    #  (REQ-002) test for privacy link
    def testWelcomePrivacyLink(self):
        self.driver.get(main_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "privacy-policy").click() # click privacy policy 
        self.assertTrue(privacy_link, self.driver.current_url)  # check if the url matches 
        self.driver.back()                                      # go back to previous page

    # (REQ-003) test for  terms of use link
    def testWelcomeTermsLink(self):
        self.driver.get(main_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "terms-of-use").click()  # click privacy policy 
        self.assertTrue(terms_link, self.driver.current_url)   # check if the url matches 
        self.driver.back()                                     # go back to previous page

    def tearDown(self):
        print("Test completed: ", self.id())
        self.driver.quit() 

'''
    This class contains unit tests for the 'Registration' Page
    - 12 Unit Tests
    - Currently have 9/12 Passing 
'''
class RegistrationPageTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome() # use firefox or change to chrome

    #  (REQ-001) test next button  
    def testRegistrationNextStepsButton(self):
        self.driver.get(registration_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        user_field = react_app.find_element(By.ID, "username")
        pass_field = react_app.find_element(By.ID, "password")
        confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

        user_field.send_keys("User2023")                    # fill in username field
        pass_field.send_keys("brightsquidiscool")           # send matching values to password fields
        confirm_pass_field.send_keys("brightsquidiscool")
        
        react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        
        WebDriverWait(self.driver, 5).until(EC.alert_is_present())              # wait for alert to appear
        alert = self.driver.switch_to.alert                                     # switch to alert window
        alert.accept()                                                          # accept the alert to close

        self.assertTrue(practice_details_link, self.driver.current_url)    # check if it brings you to the Practice Details page

    #  (REQ-002) test for privacy link
    def testRegistrationPrivacyLink(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "privacy-policy").click()     # click privacy policy 
        self.assertTrue(privacy_link, self.driver.current_url) # check if the url matches 
        self.driver.back()                                          # go back to previous page

    # (REQ-003) test for  terms of use link
    def testRegistrationTermsLink(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "terms-of-use").click()       # click privacy policy 
        self.assertTrue(terms_link, self.driver.current_url)   # check if the url matches 
        self.driver.back()    
    
    # (REQ-004) test to see if user cannot move to next steps if they have a password with the same consecutive characters
    # - same characters should fail
    def testRegistrationPasswordWeakSameChar(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "username").send_keys("Tester123456")

        react_app.find_element(By.ID, "password").send_keys("uuuuuuuuuuuu")
        react_app.find_element(By.ID, "confirm-password").send_keys("uuuuuuuuuuuu")

        react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        WebDriverWait(self.driver, 5).until(EC.alert_is_present())              # wait for alert to appear
        alert = self.driver.switch_to.alert                                     # switch to alert window
    
        self.assertNotEqual("User created successfully", alert.text)   
       
    # (REQ-005) test if account can be created with only uppercase letters in password 
    # - user shouldn't be able to create an account with just uppercase letters and meeting minimum 11 characters
    def testRegistrationPasswordMeterCriteriaUppercaseOnly(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "username").send_keys("Tester1234")     

        react_app.find_element(By.ID, "password").send_keys("ASDFIWOERADOPFKAOSD")
        react_app.find_element(By.ID, "confirm-password").send_keys("ASDFIWOERADOPFKAOSD")

        react_app.find_element(By.ID, "next-steps-btn").click()        # clicks on "Next Steps" button 

        WebDriverWait(self.driver, 5).until(EC.alert_is_present())     # wait for alert to appear
        alert = self.driver.switch_to.alert  
        self.assertNotEqual("User created successfully", alert.text)   

    # (REQ-006) test if account can be created with only lowercase letters in password 
    # - user shouldn't be able to create an account with just lowercase letters and meeting minimum 11 characters
    def testRegistrationPasswordMeterCriteriaLowercaseOnly(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "username").send_keys("Tester123")  # get username field

        react_app.find_element(By.ID, "password").send_keys("asdfghbdsaf")
        react_app.find_element(By.ID, "confirm-password").send_keys("asdfghbdsaf")

        react_app.find_element(By.ID, "next-steps-btn").click()        # clicks on "Next Steps" button 
        
        WebDriverWait(self.driver, 5).until(EC.alert_is_present())     # wait for alert to appear
        alert = self.driver.switch_to.alert          
        self.assertNotEqual("User created successfully", alert.text)  # check if the user wasn't able to create account

    # (REQ-007) test if account can be created with only numbers in password 
    # - user shouldn't be able to create an account with just numbers
    def testRegistrationPasswordMeterCriteriaNumbersOnly(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "username").send_keys("Tester12345")

        react_app.find_element(By.ID, "password").send_keys("18422304231")
        react_app.find_element(By.ID, "confirm-password").send_keys("18422304231")

        react_app.find_element(By.ID, "next-steps-btn").click()        # clicks on "Next Steps" button 

        WebDriverWait(self.driver, 5).until(EC.alert_is_present())     # wait for alert to appear
        alert = self.driver.switch_to.alert   
        self.assertNotEqual("User created successfully", alert.text)   

    # (REQ-008) test if account can be created with only special chars in password 
    # - user shouldn't be able to create an account with just special chars
    def testRegistrationPasswordMeterCriteriaSpecialCharOnly(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        user_field = react_app.find_element(By.ID, "username").send_keys("Tester123")

        react_app.find_element(By.ID, "password").send_keys("$&**@(#)$)@$(!)")
        react_app.find_element(By.ID, "confirm-password").send_keys("$&**@(#)$)@$(!)")

        react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        WebDriverWait(self.driver, 5).until(EC.alert_is_present())              # wait for alert to appear
        alert = self.driver.switch_to.alert                                     # switch to alert window
    
        self.assertNotEqual("User created successfully", alert.text)   

    # (REQ-009) test if account can be created with less than 11 chars
    # - user shouldn't be able to create an account with less than 11 characters in pass
    def testRegistrationPasswordWeakLessThan11(self):
        self.driver.get(registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "username").send_keys("Tester1234567")

        react_app.find_element(By.ID, "password").send_keys("AsdFgv!2")
        react_app.find_element(By.ID, "confirm-password").send_keys("AsdFgv!2")

        react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        WebDriverWait(self.driver, 5).until(EC.alert_is_present())              # wait for alert to appear
        alert = self.driver.switch_to.alert                                     # switch to alert window
    
        self.assertEqual("Password is not strong enough. Please add 3 more characters", alert.text)

    # (REQ-011) test if password is represented by dots
    def testRegistrationPasswordToggle(self):
        self.driver.get(registration_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        pass_type = react_app.find_element(By.ID, "password").get_attribute("type") # get type of textfield

        self.assertEqual("password", pass_type) # if type is "password", then the text is hidden

    # (REQ-011) test if passwords match 
    # - with a mismatched password, an error should be thrown
    def testRegistrationConfirmPassError(self):
        self.driver.get(registration_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        pass_field = react_app.find_element(By.ID, "password")
        confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

        # Send values to password fields
        pass_field.send_keys("abcdef12345")
        confirm_pass_field.send_keys("abcdef1245")
        react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        
        WebDriverWait(self.driver, 3).until(EC.alert_is_present())
        alert = self.driver.switch_to.alert
        self.assertEqual("Passwords do not match!", alert.text)

    # (REQ-012) test if password is entered 
    # - with an empty password field, an error should be thrown
    def testRegistrationEmptyPassError(self):
        self.driver.get(registration_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        # fill in username field
        user_field = react_app.find_element(By.ID, "username")
        user_field.send_keys("User123")

        react_app.find_element(By.ID, "next-steps-btn").click()         # click "Next Steps" button
        
        WebDriverWait(self.driver, 3).until(EC.alert_is_present())      
        alert = self.driver.switch_to.alert
        self.assertEqual("Please fill the password field", alert.text)

    def tearDown(self):
        print("Test completed: ", self.id())
        self.driver.quit() 

'''
    This class contains unit tests for the 'Practice Details' Page
    - 7 Unit Tests
    - Currently have 6/7 Passing 
'''
class PracticeDetailsPageTests(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome() # use firefox or change to chrome

    # (REQ-001) test next button after all required fields are filled 
    def testPracticeDetailsPageNextButtonRequiredFields(self): 
        self.driver.get(practice_details_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        keyDown = ActionChains(react_app)

        # obtain all required fields
        practice_name = react_app.find_element(By.ID, "practice_name")          # get practice name field
        clinic_type = react_app.find_element(By.ID, "orgType-select")           # get clinic type field
        clinic_subtype = react_app.find_element(By.ID, "orgSubType-select")     # get subtype field
        province = react_app.find_element(By.ID, "province-select")             # get province field

        # fill in fields with values 
        practice_name.send_keys("Test Practice Name")

        # Click an option for each dropdown and add a 2 second delay in each
        clinic_type.click()
        clinic_menu = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "menu-orgType")))        
        clinic_menu.find_element(By.ID, "Physician's Office").send_keys(Keys.RETURN)
        time.sleep(2)   

        clinic_subtype.click()
        subtype_menu = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "menu-orgSubType")))        
        subtype_menu.find_element(By.ID, "General Practice").send_keys(Keys.RETURN)
        time.sleep(2)  
    
        # clinic_type
        province.click()
        prov_menu = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "menu-province")))        
        prov_menu.find_element(By.ID, "Alberta").send_keys(Keys.RETURN)
        time.sleep(2) 

        react_app.find_element(By.ID, "next-btn").click()       # click next button
        self.assertTrue(final_link, self.driver.current_url)    # check if we are in the final page     
    
    #  (REQ-002) test for privacy link
    def testPracticeDetailsPagePrivacyLink(self): 
        self.driver.get(practice_details_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "privacy-policy").click() # click privacy policy 
        self.assertTrue(privacy_link, self.driver.current_url)  # check if the url matches 
        self.driver.back()       

    # (REQ-003) test for terms link
    def testPracticeDetailsPageTermsLink(self): 
        self.driver.get(practice_details_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "terms-of-use").click()       # click privacy policy 
        self.assertTrue(terms_link, self.driver.current_url)   # check if the url matches 
        self.driver.back()                                          # go back to previous page

    # (REQ-013) test if the next button won't work with empty required fields
    def testPracticeDetailsPageNextButtonEmptyFields(self): 
        self.driver.get(practice_details_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        time.sleep(5)
        attr = react_app.find_element(By.ID, "next-btn").get_attribute("aria-disabled") # check if button is disabled
        self.assertEqual("true", attr)                               

    # (REQ-014) test if "Back" button brings us to registration page
    def testPracticeDetailsPageBackButton(self):
        self.driver.get(practice_details_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
    
        react_app.find_element(By.ID, "back-btn").click()             # click back button
        self.assertTrue(registration_link, self.driver.current_url)   # check if the url matches the previous page          

    # (REQ-015) test if the phone field only contains numbers
    def testPracticeDetailsPagePhoneNumber(self):
        self.driver.get(practice_details_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
    
        # get practice phone field
        phone = react_app.find_element(By.CLASS_NAME, "react-tel-input").find_element(By.CLASS_NAME, "form-control")

        # send random values 
        phone.send_keys("4dsf0312sdf3456dss7")

        phone_val = (phone.get_attribute("value"))               # get the value from the text field
        clean_number = re.sub(r"[\(\)\+\-]", "", phone_val)      # remove the format of the phone number with regex 
        clean_number = clean_number.replace(" ", "")             # remove any spaces
        self.assertEqual(clean_number.isdigit(), True)           # check after all format is removed, that 
                                                                 # they're only numbers 
    
    # (REQ-016) check if data still stays on form when refreshed
    def testPracticeDetailsPageDataRetention(self):
        self.driver.get(practice_details_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        # get practice name field and send a value 
        react_app.find_element(By.ID, "practice_name").send_keys("Test Practice Name")
        
        # refresh page
        self.driver.refresh()

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        pratice_details_val = react_app.find_element(By.ID, "practice_name").get_attribute("value")

        self.assertEqual("Test Practice Name", pratice_details_val)

    def tearDown(self):
        print("Test completed: ", self.id())
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()
