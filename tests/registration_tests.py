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

        react_app = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID), "root"))

        # TO-DO: get next button
        setup_btn = react_app.find_element(By.ID, "setup-btn")
        setup_btn.find_element(By.TAG_NAME, "button").click()


    def testFirstRegistrationPage(self):
        # grab text fields for username, password and confirm password

        

    def tearDown(self):
        print("done")
        self.driver.quit() 

if __name__ == "__main__":
    unittest.main()