import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.action_chains import ActionChains
import time

class RegistrationTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox() # use firefox or change to chrome

        # links 
        self.main_link = "http://127.0.0.1:3000"
        self.registration_link = "http://127.0.0.1:3000/registration"
        self.practice_details_link = "http://127.0.0.1:3000/registration/practice-details"
        self.privacy_link = "https://brightsquid.com/pages/brightsquid-application-privacy-policy"
        self.terms_link = "https://brightsquid.com/pages/brightsquid-application-terms-of-use"
        self.final_link = "http://127.0.0.1:3000/final"


    # ########################################### WELCOME PAGE UNIT TESTS ############################################
    # # TODO: test for information message (REQ-005)
    # # def testWelcomeInfoMssg(self):

    # # test for privacy link (REQ-003)
    # def testWelcomePrivacyLink(self):
    #     self.driver.get(self.main_link)

    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     react_app.find_element(By.ID, "privacy-policy").click()     # click privacy policy 
    #     self.assertTrue(self.privacy_link, self.driver.current_url) # check if the url matches 
    #     self.driver.back()                                          # go back to previous page

    # # test for terms of use link (REQ-004)
    # def testWelcomeTermsLink(self):
    #     self.driver.get(self.main_link)

    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
    #     react_app.find_element(By.ID, "terms-of-use").click()       # click privacy policy 
    #     self.assertTrue(self.terms_link, self.driver.current_url)   # check if the url matches 
    #     self.driver.back()                                          # go back to previous page

    # # test next button (REQ-001)
    # def testWelcomeNextButton(self):
    #     self.driver.get(self.main_link)

    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     react_app.find_element(By.ID, "setup-btn").click()                      # clicks on "Setup Account" button 
    #     self.assertTrue(self.registration_link, self.driver.current_url)        # check if you're in the registration page 
    
    # ########################################### REGISTRATION PAGE UNIT TESTS ############################################
    # TODO: testing for password meter criteria (REQ-006 - REQ-012)
    # test for privacy link (REQ-003)
    def testRegistrationPrivacyLink(self):
        self.driver.get(self.registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "privacy-policy").click()     # click privacy policy 
        self.assertTrue(self.privacy_link, self.driver.current_url) # check if the url matches 
        self.driver.back()                                          # go back to previous page

    # test for terms of use link (REQ-004)
    def testRegistrationTermsLink(self):
        self.driver.get(self.registration_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "terms-of-use").click()       # click privacy policy 
        self.assertTrue(self.terms_link, self.driver.current_url)   # check if the url matches 
        self.driver.back()           

    # def testRegistrationPasswordToggle(self):
    #     self.driver.get(self.registration_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     pass_type = react_app.find_element(By.ID, "password").get_attribute("type") # get type of textfield

    #     self.assertEqual("password", pass_type) # if type is "password", then the text is hidden

    # # test if passwords match (REQ-013) 
    # def testRegistrationConfirmPassError(self):
    #     self.driver.get(self.registration_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     pass_field = react_app.find_element(By.ID, "password")
    #     confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

    #     # Send values to password fields
    #     pass_field.send_keys("abcdef12345")
    #     confirm_pass_field.send_keys("abcdef1245")
    #     react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        
    #     WebDriverWait(self.driver, 3).until(EC.alert_is_present())
    #     alert = self.driver.switch_to.alert
    #     self.assertEquals("Passwords do not match!", alert.text)

    # # test if password is entered (REQ-014) 
    # def testRegistrationEmptyPassError(self):
    #     self.driver.get(self.registration_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     # fill in username field
    #     user_field = react_app.find_element(By.ID, "username")
    #     user_field.send_keys("User123")

    #     react_app.find_element(By.ID, "next-steps-btn").click()         # click "Next Steps" button
        
    #     WebDriverWait(self.driver, 3).until(EC.alert_is_present())      
    #     alert = self.driver.switch_to.alert
    #     self.assertEquals("Please fill the password field", alert.text)

    # # test next button (REQ-001)    
    # def testRegistrationNextStepsButton(self):
    #     self.driver.get(self.registration_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
    #     user_field = react_app.find_element(By.ID, "username")
    #     pass_field = react_app.find_element(By.ID, "password")
    #     confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

    #     user_field.send_keys("User2023")                    # fill in username field
    #     pass_field.send_keys("brightsquidiscool")           # send matching values to password fields
    #     confirm_pass_field.send_keys("brightsquidiscool")
        
    #     react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        
    #     WebDriverWait(self.driver, 5).until(EC.alert_is_present())              # wait for alarm to appear
    #     alert = self.driver.switch_to.alert                                     # switch to alert window
    #     alert.accept()                                                          # accept the alert to close

    #     self.assertTrue(self.practice_details_link, self.driver.current_url)    # check if it brings you to the Practice Details page

    ########################################### PRACTICE DETAILS PAGE UNIT TESTS ############################################
    # # test for privacy link (REQ-003)
    # def testPracticeDetailsPagePrivacyLink(self): 
    #     self.driver.get(self.practice_details_link)

    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     react_app.find_element(By.ID, "privacy-policy").click()     # click privacy policy 
    #     self.assertTrue(self.privacy_link, self.driver.current_url) # check if the url matches 
    #     self.driver.back()       

    # # test for terms link (REQ-004)
    # def testPracticeDetailsPageTermsLink(self): 
    #     self.driver.get(self.practice_details_link)

    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
    #     react_app.find_element(By.ID, "terms-of-use").click()       # click privacy policy 
    #     self.assertTrue(self.terms_link, self.driver.current_url)   # check if the url matches 
    #     self.driver.back()                                          # go back to previous page

    # # test if the next button won't work with empty required fields (REQ-015)
    # def testPracticeDetailsPageNextButtonEmptyFields(self): 
    #     self.driver.get(self.practice_details_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
  
    #     attr = react_app.find_element(By.ID, "next-btn").get_attribute("disabled") # check if button is disabled
    #     self.assertTrue(attr, "disabled")                               

    # # test next button after all required fields are filled (REQ-001)
    # def testPracticeDetailsPageNextButtonRequiredFields(self): 
    #     self.driver.get(self.practice_details_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
    #     keyDown = ActionChains(react_app)

    #     # obtain all required fields
    #     practice_name = react_app.find_element(By.ID, "practice_name")           # get practice name field
    #     clinic_type = react_app.find_element(By.ID, "clinic-select")            # get clinic type field
    #     clinic_subtype = react_app.find_element(By.ID, "clinicsubtype-select")  # get subtype field
    #     province = react_app.find_element(By.ID, "province-select")             # get province field

    #     # fill in fields with values 
    #     practice_name.send_keys("Test Practice Name")

    #     # Click an option for each dropdown and add a 2 second delay in each
    #     clinic_type.click()
    #     clinic_menu = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "menu-clinicType")))        
    #     clinic_menu.find_element(By.ID, "Physician's Office").send_keys(Keys.RETURN)
    #     time.sleep(2)   

    #     clinic_subtype.click()
    #     subtype_menu = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "menu-clinicSubType")))        
    #     subtype_menu.find_element(By.ID, "General Practice").send_keys(Keys.RETURN)
    #     time.sleep(2)  
    
    #     # clinic_type
    #     province.click()
    #     prov_menu = WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.ID, "menu-province")))        
    #     prov_menu.find_element(By.ID, "Alberta").send_keys(Keys.RETURN)
    #     time.sleep(2) 

    #     react_app.find_element(By.ID, "next-btn").click()                       # click next button
    #     self.assertTrue(self.final_link, self.driver.current_url)    # check if we are in the final page     
    
    # # test if back button brings us to registration page (REQ-016)
    # def testPracticeDetailsPageBackButton(self):
    #     self.driver.get(self.practice_details_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
    
    #     react_app.find_element(By.ID, "back-btn").click()                  # click back button
    #     self.assertTrue(self.registration_link, self.driver.current_url)   # check if the url matches the previous page          

    # # test if the field only contains numbers - (REQ-017)
    # def testPracticeDetailsPagePhoneNumber(self):
    #     self.driver.get(self.practice_details_link)
    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
    
    #     # get practice phone field
    #     phone = react_app.find_element(By.CLASS_NAME, "react-tel-input").find_element(By.CLASS_NAME, "form-control")

    #     # send random values 
    #     phone.send_keys("4dsf0312sdf3456dss7")

    #     phone_val = phone.get_attribute("value")            # get the value from the text field
    #     self.assertTrue(phone_val.isdigit(), True)          # check if the value only took in numbers 

    def tearDown(self):
        print("done")
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()
