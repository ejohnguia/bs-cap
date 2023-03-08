import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

class RegistrationTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox() # won't work on MAC safari

    def testWelcomePage(self):
        self.driver.get("https://bs-cap.netlify.app")
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        
        privacy_link = "https://brightsquid.com/pages/brightsquid-application-privacy-policy"
        terms_link = "https://brightsquid.com/pages/brightsquid-application-terms-of-use"

        # TODO: test for information message (REQ-005)

        # test for privacy link (REQ-003)
        react_app.find_element(By.ID, "privacy-policy").click() # click privacy policy 
        self.assertTrue(privacy_link, self.driver.current_url)  # check if the url matches 
        self.driver.back()                                      # go back to previous page

        # test for terms of use link (REQ-004)
        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))
        react_app.find_element(By.ID, "terms-of-use").click()   # click privacy policy 
        self.assertTrue(terms_link, self.driver.current_url)    # check if the url matches 
        self.driver.back()                                      # go back to previous page

        # test next button (REQ-001)
        react_app.find_element(By.ID, "setup-btn").click()                                  # clicks on "Setup Account" button 
        self.assertTrue("https://bs-cap.netlify.app/registration", self.driver.current_url) # check if you're in the registration page 

    # def testFirstRegistrationPage(self):
    #     # *** i think i should be accessing the registration page directly
    #     self.driver.get("https://bs-cap.netlify.app")
    #     react_app.find_element(By.ID, "setup-btn").click() 
    #     ####################################################################

    #     react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

    #     pass_field = react_app.find_element(By.ID, "password")
    #     confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

    #     # TODO: testing for password meter criteria (REQ-006 - REQ-0012)
    
    #     # Send values to password fields
    #     pass_field.sendKeys("abcdef12345")
    #     confirm_pass_field.sendKeys("abcdef12345")

    #     # REQ-013: Check if text in "Password" field and "Confirm Password" field are the same
    #     # First we get the password text
    #     pass_val = pass_field.getAttribute("value")

    #     # Then we get the confirm password text
    #     confirm_pass_val = confirm_pass_field.getAttribute("value")
        
    #     # Compare the two
    #     self.assertTrue(pass_val, confirm_pass_val)

    #     # Clicks on "Next Steps" button
    #     setup_btn = react_app.find_element(By.ID, "next-steps-btn").click() 

    #     # Check if it brings you to the Practice Details page
    #     self.assertTrue("https://bs-cap.netlify.app/registration/practice-details", self.driver.current_url)


    def tearDown(self):
        print("done")
        #self.driver.quit() 

if __name__ == "__main__":
    unittest.main()