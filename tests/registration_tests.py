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
        
        # TODO: test for information message (REQ-005)
        # TODO: test for privacy link

        # TODO: test for terms of use link 

        # REQ-001
        # Clicks on "Setup Account" button
        react_app.find_element(By.ID, "setup-btn").click() 

        # Check if clicking the "Setup Account" button brings you to the registration page
        self.assertTrue("https://bs-cap.netlify.app/registration", self.driver.current_url)

    def testFirstRegistrationPage(self):
        # *** i think i should be accessing the registration page directly
        self.driver.get("https://bs-cap.netlify.app")
        react_app.find_element(By.ID, "setup-btn").click() 
        ####################################################################

        react_app = WebDriverWait(self.driver, 5).until(EC.presence_of_element_located((By.ID, "root")))

        pass_field = react_app.find_element(By.ID, "password")
        confirm_pass_field = react_app.find_element(By.ID, "confirm-password")

        # TODO: testing for password meter criteria (REQ-006 - REQ-0012)

        # Send values to password fields
        pass_field.sendKeys("abcdef12345")
        confirm_pass_field.sendKeys("abcdef12345")
    
        # TODO: test for 

        # Clicks on "Next Steps" button
        setup_btn = react_app.find_element(By.ID, "next-steps-btn").click() 

        # REQ-013: Check if text in "Password" field and "Confirm Password" field are the same
        # First we get the password text
        pass_val = pass_field.getAttribute("value")

        # Then we get the confirm password text
        confirm_pass_val = confirm_pass_field.getAttribute("value")
        
        # Compare the two
        self.assertTrue(pass_val, confirm_pass_val)


    def tearDown(self):
        print("done")
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()