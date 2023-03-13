import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

class RegistrationTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox() # use firefox or change to chrome

        # links 
        self.main_link = "https://bs-cap.netlify.app"
        self.registration_link = "https://bs-cap.netlify.app/registration"
        self.practice_details_link = "https://bs-cap.netlify.app/registration/practice-details"
        self.privacy_link = "https://brightsquid.com/pages/brightsquid-application-privacy-policy"
        self.terms_link = "https://brightsquid.com/pages/brightsquid-application-terms-of-use"


    ########################################### WELCOME PAGE UNIT TESTS ############################################
    # TODO: test for information message (REQ-005)
    # def testWelcomeInfoMssg(self):

    # test for privacy link (REQ-003)
    def testWelcomePrivacyLink(self):
        self.driver.get(self.main_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "privacy-policy").click()     # click privacy policy 
        self.assertTrue(self.privacy_link, self.driver.current_url) # check if the url matches 
        self.driver.back()                                          # go back to previous page

    # test for terms of use link (REQ-004)
    def testWelcomeTermsLink(self):
        self.driver.get(self.main_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        react_app.find_element(By.ID, "terms-of-use").click()       # click privacy policy 
        self.assertTrue(self.terms_link, self.driver.current_url)   # check if the url matches 
        self.driver.back()                                          # go back to previous page

    # test next button (REQ-001)
    def testWelcomeNextButton(self):
        self.driver.get(self.main_link)

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "setup-btn").click()                      # clicks on "Setup Account" button 
        self.assertTrue(self.registration_link, self.driver.current_url)        # check if you're in the registration page 
    
    ########################################### REGISTRATION PAGE UNIT TESTS ############################################
    # TODO: testing for password meter criteria (REQ-006 - REQ-0012)
    
    # test if passwords match (REQ-013) 
    def testRegistrationConfirmPass(self):
        # *** FIXME: i think i should be accessing the registration page directly
        self.driver.get(self.main_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        react_app.find_element(By.ID, "setup-btn").click() 
        ####################################################################

        pass_field = react_app.find_element(By.ID, "password")
        confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

        # Send values to password fields
        pass_field.send_keys("abcdef12345")
        confirm_pass_field.send_keys("abcdef12345")

        pass_val = pass_field.get_attribute("value")                 # first we get the password text...
        confirm_pass_val = confirm_pass_field.get_attribute("value") # then we get the confirm password text
        self.assertTrue(pass_val, confirm_pass_val)                  # check if the values entered are the same

    # test next button (REQ-001)    
    def testRegistrationNextStepsButton(self):
        # *** FIXME: i think i should be accessing the registration page directly
        self.driver.get(self.main_link)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        react_app.find_element(By.ID, "setup-btn").click() 
        ####################################################################

        react_app.find_element(By.ID, "next-steps-btn").click()                 # click "Next Steps" button
        self.assertTrue(self.practice_details_link, self.driver.current_url)    # check if it brings you to the Practice Details page

    ########################################### TO-DO: PRACTICE DETAILS PAGE UNIT TESTS ############################################

    def tearDown(self):
        print("done")
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()
